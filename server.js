// server.js
const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const path = require('path');
const server = express();

dotenv.config({ path: './.env'});


//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public')
server.use(express.static(publicDirectory));

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.set('view engine', 'hbs');

db.connect( (error) => {
    if(error) {
        console.log(error)
    }
   else{
        console.log("MySQL Connected.")
    }
})

//http://localhost/phpmyadmin/

//rotas definidas
server.use('/', require('./routes/pages'));
server.use('/auth', require('./routes/auth'));

server.listen(5500, () => {
    console.log("Server started on port 5500")
})