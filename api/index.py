import os
from flask import Flask, render_template, request, url_for
from pymongo import MongoClient

app = Flask(__name__)

#CONNECTION_STRING = os.environ['CONNECTION_STRING']

#db = MongoClient(CONNECTION_STRING)['Accounts']

@app.route('/', methods=['GET', 'POST'])
def index(newMsgs = []):
    if request.method == 'POST':
        isInit = False
        code = ""
        for content in request.form:
            if content == "init": isInit = True
            elif content == "code": code = request.form[content]
            else: print(f"{content}, {request.form[content]}")
        return "This is the response!"
        
    elif request.method == 'GET':
        return render_template("index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81, debug = True)
