import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartSidebar({ isOpen, onClose, onCheckout }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const { user } = useAuth();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    onCheckout();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-center">Your cart is empty</p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">{item.product.weight}</p>
                    <p className="text-emerald-600 font-bold mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <div className="flex items-center space-x-2 bg-white rounded-lg border">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={!user}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {user ? 'Proceed to Checkout' : 'Sign In to Checkout'}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}