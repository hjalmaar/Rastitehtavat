'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
  console.log('Cat controller get by id', req.params.id);
  const catFilter = cats.filter((item) => item.id == req.params.id);
  console.log('cat controller get by id, filter', catFilter);
  res.json(catFilter[0] || {});
};

const cat_post = (req, res) => {
  console.log('cat controller post body', req.body);
  res.send(`From this endpoint you can add a cat ${req.body}.`);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_post,
};

