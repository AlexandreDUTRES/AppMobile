let express = require('express');
let router = express.Router();

/* GET home */
router.get('/', function(req, res) {
	res.send({message: "ok"});
});

module.exports = router;