const express = require("express");
const bodyParser = require("body-parser");
const {pool,Client}= require("pg");
const jwt = require('jsonwebtoken');

const app= express();
app.use(bodyParser.urlencoded({extended: true}));

const connectionString = 'postgressql://postgres:123456@localhost:3000/postgres';
const client = new Client({
    connectionString: connectionString
});
client.connect();


const routes = require("./routes/crud-routes");

app.use("/",routes);

app.listen(8080,()=>{
    console.log("Connected at 8080")
});