#!/bin/sh

pnpm -r exec -- rm -rf node_modules && pnpm -r clean

echo "🗑️ Cleaned!"