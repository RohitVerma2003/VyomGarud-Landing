import { motion } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='fixed top-0 w-full z-40 transition-all duration-300'
      style={{
        backgroundColor: scrollY > 50 ? 'rgba(9, 9, 11, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <motion.div
          className='flex items-center space-x-2'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center'>
            <Shield className='w-6 h-6' />
          </div>
          <span className='text-2xl font-bold tracking-tight'>VyomGarud</span>
        </motion.div>

        <div className='hidden md:flex space-x-8'>
          {['About', 'Capabilities', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1, color: '#ff7b00' }}
              className='text-zinc-400 hover:text-orange-500 transition-colors duration-300'
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden'
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
          className='md:hidden bg-zinc-900 border-t border-zinc-800'
        >
          {['About', 'Capabilities', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className='block px-6 py-3 text-zinc-400 hover:text-orange-500 hover:bg-zinc-800'
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
