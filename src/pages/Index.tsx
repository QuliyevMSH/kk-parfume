import { useState } from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: "Chanel N°5",
    description: "Əfsanəvi ətir, çiçək və aldehid notaları",
    price: 250,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dior Sauvage",
    description: "Təravətli və cəzbedici kişi ətri",
    price: 200,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Tom Ford Black Orchid",
    description: "Lüks və ekzotik qadın ətri",
    price: 300,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Versace Eros",
    description: "Güclü və cazibədar kişi ətri",
    price: 180,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6f?q=80&w=1780&auto=format&fit=crop"
  }
];

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <main className="flex-1">
        <Hero />
        
        <section id="products" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Ətirlər Kolleksiyası
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Premium keyfiyyətli ətirlər kolleksiyamızdan seçim edin
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
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