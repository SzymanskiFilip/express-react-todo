const express = require('express');
const app = express();
const database = require('./util/database');

app.get('/', (req, res) => {
    database.makeConnection();
    database.getAll();
    res.send("1");
});




app.use((req, res) => {
   res.status(404).json({"message": "Endpoint not found"});
});

app.listen(3000, function(){
   console.log("Running on port 3000")
});