import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sword as Razor, Sparkles, Crown, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const handleBooking = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  const services = [
    {
      icon: Scissors,
      title: "Corte Clásico",
      description: "Cortes tradicionales con técnicas modernas para un look atemporal",
      price: "$25",
      duration: "45 min",
      features: ["Lavado incluido", "Peinado", "Consulta personalizada"]
    },
    {
      icon: Razor,
      title: "Afeitado Premium",
      description: "Afeitado tradicional con navaja caliente y toallas aromáticas",
      price: "$35",
      duration: "60 min",
      features: ["Toalla caliente", "Aceites premium", "Masaje facial"]
    },
    {
      icon: Crown,
      title: "Corte + Barba",
      description: "Servicio completo para el caballero moderno",
      price: "$45",
      duration: "90 min",
      features: ["Corte personalizado", "Arreglo de barba", "Tratamiento capilar"]
    },
    {
      icon: Sparkles,
      title: "Tratamiento VIP",
      description: "Experiencia de lujo completa con todos nuestros servicios",
      price: "$80",
      duration: "120 min",
      features: ["Todos los servicios", "Masaje", "Bebida premium"]
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nuestros</span>{' '}
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de barbería premium, 
            diseñados para el hombre moderno que valora la calidad y el estilo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Precio:</span>
                  <span className="font-bold text-amber-400 text-lg">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Duración:
                  </span>
                  <span className="text-white">{service.duration}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-300">
                    <Star className="h-3 w-3 text-amber-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                onClick={handleBooking}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold"
              >
                Reservar
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;