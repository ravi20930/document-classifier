#!/bin/bash

# Start Python application
cd packages/python
pipenv run python app.py &

# Start Node.js application
cd ../express
node app.js
