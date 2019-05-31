#!/bin/sh
set -e

run() {
  cd /daizu-online-judge-front
  git pull
  npm install --no-optional
  npm start
}

if [ -z "$1" ]; then
  exec `run`
fi

exec "$@"
