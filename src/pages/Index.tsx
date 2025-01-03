import { useState } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export const products = [
  {
    id: 1,
    name: "Chanel id1",
    description: "Əfsanəvi ətir, çiçək və aldehid notaları",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop",
    gender: "Qadın",
    details:
      "Chanel N°5, dünyaca məşhur Fransız parfümeriya evinin yaratdığı əfsanəvi ətrdir. Aldehid çiçək qoxusu ilə tanınan bu ətir, may gülü, jasmin və ylang-ylang kimi zərif çiçək notalarını özündə birləşdirir.",
  },
  {
    id: 2,
    name: "Dior Sauvage id2",
    description: "Təravətli və cəzbedici kişi ətri",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop",
    gender: "Kişi",
    details:
      "Dior Sauvage, təravətli və güclü bir ətirdir. Bergamot və bibər notaları ilə başlayan ətir, lavanda və vetiver notaları ilə davam edir. Amber notası ilə tamamlanır.",
  },
  {
    id: 3,
    name: "Tom Ford Black Orchid",
    description: "Lüks və ekzotik qadın ətri",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1974&auto=format&fit=crop",
    gender: "Qadın",
    details:
      "Tom Ford Black Orchid, zərif və cəlbedici bir ətirdir. Qara orkide, ətirli çiçəklər və şirin notalarla zənginləşdirilmişdir.",
  },
  {
    id: 4,
    name: "Versace Eros",
    description: "Güclü və cazibədar kişi ətri",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop",
    gender: "Kişi",
    details:
      "Versace Eros, təravətli və cəlbedici bir ətirdir. Limon, nane və şirin notalarla başlayır, ağac notaları ilə tamamlanır.",
  },
  {
    id: 5,
    name: "Gucci Bloom",
    description: "Zərif çiçək notaları",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop",
    gender: "Qadın",
    details:
      "Gucci Bloom, çiçək notaları ilə dolu bir ətirdir. Təzə çiçəklərin qoxusu ilə doludur.",
  },
  {
    id: 6,
    name: "YSL Black Opium",
    description: "Qəhvə və vanilya notaları",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop",
    gender: "Qadın",
    details:
      "YSL Black Opium, qəhvə və vanilya notaları ilə zəngin bir ətirdir. Cazibədar və cəlbedicidir.",
  },
  {
    id: 7,
    name: "Armani Code id7",
    description: "Elegantlıq və cazibədarlıq",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1974&auto=format&fit=crop",
    gender: "Kişi",
    details:
      "Armani Code, təravətli və cəlbedici bir ətirdir. Bergamot, limon və tonka fasulyası ilə zənginləşdirilmişdir.",
  },
  {
    id: 8,
    name: "Paco Rabanne id8",
    description: "Lüks və cəzbedici kişi ətri",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop",
    gender: "Unisex",
    details:
      "Paco Rabanne 1 Million, lüks və cəlbedici bir ətirdir. Qızıl notalarla zənginləşdirilmişdir.",
  },,
  {
    id: 9,
    name: "Yeniii",
    description: "Zərif çiçək notaları",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop",
    gender: "Qadın",
    details:
      "Gucci Bloom, çiçək notaları ilə dolu bir ətirdir. Təzə çiçəklərin qoxusu ilə doludur.",
  },
];

type Category = "all" | "Kişi" | "Qadın" | "Unisex";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? [...products].sort((a, b) => b.id - a.id)
      : [...products]
          .filter((product) => product.gender === selectedCategory)
          .sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main className="flex-1">
        <Hero />

        <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 dark:text-white">
                Ətirlər Kolleksiyası
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Sizin hekayənizi danışacaq qoxuları seçirik
              </p>
              <p className="text-gray-900 dark:text-gray-200 max-w-2xl mx-auto mb-8">
                Qeyd: Qiymətlər <b>1 ml</b> üzərindəndir!
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-6 py-2 rounded-full border transition-colors ${
                    selectedCategory === "all"
                      ? "bg-gold text-white border-gold"
                      : "border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:border-gold dark:hover:border-gold"
                  }`}
                >
                  Hamısı
                </button>
                <button
                  onClick={() => setSelectedCategory("Kişi")}
                  className={`px-6 py-2 rounded-full border transition-colors ${
                    selectedCategory === "Kişi"
                      ? "bg-gold text-white border-gold"
                      : "border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:border-gold dark:hover:border-gold"
                  }`}
                >
                  Kişi ətirləri
                </button>
                <button
                  onClick={() => setSelectedCategory("Qadın")}
                  className={`px-6 py-2 rounded-full border transition-colors ${
                    selectedCategory === "Qadın"
                      ? "bg-gold text-white border-gold"
                      : "border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:border-gold dark:hover:border-gold"
                  }`}
                >
                  Qadın ətirləri
                </button>
                <button
                  onClick={() => setSelectedCategory("Unisex")}
                  className={`px-6 py-2 rounded-full border transition-colors ${
                    selectedCategory === "Unisex"
                      ? "bg-gold text-white border-gold"
                      : "border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:border-gold dark:hover:border-gold"
                  }`}
                >
                  Unisex ətirlər
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
