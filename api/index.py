from flask import Flask, render_template, request, url_for

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index(newMsgs = []):
    if request.method == 'POST':
        for content in request.form:
            print(f"{content}, {request.form[content]}")
        return "This is the response!"
        
    elif request.method == 'GET':
        return render_template("index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81, debug = True)
