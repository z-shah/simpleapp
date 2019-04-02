const express = require('express')
const app = express()
const port = 3000

app.set('json spaces', 2);
app.get('/version', function(req, res) {
    res.json({
        "myapplication": 
        [{
            "version": "1.0",
            "description": "pre-interview technical test",
            "lastcommitsha": "abc57858585"
        }]});
});
app.listen(port, () => console.log(`Sample app running on port ${port}!`))