'use strict';
// catRoute
const express = require('express');
const catController = require('../controllers/catController');
const router = express.Router();

router.route('/')
.get(catController.cat_list_get)
.post(catController.cat_post)
.put((req, res) => {
  res.send('From this endpoint you can modify cat.');
});

router.route('/:id')
.get(catController.cat_get_by_id)
.delete((req, res) => {
  res.send(`From this endpoint you can delete cat by id ${req.params.id}.`);
});

module.exports = router;

