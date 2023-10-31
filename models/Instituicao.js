const { DataTypes } = require('sequelize');
const db = require('../db/db'); 
const Endereco = require('./Endereco');

const Instituicao = db.define('Instituicao', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enderecoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contato: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Instituicao.belongsTo(Endereco, { foreignKey: 'enderecoId' }); 


module.exports = Instituicao;
