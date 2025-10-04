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
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-200/50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
              <Store className="h-7 w-7 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Makhana Store
            </span>
          </div>

          <nav className="hidden md:flex space-x-2">
            {[
              { page: 'home', label: 'Home' },
              { page: 'products', label: 'Products' },
              { page: 'about', label: 'About' }
            ].map(({ page, label }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`relative px-5 py-2 font-semibold transition-all duration-300 rounded-xl ${
                  currentPage === page
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {label}
                {currentPage === page && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={onShowCart}
              className="relative p-3 text-gray-700 hover:text-emerald-600 transition-all hover:scale-110 hover:bg-emerald-50 rounded-xl group"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-scale-in shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-2">
                <span className="text-sm font-medium text-gray-700 hidden sm:inline">{user.email}</span>
                <button
                  onClick={signOut}
                  className="p-2 text-gray-700 hover:text-red-600 transition-all hover:scale-110 hover:bg-red-50 rounded-lg"
                  title="Sign Out"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onShowAuth}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
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