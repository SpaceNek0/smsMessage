import requests

def sender(data):
    apiKey = " "
    deviceID = " " 
    url = f"https://api.textbee.dev/api/v1/gateway/devices/{deviceID}/send-sms"

    recipientNumber = data.get("recipientNumber")
    msgContent = data.get("msgContent")

    if not recipientNumber or not msgContent:
        return {"error": "missing reciepentNumber or msgContent"}

    msg = {
        "recipients": [recipientNumber],
        "message": msgContent
    }

    headers = {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(url, json=msg, headers=headers)
        print(f"Response Status: {response.status_code}")
        print(f"Response Body: {response.text}")  

        return response.json() 
    
    except requests.exceptions.RequestException as e:
        return{"error": str(e)}
    

