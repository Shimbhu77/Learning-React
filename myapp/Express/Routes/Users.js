const express = require('express');
const userController = require('../Controller/User');
const router = express.Router();


router
.  get('/users',userController.getAll)
  .get('/users/:id',userController.getOne)
  .post('/users',userController.post)

  exports.router = router;