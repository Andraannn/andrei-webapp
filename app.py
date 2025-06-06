from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

# Define routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/myworks')
def projects():
    return render_template('myworks.html')

if __name__ == '__main__':
    app.run(debug=True)