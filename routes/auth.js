const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/signUp', authController.signUp )

module.exports = router;