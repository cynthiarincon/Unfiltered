#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default

# Copy your built server code
cp -r ./src ./.amplify-hosting/compute/default/src
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules
cp -r ./templates ./.amplify-hosting/compute/default/templates

# Copy static assets
cp -r ./public ./.amplify-hosting/static

# Copy manifest
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

# Copy package.json
cp package.json ./.amplify-hosting/compute/default/package.json