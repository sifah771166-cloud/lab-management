const API_BASE = 'http://localhost:5000/api';

// Ambil daftar barang dari server untuk dropdown
async function loadBarang() {
  try {
    const res = await fetch(`${API_BASE}/barang`); // perlu tambahkan endpoint GET /api/barang
    const barang = await res.json();
    const select = document.getElementById('barangP');
    select.innerHTML = '<option value="">Pilih Barang</option>';
    barang.forEach(b => {
      select.innerHTML += `<option value="${b.nama}">${b.nama}</option>`;
    });
  } catch (err) {
    console.error('Gagal load barang:', err);
  }
}

// === KUNJUNGAN ===
async function renderKunjungan() {
  const res = await fetch(`${API_BASE}/kunjungan`);
  const data = await res.json();
  const tbody = document.getElementById('tableKunjungan');
  tbody.innerHTML = '';
  data.forEach(k => {
    tbody.innerHTML += `
      <tr>
        <td>${k.nama}</td>
        <td>${k.kelas}</td>
        <td>${k.tanggal}</td>
        <td><button onclick="hapusKunjungan(${k.id})">Hapus</button></td>
      </tr>
    `;
  });
  document.getElementById('totalK').textContent = data.length;
}

async function tambahKunjungan() {
  const nama = document.getElementById('namaK').value;
  const kelas = document.getElementById('kelasK').value;
  const tanggal = document.getElementById('tanggalK').value;
  if (!nama || !kelas || !tanggal) return alert('Isi semua data!');

  await fetch(`${API_BASE}/kunjungan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nama, kelas, tanggal })
  });
  renderKunjungan();
}

async function hapusKunjungan(id) {
  await fetch(`${API_BASE}/kunjungan/${id}`, { method: 'DELETE' });
  renderKunjungan();
}

// === PEMINJAMAN ===
async function renderPeminjaman() {
  const res = await fetch(`${API_BASE}/peminjaman`);
  const data = await res.json();
  const tbody = document.getElementById('tablePeminjaman');
  tbody.innerHTML = '';
  data.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.nama}</td>
        <td>${p.barang}</td>
        <td>${p.tanggal}</td>
        <td>${p.jumlah}</td>
        <td>${p.status}</td>
        <td>
          <button onclick="kembalikan(${p.id})" ${p.status === 'Dikembalikan' ? 'disabled' : ''}>Kembalikan</button>
          <button onclick="hapusPeminjaman(${p.id})">Hapus</button>
        </td>
      </tr>
    `;
  });
  document.getElementById('totalP').textContent = data.length;
}

async function tambahPeminjaman() {
  const nama = document.getElementById('namaP').value;
  const barang = document.getElementById('barangP').value;
  const jumlah = document.getElementById('jumlahP').value;
  const tanggal = document.getElementById('tanggalP').value;
  if (!nama || !barang || !jumlah || !tanggal) return alert('Isi semua data!');

  await fetch(`${API_BASE}/peminjaman`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nama, barang, jumlah, tanggal })
  });
  renderPeminjaman();
}

async function kembalikan(id) {
  await fetch(`${API_BASE}/peminjaman/${id}/kembalikan`, { method: 'PATCH' });
  renderPeminjaman();
}

async function hapusPeminjaman(id) {
  await fetch(`${API_BASE}/peminjaman/${id}`, { method: 'DELETE' });
  renderPeminjaman();
}

// Navigasi
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  if (pageId === 'dashboard') {
    renderKunjungan();
    renderPeminjaman();
  }
  if (pageId === 'kunjungan') renderKunjungan();
  if (pageId === 'peminjaman') renderPeminjaman();
}

// Inisialisasi
loadBarang();
renderKunjungan();
renderPeminjaman();