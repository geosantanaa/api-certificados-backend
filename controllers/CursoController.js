const Curso = require('../models/Curso');

// Criar Curso
const createCurso = async (req, res) => {
  try {
    const newCurso = new Curso(req.body);
    const savedCurso = await newCurso.save();
    res.status(201).json(savedCurso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Curso' });
  }
};

// Pegar Curso por ID
const getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Curso' });
  }
};

// Atualizar Curso por ID
const updateCurso = async (req, res) => {
  try {
    const cursoId = req.params.id;
    const updatedCursoData = req.body;

    const curso = await Curso.findByPk(cursoId); 

    if (!curso) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    await curso.update(updatedCursoData); 

    const updatedCurso = await Curso.findByPk(cursoId); 

    res.json(updatedCurso);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Curso' });
  }
};

// Deletar Curso 
const deleteCurso = async (req, res) => {
  try {
    const cursoId = req.params.id;
    const curso = await Curso.findByPk(cursoId);

    if (!curso) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }

    await curso.destroy(); // Deleta o admin

    res.json({ message: 'Curso deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Curso' });
  }
};

// Listar todos os Cursos
const listCursos = async (req, res) => {
  try {
    const curso = await Curso.findAll();
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os Cursos' });
  }
};

module.exports = {
  createCurso,
  getCursoById,
  updateCurso,
  deleteCurso,
  listCursos,
};
