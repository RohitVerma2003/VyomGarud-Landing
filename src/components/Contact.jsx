import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const Contact = () => {
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

  return (
    <section
      id='contact'
      className='py-32 bg-zinc-900 relative overflow-hidden'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent' />

      <div className='relative max-w-5xl mx-auto px-6'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-6'>Get in Touch</h2>
          <p className='text-xl text-zinc-400'>
            Let's discuss your mission requirements
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className='space-y-8'
          >
            {[
              { icon: Mail, label: 'Email', value: 'contact@vyomgarud.com' },
              { icon: Phone, label: 'Phone', value: '+91 8881444693' },
              { icon: MapPin, label: 'Location', value: 'India' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeInLeft}
                  transition={{ duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className='flex items-start space-x-4'
                >
                  <div className='w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Icon className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>{item.label}</h3>
                    <p className='text-zinc-400'>{item.value}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type='text'
              placeholder='Your Name'
              className='w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors'
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type='email'
              placeholder='Your Email'
              className='w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors'
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder='Your Message'
              rows='4'
              className='w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none'
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={e => e.preventDefault()}
              className='w-full px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300'
            >
              Send Message
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
