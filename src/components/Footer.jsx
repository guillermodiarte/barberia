import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="font-heading text-2xl font-bold gradient-text">
                BarberShop Elite
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              El arte del corte perfecto. Donde la tradición se encuentra 
              con el estilo moderno para crear la experiencia de barbería definitiva.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-black font-bold text-sm">IG</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-black font-bold text-sm">FB</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-black font-bold text-sm">TW</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Corte Clásico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Afeitado Premium</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Corte + Barba</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Tratamiento VIP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cuidado Capilar</a></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-amber-400 transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-amber-400 transition-colors">Nosotros</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-amber-400 transition-colors">Galería</a></li>
              <li><a href="#equipo" className="text-gray-400 hover:text-amber-400 transition-colors">Equipo</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-amber-400 transition-colors">Contacto</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400 text-sm">Av. Principal 123, Centro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400 text-sm">info@barbershopelite.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400 text-sm">Lun-Vie: 9:00-20:00</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} BarberShop Elite. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;