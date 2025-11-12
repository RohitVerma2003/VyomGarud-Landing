import { motion } from 'framer-motion'

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 5, 0] }}
      transition={{
        opacity: { delay: 1.2, duration: 0.6 },
        y: { repeat: Infinity, duration: 2 }
      }}
      className='absolute -bottom-15 left-1/2 transform -translate-x-1/2'
    >
      <div className='w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2'>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className='w-1 h-3 bg-orange-500 rounded-full'
        />
      </div>
    </motion.div>
  )
}

export default ScrollIndicator
