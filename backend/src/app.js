const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/kunjungan', require('./routes/kunjunganRoutes'));
app.use('/api/peminjaman', require('./routes/peminjamanRoutes'));
app.use('/api/barang', require('./routes/barangRoutes'));

app.get('/', (req, res) => res.send('Lab API is running'));

module.exports = app;