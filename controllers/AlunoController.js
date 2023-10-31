const Aluno = require('../models/Aluno');
const Turma = require('../models/Turma');
const Certificado = require('../models/Certificado');
const Curso = require('../models/Curso');


// Criar Aluno
const createAluno = async (req, res) => {
  try {
    const newAluno = new Aluno(req.body);
    const savedAluno = await newAluno.save();
    res.status(201).json(savedAluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Aluno' });
  }
};

// Pegar Aluno por ID
const getAlunoById = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Aluno' });
  }
};

// Atualizar Aluno por ID
const updateAluno = async (req, res) => {
  try {
    const alunoId = req.params.id;
    const updatedAlunoData = req.body;

    const aluno = await Aluno.findByPk(alunoId);

    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    if (updatedAlunoData.turmaId) {
      const turma = await Turma.findByPk(updatedAlunoData.turmaId);
      if (!turma) {
        return res.status(404).json({ error: 'Turma não encontrada' });
      }
    }

    if (updatedAlunoData.cursoId) {
      const curso = await Curso.findByPk(updatedAlunoData.cursoId);
      if (!curso) {
        return res.status(404).json({ error: 'Curso não encontrado' });
      }
    }

    if (updatedAlunoData.certificadoId) {
      const certificado = await Certificado.findByPk(updatedAlunoData.certificadoId);
      if (!certificado) {
        return res.status(404).json({ error: 'Certificado não encontrado' });
      }
    }

    await aluno.update(updatedAlunoData);

    res.json(aluno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Aluno' });
  }
};

// Deletar Aluno 
const deleteAluno = async (req, res) => {
  try {
    const alunoId = req.params.id;
    const aluno = await Aluno.findByPk(alunoId);

    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    await aluno.destroy(); 

    res.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Aluno' });
  }
};


// Listar todos os Alunos
const listAlunos = async (req, res) => {
  try {
    const aluno = await Aluno.findAll({ 
      include: [Turma, Curso, Certificado ], 
    });
     res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os Alunos' });
  }
};

module.exports = {
  createAluno,
  getAlunoById,
  updateAluno,
  deleteAluno,
  listAlunos,
};
