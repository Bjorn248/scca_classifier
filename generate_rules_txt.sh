#!/bin/bash

set -eo pipefail

if ! command -v curl &> /dev/null
then
  echo "curl is not installed"
  echo "please install it and try to run the script again"
  exit 1
fi

echo "Downloading Rules PDF..."
curl -L https://www.scca.com/downloads/78214/download -o rules.pdf
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
# Default format for chapter parsing (line by line)
pdftotext rules.pdf rules.txt
# Raw format for Appendix A parsing (column by column, needed for multi-column layout)
pdftotext -raw rules.pdf rules_raw.txt
echo "Done"
