const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Curso = db.define('Curso', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataFinal: {
        type: DataTypes.DATE,
        allowNull: false
    },
    professor: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Curso; 
