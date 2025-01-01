import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from './Index';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Məhsul tapılmadı</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 bg-gold text-white px-6 py-3 rounded-md"
        >
          Geri qayıt
        </button>
      </div>
    );
  }

  const handleQuantityChange = (value: string) => {
    if (!/^\d*$/.test(value)) return;
    setQuantity(parseInt(value) || 0);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        ...product,
        quantity,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 text-gold hover:text-gold/80 transition-colors"
      >
        ← Geri qayıt
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg shadow-lg"
          />
          <span className="absolute top-4 right-4 bg-gold px-4 py-2 rounded-full text-white">
            {product.gender}
          </span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-playfair font-bold dark:text-white">
            {product.name}
          </h1>
          
          <p className="text-xl font-semibold dark:text-white">
            {product.price} AZN / ml
          </p>
          
          <p className="text-gray-600 dark:text-gray-300">
            {product.details}
          </p>
          
          <div className="space-y-4">
            <label className="block text-sm font-medium dark:text-white">
              Neçə ml?
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
                className="p-2 bg-gold text-white rounded-md hover:bg-gold/80"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
                className="w-20 text-center border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 bg-gold text-white rounded-md hover:bg-gold/80"
              >
                +
              </button>
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={quantity === 0}
            className="w-full bg-gold text-white py-3 rounded-md hover:bg-gold/80 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Səbətə əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;