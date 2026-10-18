import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Testimonials from './pages/Testimonials';
import Certifications from './pages/Certifications';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="quote" element={<Quote />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-offwhite px-6">
                <div className="text-center">
                  <h1 className="font-[Cormorant_Garamond] text-6xl font-bold text-[#12372A]">404</h1>
                  <p className="text-[#202522]/60 mt-4 text-lg">Page not found</p>
                  <a href="/" className="inline-block mt-6 bg-[#1F4D3A] text-white px-8 py-3 rounded-lg hover:bg-[#12372A] transition-colors">
                    Return Home
                  </a>
                </div>
              </div>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
