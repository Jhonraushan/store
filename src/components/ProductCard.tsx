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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-50">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {product.stock < 20 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            Low Stock
          </div>
        )}

        {product.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-emerald-600 transition-colors">{product.name}</h3>
          <span className="text-emerald-600 font-bold text-xl bg-emerald-50 px-2 py-1 rounded-lg">${product.price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">{product.weight}</span>
          <span className="text-xs font-semibold bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200">
            {product.category}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold shadow-md hover:shadow-lg group/btn"
        >
          <ShoppingCart className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
          <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
}