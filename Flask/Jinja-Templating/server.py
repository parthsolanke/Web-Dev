import random
from datetime import datetime as dt
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    # sending **kwargs to the template for rendering using jinja templatings
    return render_template("index.html", num=random.randint(1,10), year=dt.now().year) 

if __name__ == "__main__":
    app.run(debug=True)