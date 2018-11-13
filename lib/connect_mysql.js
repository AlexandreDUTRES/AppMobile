var mysql = require('mysql');
const env = 'development';
const config = require(__dirname + '/../config/' + env + '.json');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
			"host": "mydbinstance.cmi9gzleezyk.us-east-2.rds.amazonaws.com",
            "user": "alexxdurex",
            "pass": "da303115",
            "port":3306
		});

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
                console.log(err);
            }
        });
    }
    return db;
}

module.exports = connectDatabase();