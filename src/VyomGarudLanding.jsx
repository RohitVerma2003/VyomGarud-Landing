import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  Menu,
  X,
  ChevronRight,
  Shield,
  Cpu,
  Radio,
  Zap,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react'
import BackgroundGrid from './components/BackgroundGrid'
import Particles from './components/Particles'
import ScrollIndicator from './components/ScrollIndicator'
import About from './components/About'
import Product from './components/Product'
import Highlight from './components/Highlight'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const VyomGarudLanding = () => {
  const { scrollYProgress } = useScroll()

  const products = [
    {
      title: 'Tactical Reconnaissance',
      desc: 'Long-range surveillance UAVs with advanced imaging systems for strategic intelligence gathering',
      icon: Shield
    },
    {
      title: 'Autonomous Navigation',
      desc: 'AI-powered flight systems enabling precise waypoint navigation and obstacle avoidance',
      icon: Cpu
    },
    {
      title: 'Secure Communications',
      desc: 'Military-grade encrypted data links for real-time mission-critical information transfer',
      icon: Radio
    },
    {
      title: 'Rapid Deployment',
      desc: 'Quick-launch systems designed for immediate operational readiness in any environment',
      icon: Zap
    }
  ]

  const highlights = [
    'Military-grade precision engineering with 99.9% mission success rate',
    'Advanced autonomous systems with AI-powered decision making',
    'Encrypted communications ensuring complete operational security'
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <div className="bg-zinc-950 text-white font-['Inter',sans-serif] overflow-x-hidden overflow-y-hidden">
      {/* Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 origin-left z-50'
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Animated Background Grid */}
        <BackgroundGrid />

        {/* Floating Particles */}
        <Particles />

        <div className='relative z-10 max-w-6xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm'
          >
            Next-Generation UAV Systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-6xl md:text-8xl font-bold mb-6 leading-tight'
          >
            <span className='bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent'>
              VyomGarud
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed'
          >
            Precision-engineered autonomous systems delivering unmatched
            reliability for mission-critical operations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <motion.a
              href='#capabilities'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2'
            >
              <span>Explore Capabilities</span>
              <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </motion.a>
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-transparent border-2 border-zinc-700 hover:border-orange-500 rounded-lg font-semibold transition-all duration-300'
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Capabilities Section */}
      <section
        id='capabilities'
        className='py-32 bg-zinc-900 relative overflow-hidden'
      >
        <div className='absolute inset-0 opacity-5'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255, 123, 0, 0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <div className='relative max-w-7xl mx-auto px-6'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl font-bold mb-6'>Core Capabilities</h2>
            <p className='text-xl text-zinc-400 max-w-2xl mx-auto'>
              Advanced systems engineered for mission excellence
            </p>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className='grid md:grid-cols-2 gap-8'
          >
            {products.map((product, i) => {
              return <Product product={product} key={i} />
            })}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className='py-32 bg-gradient-to-b from-zinc-900 to-zinc-950'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl font-bold mb-6'>Why VyomGarud</h2>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className='space-y-8'
          >
            {highlights.map((highlight, i) => (
              <Highlight highlight={highlight} i={i} key={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default VyomGarudLanding
