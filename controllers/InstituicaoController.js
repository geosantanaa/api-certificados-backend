const Instituicao = require('../models/Instituicao');
const Endereco = require('../models/Endereco');

// Criar Instituicao
const createInstituicao = async (req, res) => {
  try {
    const newInstituicao = new Instituicao(req.body);
    const savedInstituicao = await newInstituicao.save();
    res.status(201).json(savedInstituicao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar um Instituicao' });
  }
};

// Pegar Instituicao por ID
const getInstituicaoById = async (req, res) => {
  try {
    const instituicao = await Instituicao.findByPk(req.params.id);
    if (!instituicao) {
      return res.status(404).json({ error: 'Instituicao não encontrada' });
    }
    res.json(instituicao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Instituicao' });
  }
};

// Atualizar Instituicao por ID
const updateInstituicao = async (req, res) => {
  try {
    const instituicaoId = req.params.id;
    const updatedInstituicaoData = req.body;

    const instituicao = await Instituicao.findByPk(instituicaoId);

    if (!instituicao) {
      return res.status(404).json({ error: 'Instituição não encontrada' });
    }

    if (updatedInstituicaoData.enderecoId) {
      const endereco = await Endereco.findByPk(updatedInstituicaoData.enderecoId);
      if (!endereco) {
        return res.status(404).json({ error: 'Endereço não encontrado' });
      }
    }

    await instituicao.update(updatedInstituicaoData);

    res.json(instituicao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Instituição' });
  }
};


// Deletar Instituicao 
const deleteInstituicao = async (req, res) => {
  try {
    const instituicaoId = req.params.id;
    const instituicao = await Instituicao.findByPk(instituicaoId);

    if (!instituicao) {
      return res.status(404).json({ error: 'Instituicao não encontrada' });
    }

    await instituicao.destroy(); 

    res.json({ message: 'Instituicao deletada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Instituicao' });
  }
};

// Listar todos as Instituicoes
const listInstituicoes = async (req, res) => {
  try {
    const instituicoes = await Instituicao.findAll({
      include: [Endereco], 
    });
    res.json(instituicoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os Instituicoes' });
  }
};

module.exports = {
  createInstituicao,
  getInstituicaoById,
  updateInstituicao,
  deleteInstituicao,
  listInstituicoes,
};
