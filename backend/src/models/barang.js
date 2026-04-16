const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Barang = sequelize.define('Barang', {
  nama: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { tableName: 'barang' });

module.exports = Barang;