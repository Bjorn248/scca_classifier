#!/bin/bash

set -eo pipefail

if ! command -v curl &> /dev/null
then
  echo "curl is not installed"
  echo "please install it and try to run the script again"
  exit 1
fi

echo "Downloading Rules PDF..."
# SCCA National Solo Rules, 2026 Edition (Fifty Third printing, January 2026).
# The old https://www.scca.com/downloads/<id>/download link now returns HTML;
# SCCA hosts the current book at this wp-content link (verified 2026-11-14).
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
# Use -raw to extract text in content stream order (column by column)
# rather than default which reads line by line across columns
pdftotext rules.pdf rules.txt
echo "Done"
