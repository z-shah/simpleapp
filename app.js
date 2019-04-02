const express = require('express');
const app = express();
const port = 8080;

'use strict';

let jsonData = require('./build.json');

app.set('json spaces', 2)
app.get('/healthcheck', function(req, res, next) {

    var data = {
        myapplication: [
            {
            version: jsonData.version,
            description: "pre-interview technical test",
            lastcommitsha: jsonData.id,
            }
        ]
      };
    res.set('Content-Type', 'application/json');
    res.status(200).send(data);
});

app.listen(port, () => console.log(`Sample app running on port ${port}!`))