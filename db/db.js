const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_HOST, {
  dialect: 'postgres',
});

try {
  sequelize.authenticate();
  console.log('Conexão com o DB estabelecida com sucesso!');
} catch (err) {
  console.error(`Não foi possível concluir a conexão com o DB: ${err}`);
}

module.exports = sequelize;
