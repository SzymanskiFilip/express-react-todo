const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    user: "root",
    password: "root",
    database: "todos",
    host: "localhost",
    port: "3306"
});

let todosDB = {};

todosDB.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM todos`, (err, res) => {
            if(err){
                return reject(err);
            }
            return resolve(res);
        });
    });
};

todosDB.add = (todo) => {

    console.log(todo);
    if(todo == null){
        return "Input cant be empty!";
    }

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO todos (text,done) VALUES (${todo}, false)`, (err, res) => {
            if(err){
                return reject(err);
            }
            return resolve(res);
        });
    });
}

module.exports = {
    todosDB
}