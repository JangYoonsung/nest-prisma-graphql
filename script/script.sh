#!/bin/bash

echo "Running in NODE_ENV=$NODE_ENV COMMAND=$COMMAND"

echo "Running yarn install ..."
yarn install --prefer-offline --no-audit

echo "Running yarn run $COMMAND ..."
yarn run $COMMAND