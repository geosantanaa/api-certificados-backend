const Turma = require('../models/Turma');

// Criar Turma
const createTurma = async (req, res) => {
  try {
    const newTurma = new Turma(req.body);
    const savedTurma = await newTurma.save();
    res.status(201).json(savedTurma);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Turma' });
  }
};

// Deletar Turma 
const deleteTurma = async (req, res) => {
  try {
    const turmaId = req.params.id;
    const turma = await Turma.findByPk(turmaId);

    if (!turma) {
      return res.status(404).json({ error: 'Turma não encontrada' });
    }

    await turma.destroy(); 

    res.json({ message: 'Turma deletada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Turma' });
  }
};

// Listar todas as Turmas
const listTurmas = async (req, res) => {
  try {
    const turmas = await Turma.findAll();
    res.json(turmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as Turmas' });
  }
};

module.exports = {
  createTurma,
  deleteTurma,
  listTurmas
};
