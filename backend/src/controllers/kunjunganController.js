const { Kunjungan } = require('../models');

exports.getAll = async (req, res) => {
  const data = await Kunjungan.findAll({ order: [['createdAt', 'DESC']] });
  res.json(data);
};

exports.create = async (req, res) => {
  try {
    const kunjungan = await Kunjungan.create(req.body);
    res.status(201).json(kunjungan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  await Kunjungan.destroy({ where: { id } });
  res.json({ message: 'Deleted' });
};