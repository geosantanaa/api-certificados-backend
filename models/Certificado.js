const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Categoria = require('./Categoria');
const Instituicao = require('./Instituicao');

const Certificado = db.define('Certificado', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dataEmissao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    instituicaoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Certificado.belongsTo(Categoria, { foreignKey: 'categoriaId' }); 
Certificado.belongsTo(Instituicao, { foreignKey: 'instituicaoId' }); 


module.exports = Certificado;
