from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all origins by default

@app.route('/api')
def hello_api():
    return jsonify({"message": "Hello from Python Backend!"})

@app.route('/api/secret')
def secret_api():
    return jsonify({"secret": "Looks like you found me, well done!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
