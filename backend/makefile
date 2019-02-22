run:
	FLASK_APP=app/webapp.py flask run -h 0.0.0.0

run-debug:
	FLASK_APP=app/webapp.py FLASK_DEBUG=1 flask run -h 0.0.0.0

db:
	curl -s 'https://api.airtable.com/v0/appyRHfP4z7xCq7L1/Items' -H 'Authorization: Bearer keyOM0nWvjxsjjiSg'  | jq . > db.json 
