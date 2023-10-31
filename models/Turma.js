const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Turma = db.define('Turma', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Turma;
