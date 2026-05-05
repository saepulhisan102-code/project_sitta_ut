// ============================================
// DATA PENGGUNA UNTUK LOGIN
// ============================================
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta",
    kodeLokasi: "0JKT01"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar",
    kodeLokasi: "0MKS01"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat (Pondok Cabe)",
    kodeLokasi: "0PST01"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP",
    kodeLokasi: "0FSIP01"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat",
    kodeLokasi: "0ADM01"
  }
];

// ============================================
// DATA BAHAN AJAR (STOK) - DENGAN KODE LOKASI
// ============================================
var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    namaLokasi: "UPBJJ Tangerang",
    kodeBarang: "SKOM4101",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0JKT01",
    namaLokasi: "UPBJJ Jakarta",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg"
  },
  {
    kodeLokasi: "0SBY02",
    namaLokasi: "UPBJJ Surabaya",
    kodeBarang: "ADPU4334",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg"
  },
  {
    kodeLokasi: "0MLG01",
    namaLokasi: "UPBJJ Malang",
    kodeBarang: "BIOL4223",
    namaBarang: "Mikrobiologi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    namaLokasi: "UPBJJ Bandung",
    kodeBarang: "PAUD4306",
    namaBarang: "Perkembangan dan Konsep Dasar Pengembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpg"
  },
  {
    kodeLokasi: "0PST01",
    namaLokasi: "Puslaba (Pusat)",
    kodeBarang: "SKOM4101",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 1200,
    cover: "img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0PST01",
    namaLokasi: "Puslaba (Pusat)",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 850,
    cover: "img/manajemen_keuangan.jpg"
  }
];

// ============================================
// DATA TRACKING PENGIRIMAN
// ============================================
var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    nim: "043212345",
    alamat: "Jl. Ciputat Raya No. 123, Tangerang Selatan",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "SKOM4101",
    total: "Rp 180.000",
    progress: 60,
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan"
      },
      {
        waktu: "2025-08-26 08:15:22",
        keterangan: "Tiba di Hub: Jakarta Selatan"
      },
      {
        waktu: "2025-08-26 10:30:45",
        keterangan: "Proses antar ke alamat tujuan"
      }
    ]
  },
  "2023005678": {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    nim: "043278901",
    alamat: "Jl. Ahmad Yani No. 45, Makassar",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "PAUD4306",
    total: "Rp 220.000",
    progress: 100,
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung"
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG"
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi"
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto"
      }
    ]
  },
  "2023009999": {
    nomorDO: "2023009999",
    nama: "Budi Santoso",
    nim: "043256789",
    alamat: "Jl. Raya ITS No. 1, Surabaya",
    status: "Diproses",
    ekspedisi: "SiCepat",
    tanggalKirim: "2025-08-27",
    paket: "ADPU4334",
    total: "Rp 175.000",
    progress: 25,
    perjalanan: [
      {
        waktu: "2025-08-27 08:00:00",
        keterangan: "Pesanan diterima, sedang diproses di gudang Puslaba"
      },
      {
        waktu: "2025-08-27 10:30:00",
        keterangan: "Dalam proses pengepakan"
      }
    ]
  }
};

// ============================================
// DATA LOKASI UNTUK FILTER (Jurnal 2 - Fasilitas Gudang)
// ============================================
var dataLokasi = [
  { kode: "0PST01", nama: "Puslaba (Pusat Pondok Cabe)" },
  { kode: "0TMP01", nama: "UPBJJ Tangerang" },
  { kode: "0JKT01", nama: "UPBJJ Jakarta" },
  { kode: "0SBY02", nama: "UPBJJ Surabaya" },
  { kode: "0MLG01", nama: "UPBJJ Malang" },
  { kode: "0UPBJJBDG", nama: "UPBJJ Bandung" }
];

// ============================================
// KONFIRMASI DATA TELAH DIMUAT (Untuk Debug)
// ============================================
console.log("✅ data.js berhasil dimuat!");
console.log("📊 dataPengguna:", dataPengguna.length, "user");
console.log("📚 dataBahanAjar:", dataBahanAjar.length, "bahan ajar");
console.log("🚚 dataTracking:", Object.keys(dataTracking).length, "DO");
console.log("📍 dataLokasi:", dataLokasi.length, "lokasi");