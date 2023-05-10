'use strict';
// catController
const catModel = require('../models/catModel');

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats(res);
  res.json(cats);
};

const cat_get_by_id = async (req, res) => {
  console.log('Cat controller get by id', req.params.id);
  const cat = await catModel.getCatId(req.params.id, res);
  console.log('cat controller get by id', cat);
  //res.send(`From this endpoint you can get cat by ${req.params.id}.`);
  res.json(cat || {});
};

const cat_post = async (req, res) => {
  console.log('cat controller post body', req.body);
  console.log('cat controller post file', req.file);
  const cat = req.body;
  cat.filename = req.file.filename;
  const id = await catModel.createCat(cat, res);
  res.json({ message: `cat created with id: ${id}.` });
};

const cat_put = async (req, res) => {
  console.log('cat controller post body', req.body);
  const cat = req.body;
  const modifed = await catModel.updateCat(cat, res);
  res.json({ message: `cat modified successfully: ${modifed}.` });
};

const cat_delete_by_id = async (req, res) => {
  console.log('Cat controller delete by id', req.params.id);
  const del = await catModel.deleteCat(req.params.id, res);
  res.json({ message: `cat deleted ${del}` });
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_post,
  cat_put,
  cat_delete_by_id,
};


