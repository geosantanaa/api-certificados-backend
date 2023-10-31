const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Categoria = db.define('Categoria', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Categoria;
