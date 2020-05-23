const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const con = require("../connection");


router.get("/populate", (req, res) => {
    let sql = "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(255), username VARCHAR(255), email VARCHAR(255))";  
    con.query(sql, function (err, result) {  
        if (err) throw err;  
        console.log("Table created");
    }); 
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((u) => { 
        return u.json();
    })
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            let post = {id: json[i].id, name: json[i].name, username: json[i].username, email: json[i].email};
            let ins = "INSERT INTO users SET?";
            con.query(ins, post, (err, result) => {
                if (err) throw err;
                console.log(result);
            });
        }
        res.send("Users added");
    })
});

router.get("/delete", (req, res) => {
    var del = "DELETE FROM users WHERE id = '10'";
    con.query(del, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
        res.send(("Number of records deleted: " + result.affectedRows));
    });
});

router.get("/deletetable", (req, res) => {
    let sql = "DROP TABLE users";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
    res.send("table deleted");
});

router.post("/signup", (req, res) => {

    const users={
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email
    }
        
    con.query('INSERT INTO users SET ?',users, function (err, results, fields) {
        if (err) {
            res.send({
              "status":400,
              "message":"failed, error ocurred"
            })
        } else {
            res.send({
              "status":200,
              "message":"user registered successfully"
            });
        }
    });
})








module.exports = router;