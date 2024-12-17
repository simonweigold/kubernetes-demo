from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api')
def hello_api():
    return jsonify({"message": "Hello from Python Backend!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
