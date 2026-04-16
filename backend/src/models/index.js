const sequelize = require('../config/database');
const Kunjungan = require('./kunjungan');
const Peminjaman = require('./peminjaman');
const Barang = require('./barang');

const db = { sequelize, Kunjungan, Peminjaman, Barang };

// Seed data barang awal (opsional, bisa dijalankan manual)
sequelize.sync().then(async () => {
  const count = await Barang.count();
  if (count === 0) {
    await Barang.bulkCreate([
      { nama: 'PC' }, { nama: 'Mouse' }, { nama: 'Keyboard' }, { nama: 'Headset' }
    ]);
  }
});

module.exports = db;