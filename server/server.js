const express = require('express');
const app = express();
const database = require('./util/database');
const {todosDB} = require("./util/database");

app.get('/', async (req, res) => {
    try{
        let results = await todosDB.all();
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});




app.use((req, res) => {
   res.status(404).json({"message": "Endpoint not found"});
});

app.listen(3000, function(){
   console.log("Running on port 3000")
});