'use strict';
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/')
.get(userController.user_list_get)
.post(userController.user_post)
.put((req, res) => {
  res.send('From this endpoint you can modify user.');
});

router.route('/:id')
.get(userController.user_get_by_id)
.delete((req, res) => {
  res.send(`From this endpoint you can delete user by id ${req.params.id}.`);
});

module.exports = router;
