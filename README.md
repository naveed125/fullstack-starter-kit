# Fullstack Starter Kit
A starter project that includes
* a typescript react frontend
* a typescript nodejs/express backend
* a postgress database
* a redis cache
* an orm
* a database migration library
* everything dockerized and managed locally with docker compose

# Notes about installing node environment
If you don't have node installed, I highly recommend using the nvm for managing node versions. You can use the following:
* [NVM for Linux/OSX](https://github.com/nvm-sh/nvm)
* [NVM for Windows](https://github.com/coreybutler/nvm-windows)

# Step by Step Guide for Server
1. cd server
2. npm install -D typescript nodemon
3. npm install express @types/express
4. Write code in src/index.ts

# Automatically watch for changes
1. nodemon ./dist/index.js
2. npx tsc --watch

