import { Heart, Leaf, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Makhana Store</h1>
          <p className="text-xl text-emerald-50">
            Your trusted source for premium quality fox nuts since 2020
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Makhana Store began with a simple mission: to bring the finest quality
                fox nuts to health-conscious consumers worldwide. What started as a small family business
                has grown into a trusted brand known for quality and innovation.
              </p>
              <p className="text-gray-600 mb-4">
                We work directly with farmers in the heart of makhana production regions, ensuring fair
                trade practices and the highest quality standards. Every batch is carefully selected,
                processed, and packaged to maintain freshness and nutritional value.
              </p>
              <p className="text-gray-600">
                Today, we offer a diverse range of makhana products, from traditional plain varieties
                to exciting flavored options, all crafted with the same commitment to quality that
                started our journey.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Makhana Production"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">100% Natural</h3>
              <p className="text-gray-600 text-sm">
                No artificial additives, colors, or preservatives. Just pure, natural goodness.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality checks ensure only the best fox nuts reach your table.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Fair Trade</h3>
              <p className="text-gray-600 text-sm">
                We support local farmers with fair prices and sustainable practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Health First</h3>
              <p className="text-gray-600 text-sm">
                Rich in protein, fiber, and nutrients - perfect for a healthy lifestyle.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Makhana?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Nutritional Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>High in protein and fiber</li>
                  <li>Low in calories and fat</li>
                  <li>Rich in antioxidants</li>
                  <li>Good source of calcium and magnesium</li>
                  <li>Gluten-free and diabetic-friendly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Perfect For</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Healthy snacking anytime</li>
                  <li>Weight management programs</li>
                  <li>Pre and post-workout nutrition</li>
                  <li>Kids lunchboxes</li>
                  <li>Festive occasions and gifting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-emerald-50 mb-6">
            Experience the perfect blend of taste, health, and quality with our premium makhana products.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">10,000+</div>
              <div className="text-emerald-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-emerald-100">Partner Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">8</div>
              <div className="text-emerald-100">Unique Flavors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}