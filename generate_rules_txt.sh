#!/bin/bash

set -eo pipefail

if ! command -v curl &> /dev/null
then
  echo "curl is not installed"
  echo "please install it and try to run the script again"
  exit 1
fi

echo "Downloading Rules PDF..."
curl -L https://www.scca.com/downloads/78494/download -o rules.pdf
echo "Done"

if ! command -v pdftotext &> /dev/null
then
  echo "pdftotext is not installed"
  echo "please install it and try to run the script again"
  echo "on debian you can install it using apt install poppler-utils"
  echo "check https://poppler.freedesktop.org/ for more information"
  exit 1
fi

echo "Converting Solo Rules PDF to txt..."
# Use -raw to extract text in content stream order (column by column)
# rather than default which reads line by line across columns
pdftotext rules.pdf rules.txt
echo "Done"

echo "Downloading GCR PDF..."
curl -L https://www.scca.com/downloads/80050-jun-26 -o gcr.pdf
echo "Done"

echo "Converting GCR PDF to txt..."
# Use -raw to extract text in content stream order (column by column) rather than the
# default, which reads line by line across columns. The GCR's multi-column class-rules
# pages otherwise strand list markers (e.g. "b.", "3.") away from the text they introduce.
pdftotext -raw gcr.pdf gcr.txt
echo "Done"

echo "Converting GCR PDF to layout txt..."
# A second extraction with -layout, which preserves the column alignment of the per-car
# spec-line tables (min weight, wheelbase, etc.). -raw is best for the prose rules but
# collapses those tables to one field per line; -layout keeps each car's fields on aligned
# columns, which the spec-line parser relies on. Used only for spec tables.
pdftotext -layout gcr.pdf gcr_layout.txt
echo "Done"
