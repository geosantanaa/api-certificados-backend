const express = require('express');
const db = require('./db/db');
const app = express();
const port = 8080;

//Controllers
const alunoController = require('./controllers/AlunoController')
const turmaController = require('./controllers/TurmaController')
const adminController = require('./controllers/AdminController')
const categoriaController = require('./controllers/CategoriaController')
const cursoController = require('./controllers/CursoController')
const instituicaoController = require('./controllers/InstituicaoController')
const enderecoController = require('./controllers/EnderecoController')
const certificadoController = require('./controllers/CertificadoController')


app.use(express.json());

// Conexão com o banco de dados e configuração das rotas
db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`App utilizando a porta ${port}`);
    });

    // Rotas Admin
    app.post('/api/admin', adminController.createAdmin);
    app.get('/api/admin', adminController.listAdmins)
    app.get('/api/admin/:id', adminController.getAdminById)
    app.put('/api/admin/:id', adminController.updateAdmin)
    app.delete('/api/admin/:id', adminController.deleteAdmin)

    // // Rotas Turma
     app.post('/api/turma', turmaController.createTurma);
     app.get('/api/turma', turmaController.listTurmas)
     app.delete('/api/turma/:id', turmaController.deleteTurma)

     // Rotas Categoria
     app.post('/api/categoria', categoriaController.createCategoria);
     app.get('/api/categoria', categoriaController.listCategoria)
     app.get('/api/categoria/:id', categoriaController.getCategoriaById)
     app.put('/api/categoria/:id', categoriaController.updateCategoria)
     app.delete('/api/categoria/:id', categoriaController.deleteCategoria)

     // Rotas Curso
     app.post('/api/curso', cursoController.createCurso);
     app.get('/api/curso', cursoController.listCursos)
     app.get('/api/curso/:id', cursoController.getCursoById)
     app.put('/api/curso/:id', cursoController.updateCurso)
     app.delete('/api/curso/:id', cursoController.deleteCurso)

    // Rotas Endereço
    app.post('/api/endereco', enderecoController.createEndereco);
    app.get('/api/endereco', enderecoController.listEndereco)
    app.delete('/api/endereco/:id', enderecoController.deleteEndereco)

     // Rotas Instituição
     app.post('/api/instituicao', instituicaoController.createInstituicao);
     app.get('/api/instituicao', instituicaoController.listInstituicoes)
     app.get('/api/instituicao/:id', instituicaoController.getInstituicaoById)
     app.put('/api/instituicao/:id', instituicaoController.updateInstituicao)
     app.delete('/api/instituicao/:id', instituicaoController.deleteInstituicao)

     // Rotas Certificado
     app.post('/api/certificado', certificadoController.createCertificado);
     app.get('/api/certificado', certificadoController.listCertificado)
     app.get('/api/certificado/:id', certificadoController.getCertificadoById)
     app.put('/api/certificado/:id', certificadoController.updateCertificado)
     app.delete('/api/certificado/:id', certificadoController.deleteCertificado)

     // Rotas Aluno
     app.post('/api/aluno', alunoController.createAluno);
     app.get('/api/aluno', alunoController.listAlunos)
     app.get('/api/aluno/:id', alunoController.getAlunoById)
     app.put('/api/aluno/:id', alunoController.updateAluno)
     app.delete('/api/aluno/:id', alunoController.deleteAluno)


  })
  .catch((err) => console.log(err));
