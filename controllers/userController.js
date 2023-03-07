'use strict';
// userController
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get_by_id = (req, res) => {
  console.log('Cat controller get by id', req.params.id);
  const userFilter = users.filter((item) => item.id == req.params.id);
  console.log('user controller get by id, filter', userFilter);
  res.json(userFilter[0] || {});
};

const user_post = (req, res) => {
  console.log('user controller post body', req.body);
  res.send(`From this endpoint you can add a user ${req.body}.`);
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_post,
};
