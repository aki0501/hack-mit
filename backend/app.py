from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app)

@app.route('/bills')
def get_bills():
    url = "https://api.propublica.org/congress/v1/bills/search.json?query=environment"
    headers = {
        "X-API-Key": "Sz9Ma5gmzTRq2naj3qpqiAw91XveE7uvCefibHa7"
    }

    response = requests.get(url=url, headers=headers)
    return response.json()

if __name__ == '__main__':
    app.run(port=5000)