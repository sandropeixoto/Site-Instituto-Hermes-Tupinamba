/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Social from './sections/Social';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen mesh-gradient relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Social />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

