#!/bin/bash

# Check if pipenv is installed
if ! command -v pipenv &>/dev/null; then
    echo "pipenv is not installed. Installing pipenv..."

    # Check if pip3 is installed
    if command -v pip3 &>/dev/null; then
        echo "Using pip3 to install pipenv..."
        pip3 install pipenv
    else
        # Check if pip is installed
        if command -v pip &>/dev/null; then
            echo "Using pip to install pipenv..."
            pip install pipenv
        else
            echo "Neither pip3 nor pip found. Please install pip or pip3 manually before proceeding with the installation of pipenv."
            exit 1
        fi
    fi
fi

# Install Python dependencies
cd packages/python
export PIPENV_VENV_IN_PROJECT=1
pipenv install

# Install Node.js dependencies
cd ../express
yarn install

# Next dependencies
cd ../next
yarn install
