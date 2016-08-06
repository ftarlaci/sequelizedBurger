var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../models');
var methodOverride = require('method-override');

router.get('/', function(req,res){
	res.redirect('/burgers');
});



router.get('/', function(req,res) {
	models.burgers.findAll()
	.then(function(data){
		res.render('index', {burgers: data});
	});
});

router.post('/burgers/create', function(req,res){
	models.burgers.create({
		burger_name: req.body.name,

		devoured: 0})
		.then(function(){
			res.redirect('/burgers');
		});
});

// router.get('/burgers', function(req,res) {
// 	burger.selectAll(function(data){	
// 		console.log();
// 		res.render('index', {burgers: data});
// 	});

// });



// router.post('/burgers/create', function(req,res) {
// 	burger.insertOne(['burger_name', 'devoured'], [req.body.name, 0], function(data){
// 		res.redirect('/burgers');
// 	});

// });



router.put('/burgers/update/:id', function(req,res) {
	var newId = req.params.id;
	models.burgers.update(
		{devoured: true}, {where: { id: newId}}
		).then(function(){
			res.redirect('/burgers');
		});
	
});

router.delete('/burgers/delete/:id', function(req,res){
	var newId =req.params.id;
	models.burgers.destroy(
		{where: {id: newId}}
		).then(function(){
			res.redirect('/burgers');
		});
});

module.exports = router;
