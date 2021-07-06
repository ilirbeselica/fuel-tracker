# Fuel Expenses Tracker

An application with tracks fuel expenses. Also it calculates average consumption per 100km for each vehicle, based on inputed data.
Application it is full stack, server runs on NodeJS and interface it is builded with ReactJS.

1. Server
2. Frontend 

## Server Installation

You can run server by first installing neccesary packages located in package.json with the command:
### npm install

## Frontend

You can compile build by running build command:
### npm run build

## Necessary Configuration:
You should provide your .env configuration enviroment file on server for two variables:
#### DB_URI >> Your MongoDB database url
#### JWT_SECRET >> Your JWT Secret for Auth

On frontend Vehicle Identifications Numbers and Employee should be changed according to your needs.
