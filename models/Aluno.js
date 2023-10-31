const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Curso = require('./Curso'); 
const Certificado = require('./Certificado'); 
const Turma = require('./Turma'); 



const Aluno = db.define('Aluno', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    turmaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cursoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    certificadoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
Aluno.belongsTo(Curso, { foreignKey: 'cursoId' }); 
Aluno.belongsTo(Turma, { foreignKey: 'turmaId' }); 
Aluno.belongsTo(Certificado, { foreignKey: 'certificadoId' }); 

module.exports = Aluno;
