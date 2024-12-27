from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all origins by default

@app.route('/api')
def hello_api():
    return jsonify({"message": "G'day from Python Backend!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
