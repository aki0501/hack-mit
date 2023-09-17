from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests
import openai

from flask_sqlalchemy import SQLAlchemy
# import jwt

from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import secrets

import logging


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
app.config['SECRET_KEY'] = secrets.token_hex(32)   # Replace with a strong, random secret key
db = SQLAlchemy(app)

CORS(app)

# Define the User model (assuming you already have this defined)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)


@app.route('/bills')
@cross_origin()
def get_bills():
    url = "https://api.propublica.org/congress/v1/bills/search.json?query=environment"
    headers = {
        "X-API-Key": "Sz9Ma5gmzTRq2naj3qpqiAw91XveE7uvCefibHa7"
    }

    response = requests.get(url=url, headers=headers)
    return response.json()


@app.route('/signup', methods=['POST'])
@cross_origin()
def signup():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        if not username or not password:
            return jsonify({'message': 'Username and password are required'}), 400
        
        if User.query.filter_by(username=username).first():
            return jsonify({'message': 'Username already exists'}), 400

        new_user = User(username=username, password=generate_password_hash(password))
        db.session.add(new_user)
        db.session.commit()
        db.session.close()

        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        logging.error(str(e))
        return jsonify({'error': 'An error occurred'}), 500
    


# Function to generate a JWT token --- NOT working rn bc apparently encode not part of JWT?? 
# but this also isn't rlly necessary

# def generate_token(user_id):
#     expiration_time = datetime.utcnow() + timedelta(hours=1)  # Token expires in 1 hour
#     payload = {'user_id': user_id, 'exp': expiration_time}
#     token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
#     return token

@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': 'Invalid username or password'}), 401

    # Generate a JWT token and send it back to the client
    # token = generate_token(user.id)
    
    return jsonify({'message': 'Login successful'})
 


@app.route('/get_reps', methods=['GET'])
@cross_origin()
def get_reps():
    url = "https://www.googleapis.com/civicinfo/v2/representatives/?key=AIzaSyCHDWA-agR-vvAqBkSNs5gvLQ_ZoLLCkSY&address=02493"
    rep_response = requests.get(url=url)
    data = rep_response.json()
    print(data)
    return jsonify(data)

@app.route('/treemail')
@cross_origin()
def get_tree_mail():
    openai.api_key = "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"
    # should actually just be politician name.
    name = "Bill Nelson"

    # summary will just be the summary of the bill.
    summary = "To amend the Federal Insecticide, Fungicide, and Rodenticide Act to fully protect the safety of children and the environment, to remove dangerous pesticides from use, and for other purposes."

    prompt = "Write an email to your legislator" + name + ", showcasing your support for this bill description: " + summary


    completion = openai.ChatCompletion.create(model = "gpt-3.5-turbo",
                                          messages = [{
                                                "role": "user",
                                                "content": prompt
                                          }])

    email_content = completion.choices[0].message.content

    return(email_content)


if __name__ == '__main__':
    with app.app_context(): # you need this bc you're running the db in the same file it was declared?
        db.create_all()

    app.run(port=3000)
