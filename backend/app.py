from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def home():
    secret_message = os.getenv('SECRET_MESSAGE', 'No secret message found.')
    return f"The secret message is: {secret_message}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
