import Background from '@/components/Background';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Swap from '@/components/Swap';
import Promises from '@/components/Promises';
import Faq from '@/components/Faq';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Services />
        <Products />
        <Swap />
        <Promises />
        <Faq />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
