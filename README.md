# TreeMail
Connecting sustainability-passionate constituents to relevant bills and drafting emails for them using OpenAI API.

## Inspiration
80% of Americans think that we need to do more to address environmental issues, yet only **one third** 
of Americans know who their representatives are! One of the most overlooked methods of environmental activism is pressuring elected officials to pass environmentally-friendly legislation. Our mission: to facilitate communication between constituents and their elected officials and to encourage civic engagement surrounding environmental issues.

## What it does
Streamline the process of contacting elected representatives about sustainability issues. Users are able to discover pending environment-related bills in Congress, view all of their federally elected officials based on zip code, and obtain a customized AI-generated email template.

## How we built it
TreeMail uses a stack consisting of React, Node.js, Python, and Flask. We use ProPublica API to get bill summaries and statuses, OpenAI API to generate email templates, and Google Civic Information API to get representatives.

## Accomplishments that we're proud of
Three of our members have never attended a hackathon, and the fourth member had only attended one prior. Even cumulatively, our team had very little background in creating web-based applications from scratch. Producing a website that was able to run with a backend was a big feat in and of itself!

## What's next for TreeMail!
We hope to implement several features in the future to optimize the user experience of TreeMail. 
 - Social media-esque aspect to connect passionate environmentalists with each other (e.g. upvoting pending bills or sharing certain bills with your friends).
 - OAuth2.0 API implementation to send emails directly from the web browser.
 - Expanding to more issues than sustainability!


## Instructions for running:
```
git clone git@github.com:aki0501/hack-mit.git
cd frontend
npm i
npm install bootstrap
npm i mdb-react-ui-kit
npm start

```

Now, run the application in your browser using the network address (NOT your local address!). The backend will be run on your local address, so there will only be a UI on the network address.

### On another terminal, run:
```
cd backend
pip install flask
pip install flask-cors
pip install flask-sqlalchemy
pip install openai
python3 app.py
```


