import os
import json

def create_folder(path):
    try:
        os.makedirs(path)
    except FileExistsError:
        pass  # folder exists

def handle_list(data, path):
    for i, item in enumerate(data):
        new_path = os.path.join(path, str(i))
        create_folder(new_path)
        create_structure(item, new_path)

def handle_dict(data, path):
    for key, value in data.items():
        if isinstance(value, dict):
            new_path = os.path.join(path, key)
            create_folder(new_path)
            create_structure(value, new_path)
        elif isinstance(value, list):
            new_path = os.path.join(path, key)
            create_folder(new_path)
            handle_list(value, new_path)

def create_structure(data, path):
    if isinstance(data, dict):
        handle_dict(data, path)
    elif isinstance(data, list):
        handle_list(data, path)

if __name__ == '__main__':
    json_file_path = '../json/m3tvjson.json'  # Replace with the path to your JSON file
    with open(json_file_path, 'r') as f:
        json_data = json.load(f)
    
    root_path = '.'  # Root folder name
    create_folder(root_path)
    
    create_structure(json_data, root_path)
