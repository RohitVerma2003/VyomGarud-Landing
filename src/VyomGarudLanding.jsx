import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Menu, X, ChevronRight, Shield, Cpu, Radio, Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import BackgroundGrid from './components/BackgroundGrid';
import Particles from './components/Particles';

const VyomGarudLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      title: "Tactical Reconnaissance",
      desc: "Long-range surveillance UAVs with advanced imaging systems for strategic intelligence gathering",
      icon: Shield
    },
    {
      title: "Autonomous Navigation",
      desc: "AI-powered flight systems enabling precise waypoint navigation and obstacle avoidance",
      icon: Cpu
    },
    {
      title: "Secure Communications",
      desc: "Military-grade encrypted data links for real-time mission-critical information transfer",
      icon: Radio
    },
    {
      title: "Rapid Deployment",
      desc: "Quick-launch systems designed for immediate operational readiness in any environment",
      icon: Zap
    }
  ];

  const highlights = [
    "Military-grade precision engineering with 99.9% mission success rate",
    "Advanced autonomous systems with AI-powered decision making",
    "Encrypted communications ensuring complete operational security"
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="bg-zinc-950 text-white font-['Inter',sans-serif] overflow-x-hidden overflow-y-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-40 transition-all duration-300" 
        style={{ 
          backgroundColor: scrollY > 50 ? 'rgba(9, 9, 11, 0.95)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
        }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">VyomGarud</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Capabilities', 'Contact'].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1, color: '#ff7b00' }}
                className="text-zinc-400 hover:text-orange-500 transition-colors duration-300">
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800">
            {['About', 'Capabilities', 'Contact'].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="block px-6 py-3 text-zinc-400 hover:text-orange-500 hover:bg-zinc-800">
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <BackgroundGrid/>

        {/* Floating Particles */}
        <Particles/>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm"
          >
            Next-Generation UAV Systems
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              VyomGarud
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Precision-engineered autonomous systems delivering unmatched reliability for mission-critical operations
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a 
              href="#capabilities"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Explore Capabilities</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-zinc-700 hover:border-orange-500 rounded-lg font-semibold transition-all duration-300">
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.2, duration: 0.6 },
              y: { repeat: Infinity, duration: 2 }
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-orange-500 rounded-full" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Engineering the Future
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-orange-500 mx-auto" 
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.p 
                variants={fadeInLeft}
                transition={{ duration: 0.6 }}
                className="text-lg text-zinc-300 leading-relaxed"
              >
                VyomGarud pioneers next-generation unmanned aerial vehicle systems, combining cutting-edge artificial intelligence with military-grade engineering to deliver unparalleled autonomous capabilities.
              </motion.p>
              <motion.p 
                variants={fadeInLeft}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-zinc-300 leading-relaxed"
              >
                Our mission is to redefine aerial intelligence through precision, reliability, and advanced autonomy—empowering defense and security operations with technology that never compromises.
              </motion.p>
              <motion.div 
                variants={fadeInLeft}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-4 pt-4"
              >
                <div className="flex-1 h-1 bg-gradient-to-r from-orange-500 to-transparent" />
                <span className="text-orange-500 font-semibold">Since 2024</span>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent blur-3xl" />
              <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 space-y-6">
                {[
                  { label: "Mission Success", value: "99.9%" },
                  { label: "Flight Hours", value: "50K+" },
                  { label: "Active Deployments", value: "150+" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="flex justify-between items-center border-b border-zinc-700 last:border-0 pb-4 last:pb-0"
                  >
                    <span className="text-zinc-400">{stat.label}</span>
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                      className="text-3xl font-bold text-orange-500"
                    >
                      {stat.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle, rgba(255, 123, 0, 0.3) 1px, transparent 1px)',
                 backgroundSize: '30px 30px'
               }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Advanced systems engineered for mission excellence
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500" />
                  
                  <div className="relative">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed">
                      {product.desc}
                    </p>

                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-6 flex items-center text-orange-500 font-semibold"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Why VyomGarud</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {highlights.map((highlight, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                whileHover={{ x: 16, scale: 1.02 }}
                className="group flex items-start space-x-6 p-8 bg-zinc-800/30 border border-zinc-800 hover:border-orange-500/50 rounded-2xl transition-all duration-500"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl"
                >
                  {i + 1}
                </motion.div>
                <p className="text-xl text-zinc-300 leading-relaxed pt-2">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-zinc-400">Let's discuss your mission requirements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {[
                { icon: Mail, label: "Email", value: "contact@vyomgarud.com" },
                { icon: Phone, label: "Phone", value: "+91 8881444693" },
                { icon: MapPin, label: "Location", value: "India" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i}
                    variants={fadeInLeft}
                    transition={{ duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.label}</h3>
                      <p className="text-zinc-400">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="text" 
                placeholder="Your Name" 
                className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
              />
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                placeholder="Your Email" 
                className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
              />
              <motion.textarea 
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message" 
                rows="4"
                className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.preventDefault()}
                className="w-full px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300">
                Send Message
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">VyomGarud</span>
            </div>

            <div className="flex space-x-6">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <p className="text-zinc-500 text-sm">
              © 2024 VyomGarud. All rights reserved.
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default VyomGarudLanding;