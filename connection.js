const mysql = require("mysql");

const con = mysql.createPool({
    connectionLimit : 5,
    host: "us-cdbr-east-06.cleardb.net",
    user: "bd5b486deb1c6f",
    password: "f0440218",
    database: "heroku_dc7f32e7380da23"
});

//con.connect((err) => {
    //if (err) throw err;
    //console.log("Connected!");
//});

module.exports = con;