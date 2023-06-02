#!/bin/sh

pnpm -r exec -- bash -c 'if [ -f yarn.lock ]; then synp --source-file yarn.lock; fi; if [ -f package-lock.json ]; then pnpm import && rm package-lock.json; fi'

echo "🎉 All Done: yarn.lock -> pnpm-lock.yaml"