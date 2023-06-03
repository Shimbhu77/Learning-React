const express = require('express');
const userController = require('../Controller/User');
const router = express.Router();


router
  .get('/users',userController.getAll)
  .get('/users/:id',userController.getOne)
  .post('/users',userController.post)
  .put('/users/:id',userController.put)
  .patch('/users/:id',userController.patch)
  .delete('/users/:id',userController.remove);

  exports.router = router;