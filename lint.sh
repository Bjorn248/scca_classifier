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

function lint {
  file_full_path=$1
  echo "linting $file_full_path with eslint"
  ./node_modules/eslint/bin/eslint.js "$file_full_path"
}

export -f lint

# parallelism in bash, oh boy
if [ $platform = 'linux' ]; then
  number_of_cores=$(grep -c ^processor /proc/cpuinfo)
  find ./src -type f -name \*.js -print0 | xargs -0 -P "$number_of_cores" -n1 bash -c 'lint "$@"' _
elif [ $platform = 'mac' ]; then
  number_of_cores=$(sysctl -n hw.ncpu)
  # If you don't have gxargs, brew install findutils
  find ./src -type f -name \*.js -print0 | gxargs -0 -P "$number_of_cores" -n1 bash -c 'lint "$@"' _
fi

echo
echo "Linting Complete!"
