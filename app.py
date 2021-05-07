from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/housing_db"
mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/history")
def history():
    return render_template("history.html")

@app.route("/states")
def states():
    return render_template("states.html")


@app.route("/data/census")
def census():
    data = mongo.db.census_housing_demo.find()
    json_data = list(data)
    json_data = json.dumps(json_data, default=json_util.default)
    return json_data

@app.route("/data/fred")
def fred():
    data = mongo.db.fred.find()
    json_data = list(data)
    json_data = json.dumps(json_data, default=json_util.default)
    return json_data

if __name__ == '__main__':
    app.run(host='127.0.0.1', threaded=True)