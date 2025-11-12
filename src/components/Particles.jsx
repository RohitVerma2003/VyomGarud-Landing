import { motion } from 'framer-motion'

const Particles = () => {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-1 h-1 bg-orange-500 rounded-full'
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  )
}

export default Particles
