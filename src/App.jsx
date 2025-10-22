import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>BarberShop Elite - Peluquería Masculina de Lujo</title>
        <meta name="description" content="La mejor peluquería para hombres. Cortes modernos, afeitado clásico y cuidado masculino de primera calidad. Reserva tu cita hoy." />
        <meta property="og:title" content="BarberShop Elite - Peluquería Masculina de Lujo" />
        <meta property="og:description" content="La mejor peluquería para hombres. Cortes modernos, afeitado clásico y cuidado masculino de primera calidad." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
        <Header />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Team />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;