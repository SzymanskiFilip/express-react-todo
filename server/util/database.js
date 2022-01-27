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

todosDB.update = (id, text) => {
    console.log("id: " + id + " text: " + text);
    if(id == null || text == null){
        return "WRONG REQUEST DATA";
    }

    return new Promise((resolve, reject) => {
       pool.query(`UPDATE todos SET text = '${text}' WHERE id = ${id}`, (err, res) => {
          if(err){
              return reject(err);
          }
          return resolve(res);
       });
    });
}

todosDB.delete = (id) => {
    console.log("deleting: " + id);
    if(id == null){
        return "id can't be null";
    }

    if(id < 0){
        return "id can't be smaller than 0";
    }

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM todos WHERE id = ${id}`, (err, res) => {
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