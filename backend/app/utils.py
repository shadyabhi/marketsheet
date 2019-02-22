import requests
import json
import os


def get_config():
    print(os.getcwd())
    config = json.loads(open("marketsheet.config").read())
    return config


config = get_config()


def get_items_from_airtable():
    try:
        resp = requests.get(config['SHEET_URL'], headers={
                            'Authorization': 'Bearer {}'.format(config['AIRTABLE_KEY'])}).json()['records']
    except Exception as e:
        resp = str(e)
    return resp
