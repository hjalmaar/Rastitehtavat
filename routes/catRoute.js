'use strict';
// catRoute
const express = require('express');
const multer  = require('multer');
const catController = require('../controllers/catController');
const router = express.Router();
const {body} = require('express-validator');

const fileFilter = (req, file, cb) => {
  const allowedMimetypes = ['image/png', 'image/jpeg', 'image/gif'];
  if (allowedMimetypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ dest: './uploads/', fileFilter });

router.route('/')
.get(catController.cat_list_get)
.post(upload.single('cat'),
    body('name').isLength({min: 1}),
    body('birthdate').isDate(),
    body('weight').isNumeric(),
    body('owner').isNumeric(),
    catController.cat_post)
.put(catController.cat_put);

router.route('/:id')
.get(catController.cat_get_by_id)
.delete(catController.cat_delete_by_id);

module.exports = router;






