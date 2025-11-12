import { motion } from 'framer-motion'

const BackgroundGrid = () => {
  return (
    <motion.div
      className='absolute inset-0 opacity-20'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `
                   linear-gradient(rgba(255, 123, 0, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255, 123, 0, 0.1) 1px, transparent 1px)
                 `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
    </motion.div>
  )
}

export default BackgroundGrid
