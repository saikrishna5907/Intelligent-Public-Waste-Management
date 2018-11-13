const express = require('express');

const app =  express();

app.get('/',function(req, res){
  res.send(200).json({
    message: 'It works!'
  });
});

module.exports = app;
