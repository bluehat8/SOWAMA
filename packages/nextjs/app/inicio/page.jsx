"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Recycle, ArrowRight, Globe } from 'lucide-react';

const SowamaLandingPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    } else {
      alert('Por favor, ingresa un correo electrónico válido');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-3"
          >
            <Leaf className="text-green-600" size={32} />
            <h1 className="text-2xl font-bold text-green-800">SOWAMA</h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex space-x-6"
          >
            {['Inicio', 'Soluciones', 'Tecnología', 'Contacto'].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="hover:text-green-700 transition"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-5xl font-extrabold text-green-900 leading-tight">
              Transformando Residuos en Recursos
            </h2>
            <p className="text-xl text-green-800 opacity-80">
              Soluciones innovadoras de gestión de residuos sólidos para un futuro más sostenible y circular.
            </p>
            
            {/* Email Signup */}
            <motion.form 
              onSubmit={handleEmailSubmit} 
              className="flex space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 transition"
              />
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center space-x-2"
              >
                <span>Únete</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.form>

            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">¡Gracias por unirte a SOWAMA!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            className="relative"
          >
            <motion.div 
              initial={{ rotate: -6, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute inset-0 bg-green-500/10 rounded-3xl"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
            >
              <Recycle className="text-green-600 mx-auto" size={120} strokeWidth={1} />
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-green-900">Compostaje Inteligente</h3>
                <p className="text-green-700 mt-2">
                  Convierte tus residuos orgánicos en nutrientes para la tierra
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center text-green-900 mb-12"
          >
            Nuestras Soluciones
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Leaf size={48} className="text-green-600" />,
                title: 'Gestión Sostenible',
                description: 'Metodologías avanzadas para minimizar desperdicios y maximizar el reciclaje.'
              },
              {
                icon: <Globe size={48} className="text-green-600" />,
                title: 'Impacto Ambiental',
                description: 'Reducimos la huella de carbono mediante soluciones innovadoras de compostaje.'
              },
              {
                icon: <Recycle size={48} className="text-green-600" />,
                title: 'Economía Circular',
                description: 'Transformamos residuos en recursos, creando valor económico y ambiental.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                }}
                className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{feature.title}</h3>
                <p className="text-green-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-green-900 text-white py-12 px-4"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Leaf size={32} className="text-green-400" />
              <h4 className="text-2xl font-bold">SOWAMA</h4>
            </div>
            <p className="text-green-200">
              Innovando en gestión de residuos para un planeta más limpio y sostenible.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xl font-semibold mb-4">Contacto</h5>
            <p className="text-green-200">info@sowama.com</p>
            <p className="text-green-200">+51 999 888 777</p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xl font-semibold mb-4">Síguenos</h5>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((platform, index) => (
                <motion.a 
                  key={index} 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-green-300 hover:text-white transition"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default SowamaLandingPage;