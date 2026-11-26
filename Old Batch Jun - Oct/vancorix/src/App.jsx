import { useCallback, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import Products from './components/Products';
import Quality from './components/Quality';
import Markets from './components/Markets';
import Process from './components/Process';
import Quote from './components/Quote';
import SiteFooter from './components/SiteFooter';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import CheckoutDrawer from './components/CheckoutDrawer';
import { MAX_ORDER_QUANTITY } from './data/site';

const App = () => {
  const [cart, setCart] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const handleBuyNow = useCallback((product) => {
    if (product?.status !== 'available') return;

    setCart((current) =>
      current?.product.id === product.id
        ? { ...current, quantity: Math.min(current.quantity + 1, MAX_ORDER_QUANTITY) }
        : { product, quantity: 1 },
    );
    setIsCartOpen(true);
  }, []);

  const handleQuantityChange = useCallback((quantity) => {
    setCart((current) => {
      if (!current) return current;
      const nextQuantity = Math.min(Math.max(quantity, 1), MAX_ORDER_QUANTITY);
      return { ...current, quantity: nextQuantity };
    });
  }, []);

  const handleRemove = useCallback(() => setCart(null), []);

  return (
    <>
      <SiteHeader cartCount={cart?.quantity ?? 0} onCartClick={openCart} />
      <main>
        <Hero />
        <Products onBuyNow={handleBuyNow} />
        <Quality />
        <Markets />
        <Process />
        <Quote />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <BackToTop />
      {isCartOpen && (
        <CheckoutDrawer
          item={cart}
          onClose={closeCart}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
        />
      )}
    </>
  );
};

export default App;
