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
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Premium Makhana</h1>
            <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
              Discover the finest quality fox nuts, packed with nutrition and flavor.
              A healthy snack choice for the whole family.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600 text-sm">No artificial colors or preservatives</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Carefully selected and processed</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick shipping to your doorstep</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">Safe and encrypted transactions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Our most popular makhana varieties</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onShowAuth={onShowAuth} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}