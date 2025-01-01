import { X } from "lucide-react";

interface CartHeaderProps {
  onClose: () => void;
  totalItems: number;
}

const CartHeader = ({ onClose, totalItems }: CartHeaderProps) => {
  return (
    <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-playfair font-semibold dark:text-white">
          Səbətim
        </h2>
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
  );
};

export default CartHeader;