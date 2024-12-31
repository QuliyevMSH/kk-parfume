import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      description,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-playfair font-semibold dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold dark:text-white">{price} AZN</span>
          <button 
            onClick={handleAddToCart} 
            className="bg-transparent border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-md 
                     transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
                     font-medium"
          >
            Səbətə əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;