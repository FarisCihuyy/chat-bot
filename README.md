# README - Bot WhatsApp Toko Papi

## Deskripsi
Bot WhatsApp Toko Papi adalah solusi otomatisasi untuk mempermudah interaksi pelanggan dengan toko. Bot ini memungkinkan pelanggan mencari produk, melihat promo, mendapatkan informasi toko, dan menjawab pertanyaan umum.

---

## Fitur Utama
1. **Salam Awal** - Menyambut pelanggan dengan pesan sambutan dan daftar opsi layanan.
2. **Promo Terkini** - Menampilkan daftar promo yang tersedia.
3. **Daftar Produk** - Memberikan daftar produk yang tersedia di toko.
4. **Pencarian Produk** - Mencari produk berdasarkan kata kunci.
5. **Informasi Toko** - Menyediakan informasi lokasi, jam operasional, dan kontak toko.
6. **FAQs** - Menjawab pertanyaan umum tentang layanan toko.
7. **Panduan Bantuan** - Memberikan panduan penggunaan bot.

---

## Instalasi dan Penggunaan

### Prasyarat
- Node.js (v14 atau lebih baru)
- WhatsApp dengan QR code untuk otentikasi
- File data produk (contoh: `data.js`)

### Instalasi
1. Clone repositori ini:
   ```bash
   git clone https://github.com/FarisCihuyy/chat-bot
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd chat-bot
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```

### Konfigurasi
1. Tambahkan data produk ke dalam file `data.js`.
2. Pastikan gambar produk tersedia di direktori yang sesuai.
3. Sesuaikan informasi toko pada bagian `handleIncomingMessage` di file utama.

### Menjalankan Bot
1. Jalankan perintah berikut:
   ```bash
   node index.js
   ```
2. Scan QR code yang ditampilkan di terminal menggunakan WhatsApp Anda.
3. Bot siap digunakan.

---

## Cara Kerja
1. Bot menerima pesan dari pelanggan.
2. Bot memproses pesan berdasarkan kata kunci yang diterima.
3. Respon otomatis dikirimkan kepada pelanggan.

---

## Struktur Direktori
```
├── assets
│   └── snacksList
│       └── data.js       # Data produk
├── src
│   └── generateMessage.js # Fungsi untuk menghasilkan pesan
├── index.js              # File utama bot
├── package.json          # File konfigurasi npm
└── README.md             # Dokumentasi proyek
```

---

## Contoh Penggunaan
### Mengirim Pesan
- **Ketik:** `#Coklat`
- **Respon:** Detail produk "Coklat" beserta gambar.

### Informasi Toko
- **Ketik:** `info`
- **Respon:** Lokasi, jam operasional, dan kontak toko.

---

## Troubleshooting
1. **Bot tidak merespon:**
   - Periksa koneksi internet.
   - Pastikan format pesan sesuai panduan.

2. **Kesalahan pada gambar produk:**
   - Pastikan file gambar tersedia dan path benar.

3. **QR Code tidak muncul:**
   - Hapus folder `.wwebjs_auth` dan ulangi proses otentikasi.

---

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

## Kontributor
- **Nama Anda** - Pengembang utama

Untuk kontribusi lebih lanjut, silakan buka pull request atau kirimkan issue.

---

## Kontak
Untuk informasi lebih lanjut, hubungi:
- **Email:** service@papi.store
- **WhatsApp:** 0822-xxx-xx21

