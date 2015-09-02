var express = require('express');
var router = express.Router();
var students = require('../models/students.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(students);
  res.render('index', { title: 'Students', students: students});
});

module.exports = router;
