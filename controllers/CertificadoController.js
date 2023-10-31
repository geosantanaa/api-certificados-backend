const Certificado = require('../models/Certificado');
const Instituicao = require('../models/Instituicao');
const Categoria = require('../models/Categoria');


// Criar Certificado
const createCertificado = async (req, res) => {
  try {
    const newCertificado = new Certificado(req.body);
    const savedCertificado = await newCertificado.save();
    res.status(201).json(savedCertificado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Certificado' });
  }
};

// Pegar Certificado por ID
const getCertificadoById = async (req, res) => {
  try {
    const certificado = await Certificado.findByPk(req.params.id);
    if (!certificado) {
      return res.status(404).json({ error: 'Certificado não encontrado' });
    }
    res.json(certificado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Certificado' });
  }
};

// Atualizar Certificado por ID
const updateCertificado = async (req, res) => {
  try {
    const certiifcadoId = req.params.id;
    const updatedCertificadoData = req.body;

    const certificado = await Certificado.findByPk(certiifcadoId);

    if (!certificado) {
      return res.status(404).json({ error: 'Certificado não encontrado' });
    }

    if (updatedCertificadoData.categoriaId) {
      const categoria = await Categoria.findByPk(updatedCertificadoData.categoriaId);
      if (!categoria) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
    }

    if (updatedCertificadoData.instituicaoId) {
      const instituicao = await Instituicao.findByPk(updatedCertificadoData.instituicaoId);
      if (!instituicao) {
        return res.status(404).json({ error: 'Instituição não encontrada' });
      }
    }

    await certificado.update(updatedCertificadoData);

    res.json(certificado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Certificado' });
  }
};

// Deletar Certificado 
const deleteCertificado = async (req, res) => {
  try {
    const certificadoId = req.params.id;
    const certificado = await Certificado.findByPk(certificadoId);

    if (!certificado) {
      return res.status(404).json({ error: 'Certiifcado não encontrado' });
    }

    await certificado.destroy(); 

    res.json({ message: 'Certificado deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Certificado' });
  }
};

// Listar todos os Certificado
const listCertificado = async (req, res) => {
  try {
    const certificado = await Certificado.findAll({ 
      include: [Instituicao, Categoria], 
    }); 
     res.json(certificado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os Certificados' });
  }
};

module.exports = {
  createCertificado,
  getCertificadoById,
  updateCertificado,
  deleteCertificado,
  listCertificado,
};
