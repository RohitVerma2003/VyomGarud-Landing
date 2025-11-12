import { motion } from 'framer-motion'
import {
  ChevronRight
} from 'lucide-react'

const Product = ({ product}) => {
  const Icon = product.icon

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <motion.div
      variants={scaleIn}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className='group relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-500'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500' />

      <div className='relative'>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className='w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6'
        >
          <Icon className='w-7 h-7' />
        </motion.div>

        <h3 className='text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors'>
          {product.title}
        </h3>

        <p className='text-zinc-400 leading-relaxed'>{product.desc}</p>

        <motion.div
          initial={{ opacity: 1, x: 0 }}
          whileHover={{ opacity: 1, x: 10 }}
          className='mt-6 flex items-center text-orange-500 font-semibold'
        >
          <span>Learn More</span>
          <ChevronRight className='w-5 h-5 ml-1' />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Product
