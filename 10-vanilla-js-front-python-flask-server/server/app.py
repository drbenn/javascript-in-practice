# pip install flask
# pip install flask-cors
# pip install requests
# python app.py

from flask import Flask, request, jsonify
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')  # Root GET request
def hello_world():
    return 'Hello Python World!'

@app.route('/python-res-only', methods=['POST'])  # POST request to /data
def handle_data():
    data = request.get_json()  # Get JSON data from request
    print(data)  # Print the received JSON value
    newReturn = data["word"] + ' PyBolo'
    print(newReturn)
    return jsonify(newReturn)
    # return jsonify({'name': 'homer simpson'})  # Return a JSON response

# @app.route('/python-to-node-container', methods=['POST'])  # POST request to /data
# def handle_data2():
#     data = request.get_json()  # Get JSON data from request
#     print(data)  # Print the received JSON value
#     newReturn = data["word"] + ' Py-FIRST-Bolo'
#     print(newReturn)
#     return jsonify(newReturn)
#     # return jsonify({'name': 'homer simpson'})  # Return a JSON response

@app.route('/python-to-node-container', methods=['POST'])  # POST request to /data
def send_and_wait_for_response():
    data = request.get_json()  # Get JSON data from request
    print(data)  # Print the received JSON value
    data["word"] = data["word"] + " !!Python Added POLO!! "


    try:
        response = requests.post('http://localhost:4555/add-yolo', json=data)
        response.raise_for_status()  # Raise an exception for non-2xx status codes
        print(response)
        return response.text  # Or process and return the response data as needed

    except requests.exceptions.RequestException as e:
        return 'Error: {}'.format(str(e))
    
# For use in development, but debug needs to be false in prodution/container or else it will automatically close as soon as opened, 
# if __name__ == '__main__':
#     app.run(debug=True, port=4099)  # Run the server in debug mode, Specify port 4099

# if __name__ == '__main__':
#     app.run(debug=False, port=4099)  # Run the server in debug mode, Specify port 4099
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4099)  # Run the server in debug mode, Specify port 4099