import json
import schedule
import time
import requests

# Load JSON schedule
with open('../json/schedule.json', 'r') as file:
    data = json.load(file)

def change_scene(scene_name):
    url = "http://your_obs_websocket_server_address"  # OBS WebSocket URL
    data = {"scene-name": scene_name}
    
    try:
        response = requests.post(url, json=data)
        if response.status_code == 200:
            print(f"Scene changed to {scene_name}")
        else:
            print(f"Failed to change scene. Status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

for show in data['network']['shows']:
    schedule_time = show['schedule_time']
    obs_scene = show['OBSScene']  # Using the OBSScene field
    # Convert schedule_time to local timezone if necessary
    # schedule.every().day.at(local_schedule_time).do(change_scene, scene_name=title)

# Similar scheduling for other categories like commercials, live_events, etc.

# Run the scheduler
while True:
    schedule.run_pending()
    time.sleep(1)
