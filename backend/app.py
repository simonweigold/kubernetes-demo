import os
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all origins by default

load_dotenv()
NAME = os.getenv('NAME', "World")
SECRET_MESSAGE = os.getenv('SECRET_MESSAGE', "Try again")

@app.route('/api')
def hello_api():
    return jsonify({"message": "Hello from Python Backend!"})

@app.route('/api/name')
def name_api():
    return jsonify({"name": NAME})

@app.route('/api/secret')
def secret_api():
    return jsonify({"secret": SECRET_MESSAGE})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
