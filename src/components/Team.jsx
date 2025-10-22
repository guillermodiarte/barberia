import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Scissors } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Carlos Mendoza",
      role: "Barbero Principal",
      experience: "15 años",
      specialty: "Cortes clásicos y afeitado tradicional",
      rating: 5
    },
    {
      name: "Miguel Torres",
      role: "Estilista Senior",
      experience: "12 años",
      specialty: "Tendencias modernas y diseño de barba",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Barbero Especialista",
      experience: "8 años",
      specialty: "Cortes fade y técnicas avanzadas",
      rating: 5
    },
    {
      name: "Diego Ramírez",
      role: "Barbero Junior",
      experience: "5 años",
      specialty: "Cortes juveniles y estilos urbanos",
      rating: 4
    }
  ];

  return (
    <section id="equipo" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-amber-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nuestro</span>{' '}
            <span className="gradient-text">Equipo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conoce a los maestros barberos que harán realidad tu estilo ideal. 
            Cada uno es un artista especializado en su área.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative mb-6">
                <img  
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-amber-500" 
                  alt={`${member.name} - ${member.role}`}
                 src="../../images/sample_barber.jpeg" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full p-2">
                  <Scissors className="h-4 w-4 text-black" />
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              
              <p className="text-amber-400 font-semibold mb-3">
                {member.role}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="h-4 w-4 text-amber-400" />
                  <span className="text-sm text-gray-300">{member.experience}</span>
                </div>
                
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < member.rating ? 'text-amber-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {member.specialty}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-amber-400 mb-4">
              ¿Por qué elegir nuestro equipo?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Todos nuestros barberos están certificados y en constante capacitación. 
              Combinamos años de experiencia con las últimas técnicas y tendencias 
              para ofrecerte siempre el mejor servicio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;