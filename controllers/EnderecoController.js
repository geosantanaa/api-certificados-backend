const Endereco = require('../models/Endereco');

// Criar Endereco
const createEndereco = async (req, res) => {
  try {
    const newEndereco = new Endereco(req.body);
    const savedEndereco = await newEndereco.save();
    res.status(201).json(savedEndereco);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Endereço' });
  }
};

// Deletar Endereco 
const deleteEndereco = async (req, res) => {
  try {
    const enderecoId = req.params.id;
    const endereco = await Endereco.findByPk(enderecoId);

    if (!endereco) {
      return res.status(404).json({ error: 'Endereço não encontrado' });
    }

    await endereco.destroy(); 

    res.json({ message: 'Endereço deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Endereço' });
  }
};

// Listar todoss os Enderecos
const listEndereco = async (req, res) => {
  try {
    const endereco = await Endereco.findAll();
    res.json(endereco);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os Endereços' });
  }
};

module.exports = {
  createEndereco,
  deleteEndereco,
  listEndereco,
};
