var request = require("request");
let SQLQuery = require(__dirname + "/../lib/mysql.js");
const env =  'development';
const config = require(__dirname + '/../config/' + env + '.json');

var user_client = {
    getAllUsers: function(next) {
        let colunms = "*";
        let where = "";
        let db = config.connections.mysql.db + ".user";
        SQLQuery.select(colunms, db, where, function(err, result) {
            next(err, result);
        })
    },
	createUser: function(values, next) {
        let db = config.connections.mysql.db + ".user";
        SQLQuery.insert(db, values, function(err, result) {
			next(err, result);
		})
	}
};
module.exports = user_client;