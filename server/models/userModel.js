'use strict';
const pool = require("../database/db");
// used for executing sql queries. working ascynchorously
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    const sql = 'SELECT user_id, wop_user.name, email, password, role, wop_cat.name AS petname ' + 'FROM wop_user JOIN wop_cat ON wop_user.user_id = wop_cat.owner';
    const [rows] = await promisePool.query(sql);
    return rows; 
  }catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getUserById = async (id,res) => {
  try {
    const sql = "SELECT user_id, name, email, role FROM wop_user " + "WHERE user_id=" + id;
    const [rows] = await promisePool.query(sql);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const addUser = async (user, res) => {
  try {
    const sql = "INSERT INTO wop_user VALUES (null, ?, ?, ?, ?)" ;
    const values = [user.name, user.email, user.passwd, user.role];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const updateUserById = async (user, res) => {
  try {
    console.log('Modify user:', user);
    const sql = "UPDATE wop_user SET name = ?, email = ?, password = ?, role = ?  "+ 
    "WHERE user_id = ?";
    const values = [user.name, user.email, user.passwd, user.role, user.id];
    const [rows] = 
       await promisePool.query(sql, values);
     return rows;
   } catch (e) {
    console.error("error", e.message);
     res.status(500).send(e.message);
   }
};

const deleteUserById = async (userId, res) => {
  try {
    const [rows] = 
      await promisePool.query("DELETE FROM wop_user WHERE user_id = ?", [userId]);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }

};



module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
};