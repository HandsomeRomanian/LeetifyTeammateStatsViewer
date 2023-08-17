import re
import webbrowser

# Function to convert STEAM_1:0: format to Steam64 ID
def steam_id_to_steam64(steam_id):
    parts = steam_id.split(":")
    return str(76561197960265728 + int(parts[2]) * 2 + int(parts[1]))

while True:
    # Get user input
    user_input = input("Enter user list (or 'exit' to quit):\n")
    
    if user_input.lower() == 'exit':
        break
    
    # Extract Steam IDs from the input using regular expressions
    steam_ids = re.findall(r'STEAM_1:\d+:\d+', user_input)

    # Convert Steam IDs to Steam64 IDs
    steam64_ids = [steam_id_to_steam64(sid) for sid in steam_ids]

    # Generate and open URLs
    for steam64_id in steam64_ids:
        url = f"https://leetify.com/app/profile/{steam64_id}"
        webbrowser.open(url)

print("Script finished.")
