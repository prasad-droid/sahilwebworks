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

const App = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <Quality />
        <Markets />
        <Process />
        <Quote />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export default App;
