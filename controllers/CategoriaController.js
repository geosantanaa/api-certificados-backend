const Categoria = require('../models/Categoria');

// Criar Categoria
const createCategoria = async (req, res) => {
  try {
    const newCategoria = new Categoria(req.body);
    const savedCategoria = await newCategoria.save();
    res.status(201).json(savedCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar uma Categoria' });
  }
};

// Pegar Categoria por ID
const getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Categoria' });
  }
};

// Atualizar Categoria por ID
const updateCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const updatedCategoriaData = req.body;

    const categoria = await Categoria.findByPk(categoriaId); 

    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    await categoria.update(updatedCategoriaData); 
    const updatedCategoria = await Categoria.findByPk(categoriaId); 
    res.json(updatedCategoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Categoria' });
  }
};

// Deletar Categoria 
const deleteCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const categoria = await Categoria.findByPk(categoriaId);

    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }

    await categoria.destroy(); 

    res.json({ message: 'Categoria deletada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Categoria' });
  }
};

// Listar todas as Categoria
const listCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findAll();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as Categoria' });
  }
};

module.exports = {
  createCategoria,
  getCategoriaById,
  updateCategoria,
  deleteCategoria,
  listCategoria,
};
