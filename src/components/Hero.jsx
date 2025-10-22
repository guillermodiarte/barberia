import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleReservation = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 barber-pattern opacity-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover opacity-30" 
          alt="Barbería moderna con sillones de cuero y ambiente masculino"
         src="../../images/barberia.jpeg" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-amber-900/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">El Arte del</span>
          <br />
          <span className="gradient-text">Corte Perfecto</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Donde la tradición se encuentra con el estilo moderno.
          <br />
          Experimenta el lujo del cuidado masculino de primera clase.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={handleReservation}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-lg px-8 py-4"
          >
            Reservar Ahora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-lg px-8 py-4"
          >
            Ver Servicios
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass-effect rounded-lg p-6">
            <h3 className="font-heading text-2xl font-bold text-amber-400 mb-2">15+</h3>
            <p className="text-gray-300">Años de Experiencia</p>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <h3 className="font-heading text-2xl font-bold text-amber-400 mb-2">5000+</h3>
            <p className="text-gray-300">Clientes Satisfechos</p>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <h3 className="font-heading text-2xl font-bold text-amber-400 mb-2">24/7</h3>
            <p className="text-gray-300">Atención Premium</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;