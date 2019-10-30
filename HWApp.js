/*1 var express = require ('express')
    var app = express ()

app.get ('/static', function (req, res) {
    res.send ('Hello World')
}) 
/*2
var obj = {text:"Hello World"};
var express = require ('express')
    var app = express ()
app.get ('/staticJSON', function (req, res) {
    res.send (obj)
})*/
/*3 var express = require ('express')
var app = express ()
app.get ('/echo', function (req, res) {
    res.send(req.query.text)  
})*/
/*4
var express = require('express')
var app = express ()
app.get('/plus', function (req, res){
    var a = parseInt(req.query.a)
    var b = parseInt(req.query.b)
    res.send(String (a + b))
})*/
/*5
var express = require ('express')
var app = express ()
app.get ('/plusByJSON', function (req, res) {
    var a = parseInt(req.query.a)
    var b = parseInt(req.query.b)
    res.send(req.query.jasonText(String (a + b)))
})*/
/*6
var express = require('express')
var app = express ()
var HWRoute = require('./HWRoute')
app.use('/', HWRoute)
*/
/*7.GET /checkEvenNumber/3 
8.Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.
9. Return the Success (200) response code if the input number is a even.
10.-21.*/

var express = require('express')
var app = express ()
var HWRoute = require('./HWRoute')
app.use('/', HWRoute)


app.listen (4000)