const express = require('express');
const app = express();
const database = require('./util/database');
const {todosDB} = require("./util/database");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/todos', async (req, res) => {
    try{
        let results = await todosDB.all();
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});

app.post('/todos', (req,res) => {
    todosDB.add(req.body);
    res.json({"mgs": "Todo added successfully!"});
});


app.listen(3000, function(){
   console.log("Running on port 3000")
});