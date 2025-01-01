import { Input } from "../ui/input";

interface CartFooterProps {
  totalAmount: number;
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  handleWhatsAppCheckout: () => void;
}

const CartFooter = ({
  totalAmount,
  deliveryAddress,
  setDeliveryAddress,
  handleWhatsAppCheckout,
}: CartFooterProps) => {
  return (
    <div className="border-t p-4 space-y-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="text-sm text-center p-2 bg-gold/10 rounded-md text-gold">
        20 AZN üzəri alışda Bakı və Sumqayıta çatdırılma pulsuzdur !
      </div>
      <div className="flex justify-between items-center">
        <span className="font-medium dark:text-white">Cəmi:</span>
        <span className="font-semibold dark:text-white">
          {totalAmount} AZN
        </span>
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
  );
};

export default CartFooter;