import { motion } from 'framer-motion'

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
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
      id='about'
      className='py-32 bg-gradient-to-b from-zinc-950 to-zinc-900'
    >
      <div className='max-w-5xl mx-auto px-6'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>
            Engineering the Future
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='h-1 bg-orange-500 mx-auto'
          />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className='space-y-6'
          >
            <motion.p
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
              className='text-lg text-zinc-300 leading-relaxed'
            >
              VyomGarud pioneers next-generation unmanned aerial vehicle
              systems, combining cutting-edge artificial intelligence with
              military-grade engineering to deliver unparalleled autonomous
              capabilities.
            </motion.p>
            <motion.p
              variants={fadeInLeft}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-zinc-300 leading-relaxed'
            >
              Our mission is to redefine aerial intelligence through precision,
              reliability, and advanced autonomy—empowering defense and security
              operations with technology that never compromises.
            </motion.p>
            <motion.div
              variants={fadeInLeft}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='flex items-center space-x-4 pt-4'
            >
              <div className='flex-1 h-1 bg-gradient-to-r from-orange-500 to-transparent' />
              <span className='text-orange-500 font-semibold'>Since 2024</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent blur-3xl' />
            <div className='relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 space-y-6'>
              {[
                { label: 'Mission Success', value: '99.9%' },
                { label: 'Flight Hours', value: '50K+' },
                { label: 'Active Deployments', value: '150+' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className='flex justify-between items-center border-b border-zinc-700 last:border-0 pb-4 last:pb-0'
                >
                  <span className='text-zinc-400'>{stat.label}</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2 + 0.3,
                      type: 'spring',
                      stiffness: 200
                    }}
                    className='text-3xl font-bold text-orange-500'
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
  )
}

export default About
