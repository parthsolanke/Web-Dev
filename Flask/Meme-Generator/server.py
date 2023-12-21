import random
import requests
from flask import Flask, render_template
app = Flask(__name__)
MEME_URL = "https://api.imgflip.com/get_memes"

@app.route('/')
def index():
    response = requests.get(MEME_URL).json()
    memes = response["data"]["memes"]
    idx = random.randint(0, len(memes)-1)
    meme = memes[idx].get("url")
    return render_template("index.html", url=meme)

if __name__ == "__main__":
    app.run(debug=True)
    