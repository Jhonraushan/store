import { ShoppingCart, User, LogOut, Store } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onShowAuth: () => void;
  onShowCart: () => void;
}

export default function Header({ onNavigate, currentPage, onShowAuth, onShowCart }: HeaderProps) {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Store className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Makhana Store</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`${
                currentPage === 'home' ? 'text-emerald-600' : 'text-gray-700'
              } hover:text-emerald-600 transition-colors font-medium`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`${
                currentPage === 'products' ? 'text-emerald-600' : 'text-gray-700'
              } hover:text-emerald-600 transition-colors font-medium`}
            >
              Products
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`${
                currentPage === 'about' ? 'text-emerald-600' : 'text-gray-700'
              } hover:text-emerald-600 transition-colors font-medium`}
            >
              About
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onShowCart}
              className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 hidden sm:inline">{user.email}</span>
                <button
                  onClick={signOut}
                  className="p-2 text-gray-700 hover:text-emerald-600 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onShowAuth}
                className="flex items-center space-x-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}