from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)

cors = CORS(app, resources={"/*": {"origins": "http://localhost:3000"}})
# CORS(app)


@app.route('/bills')
@cross_origin()
def get_bills():
    url = "https://api.propublica.org/congress/v1/bills/search.json?query=environment"
    headers = {
        "X-API-Key": "Sz9Ma5gmzTRq2naj3qpqiAw91XveE7uvCefibHa7"
    }

    response = requests.get(url=url, headers=headers)
    return response.json()

if __name__ == '__main__':
    app.run(port=3000)