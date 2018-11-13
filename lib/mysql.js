let connection = require(__dirname + "/../lib/connect_mysql.js");

function sendreq(req, next) {
    console.log("Request: " + req)
    connection.query(req, function(err, result, fields) {
        if (err) throw err;
        return next(null, result);
    });
}
let query = {
    do: function(req, next) {
        sendreq(req, function(err, result) {
            if (err) throw err;
            return next(null, result);
        })
    },
    select: function(select, db, where, next) {
        let req = "";
        if (where !== "") {
            req += "SELECT " + select;
            req += " FROM " + db;
            req += " WHERE " + where;
        } else {
            req += "SELECT " + select;
            req += " FROM " + db;
        }
        sendreq(req, function(err, result) {
            if (err) throw err;
            return next(null, result);
        })
    },
    update: function(db, values, where, next) {
        let set_str = [];
        for (var key in values) {
            set_str.push(key + "=" + values[key]);
        }
        if (!set_str.length) {
            return next(Error('lib/mysql.js: Missing values to update'), null);
        }
        let req = "";
        if (where == "") {
            req += "UPDATE " + db;
            req += " set " + set_str.join(",");
        } else {
            req += "UPDATE " + db;
            req += " set " + set_str.join(",");
            req += " WHERE " + where;
        }
        sendreq(req, function(err, result) {
            if (err) throw err;
            return next(null, result);
        })
    },
    insert: function(db, values, next) {
        let keys_str = [];
        let values_str = [];
        for (var key in values) {
            keys_str.push(key);
            values_str.push(values[key]);
        }
        let req = "";
        req += "INSERT INTO " + db + " (" + keys_str.join(",") + ")";
        req += " VALUES (" + values_str.join(",") + ")";
        sendreq(req, function(err, result) {
            if (err) return next(Error('lib/mysql.js: error during insert\n' + err.message), null);
            //if (err) throw err;
            return next(null, result);
        })
    }
}
module.exports = query;