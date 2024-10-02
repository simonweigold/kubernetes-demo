# Flask app (backend.py)

from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock database for storing expenses
expenses = []
id_counter = 1

@app.route('/expenses', methods=['POST'])
def add_expense():
    global id_counter
    expense = request.json
    expense['id'] = id_counter
    id_counter += 1
    expenses.append(expense)
    return jsonify(expense), 201

@app.route('/expenses', methods=['GET'])
def get_expenses():
    return jsonify(expenses), 200

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
