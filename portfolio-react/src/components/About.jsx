import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gray-900/20 rounded-2xl flex items-center justify-center">
                <p className="text-white text-lg font-medium">Your Photo Here</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Senior Software Engineer at Simpl
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a Senior Software Engineer with 3+ years of experience specializing in GoLang and Ruby on Rails.
              Currently at Simpl, I pioneer scalable payment solutions and microservices architecture that process
              millions in transactions. I increased monthly TPV from ₹3 Cr to ₹50 Cr through innovative payment
              integration systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My expertise lies in building high-performance distributed systems, implementing robust APIs, and
              optimizing database performance with PostgreSQL and Redis. I'm passionate about creating elegant
              solutions to complex technical challenges and mentoring teams to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'TPV Growth', value: '₹3Cr→₹50Cr' },
                { label: 'Years Experience', value: '3.5+' },
                { label: 'Tech Stack', value: '10+' },
                { label: 'Key Integrations', value: '15+' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
