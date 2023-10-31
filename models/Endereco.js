const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Endereco = db.define('Endereco', {
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Endereco;
