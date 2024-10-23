const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("index")
});

router.get("/signUp", (req, res) => {
    res.render("signUp")
});

router.get("/forgotPassword", (req, res) => {
    res.render("forgotPassword")
});

router.get("/loginSM", (req, res) => {
    res.render("loginSM")
});

router.get("/game", (req, res) => {
    res.render("game")
});


module.exports = router;