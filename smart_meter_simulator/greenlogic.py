from web3 import Web3
import os
import json
from dotenv import load_dotenv

load_dotenv()

RPC_URL = os.getenv("RPC_URL")
CONTRACT_ADDRESS = os.getenv("CONTRACT_ADDRESS")

# Web3 setup
web3 = Web3(Web3.HTTPProvider(RPC_URL))
with open("GreenTokenABI.json", "r") as f:
    abi = json.load(f)

contract = web3.eth.contract(address=Web3.to_checksum_address(CONTRACT_ADDRESS), abi=abi)

# Conversion factor
KWH_PER_TOKEN = 1
KG_CO2_PER_KWH = 0.5

def get_token_balance(address):
    try:
        checksum_address = Web3.to_checksum_address(address)
        balance = contract.functions.balanceOf(checksum_address).call()
        return balance / 10**18
    except Exception as e:
        return {"error": str(e)}

def get_green_score(address):
    # Basic: return current token balance
    return get_token_balance(address)

def get_carbon_offset(address):
    tokens = get_token_balance(address)
    if isinstance(tokens, dict):  # error object
        return tokens
    return {
        "tokens": tokens,
        "carbon_offset_kg": round(tokens * KG_CO2_PER_KWH, 2)
    }

def get_marketplace():
    return [
        { "item": "Reusable Water Bottle", "cost": 10 },
        { "item": "Plant 1 Tree", "cost": 100 },
        { "item": "Carbon Offset Badge", "cost": 200 }
    ]
