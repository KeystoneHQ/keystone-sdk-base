#!/usr/bin/env bash

set -e

cd $(dirname $0)/

if [ "$NODE_ENV" != "test" ]; then
  if grep -Fq "SHOULD_BE_REPLACED" src/Secret.ts; then
    echo -e "\nCredentials in src/Secret.ts should be replaced with real one.\n"
    exit 1
  fi
fi
tsdx build
