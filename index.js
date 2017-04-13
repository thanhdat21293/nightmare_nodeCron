'use strict';

let log = console.log;

const express = require('express');
const app = express();
const cron = require('node-cron');


app.get('/', function(req, res){
    var task = cron.schedule('0 54 16 * * *', function(){
      console.log('running every minute 1, 2, 4 and 5');
        require('./basic.js');
    });
    task.start();
    res.json({ahehe: '111'});
});

const port = 3001;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});
