import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "./Index";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
        <p>Məhsul tapılmadı</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-gold text-white px-6 py-3 rounded-md dark:bg-gold dark:text-black"
        >
          Geri qayıt
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
    });
    setIsCartOpen(true);
  };

  const otherProducts = products.filter((p) => p.id !== Number(id));

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main
        className="flex-1 container mx-auto px-4 py-8 mt-8"
        style={{ marginTop: "70px" }}
      >
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-gold hover:text-gold/80 transition-colors dark:text-gold dark:hover:text-gold/60"
        >
          ← Geri qayıt
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg dark:shadow-gray-800"
            />
            <span className="absolute top-4 right-4 bg-gold px-4 py-2 rounded-full text-white">
              {product.gender === "Kişi"
                ? "Kişi üçün ətir"
                : product.gender === "Qadın"
                ? "Qadın üçün ətir"
                : "Unisex ətir"}
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-playfair font-bold dark:text-white">
              {product.name}
            </h1>

            <p className="text-xl font-semibold dark:text-white">
              {product.price} AZN
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              {product.details}
            </p>

            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-white py-3 rounded-md hover:bg-gold/80 transition-colors
                       dark:bg-gold dark:text-black dark:hover:bg-gold/90"
            >
              Səbətə əlavə et
            </button>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-playfair font-bold mb-8 dark:text-white">
            Digər ətirlər
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-gold px-3 py-1 rounded-full text-white text-sm">
                    {product.gender}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {product.price} AZN
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
