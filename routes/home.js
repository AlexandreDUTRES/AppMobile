let express = require('express');
let router = express.Router();
let userLib = require('../lib/user');

/* GET home */
router.get('/', function(req, res) {
	userLib.getAllUsers(function(err, users){
		if (err) return res.status(500).send({message: "ko"});
		console.log(users)
		res.send({message: "ok"});
	});
});

module.exports = router;