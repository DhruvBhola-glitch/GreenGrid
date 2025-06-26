import requests
import time
import random

# Replace with a test user account from Hardhat node
recipient_address = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0"

while True:
    kwh = round(random.uniform(1.0, 5.0), 2)
    data = {
        "address": recipient_address,
        "kwh": kwh
    }

    try:
        response = requests.post("http://localhost:5000/mint", json=data)
        if response.status_code == 200:
            print(f"[✅] Minted {kwh} kWh → {recipient_address}")
        else:
            print(f"[❌] Failed: {response.json()}")
    except Exception as e:
        print(f"[⚠️] Error: {e}")

    time.sleep(5)  # Wait 5 seconds between requests
