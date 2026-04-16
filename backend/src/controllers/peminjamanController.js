const { Peminjaman } = require('../models');

exports.getAll = async (req, res) => {
  const data = await Peminjaman.findAll({ order: [['createdAt', 'DESC']] });
  res.json(data);
};

exports.create = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.create(req.body);
    res.status(201).json(peminjaman);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  await Peminjaman.update({ status: 'Dikembalikan' }, { where: { id } });
  res.json({ message: 'Updated' });
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  await Peminjaman.destroy({ where: { id } });
  res.json({ message: 'Deleted' });
};