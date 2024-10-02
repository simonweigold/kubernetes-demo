from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    secret_message = os.getenv('SECRET_MESSAGE', 'No secret message found.')
    return f"The secret message is: {secret_message}"

# New API route to return JSON data
@app.route('/api/message', methods=['GET'])
def get_message():
    secret_message = os.getenv('SECRET_MESSAGE', 'No secret message found.')
    return jsonify({"message": secret_message})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
