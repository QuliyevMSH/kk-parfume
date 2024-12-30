import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cart, updateQuantity, removeFromCart, totalAmount, totalItems } = useCart();

  const handleWhatsAppCheckout = () => {
    const message = cart
      .map(
        item =>
          `${item.name} - ${item.quantity} ədəd (${item.price * item.quantity} AZN)`
      )
      .join('\n');
    const totalMessage = `\nCəmi: ${totalAmount} AZN`;
    const fullMessage = encodeURIComponent(`Sifariş:\n${message}${totalMessage}`);
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
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-playfair font-semibold">Səbətim</h2>
              {totalItems > 0 && (
                <span className="bg-gold text-white text-xs px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Səbət boşdur</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 border rounded-lg p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.price} AZN</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Cəmi:</span>
                <span className="font-semibold">{totalAmount} AZN</span>
              </div>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full btn-primary"
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