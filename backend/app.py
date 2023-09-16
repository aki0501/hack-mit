from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/api/bills')
def get_bills():
    return jsonify([
        {"id": 1, "name": "Bill A"},
        {"id": 2, "name": "Bill B"}
    ])

if __name__ == '__main__':
    app.run(port=5000)