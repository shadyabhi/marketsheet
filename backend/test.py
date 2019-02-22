from flask import Flask
from flask.ext.cache import Cache
import time

app = Flask(__name__)
cache = Cache(config={'CACHE_TYPE': 'simple'})
cache.init_app(app)

@app.route('/time')
@cache.cached(timeout=50, key_prefix='test')
def test():
   return time.ctime()
