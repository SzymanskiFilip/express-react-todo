const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "root",
    database: "todos"
});

function makeConnection(){
    connection.connect(function(error){
        if(!!error){
            console.log(error);
        } else{
            console.log("connected");
        }
    });
}

function getAll(){
    connection.query("SELECT * FROM todos;", function(error, rows, fields){
        if(!!error){
            console.log("error with query");
        } else{
            console.log("successful query");
            console.log(rows);
        }
    });
}

module.exports = {
    connection,
    makeConnection,
    getAll
};