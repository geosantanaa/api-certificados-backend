const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sistema_certificado', 'root', 'QTU123v!', {
    host: 'localhost',
    dialect: 'mysql'
})


try{
    sequelize.authenticate()
    console.log('Conexão com o DB estabelecida com sucesso!')
}catch(err){
    console.log(`Não foi possivél concluir a conexão eo DB, ${err}`)
}  
  // checando sicronização do model com o banco de dados
  sequelize.sync()
    .then(() => {
      console.log('Tabelas sincronizadas com sucesso!');
    })
    .catch((err) => {
      console.log(`Erro ao sincronizar as tabelas, ${err}`);
    });

module.exports = sequelize