/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Affiliations from './components/Affiliations';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'products' | 'contact' | 'affiliations'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-gold/30 overflow-x-hidden relative bg-zinc-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow flex flex-col relative z-10 w-full">
        {activeTab === 'home' && (
          <Home 
            onLearnMore={() => setActiveTab('about')} 
            onNavigateToProducts={() => {
              setActiveTab('products');
              setTimeout(() => {
                document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
          />
        )}
        {activeTab === 'about' && <About />}
        {activeTab === 'products' && <Products />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'affiliations' && <Affiliations />}
      </main>

      <Footer />
    </div>
  );
}
