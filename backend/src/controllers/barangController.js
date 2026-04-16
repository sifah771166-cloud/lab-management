const { Barang } = require('../models');

// @desc    Get all barang
// @route   GET /api/barang
// @access  Public
exports.getAll = async (req, res) => {
  try {
    const barang = await Barang.findAll({
      order: [['nama', 'ASC']]
    });
    res.json(barang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};