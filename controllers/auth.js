const mysql = require("mysql");
const jwl = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.signUp = (req, res) => {
    console.log(req.body);

    const { nome, email, senha, confirmarSenha } = req.body;

    db.query('SELECT email FROM usuarios WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.log(error);
        }

        if( results.length > 0 ) {
            return res.render('signUp', {
                message: 'Este email já está em uso, tente novamente.'
            })
        } else if(senha !== confirmarSenha) {
            return res.render('signUp', {
                message: 'As senhas não são iguais.'
            });
        }

        let hashedPassword = await bcrypt.hash(senha, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO usuarios SET ?', {nome: nome, email: email, senha: hashedPassword }, (error, results) => { 
            if(error){
                console.log(error);
            } else {
                console.log(results);
                return res.render('signUp', {
                    message: 'Usuario registrado.'
                });
            }

        })

    });

}