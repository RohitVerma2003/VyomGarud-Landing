import { motion } from 'framer-motion'

const Highlight = ({ highlight, i }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      key={i}
      variants={fadeInUp}
      transition={{ duration: 0.1 }}
      whileHover={{ x: 16, scale: 1.02 }}
      className='group flex items-start space-x-6 p-8 bg-zinc-800/30 border border-zinc-800 hover:border-orange-500/50 rounded-2xl transition-all duration-500'
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl'
      >
        {i + 1}
      </motion.div>
      <p className='text-xl text-zinc-300 leading-relaxed pt-2'>{highlight}</p>
    </motion.div>
  )
}

export default Highlight
