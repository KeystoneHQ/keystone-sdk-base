#!/usr/bin/env sh

set -eu

MIXPANEL_TOKEN=$MIXPANEL_TOKEN && tsdx build
