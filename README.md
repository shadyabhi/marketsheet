# Marketsheet

Convert your Airtable sheet into a shiny sale listing website. 

Excel sheet in Airtable:-

![Excel](https://shadyabhi.keybase.pub/Marketsheet/sheet.png)

Get a website like:-

![Website](https://shadyabhi.keybase.pub/Marketsheet/website.png)

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
