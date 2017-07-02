/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  MUM
  Student: #985803
  Lecture 5 / Exercise 
************************************************/
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
let url ='http://jsonplaceholder.typicode.com/users/';

var data = '';

//Promise way
fetch(url)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        data = json;
    });



router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //console.log(typeof usersJSON);
    res.render('users.ejs', { title: 'MWA #985803', items:data});

});

module.exports = router;
