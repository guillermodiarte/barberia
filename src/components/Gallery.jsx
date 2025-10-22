import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryImages = [
    {
      title: "Corte Clásico Fade",
      description: "Degradado perfecto con acabado profesional"
    },
    {
      title: "Afeitado Tradicional",
      description: "Técnica clásica con navaja y toalla caliente"
    },
    {
      title: "Estilo Moderno",
      description: "Cortes contemporáneos para el hombre actual"
    },
    {
      title: "Barba Estilizada",
      description: "Arreglo y diseño de barba personalizado"
    },
    {
      title: "Corte Ejecutivo",
      description: "Elegancia profesional para el ámbito corporativo"
    },
    {
      title: "Look Casual",
      description: "Estilo relajado para el día a día"
    }
  ];

  return (
    <section id="galeria" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nuestra</span>{' '}
            <span className="gradient-text">Galería</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados. 
            Cada corte es una obra de arte personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <img  
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                alt={image.title}
               src="../../images/sample_add.jpeg" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            ¿Quieres ver más de nuestro trabajo? Síguenos en redes sociales
          </p>
          <div className="flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer"
            >
              <span className="text-black font-bold">IG</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer"
            >
              <span className="text-black font-bold">FB</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer"
            >
              <span className="text-black font-bold">TW</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;