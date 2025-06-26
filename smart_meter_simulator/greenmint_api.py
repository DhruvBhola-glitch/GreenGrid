from flask import Flask, request, jsonify
from flask_cors import CORS
from greenlogic import get_green_score, get_carbon_offset, get_marketplace, get_token_balance
from web3 import Web3
from dotenv import load_dotenv
import os
import json
from datetime import datetime
mint_logs = []

load_dotenv()

# Load environment variables
RPC_URL = os.getenv("RPC_URL")
PRIVATE_KEY = os.getenv("PRIVATE_KEY")
CONTRACT_ADDRESS = os.getenv("CONTRACT_ADDRESS")

# Setup Web3
web3 = Web3(Web3.HTTPProvider(RPC_URL))
account = web3.eth.account.from_key(PRIVATE_KEY)

# Load ABI
with open("GreenTokenABI.json") as f:
    abi = json.load(f)

# Setup contract
checksum_address = Web3.to_checksum_address(CONTRACT_ADDRESS)
contract = web3.eth.contract(address=checksum_address, abi=abi)

# Flask app
app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for frontend-backend connection

@app.route("/score/<address>")
def score(address):
    print(f"Fetching score for: {address}")
    return jsonify({
        "address": address,
        "green_score": get_green_score(address)
    })

@app.route("/carbon/<address>")
def carbon(address):
    print(f"Fetching carbon offset for: {address}")
    return jsonify(get_carbon_offset(address))

@app.route("/marketplace")
def marketplace():
    print("Fetching marketplace items")
    return jsonify(get_marketplace())

@app.route("/impact/<address>")
def impact(address):
    try:
        tokens = get_token_balance(address)
        offset = round(tokens * 0.5, 2)
        credits = round(tokens / 2, 1)
        generated = round(tokens / 10, 2)
        shared = round(generated * 0.6, 2)

        return jsonify({
            "generated": generated,
            "shared": shared,
            "tokens": round(tokens, 2),
            "offset": offset,
            "credits": credits,
            "companyA": {
                "energy": shared,
                "offset": round(shared * 0.5, 2)
            },
            "companyB": {
                "tokens": round(shared * 10, 2),
                "offset": round((shared * 0.5) * 0.6, 2)
            }
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/forecast/<address>")
def forecast(address):
    try:
        # Mock forecast logic: estimate next day kWh
        # Based on current token balance
        tokens = get_token_balance(address)
        today_kwh = tokens / 10  # Assuming 1 GT = 0.1 kWh
        predicted = round(today_kwh * 1.15, 2)  # +15% growth projection

        return jsonify({
            "predicted_kwh": predicted,
            "confidence": "high",
            "recommendation": "Consider sharing more tomorrow to earn extra GT."
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


from datetime import datetime

# At the top of your file:

@app.route("/logs")
def get_logs():
    return jsonify({ "logs": mint_logs[:10] })  # Return latest 10

@app.route("/mint", methods=["POST"])
def mint_tokens():
    try:
        data = request.get_json()
        recipient = data["address"]
        kwh = float(data["kwh"])
        amount = int(kwh * 10**18)

        print(f"Minting {amount} tokens to {recipient} for {kwh} kWh")

        nonce = web3.eth.get_transaction_count(account.address)
        txn = contract.functions.mint(recipient, amount).build_transaction({
            "from": account.address,
            "nonce": nonce,
            "gas": 200000,
            "gasPrice": web3.to_wei("20", "gwei")
        })

        signed_txn = web3.eth.account.sign_transaction(txn, PRIVATE_KEY)
        tx_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)

        # ✅ Add to simulation log
        mint_logs.insert(0, {
            "address": recipient,
            "kwh": kwh,
            "timestamp": datetime.utcnow().isoformat()
        })

        return jsonify({
            "tx_hash": tx_hash.hex(),
            "minted_to": recipient,
            "amount_kwh": kwh
        })

    except Exception as e:
        print("Error in /mint:", str(e))
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5000)
