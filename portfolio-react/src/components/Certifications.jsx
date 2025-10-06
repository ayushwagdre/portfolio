import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Completion Certificate',
      issuer: 'Professional Development Program',
      date: '2024',
      description: 'Successfully completed professional development and training program',
      certificateFile: '/Completion_Certificate_Ayush_Wagdre.docx',
      icon: FiAward,
      color: 'from-blue-500 to-cyan-500',
    },
    // Add more certifications here as needed
  ];

  return (
    <section
      id="certifications"
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
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and completed training programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              whileHover={{ y: -10 }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <cert.icon className="w-12 h-12" />
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{cert.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={cert.certificateFile}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload className="w-4 h-4" />
                    Download
                  </motion.a>
                  <motion.button
                    className="px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse"></div>
                  Verified Certificate
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'TPV Growth',
                description: 'Increased monthly TPV from ₹3 Cr to ₹50 Cr at Simpl',
                icon: '📈',
              },
              {
                title: 'SIKA Service',
                description: 'Pioneered unified payment integration kit serving multiple merchants',
                icon: '🚀',
              },
              {
                title: 'Performance Optimization',
                description: 'Implemented in-memory cache achieving major performance improvements',
                icon: '⚡',
              },
              {
                title: 'Merchant Integrations',
                description: 'Led integrations with Shopify, Razorpay and other platforms',
                icon: '🔗',
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
