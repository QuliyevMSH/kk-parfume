import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartItem from "./cart/CartItem";
import CartHeader from "./cart/CartHeader";
import CartFooter from "./cart/CartFooter";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cart, updateQuantity, removeFromCart, totalAmount, totalItems } =
    useCart();
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [tempQuantities, setTempQuantities] = useState<{[key: number]: string}>({});

  const handleWhatsAppCheckout = () => {
    const message = cart
      .map(
        (item) =>
          `*${item.name}* - ${item.quantity} ml (${
            item.price * item.quantity
          } AZN)`
      )
      .join("\n");
    const totalMessage = `\nCəmi: *${totalAmount}* AZN`;
    const addressMessage = deliveryAddress
      ? `\nÇatdırılma ünvanı: *${deliveryAddress}*`
      : "";
    const fullMessage = encodeURIComponent(
      `*Sifariş:*\n${message}${totalMessage}${addressMessage}`
    );
    window.open(`https://wa.me/994506847834?text=${fullMessage}`, "_blank");
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      <div
        className={`cart-sidebar ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <CartHeader onClose={onClose} totalItems={totalItems} />

          <div
            className="flex-1 overflow-y-auto p-4 dark:bg-gray-800"
            style={{
              overflowY: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
                Səbətiniz boşdur
              </p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                    tempQuantities={tempQuantities}
                    setTempQuantities={setTempQuantities}
                  />
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <CartFooter
              totalAmount={totalAmount}
              deliveryAddress={deliveryAddress}
              setDeliveryAddress={setDeliveryAddress}
              handleWhatsAppCheckout={handleWhatsAppCheckout}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;