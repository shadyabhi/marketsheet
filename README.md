# Marketsheet

Convert your Airtable sheet into a shiny sale listing website. 

## Build

### Frontend

``` bash
	# install front-end
	cd frontend
	npm install

	# serve with hot reload at localhost:8080
	npm run dev

	# build for production/Flask with minification
	npm run build
```

### Backend

```bash
	# install back-end
	cd ../backend
	virtualenv -p python3 venv
	source venv/bin/activate
	pip install -r requirements.txt

	# For debug,
	make run-debug

	# Else (serve website from built dist folder)
	make run
```
