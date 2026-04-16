const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Peminjaman = sequelize.define('Peminjaman', {
  nama: { type: DataTypes.STRING, allowNull: false },
  barang: { type: DataTypes.STRING, allowNull: false },
  jumlah: { type: DataTypes.INTEGER, allowNull: false },
  tanggal: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.ENUM('Dipinjam', 'Dikembalikan'), defaultValue: 'Dipinjam' },
}, { tableName: 'peminjaman' });

module.exports = Peminjaman;