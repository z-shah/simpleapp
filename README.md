# Simple API in Node.JS and Express


This app uses Node.JS [Express Web Framework](https://expressjs.com/)


## Build

```code

docker build -it my-web-app .

docker run -d -p 127.0.0.1:80:8080 my-web-app

```

### Tests

Uses [newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/) to run postman collections.


## Install newman globally (allows you to run it from anywhere.)

```
npm install -g newman
```
Run against the running docker container

```
npm test
```

## API Documentation

[API Documentation](https://documenter.getpostman.com/view/7129175/S17xt6XD)

