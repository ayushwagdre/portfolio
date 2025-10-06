import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'SIKA Service',
      role: 'Simpl - Payment Integration',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=150&fit=crop',
      text: 'Pioneered unified integration kit for Pay Later and Pay-in-3 products. Led integrations with Shopify and Razorpay Optimizer. Increased monthly TPV from ₹3 Cr to ₹50 Cr through streamlined merchant and gateway integrations.',
      rating: 5,
    },
    {
      name: 'Payment Orchestration',
      role: 'Simpl - Microservices',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=150&fit=crop',
      text: 'Built scalable Pay-in-3 Orchestrator managing user sessions and coordinating microservices. Implemented Outbox pattern for event processing, real-time webhooks, and automated refunds with retry mechanisms.',
      rating: 5,
    },
    {
      name: 'Merchant Platform',
      role: 'Simpl - Dashboard & Tools',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop',
      text: 'Engineered Merchant Manager and Dashboard for onboarding merchants. Provided seamless access to transaction views, bulk refunds, analytics, reports and operational tools for the Simpl network.',
      rating: 5,
    },
    {
      name: 'Performance Optimization',
      role: 'Simpl - Infrastructure',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop',
      text: 'Implemented in-memory cache for SIKA services, alleviating database bottlenecks. Built configuration management service with KrakenD as API Gateway Orchestrator, achieving major performance improvements.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key achievements and impact across my professional journey
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <motion.img
                key={currentIndex}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-primary-500"
              />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <motion.p
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              <motion.div
                key={`name-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary-600 dark:text-primary-400">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            {[
              { title: 'Senior Software Engineer', company: 'Simpl', period: 'March 2022 - Present', location: 'Bengaluru, India' },
              { title: 'Associate Software Engineer', company: 'Tekion', period: 'July 2021 - March 2022', location: 'Chennai, India' },
            ].map((exp, index) => (
              <motion.div
                key={exp.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-1">
                  {exp.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{exp.period}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{exp.location}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl p-6 text-white shadow-lg"
          >
            <h4 className="font-bold text-xl mb-2">Master of Computer Application</h4>
            <p className="text-white/90 font-medium mb-1">National Institute of Technology Karnataka, Surathkal</p>
            <p className="text-white/80 text-sm">August 2018 - May 2021 | CGPA: 8.38/10.00</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
