'use strict';

let log = console.log;

const express = require('express');
const app = express();
const cron = require('node-cron');


app.get('/', function(req, res){
    var task = cron.schedule('0 53 9 * * *', function(){
      console.log('running');
        require('./basic.js');
    });
    task.start();
    res.json({ahehe: '111'});
});

const port = 3001;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});
