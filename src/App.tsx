import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
