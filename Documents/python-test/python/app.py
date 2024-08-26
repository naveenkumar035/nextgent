import requests
import json
import os
from urllib.parse import urlencode, urlparse, parse_qs

# Replace with your actual client ID, client secret, and redirect URI
client_id = "cb4bdaee-04df-4f52-8b4b-88ad48ac209f"
client_secret = "jifc9t55em"
redirect_uri = "http://localhost:3000/callback"

# Step 1: Get authorization code
auth_url = "https://api.upstox.com/v2/login/authorization/dialog"
params = {
    "response_type": "code",
    "client_id": client_id,
    "redirect_uri": redirect_uri,
    "state": "optional_state_parameter"  # Optional
}
auth_request_url = f"{auth_url}?{urlencode(params)}"

print("Visit this URL to authorize the application:")
print(auth_request_url)

# After visiting the above URL and authorizing, you will be redirected to your redirect_uri with a 'code' parameter.
# For example: http://your_redirect_uri?code=authorization_code&state=optional_state_parameter
# Capture this 'code' parameter from the redirected URL.

# Step 2: Extract authorization code from the redirected URL
redirected_url = input("Enter the full redirected URL after authorization: ")
parsed_url = urlparse(redirected_url)
authorization_code = parse_qs(parsed_url.query)['code'][0]

# Step 3: Exchange authorization code for access token
token_url = "https://api.upstox.com/v2/login/authorization/token"
data = {
    "grant_type": "authorization_code",
    "code": authorization_code,
    "redirect_uri": redirect_uri,
    "client_id": client_id,
    "client_secret": client_secret
}

response = requests.post(token_url, data=data)
tokens = response.json()

access_token = tokens.get("access_token")
refresh_token = tokens.get("refresh_token")

print("Access Token:", access_token)
print("Refresh Token:", refresh_token)

# Example of using the access token to make an API request
if access_token:
    instrument_key = "NSE_EQ|INE743M01012"  # Replace with actual instrument key for Reliance
    interval = "day"
    to_date=  "2024-08-13"
    from_date= "2022-08-13"

    url = f"https://api.upstox.com/v2/historical-candle/{instrument_key}/{interval}/{to_date}/{from_date}"

    headers = {
        'Accept': 'application/json',
        'Authorization': f'Bearer {access_token}'
    }

    response = requests.get(url, headers=headers)

    print(f"Status Code: {response.status_code}")

    # Save the response JSON to a file if the request was successful
    if response.status_code == 200:
        historical_data = response.json()
        
        # Get the path to the user's Documents folder
        documents_folder = os.path.join(os.path.expanduser('~'), 'Documents')
        
        # Create the full file path
        file_path = os.path.join(documents_folder, 'historical_data.json')
        
        with open(file_path, 'w') as json_file:
            json.dump(historical_data, json_file, indent=4)
        
        print(f"Historical data saved to {file_path}")
    else:
        print(f"Error: {response.status_code} - {response.text}")
else:
    print("Failed to obtain access token")
