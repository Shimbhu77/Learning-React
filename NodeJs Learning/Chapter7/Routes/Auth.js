const express = require('express');
const authController = require('../Controller/Auth');
const router = express.Router();


router
  .post('/signup',authController.post)
  .post('/login',authController.login);


  exports.authRouter = router;