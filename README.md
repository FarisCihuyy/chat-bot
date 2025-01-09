# README - Bot WhatsApp Toko Papi

## Deskripsi
Bot WhatsApp Toko Papi adalah solusi otomatisasi untuk mempermudah interaksi pelanggan dengan toko. Bot ini memungkinkan pelanggan mencari produk, melihat promo, mendapatkan informasi toko, dan menjawab pertanyaan umum.

---

## Fitur Utama
1. **Salam Awal**
   - Ketik: `Halo`, `Hi`, `Hello`, `Permisi`, atau `Assalamualaikum`
   - Respon: Menampilkan pesan sambutan dengan opsi yang tersedia di Toko Papi.

2. **Promo Terkini**
   - Ketik: `promo`
   - Respon: Daftar promo terkini di Toko Papi.

3. **Daftar Produk**
   - Ketik: `produk`
   - Respon: Daftar lengkap produk yang tersedia di Toko Papi.

4. **Pencarian Produk**
   - Ketik: `#NamaProduk` (contoh: `#Coklat`)
   - Respon: Informasi detail tentang produk yang dicari, termasuk gambar dan deskripsi.

5. **Informasi Toko**
   - Ketik: `info`
   - Respon: Informasi lokasi, jam operasional, dan kontak Toko Papi.

6. **Pertanyaan Umum (FAQs)**
   - Ketik: `faqs`
   - Respon: Jawaban atas pertanyaan umum tentang Toko Papi.

7. **Panduan Bantuan**
   - Ketik: `!help`
   - Respon: Panduan penggunaan bot WhatsApp.

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

## Kontributor
- **Faris Sulianto** - Pengembang utama
- Ahmad Pandu Prastian (2313030013) 
- Akbar Eka Saputra 
- Diva Nur Huda  
- Faiqa Wafa Fiqh
- Tri Vera Wahyuningsih

Untuk kontribusi lebih lanjut, silakan buka pull request atau kirimkan issue.

---

## Kontak
Untuk informasi lebih lanjut, hubungi:
- **Email:** service@papi.store
- **WhatsApp:** 0822-xxx-xx21

