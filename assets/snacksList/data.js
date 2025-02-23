const products = [
  {
    id: "P001",
    name: "Nabati Siip Snack Gigitan Keju",
    price: "5.000",
    discountPrice: null,
    stock: 50,
    category: "Makanan",
    weight: "30g",
    description: "Snack gigitan kecil yang lezat dengan rasa keju.",
    ingredients: ["Tepung Terigu", "Bubuk Keju", "Minyak Kelapa Sawit"],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/siip.png",
  },
  {
    id: "P002",
    name: "Boyki Snack Jadul",
    price: "2.000",
    discountPrice: "1.500",
    stock: 5,
    category: "Makanan",
    weight: "20g",
    description: "Snack tradisional dengan rasa nostalgia.",
    ingredients: ["Singkong", "Gula", "Minyak Kelapa Sawit"],
    rating: 4.0,
    available: true,
    image: "./assets/produkImages/boyki.png",
  },
  {
    id: "P003",
    name: "Khong Guan Biskuit Superco",
    price: "7.000",
    discountPrice: null,
    stock: 100,
    category: "Makanan",
    weight: "200g",
    description: "Biskuit klasik yang sempurna untuk teman minum teh.",
    ingredients: ["Tepung Terigu", "Gula", "Mentega"],
    rating: 4.3,
    available: true,
    image: "./assets/produkImages/superco.png",
  },
  {
    id: "P004",
    name: "Momogi Stick Jagung Bakar",
    price: "12.000",
    discountPrice: null,
    stock: 80,
    category: "Makanan",
    weight: "50g",
    description: "Stik renyah rasa jagung bakar yang manis.",
    ingredients: ["Tepung Jagung", "Gula", "Garam"],
    rating: 4.2,
    available: true,
    image: "./assets/produkImages/momogi.png",
  },
  {
    id: "P005",
    name: "Fanta Original",
    price: "7.000",
    discountPrice: "6.500",
    stock: 150,
    category: "Minuman",
    weight: "350ml",
    description: "Minuman soda rasa jeruk yang menyegarkan.",
    ingredients: ["Air Berkarbonasi", "Gula", "Perisa Jeruk"],
    rating: 4.6,
    available: true,
    image: "./assets/produkImages/fanta.png",
  },
  {
    id: "P006",
    name: "Nabati Big Rolls Stick",
    price: "13.000",
    discountPrice: "11.000",
    stock: 100,
    category: "Makanan",
    weight: "60g",
    description: "Wafer gulung renyah dengan isi krim yang lembut.",
    ingredients: ["Tepung Terigu", "Susu Bubuk", "Gula"],
    rating: 4.7,
    available: true,
    image: "./assets/produkImages/bigrolls.png",
  },
  {
    id: "P007",
    name: "Teh Javana",
    price: "5.000",
    discountPrice: null,
    stock: 300,
    category: "Minuman",
    weight: "350ml",
    description: "Teh manis dingin dalam botol praktis.",
    ingredients: ["Air", "Gula", "Ekstrak Teh"],
    rating: 4.4,
    available: true,
    image: "./assets/produkImages/tehjavana.png",
  },
  {
    id: "P008",
    name: "Beng Beng",
    price: "15.000",
    discountPrice: null,
    stock: 200,
    category: "Makanan",
    weight: "45g",
    description: "Cokelat renyah dengan isi karamel.",
    ingredients: ["Cokelat", "Karamel", "Beras Renyah"],
    rating: 4.8,
    available: true,
    image: "./assets/produkImages/bengbeng.png",
  },
  {
    id: "P009",
    name: "Chiki Balls Keju",
    price: "8.000",
    discountPrice: null,
    stock: 200,
    category: "Makanan",
    weight: "50g",
    description: "Bola snack renyah rasa keju.",
    ingredients: ["Tepung Jagung", "Bubuk Keju", "Garam"],
    rating: 4.1,
    available: true,
    image: "./assets/produkImages/chikiballs.png",
  },
  {
    id: "P010",
    name: "Golda Coffee",
    price: "10.000",
    discountPrice: "9.000",
    stock: 120,
    category: "Minuman",
    weight: "200ml",
    description: "Kopi dingin yang kaya rasa dan lembut.",
    ingredients: ["Air", "Kopi", "Susu"],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/golda.png",
  },
  {
    id: "P011",
    name: "Le Mineral",
    price: "3.500",
    discountPrice: null,
    stock: 250,
    category: "Minuman",
    weight: "600ml",
    description: "Air mineral segar dan murni.",
    ingredients: ["Air Mineral"],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/lemineral.png",
  },
  {
    id: "P012",
    name: "Eyeglass Crispy Chocolate",
    price: "20.000",
    discountPrice: null,
    stock: 50,
    category: "Makanan",
    weight: "100g",
    description: "Snack cokelat renyah dengan bentuk unik.",
    ingredients: ["Cokelat", "Gula", "Beras Renyah"],
    rating: 4.6,
    available: true,
    image: "./assets/produkImages/eyeglasscrispy.png",
  },
  {
    id: "P013",
    name: "Twistko Rasa Jagung Bakar",
    price: "7.000",
    discountPrice: null,
    stock: 180,
    category: "Makanan",
    weight: "35g",
    description: "Stik renyah rasa jagung bakar.",
    ingredients: ["Tepung Jagung", "Gula", "Garam"],
    rating: 4.3,
    available: true,
    image: "./assets/produkImages/twistko.png",
  },
  {
    id: "P014",
    name: "Permen Yupi Love",
    price: "4.500",
    discountPrice: null,
    stock: 300,
    category: "Makanan",
    weight: "20g",
    description: "Permen kenyal rasa buah yang manis.",
    ingredients: ["Sirup Glukosa", "Gula", "Perisa Buah"],
    rating: 4.7,
    available: true,
    image: "./assets/produkImages/yupi.png",
  },
  {
    id: "P015",
    name: "Dilan Chocolate",
    price: "5.000",
    discountPrice: "4.500",
    stock: 150,
    category: "Makanan",
    weight: "50g",
    description: "Cokelat susu dengan tekstur lembut.",
    ingredients: ["Kakao", "Susu", "Gula"],
    rating: 4.2,
    available: true,
    image: "./assets/produkImages/dilan.png",
  },
  {
    id: "P016",
    name: "Chocolatos",
    price: "12.000",
    discountPrice: "11.000",
    stock: 150,
    category: "Makanan",
    weight: "40g",
    description: "Stik cokelat yang kaya rasa.",
    ingredients: ["Kakao", "Gula", "Minyak Kelapa Sawit"],
    rating: 4.8,
    available: true,
    image: "./assets/produkImages/chocolatos.png",
  },
  {
    id: "P017",
    name: "Teh Kotak",
    price: "5.000",
    discountPrice: "4.500",
    stock: 200,
    category: "Minuman",
    weight: "300ml",
    description: "Teh dalam kotak praktis dengan rasa alami.",
    ingredients: ["Air", "Ekstrak Teh", "Gula"],
    rating: 4.3,
    available: true,
    image: "./assets/produkImages/tehkotak.png",
  },
  {
    id: "P018",
    name: "Teh Pucuk",
    price: "4.000",
    discountPrice: null,
    stock: 200,
    category: "Minuman",
    weight: "350ml",
    description:
      "Minuman teh yang dibuat dari daun teh pilihan yang berkualitas dengan gula yang lebih sedikit.",
    ingredients: ["Air", "teh melati", "Gula", "perisa identik alami bunga melati"],
    rating: 4.3,
    available: true,
    image: "./assets/produkImages/tehpucuk.png",
  },
  {
    id: "P019",
    name: "Superstar Snaps",
    price: "8.000",
    discountPrice: null,
    stock: 200,
    category: "Makanan",
    weight: null,
    description:
      "Superstar triple chocolate isi 6, wafer rasa cokelat. Chocolate wafer, chocolate cream, chocolate coated.",
    ingredients: [
      "Tepung trigu",
      "gula",
      "lemak nabati",
      "whey",
      "kokoa bubuk",
      "pengembang",
      "pengemulsi",
      "pewarna makanan caramel",
    ],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/superstar.png",
  },
  {
    id: "P020",
    name: "Teh Gelas",
    price: "2.500",
    discountPrice: null,
    stock: 200,
    category: "Minuman",
    weight: "350ml",
    description:
      "Teh gelas dibuat dari seduhan daun teh berkualitas terbaik yang dipadukan dengan penggunaan gula asli, dikemas menggunakan proses berteknologi tinggi PET Aseptic Cold Filling technology dan ultra high temperature, memastikan mutu produk tetap higienis.",
    ingredients: ["Air", "gula", "daun teh (4%)", "perisa identik alami teh"],
    rating: 4.4,
    available: true,
    image: "./assets/produkImages/tehgelas.png",
  },
  {
    id: "P021",
    name: "Floridina",
    price: "5.000",
    discountPrice: null,
    stock: 200,
    category: "Minuman",
    weight: "350ml",
    description:
      "Floridina minuman rasa jeruk dengan bulir utuh jeruk asli yang mengandung vitamin C. Terbuat dari jeruk floridina berkualitas.",
    ingredients: [
      "Air",
      "gula",
      "bulir jeruk (4%)",
      "konsentrat jeruk (22%)",
      "perisa jeruk",
      "vitamin C",
      "pewarna natural",
    ],
    rating: 4.6,
    available: true,
    image: "./assets/produkImages/floridina.png",
  },
  {
    id: "P022",
    name: "Coca-Cola Soft Drink",
    price: "5.000",
    discountPrice: null,
    stock: 200,
    category: "Minuman",
    weight: "390ml",
    description: "Coca cola minuman berkarbonasi rasa cola, kemasan pas harga pas.",
    ingredients: [
      "Air berkarbonasi",
      "gula",
      "pewarna karamel (kelas IV)",
      "konsentrat kola",
      "pengatur keasaman (asam fosfat)",
      "kafein",
      "Mengandung kafein 34mg/saji",
    ],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/cocacola.png",
  },
  {
    id: "P023",
    name: "Larutan Cap Kaki Tiga",
    price: "9.000",
    discountPrice: null,
    stock: 200,
    category: "Minuman",
    weight: "500ml",
    description:
      "Larutan cap kaki tiga anak membantu meredakan panas dalam, sariawan, tenggorokan kering dan membantu menyegarkan badan.",
    ingredients: ["Gypsum fibrosum 450mg", "calcitum 225mg", "air sampai dengan 500mL"],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/capkakitiga.png",
  },
  {
    id: "P024",
    name: "Sania Minyak Goreng Refill",
    price: "20.000",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "1000ml",
    description:
      "Sania adalah minyak goreng premium yang diproduksi dengan beberapa tahap proses pemurnian dan penyaringan.",
    ingredients: ["Minyak kelapa sawit", "vitamin A"],
    rating: 4.6,
    available: true,
    image: "./assets/produkImages/sania.png",
  },
  {
    id: "P025",
    name: "Mama Lemon Cairan Pencuci Piring Ekstra Clean Jeruk Nipis",
    price: "10.000",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "680ml",
    description: "Mama lemon cairan pencuci piring & gelas extra clean jeruk nipis reffill pouch.",
    ingredients: ["Bahan aktif : 21%", "LAS Na", "SLES", "SLS", "CAPB"],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/mamalemon.png",
  },
  {
    id: "P026",
    name: "Sania Beras Premium",
    price: "78.000",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "5kg",
    description:
      "Beras pilihan yang diproses dan dikemas secara modern sehingga kulaitas dan kandungan nutrisi pada beras terjamin.",
    ingredients: ["beras"],
    rating: 4.7,
    available: true,
    image: "./assets/produkImages/beras.png",
  },
  {
    id: "P027",
    name: "Gulaku Gula Tebu (Kuning)",
    price: "18.000",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "1kg",
    description:
      "Gulaku Tebu Kuning merupakan produk gula tebu yang diproses dengan standar mutu yang tinggi sehingga menghasilkan gula yang murni, manis, bersih, dan alami.Gulaku Tebu memiliki aroma karameldan memiliki rasa leih manis dibanding gula pasir putih.",
    ingredients: ["Tebu Kuning"],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/gulaku.png",
  },
  {
    id: "P028",
    name: "Ajinomoto Penyedap Rasa Masako Ayam isi 6",
    price: "3.500",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "8.5g",
    description:
      "Bumbu kaldu spesial yang dibuat dengan daging ayam dan sapi asli pilihan, dengan ekstrak daging lebih mantap dan rasa asin, gurih, dan bumbu yang lebih seimbang. Diolah dengan teknologi tinggi dan higienis hingga menghasilkan bumbu kaldu yang berkualitas untuk kaldu buatan dirumah.",
    ingredients: [
      "Garam",
      "gula",
      "penguat rasa (mononatrium glutamat, dinatrium inosinat dan guanilat)",
      "ekstrak daging ayam",
      "lemak ayam",
      "bawang putih",
      "bawang merah",
      "pengatur keasaman (trinatrium sitrat)",
      "ekstrak protein kedelai",
      "merica",
    ],
    rating: 4.6,
    available: true,
    image: "./assets/produkImages/masako.png",
  },
  {
    id: "P029",
    name: "Bango Kecap Manis",
    price: "21.500",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "520ml",
    description:
      "Hanya bahan pilihan dari alam ciptakan kecap berkualitas. 4 bahan alami pilihan yaitu : kedelai hitam, gula, garam dan air.",
    ingredients: ["Gula merah", "sari kacang kedelai hitam", "air", "garam"],
    rating: 4.7,
    available: true,
    image: "./assets/produkImages/kecapbango.png",
  },
  {
    id: "P030",
    name: "Rinso Deterjen Powder + Molto Rose Fresh",
    price: "10.000",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "400g",
    description:
      "Menghilangkan noda dan kesegarannya tahan lama. Diformulasi dengan memadukan kekuatan dari Rinso dan Molto Ultra dengan formula khusus penghilang noda yang mampu menghilangkan noda 2 kali lebih efektif dibandingkan deterjen bubuk biasa.",
    ingredients: [
      "22% Natrium Alkilbenzena Sulfonate",
      "10% Natrium Fosfat",
      "30% Natrium Karbonat",
    ],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/rinso.png",
  },
  {
    id: "P031",
    name: "Lifebuoy Sabun Mandi",
    price: "7.000",
    discountPrice: null,
    stock: 200,
    category: "Kebutuhan Rumah",
    weight: "110g",
    description: "Lifebuoy sabun mandi ts total 10.",
    ingredients: [
      "Sodium palmate",
      "water",
      "sodium palm kernelate",
      "glycerin",
      "perfume",
      "sodium lauryl sulfate",
      "sodium chloride",
      "sodium carbonate",
      "triclicarban",
      "pentasodium pentetate",
      "terpineol",
      "tetrasodium edta",
      "tetrasodium etidronate",
      "thymol",
      "vp/va copolymer",
      "sodium hydroxide",
      "trisodium nta",
      "magnesium nitrate",
      "silver oxide",
      "lauric acid",
      "methylcloroisothiazolinone",
      "magnesium chloride",
      "methylisothiazolinone",
      "CI 11680",
      "CI12490",
    ],
    rating: 4.5,
    available: true,
    image: "./assets/produkImages/lifebuoy.png",
  },
];

module.exports = products;
