from flask import Flask, request
import obswebsocket, obswebsocket.requests

app = Flask(__name__)
obs_host = "localhost"
obs_port = 4444
obs_password = "your_password"

def change_scene_in_obs(scene_name):
    client = obswebsocket.obsws(obs_host, obs_port, obs_password)
    client.connect()
    try:
        client.call(obswebsocket.requests.SetCurrentScene(scene_name))
    except Exception as e:
        print(f"Error: {e}")
    finally:
        client.disconnect()

@app.route('/change_scene', methods=['POST'])
def change_scene():
    scene_name = request.json.get('scene_name')
    change_scene_in_obs(scene_name)
    return f"Changed scene to {scene_name}", 200

if __name__ == '__main__':
    app.run(port=8080)
