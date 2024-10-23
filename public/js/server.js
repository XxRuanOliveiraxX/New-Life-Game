// server.js
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const server = express();
const path = require('path');
dotenv.config({ path: '../.env'});

//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, '../public')
server.use(express.static(publicDirectory));

server.set('view engine', 'hbs');

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else{
        console.log("MySQL Connected.")
    }
})

//http://localhost/phpmyadmin/

server.get("/", (req, res) => {
    //res.send("<h1>Home page</h1>")
    res.render("index")
});

server.get("/signUp", (req, res) => {
    //res.send("<h1>Home page</h1>")
    res.render("signUp")
});

server.get("/forgotPassword", (req, res) => {
    //res.send("<h1>Home page</h1>")
    res.render("forgotPassword")
});

server.get("/loginSM", (req, res) => {
    //res.send("<h1>Home page</h1>")
    res.render("loginSM")
});

server.get("/game", (req, res) => {
    //res.send("<h1>Home page</h1>")
    res.render("game")
});


server.listen(5500, () => {
    console.log("Server started on port 5500")
})

