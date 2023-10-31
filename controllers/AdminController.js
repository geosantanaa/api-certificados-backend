const Admin = require('../models/Admin');

// Criar Admin
const createAdmin = async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar um admin' });
  }
};

// Pegar Admin por ID
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) {
      return res.status(404).json({ error: 'Admin não encontrado' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar admin' });
  }
};

// Atualizar Admin por ID
const updateAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const updatedAdminData = req.body;

    const admin = await Admin.findByPk(adminId); // Encontre o admin pelo ID

    if (!admin) {
      return res.status(404).json({ error: 'Admin não encontrado' });
    }
    await admin.update(updatedAdminData); // Atualize os dados do admin com os novos dados

    const updatedAdmin = await Admin.findByPk(adminId); // Busque o admin atualizado

    res.json(updatedAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar admin' });
  }
};

// Deletar Admin 
const deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      return res.status(404).json({ error: 'Admin não encontrado' });
    }

    await admin.destroy(); // Deleta o admin

    res.json({ message: 'Admin deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar admin' });
  }
};

// Listar todos os Admins
const listAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os admins' });
  }
};

module.exports = {
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  listAdmins,
};
