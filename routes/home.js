let express = require('express');
let router = express.Router();
let uniqid = require('uniqid');
let userLib = require('../lib/user');

/* GET home */
router.get('/', function(req, res) {
	userLib.getAllUsers(function(err, users){
		if (err) return res.status(500).send({message: "ko"});
		if (users.length) {
			return res.send(users);
		}
		res.send({message: "No user"});
	});
});

router.get('/create/:firstname/:lastname', function(req, res) {
	var to_set = {};
	to_set.uid = "'" + uniqid() + "'";
	to_set.first_name = "'" + req.params.firstname + "'";
	to_set.last_name = "'" + req.params.lastname + "'";
	userLib.createUser(to_set, function(err, result){
		if (err) return res.status(500).send({message: "ko"});
		res.send({message: "New user "+req.params.firstname+" "+req.params.lastname});
	});
});

module.exports = router;