from flask import Flask
app = Flask(__name__) # __name__ is a special variable in Python that is just the name of the module.

@app.route('/') # route() decorator to tell Flask what URL should trigger our function.
def hello_world():
    return 'Hello, World!'

# route() decorator to tell Flask what URL should trigger our function.
@app.route("/bye") # when tghe user goes to the /bye page, the function bye() will run
def bye():
    return "Bye!"

@app.route("/username/<name>/<int:number>") # decorator for routing and taking in variables
def greet(name, number):
    return f"Hello there {name}, you are {number} years old!"

if __name__ == '__main__':
    app.run(debug=True)