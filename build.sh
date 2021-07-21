#!/bin/bash

set -e
set -o pipefail

platform='unknown'
unamestr=$(uname)

case "$unamestr" in
    Linux)
        echo "running on linux"
        platform='linux'
        ;;
    Darwin)
        echo "running on mac"
        platform='mac'
        ;;
    *)
        echo "could not determine platform, exiting"
        exit 1
esac

rm -rf build

mkdir -p build

# First we need to replicate the directory structure of the src directory in the build directory
find src -type d | tail -n +2 | sed 's/src\///g' | xargs -I {} mkdir -p build/{}

function minify_html {
  file_full_path=$1
  src_stripped=${file_full_path#./src}
  echo "minifying HTML for $file_full_path"
  ./node_modules/html-minifier/cli.js --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file_full_path" -o "build/$src_stripped"
}

function minify_css {
  file_full_path=$1
  src_stripped=${file_full_path#./src}
  echo "minifying CSS for $file_full_path"
  ./node_modules/postcss-cli/bin/postcss "$file_full_path" -o "build/$src_stripped"
}

function minify_js {
  file_full_path=$1
  src_stripped=${file_full_path#./src}
  echo "minifying JS for $file_full_path"
  ./node_modules/uglify-js/bin/uglifyjs --compress --mangle -o "build/$src_stripped" -- "$file_full_path"
}

export -f minify_html
export -f minify_css
export -f minify_js

# parallelism in bash, oh boy
if [ $platform = 'linux' ]; then
  number_of_cores=$(grep -c ^processor /proc/cpuinfo)
  find ./src -type f -name \*.html -print0 | xargs -0 -P "$number_of_cores" -n1 bash -c 'minify_html "$@"' _
  find ./src -type f -name \*.css -print0 | xargs -0 -P "$number_of_cores" -n1 bash -c 'minify_css "$@"' _
  find ./src -type f -name \*.js -print0 | xargs -0 -P "$number_of_cores" -n1 bash -c 'minify_js "$@"' _
elif [ $platform = 'mac' ]; then
  number_of_cores=$(sysctl -n hw.ncpu)
  # If you don't have gxargs, brew install findutils
  find ./src -type f -name \*.html -print0 | gxargs -0 -P "$number_of_cores" -n1 bash -c 'minify_html "$@"' _
  find ./src -type f -name \*.css -print0 | gxargs -0 -P "$number_of_cores" -n1 bash -c 'minify_css "$@"' _
  find ./src -type f -name \*.js -print0 | gxargs -0 -P "$number_of_cores" -n1 bash -c 'minify_js "$@"' _
fi

# Copy favicon from src to build directory
cp src/favicon.ico build/

echo
echo "Build Complete! Check the build directory for output"
