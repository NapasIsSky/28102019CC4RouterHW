/*6.var express = require('express')
var router = express.Router()

router.get('/plus/:a/:b', function (req, res){
    var a = parseInt (req.params.a)
    var b = parseInt (req.params.b)
    res.send (String(a+b))
})*/
/*7-9
var express = require('express')
var router = express.Router()
router.get('/checkEvenNumber/:a',function (req,res){
    var a = parseInt (req.params.a)
    if(a%2==0){res.send(200)} 
    else {res.send(400)} 
})*/
/*10.-13.
var arry = []
var express = require('express')
var router = express.Router()
router.post('/number/:a',function (req,res){
    
    var a = parseInt (req.params.a)
    arry.push(a)
    res.send (arry) 
})*/
/*15.-16.
var arry = [1,2,5];
var express = require('express')
var router = express.Router()
router.delete('/number/:a',function (req,res){
    
    var a = parseInt (req.params.a)
    arry.pop(a)
    res.send (arry) 
})*/
/*17.-18.
var arry = []
var express = require('express')
var router = express.Router()
router.put('/number/:a/:b',function (req,res){
    
    var a = parseInt (req.params.a)
    var b = parseInt (req.params.b)
    arry.push(b)
    res.send (arry) 
})*/
/*19.-21.
var map1 = new Map();
var express = require ('express')
var router = express.Router()
    app.post ('/countFieldsBODY ', function (req, res) {
    map1.set('a', 'alpha');
    map1.set('b', 'beta');
    map1.set('g', 'gamma');

    console.log(map1.size);
})
    module.exports = router
*/
