const createMessage = (products, headerChat, req) => {
  if (products.length === 0) {
    return "Saat ini tidak ada produk dengan diskon. Tetap pantau untuk promo menarik lainnya!";
  }

  let msg = headerChat;

  const formatProduct = (product, index) => {
    const { name, price, discountPrice, rating, description, stock } = product;
    const isDiscount = discountPrice
      ? `~_Rp ${price}_~ *(Diskon: Rp ${discountPrice})*`
      : `Rp ${price}`;
    return `  *${index + 1}. ${name}*
     > Harga: ${isDiscount}
     > Rating: ⭐ ${rating}
     > Deskripsi: ${description}
     > Tersedia: ${stock} Stok\n\n`;
  };

  if (req === "produk") {
    const categories = [...new Set(products.map((product) => product.category))];
    categories.forEach((category) => {
      const categoryProducts = products.filter((product) => product.category === category);
      msg += `*${category}*\n`;
      categoryProducts.forEach((product, i) => {
        msg += formatProduct(product, i);
      });
    });
    msg += `Ingin melihat detail produk?\nSilahkan ketik nama produk yang Anda inginkan, kami akan segera membantu Anda!\nContoh: _#Chocolatos_`;
  } else if (req === "promo") {
    products.forEach((product, i) => {
      const { name, price, discountPrice, description } = product;
      msg += `\n ${i + 1}. *${name}* - _Rp ~${price}~_ ➡️ *Rp ${discountPrice}*`;
      msg += `\n     > _${description}_`;
    });
    msg += "\n \n_Ketik *#namaproduk* untuk melihat detail produk_\nKami tunggu pesanan Anda! 💚";
  }

  return msg;
};

const handleMessage = (products, req) => {
  let headerChat = "";
  if (req === "promo") {
    const discountProducts = products.filter((product) => product.discountPrice !== null);
    headerChat = "🎉🎊 *Promo Spesial Hari Ini!* 🎊🎉\n\nKami punya promo menarik untuk Anda:";
    return createMessage(discountProducts, headerChat, req);
  } else if (req === "produk") {
    headerChat = "🍿 Berikut adalah pilihan produk yang tersedia di *Warkop Papi*! 🍪\n\n";
    return createMessage(products, headerChat, req);
  }
};

const handleProductsDetails = (product) => {
  const { name, description, price, discountPrice } = product;
  const isDiscount = discountPrice ? `~_Rp ${price}_~ *Rp ${discountPrice}*` : `Rp ${price}`;
  return `📦 *${name}*\n💬 ${description}\n💲 Harga: ${isDiscount}`;
};

module.exports = { handleMessage, handleProductsDetails };
