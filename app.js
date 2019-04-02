const express = require('express');
const app = express();
const port = 3000;

'use strict';

let jsonData = require('./build.json');

app.set('json spaces', 2)
app.get('/appInfo', function(req, res) {

    var data = ({
        myapplication: {
            version: jsonData.version,
            description: "pre-interview technical test",
            lastcommitsha: jsonData.id,
        }
        
      });
    res.status(200).send(data);

});

app.listen(port, () => console.log(`Sample app running on port ${port}!`))