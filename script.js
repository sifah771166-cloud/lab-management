let kunjungan = [];
let peminjaman = [];
let barangList = ["PC", "Mouse", "Keyboard", "Headset"];

// NAVIGASI
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// INIT BARANG
function loadBarang() {
  const select = document.getElementById("barangP");
  barangList.forEach(b => {
    let option = document.createElement("option");
    option.value = b;
    option.textContent = b;
    select.appendChild(option);
  });
}

// TAMBAH KUNJUNGAN
function tambahKunjungan() {
  const nama = document.getElementById("namaK").value;
  const kelas = document.getElementById("kelasK").value;
  const tanggal = document.getElementById("tanggalK").value;

  if (!nama || !kelas || !tanggal) return alert("Isi semua data!");

  kunjungan.push({ nama, kelas, tanggal });
  renderKunjungan();
}

// RENDER KUNJUNGAN
function renderKunjungan() {
  const table = document.getElementById("tableKunjungan");
  table.innerHTML = "";

  kunjungan.forEach((k, i) => {
    table.innerHTML += `
      <tr>
        <td>${k.nama}</td>
        <td>${k.kelas}</td>
        <td>${k.tanggal}</td>
        <td><button onclick="hapusKunjungan(${i})">Hapus</button></td>
      </tr>
    `;
  });

  document.getElementById("totalK").textContent = kunjungan.length;
}

// HAPUS KUNJUNGAN
function hapusKunjungan(i) {
  kunjungan.splice(i, 1);
  renderKunjungan();
}

// TAMBAH PEMINJAMAN
function tambahPeminjaman() {
  const nama = document.getElementById("namaP").value;
  const barang = document.getElementById("barangP").value;
  const jumlah = document.getElementById("jumlahP").value;
  const tanggal = document.getElementById("tanggalP").value;

  if (!nama || !barang || !jumlah || !tanggal) return alert("Isi semua data!");

  peminjaman.push({ nama, barang, jumlah, tanggal, status: "Dipinjam" });
  renderPeminjaman();
}

// RENDER PEMINJAMAN
function renderPeminjaman() {
  const table = document.getElementById("tablePeminjaman");
  table.innerHTML = "";

  peminjaman.forEach((p, i) => {
    table.innerHTML += `
      <tr>
        <td>${p.nama}</td>
        <td>${p.barang}</td>
        <td>${p.tanggal}</td>
        <td>${p.jumlah}</td>
        <td>${p.status}</td>
        <td>
          <button onclick="kembalikan(${i})">Kembalikan</button>
          <button onclick="hapusPeminjaman(${i})">Hapus</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("totalP").textContent = peminjaman.length;
}

// KEMBALIKAN BARANG
function kembalikan(i) {
  peminjaman[i].status = "Dikembalikan";
  renderPeminjaman();
}

// HAPUS PEMINJAMAN
function hapusPeminjaman(i) {
  peminjaman.splice(i, 1);
  renderPeminjaman();
}

// LOAD AWAL
loadBarang();