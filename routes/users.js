/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  MUM
  Student: #985803
  Lecture 5 / Exercise 
************************************************/
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var Rx = require('@reactivex/rxjs');
let url ='http://jsonplaceholder.typicode.com/users/';

var data = '';

//Promise way
var fetching = fetch(url); //return Promise

var callPromise = () => {
    fetching.then(function(res) {
        return res.json();
    })
    .then(function(json) {
        data = json;
    })
    .catch(function(err) {
        console.log(err);
    });
};

callPromise();

//Reactive Programming(Observables) way

//Async Wait way

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //console.log(typeof usersJSON);
    res.render('users.ejs', { title: 'MWA #985803', items:data});

});

module.exports = router;
