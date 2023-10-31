const { DataTypes } = require('sequelize');
const db = require('../db/db'); 

const Admin = db.define('Admin', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Admin;
