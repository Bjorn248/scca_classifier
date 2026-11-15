#!/bin/bash

set -eo pipefail

if ! command -v curl &> /dev/null
then
  echo "curl is not installed"
  echo "please install it and try to run the script again"
  exit 1
fi

echo "Downloading Rules PDF..."
# SCCA National Solo Rules, 2026 Edition (Fifty Third printing, January 2026,
# uploaded by SCCA in July 2026). The old https://www.scca.com/downloads/<id>/download
# links do not give a PDF at this time. Make sure that the URL gives a PDF
# ("file rules.pdf") when you change it.
curl -L https://www.scca.com/wp-content/uploads/2026/08/Autocross_Rulebook.pdf -o rules.pdf
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
# main.go reads the default pdftotext output (not -raw and not -layout).
pdftotext rules.pdf rules.txt
echo "Done"
