#!/bin/bash

set -eo pipefail

if ! command -v curl &> /dev/null
then
  echo "curl is not installed"
  echo "please install it and try to run the script again"
  exit 1
fi

echo "Downloading Rules PDF..."
curl -L https://www.scca.com/downloads/73830/download -o rules.pdf
echo "Done"

if ! command -v pdftotext &> /dev/null
then
  echo "pdftotext is not installed"
  echo "please install it and try to run the script again"
  echo "on debian you can install it using apt install poppler-utils"
  echo "check https://poppler.freedesktop.org/ for more information"
  exit 1
fi

echo "Converting PDF to txt..."
pdftotext rules.pdf rules.txt
echo "Done"
