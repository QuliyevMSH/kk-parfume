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
    <div className="product-card">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-playfair font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">{price} AZN</span>
          <button onClick={handleAddToCart} className="btn-secondary">
            Səbətə əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;