const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const products = require("./assets/snacksList/data.js");
const { handleMessage, handleProductsDetails } = require("./src/generateMessage.js");
const Fuse = require("fuse.js");

// Pengaturan Fuse.js untuk pencarian produk
const options = {
  keys: ["name"],
  threshold: 0.2,
  distance: 100,
};
const fuse = new Fuse(products, options);

// Inisialisasi client WhatsApp
const client = new Client({
  authStrategy: new LocalAuth(),
});

// Fungsi untuk pencarian produk
const searchProduk = (query) => {
  const results = fuse.search(query);
  return results.length ? results.map((result) => result.item) : null;
};

// Fungsi pengiriman pesan
const sendMessage = async (to, message) => {
  try {
    await client.sendMessage(to, message);
  } catch (error) {
    console.error(`Gagal mengirim pesan ke ${to}:`, error.message);
  }
};

// Fungsi penanganan pesan masuk
const handleIncomingMessage = async (message) => {
  const msg = message.body.toLowerCase().trim();

  try {
    // Salam awal
    if (["halo", "hi", "hello", "permisi", "assalamualaikum"].includes(msg)) {
      await sendMessage(
        message.from,
        `Halo! ✨ Selamat datang di *Toko Papi* 🏪\nKami sangat senang bisa membantu kebutuhan harian Anda! Pilih salah satu opsi berikut:\n\n🌟 *Promo* Hari Ini\n📋 Daftar *produk*\n🔎 Cari: *_#NamaProduk_*\n📍 *Info* toko\n❓ *FAQs*\n\n📌 _Cukup ketik teks bercetak tebal sesuai pilihan Anda._ 😊`
      );
    }
    // Promo atau daftar produk
    else if (["promo", "produk"].includes(msg)) {
      const response = handleMessage(products, msg);
      await sendMessage(message.from, response);
    }
    // Pencarian produk berdasarkan query
    else if (msg.startsWith("#")) {
      const query = msg.slice(1).trim();
      const results = searchProduk(query);

      if (results.length > 0) {
        for (const result of results) {
          const caption = handleProductsDetails(result);
          const media = MessageMedia.fromFilePath(result.image);
          await client.sendMessage(message.from, media, { caption });
        }
      } else {
        await sendMessage(message.from, "❌ Maaf, produk yang Anda cari tidak tersedia.");
      }
    }
    // Informasi toko
    else if (msg === "info") {
      await sendMessage(
        message.from,
        `📍 *Informasi Toko Papi*\n➡️ *Lokasi*\n      Alamat: Perumahan Griya Mlati Indah blok A No.22, Kota Kediri\n      Map   : https://maps.app.goo.gl/iWu5SYUo36FsubdA8\n➡️ *Jam Operasional*\n      Setiap Hari: 07:00 - 00:00\n➡️ *Kontak Customer Service*\n      📞 0822-xxx-xx21\n      service@papi.store`
      );
    }
    // FAQs
    else if (msg === "faqs") {
      await sendMessage(
        message.from,
        `*Q: Apa saja produk yang dijual di Toko Papi?*
A: _Kami menjual berbagai makanan ringan, munuman, dan kebutuhan pokok lainnya_.\n
*Q: Bagaimana cara mengetahui informasi detail produk?*
A: _Anda dapat mengirim pesan *#namaproduk* ke kami_.\n
*Q: Bagaimana cara memesan di Toko Papi?*
A: _Anda bisa memesan langsung melalui kami_.\n
*Q: Metode pembayaran apa yang tersedia?*
A: _Kami menerima pembayaran melalui e-wallet(GoPay dan Dana) dan COD_.\n
*Q: Apakah saya dapat membatalkan pesanan?*
A _Pesanan dapat dibatalkan selama belum diproses. Segera hubungi CS kami jika ingin membatalkan_.\n
*Q: Apakah Toko Papi menyediakan layanan pengiriman?*
A: _Kami hanya melayani pengiriman di sekitar lokasi toko saja_.\n
*Q: Dimana lokasi Toko Papi?*
A: _Perumahan Griya Mlati Indah blok A No.22, Kediri_.\n
*Q: Bagaimana cara menghubungi Toko Papi?*
A: _Anda dapat menghubungi Whatsapp kami di 0812-xxxx-xx28_.`
      );
    }
    // Bantuan
    else if (msg === "!help") {
      await sendMessage(
        message.from,
        `🛠️ *Panduan Penggunaan Bot*\n\n➡️ *promo* - Menampilkan promo terkini\n➡️ *produk* - Menampilkan daftar produk\n➡️ *#NamaProduk* - Mencari produk\n➡️ *info* - Informasi tentang toko\n➡️ *faqs* - Jawaban pertanyaan umum`
      );
    }
    // Respons default
    else {
      await sendMessage(
        message.from,
        "Maaf, saya tidak mengerti pesan Anda. Ketik *!help* untuk melihat daftar perintah yang tersedia."
      );
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    await sendMessage(
      message.from,
      "Terjadi kesalahan saat memproses permintaan Anda. Coba lagi nanti."
    );
  }
};

// Event handler untuk QR Code
client.on("qr", (qr) => {
  console.log("Scan QR ini menggunakan WhatsApp:");
  qrcode.generate(qr, { small: true });
});

// Event handler ketika bot siap
client.on("ready", () => {
  console.log("Bot WhatsApp siap digunakan!");
});

// Event handler untuk pesan masuk
client.on("message", handleIncomingMessage);

// Inisialisasi client
client.initialize();
