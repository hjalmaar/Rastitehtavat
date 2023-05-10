'use strict';
// catRoute
const express = require('express');
const multer  = require('multer');
const catController = require('../controllers/catController');
const router = express.Router();
const upload = multer({ dest: './uploads/' });

router.route('/')
.get(catController.cat_list_get)
.post(upload.single('cat'), catController.cat_post)
.put(catController.cat_put);

router.route('/:id')
.get(catController.cat_get_by_id)
.delete(catController.cat_delete_by_id);

module.exports = router;






