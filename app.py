from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
import scrape_mars

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "MONGODB URL HERE"
mongo = PyMongo(app)

# Or set inline
mongo = PyMongo(app, uri="MONGODB URL HERE")

@app.route("/")
def index():

    return render_template("index.html")

@app.route("/history")
def history():


@app.route("/states")
def states():


if __name__ == "__main__":
    app.run()