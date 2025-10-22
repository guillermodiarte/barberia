import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Años de Experiencia" },
    { icon: Users, number: "5000+", label: "Clientes Felices" },
    { icon: Clock, number: "24/7", label: "Disponibilidad" },
    { icon: Heart, number: "100%", label: "Satisfacción" }
  ];

  return (
    <section id="nosotros" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-amber-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Nuestra</span>{' '}
              <span className="gradient-text">Historia</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Desde 2008, BarberShop Elite ha sido el destino preferido para hombres 
              que buscan más que un simple corte de cabello. Somos artistas del estilo 
              masculino, combinando técnicas tradicionales con las últimas tendencias.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nuestro compromiso es brindar una experiencia única donde cada cliente 
              se sienta como en casa, recibiendo un servicio personalizado que refleje 
              su personalidad y estilo de vida.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-3">
                    <stat.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="font-heading text-2xl font-bold text-amber-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img  
                className="w-full h-96 object-cover" 
                alt="Interior elegante de barbería con sillones vintage y decoración masculina"
               src="../../images/barberia.jpeg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-6 max-w-xs"
            >
              <h3 className="font-heading text-lg font-bold text-amber-400 mb-2">
                Tradición & Modernidad
              </h3>
              <p className="text-sm text-gray-300">
                Combinamos las mejores técnicas clásicas con herramientas y productos de última generación.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;