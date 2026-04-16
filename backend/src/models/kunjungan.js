const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Kunjungan = sequelize.define('Kunjungan', {
  nama: { type: DataTypes.STRING, allowNull: false },
  kelas: { type: DataTypes.STRING, allowNull: false },
  tanggal: { type: DataTypes.DATEONLY, allowNull: false },
}, { tableName: 'kunjungan' });

module.exports = Kunjungan;