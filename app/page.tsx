import { TopNavbar, CompactNavbar } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BrandsSection } from './components/BrandsSection';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedCategoriesSection } from './components/FeaturedCategoriesSection';
import { ProductSection } from './components/ProductSection';
import { 
  hotSellingProducts, 
  medidenProducts, 
  superendoProducts, 
  waldentAlchemProducts,
  etDentalProducts,
  mostSearchedProducts
} from './components/ProductData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <TopNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Brands Section */}
      <BrandsSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Categories */}
      <FeaturedCategoriesSection />

      {/* Hot Selling Products */}
      <ProductSection 
        title="Hot Selling"
        products={hotSellingProducts}
        sectionIcon="🔥"
      />

      {/* Promotional Banner */}
      <section className="py-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-teal-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Hard Sheets
            </h2>
            <p className="text-lg mb-2">For Vacuum Forming Machine</p>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">High-Impact Strength</span>
              <span className="text-lg font-semibold">Meets Perfect Thermoformability!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Specific Sections */}
      <ProductSection 
        title="Mediden"
        products={medidenProducts}
      />

      <ProductSection 
        title="Superendo"
        products={superendoProducts}
      />

      <ProductSection 
        title="WALDENT ALCHEM"
        products={waldentAlchemProducts}
      />

      <ProductSection 
        title="ET Dental"
        products={etDentalProducts}
      />

      {/* Most Searched */}
      <ProductSection 
        title="Most Searched"
        products={mostSearchedProducts}
        sectionIcon="📈"
      />

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Dental Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blogs */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Insightful</h3>
                <h4 className="text-2xl font-bold mb-6 text-yellow-400">Blogs</h4>
                <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                  EXPLORE
                </button>
              </div>
            </div>

            {/* Shorts */}
            <div className="bg-red-700 text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Quick</h3>
                <h4 className="text-2xl font-bold mb-6">Shorts</h4>
                <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                  EXPLORE
                </button>
              </div>
            </div>

            {/* Magazines */}
            <div className="bg-blue-800 text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Dental</h3>
                <h4 className="text-2xl font-bold mb-6">Magazines</h4>
                <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                  EXPLORE
                </button>
              </div>
            </div>

            {/* Guide */}
            <div className="bg-orange-700 text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Buying</h3>
                <h4 className="text-2xl font-bold mb-6 text-orange-200">Guide</h4>
                <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Didn't find what you were looking for?
            </h2>
            <p className="text-gray-600 mb-6">Let us know by filling in details below.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Suggest a Product
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">ABOUT</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">CONTACT WITH US</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Buying Guide</a></li>
                <li><a href="#" className="hover:text-blue-600">Investor relations</a></li>
                <li><a href="#" className="hover:text-blue-600">Dealer Price Bulk Inquiry</a></li>
                <li><a href="#" className="hover:text-blue-600">Waldent Dealership</a></li>
                <li><a href="#" className="hover:text-blue-600">Sell On Dentalkart</a></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">HELP</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Orders</a></li>
                <li><a href="#" className="hover:text-blue-600">Refunds</a></li>
                <li><a href="#" className="hover:text-blue-600">Payments</a></li>
                <li><a href="#" className="hover:text-blue-600">Rewards</a></li>
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">POLICY</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Return Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Term Of Use</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">REGISTERED OFFICE ADDRESS</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>📍 VASA DENTICITY LIMITED, Chattarpur, New Delhi, India, 110074</p>
                <p>📞 +91-728-9999-458</p>
                <p>📧 support@dentalkart.com</p>
                <p>🕒 Mon to Sun (9:00 AM to 9:00 PM)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              2016-2025, VASA DENTICITY LIMITED<br />
              Crafted with ❤️ in India
            </p>
            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-600 mr-2">4.5</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">Average online rating</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
