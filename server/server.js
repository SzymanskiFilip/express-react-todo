const express = require('express');
const app = express();
const database = require('./util/database');
const {todosDB} = require("./util/database");
const cors = require('cors');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3001"
}));

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
    let todo = req.body.text;
    todosDB.add(todo);
    res.json({"mgs": "Todo added successfully!"});
});

app.put('/todo', (req,res) => {
    let id = req.body.id;
    let newText = req.body.text;
    
};


app.listen(3000, function(){
   console.log("Running on port 3000")
});