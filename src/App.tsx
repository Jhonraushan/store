import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import CheckoutPage from './components/CheckoutPage';
import AuthModal from './components/AuthModal';
import CartSidebar from './components/CartSidebar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onShowAuth={() => setShowAuthModal(true)} />;
      case 'products':
        return <ProductsPage onShowAuth={() => setShowAuthModal(true)} />;
      case 'about':
        return <AboutPage />;
      case 'checkout':
        return <CheckoutPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onShowAuth={() => setShowAuthModal(true)} />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            onNavigate={setCurrentPage}
            currentPage={currentPage}
            onShowAuth={() => setShowAuthModal(true)}
            onShowCart={() => setShowCart(true)}
          />
          {renderPage()}
          {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
          <CartSidebar
            isOpen={showCart}
            onClose={() => setShowCart(false)}
            onCheckout={() => setCurrentPage('checkout')}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
