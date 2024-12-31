import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { Input } from './ui/input';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cart, updateQuantity, removeFromCart, totalAmount, totalItems } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleWhatsAppCheckout = () => {
    const message = cart
      .map(
        item =>
          `${item.name} - ${item.quantity} ədəd (${item.price * item.quantity} AZN)`
      )
      .join('\n');
    const totalMessage = `\nCəmi: ${totalAmount} AZN`;
    const addressMessage = deliveryAddress ? `\nÇatdırılma ünvanı: ${deliveryAddress}` : '';
    const fullMessage = encodeURIComponent(`Sifariş:\n${message}${totalMessage}${addressMessage}`);
    window.open(`https://wa.me/994506847834?text=${fullMessage}`, '_blank');
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      <div
        className={`cart-sidebar ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center dark:bg-gray-800">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-playfair font-semibold dark:text-white">Səbətim</h2>
              {totalItems > 0 && (
                <span className="bg-gold text-white text-xs px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-300"
            >
              <X className="h-5 w-5 dark:text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 dark:bg-gray-800">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-8">Səbətiniz boşdur</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 border rounded-lg p-4 dark:border-gray-700 dark:bg-gray-700"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium dark:text-white">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300">{item.price} AZN</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                        >
                          <Minus className="h-4 w-4 dark:text-white" />
                        </button>
                        <span className="dark:text-white">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                        >
                          <Plus className="h-4 w-4 dark:text-white" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors duration-300"
                    >
                      <X className="h-4 w-4 dark:text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="text-sm text-center p-2 bg-gold/10 rounded-md text-gold">
                20m üzəri alışda bakı sumqayıta çatdırılma pulsuzdur
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium dark:text-white">Cəmi:</span>
                <span className="font-semibold dark:text-white">{totalAmount} AZN</span>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium dark:text-white">
                  Çatdırılma ünvanı:
                </label>
                <Input
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Məs: Bakı şəhəri, Nizami küçəsi 5"
                />
              </div>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full btn-primary dark:bg-gold dark:text-black dark:hover:bg-gold/90"
              >
                Hamısını al
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;