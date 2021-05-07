from flask import Flask,jsonify,render_template, redirect
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

@app.route("/data/map")
def map():
    data = mongo.db.redfinmap.find()
    json_data = list(data)
    json_data = json.dumps(json_data, default=json_util.default)
    return json_data


@app.route("/housing-summary")
def redfin_data():
    
    # Declare the collection
    collection = mongo.db.housing_summary

    # Create an empty list to store data
    redfin_list=[]

    # Get all results
    results = collection.find({}, {"_id": 0})

    # for loop to loop through each item in the database
    for x in results:
        # store each item (dict) in the list
        redfin_list.append(x)

    # Return a jsonified list of dictionaries
    return jsonify(redfin_list)

@app.route("/data/redfin")
def redfin():
    data = mongo.db.redfinclean.find()
    json_data = list(data)
    json_data = json.dumps(json_data, default=json_util.default)
    return json_data

@app.route("/redfinAR")
def redfinAR():
    return render_template("redfinAR.html")

if __name__ == '__main__':
    app.run(host='127.0.0.1', threaded=True)