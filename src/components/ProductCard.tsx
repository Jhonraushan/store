import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface ProductCardProps {
  product: Product;
  onShowAuth: () => void;
}

export default function ProductCard({ product, onShowAuth }: ProductCardProps) {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      onShowAuth();
      return;
    }
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.stock < 20 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Low Stock
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
          <span className="text-emerald-600 font-bold text-lg">${product.price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500">{product.weight}</span>
          <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
}