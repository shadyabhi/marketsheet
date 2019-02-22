from flask import Flask, render_template, jsonify
from flask.ext.cache import Cache
# from flask_cache import Cache
from .utils import get_items_from_airtable
from flask_cors import CORS
import requests

cache = None


def create_app():
    global cache
    app = Flask(__name__,
                static_folder="../dist/static",
                template_folder="../dist")
    cache = Cache(config={'CACHE_TYPE': 'simple'})
    cache.init_app(app)
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    return app


app = create_app()


@app.route('/api/items')
@cache.cached(timeout=5)
def items():
    response = {}

    try:
        response['data'] = get_items_from_airtable()
    except Exception as e:
        response['error'] = str(e)

    return jsonify(response)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # Redirect to vuejs dev server when in debug mode
    if app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text

    return render_template("index.html")
