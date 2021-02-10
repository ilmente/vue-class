[![Netlify Status](https://api.netlify.com/api/v1/badges/db69df9f-832b-463e-a9e0-a939f0df08c3/deploy-status)](https://app.netlify.com/sites/vue-class-ilmente/deploys)

# Vue Class

This project contains all the material used for Vue Course.
It's an application providing documentation (slides), code examples and exercises.

## Live website

[vue-class.ilmente.com](https://vue-class.ilmente.com)

## Host it

Run the application on your local machine or on a server of your choice.

### Requirements

- Node 14.x
- Yarn 1.x

### Setup

```bash
# clone the project
git clone https://github.com/ilmente/vue-class.git

# go in the root folder
cd ./vue-class

# install the dependencies
yarn install

# run the server
yarn start
```

Application (by default) runs on [localhost:3003](http://localhost:3003).

## Development

```bash
# go in the root folder
cd ~/path/to/vue-class

# build the applications once
yarn build
# or watch for changes in the code
yarn build --watch

# run netlify lambda functions server
yarn lambda

# run the server with code watchers
# and proxies the netlify lambda functions server
yarn serve

# generate a static website
yarn generate
```
