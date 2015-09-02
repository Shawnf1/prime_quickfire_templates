var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var file = __dirname + '/../models/students.json';
	fs.readFile(file, 'utf8', function (err, data) {
		if(err) {
			next(err);
		}else {
			if(data) {
				var studentsArray = JSON.parse(data);
			}else {
				var studentsArray = [];
			}
			res.json(studentsArray);
		}
	});
});

router.post('/', function (req, res, next) {
	var file = __dirname + '/../models/students.json';
	fs.readFile(file, 'utf8', function (err, data) {
		if(err) {
			next(err);
		}else {
			if(data) {
				var studentsArray = JSON.parse(data);
			}else {
				var studentsArray = [];
			}
			studentsArray.push({firstName: req.body.firstName, lastName: req.body.lastName});

			fs.writeFile(file, JSON.stringify(studentsArray), function () {
				res.json(studentsArray);
			});
		}
	});
});

module.exports = router;
