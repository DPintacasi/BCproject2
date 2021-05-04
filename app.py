from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import json
# import pymongo
from bson import json_util
from bson.json_util import dumps


app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
# conn = 'mongodb://localhost:27017/housing_db'
# client = pymongo.MongoClient(conn)
# db = client

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/housing_db"
mongo = PyMongo(app)

@app.route("/")
def index():
    data = mongo.db.lumber_price_index.find()
    return render_template("index.html", data = data)

@app.route("/history")
def history():
    return render_template("history.html")

@app.route("/states")
def states():
    return render_template("states.html")

@app.route("/data/lumber")
def lumber():
    data = mongo.db.lumber_price_index.find()
    json_projects = list(data)
    json_projects = json.dumps(json_projects, default=json_util.default)
    return json_projects


if __name__ == '__main__':
    app.run(host='127.0.0.1', threaded=True)