from flask import Flask
app = Flask(__name__) # __name__ is a special variable in Python that is just the name of the module.

@app.route('/') # route() decorator to tell Flask what URL should trigger our function.
def hello_world():
    return 'Hello, World!'