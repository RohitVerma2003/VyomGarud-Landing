import { motion } from 'framer-motion'
import {
  Shield,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react'

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className='bg-zinc-950 border-t border-zinc-800 py-12'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className='max-w-7xl mx-auto px-6'
      >
        <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center'>
              <Shield className='w-6 h-6' />
            </div>
            <span className='text-xl font-bold'>VyomGarud</span>
          </div>

          <div className='flex space-x-6'>
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href='#'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors'
              >
                <Icon className='w-5 h-5' />
              </motion.a>
            ))}
          </div>

          <p className='text-zinc-500 text-sm'>
            © 2024 VyomGarud. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
