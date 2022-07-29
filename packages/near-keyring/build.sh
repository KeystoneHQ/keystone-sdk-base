#!/usr/bin/env bash

set -eu

cd $(dirname $0)/

if [ ! -f "src/Secret.ts" ]; then
    echo "src/Secret.ts does not exist!"
fi

tsdx build
