import { ArrowRight, Package, Truck, Shield, Leaf } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onShowAuth: () => void;
}

export default function HomePage({ onNavigate, onShowAuth }: HomePageProps) {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-slide-up">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                Premium Makhana
              </h1>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl mb-10 text-emerald-50 max-w-3xl mx-auto leading-relaxed">
                Discover the finest quality fox nuts, packed with nutrition and flavor.
                A healthy snack choice for the whole family.
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => onNavigate('products')}
                className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3 group pulse-glow"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: '100% Natural', desc: 'No artificial colors or preservatives', delay: '0s' },
              { icon: Package, title: 'Premium Quality', desc: 'Carefully selected and processed', delay: '0.1s' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Quick shipping to your doorstep', delay: '0.2s' },
              { icon: Shield, title: 'Secure Payment', desc: 'Safe and encrypted transactions', delay: '0.3s' }
            ].map(({ icon: Icon, title, desc, delay }, idx) => (
              <div
                key={idx}
                className="text-center group hover-lift animate-slide-up bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100"
                style={{ animationDelay: delay }}
              >
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold gradient-text mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Our most popular makhana varieties</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard product={product} onShowAuth={onShowAuth} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-up">
            <button
              onClick={() => onNavigate('products')}
              className="text-emerald-600 font-bold text-lg hover:text-emerald-700 inline-flex items-center space-x-2 group px-8 py-3 rounded-full hover:bg-emerald-50 transition-all"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}