const mysql = require("mysql");

const con = mysql.createPool({
    connectionLimit : 5,
    host: "us-cdbr-east-06.cleardb.net",
    user: "bbdc8388b20612",
    password: "ab06d530",
    database: "heroku_6c04893c6ad36c9"
});

//con.connect((err) => {
    //if (err) throw err;
    //console.log("Connected!");
//});

module.exports = con;