import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Pricing from './components/Pricing';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
