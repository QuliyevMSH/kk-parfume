import { X, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  tempQuantities: { [key: number]: string };
  setTempQuantities: React.Dispatch<React.SetStateAction<{ [key: number]: string }>>;
}

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  updateQuantity,
  removeFromCart,
  tempQuantities,
  setTempQuantities,
}: CartItemProps) => {
  const handleQuantityChange = (value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    setTempQuantities(prev => ({ ...prev, [id]: value }));
    
    if (value === '') return;
    
    const newQuantity = parseInt(value) || 0;
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const getDisplayQuantity = () => {
    return id in tempQuantities ? tempQuantities[id] : quantity.toString();
  };

  const calculateItemTotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    updateQuantity(id, newQuantity);
    setTempQuantities(prev => ({ ...prev, [id]: newQuantity.toString() }));
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
      setTempQuantities(prev => ({ ...prev, [id]: newQuantity.toString() }));
    }
  };

  return (
    <div className="flex items-center space-x-4 border rounded-lg p-4 dark:border-gray-700 dark:bg-gray-700">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-sm font-medium dark:text-white">
          {name}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-300">
            {price} AZN
          </p>
          <p className="text-xs font-semibold text-gold">
            Cəmi: {calculateItemTotal(price, quantity)} AZN
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-2">
          <p className="text-xs text-gray-500 dark:text-gray-300">
            Neçə ml?
          </p>
          <button
            onClick={handleDecrement}
            className="p-1 bg-gold dark:hover:bg-gold-100 rounded"
          >
            <Minus className="h-4 w-4 dark:text-white" />
          </button>
          <input
            type="text"
            value={getDisplayQuantity()}
            onChange={(e) => handleQuantityChange(e.target.value)}
            className="w-12 text-center text-sm dark:bg-gray-600 dark:text-white rounded border dark:border-gray-500"
          />
          <button
            onClick={handleIncrement}
            className="p-1 bg-gold dark:hover:bg-gold-100 rounded"
          >
            <Plus className="h-4 w-4 dark:text-white" />
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="p-2 bg-gold hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors duration-300"
      >
        <X className="h-4 w-4 dark:text-white" />
      </button>
    </div>
  );
};

export default CartItem;