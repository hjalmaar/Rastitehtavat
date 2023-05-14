'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async (res) => {
  try {
    const [rows] = await promisePool.query(
        `SELECT cat_id, owner, wop_cat.name AS name, weight, birthdate, filename, wop_user.name AS ownername
      FROM wop_cat INNER JOIN wop_user ON owner = user_id`
    );
    return rows;
  } catch (e) {
    console.error('cat model getAllCats error', e.message);
    res.status(500).json({ message: 'something went wrong' });
  }
};

const getCatId = async (id, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = ?', [id]);
    return rows[0];
  } catch (e) {
    console.error('cat model getAllCats error', e.message);
    res.status(500).json({ message: 'something went wrong' });
    return;
  }
};

const createCat = async (cat, res) => {
  try {
    const [rows] = await promisePool.query('INSERT INTO wop_cat(name, weight, owner, filename, birthdate) VALUES (?, ?, ?, ?, ?)', [cat.name, cat.weight, cat.owner, cat.filename, cat.birthdate]);
    console.log('cat model insert', rows);
    return rows.insertId;
  } catch (e) {
    console.error('cat model createCat error', e.message);
    res.status(500).json({ message: 'something went wrong' });
    return;
  }
};

const updateCat = async (cat, res) => {
  try {
    const [rows] = await promisePool.query('UPDATE wop_cat SET name = ?, weight = ?, owner = ?, birthdate = ? WHERE cat_id = ?', [cat.name, cat.weight, cat.owner, cat.birthdate, cat.cat_id]);
    console.log('cat model update', rows);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('cat model updateCat error', e.message);
    res.status(500).json({ message: 'something went wrong' });
    return;
  }
};

const deleteCat = async (id, res) => {
  try {
    const [rows] = await promisePool.query('DELETE FROM wop_cat WHERE cat_id = ?', [id]);
    console.log('cat  model delete', rows);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('cat model deleteCat error', e.message);
    res.status(500).json({ message: 'something went wrong' });
    return;
  }
};

module.exports = {
  getAllCats,
  getCatId,
  createCat,
  updateCat,
  deleteCat,
};
