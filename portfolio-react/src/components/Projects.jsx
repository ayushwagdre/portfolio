import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'SIKA - Unified Payment Integration',
      description:
        'Pioneered unified integration kit for Pay Later and Pay-in-3 products, streamlining merchant integrations and improving transaction efficiency. Increased monthly TPV from ₹3 Cr to ₹50 Cr.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tech: ['GoLang', 'PostgreSQL', 'Redis', 'Microservices'],
      github: 'https://github.com/ayushwagdre',
      demo: '#',
    },
    {
      title: 'Pay-in-3 Orchestrator Service',
      description:
        'Built scalable orchestrator service managing user sessions and coordinating microservices. Implemented Outbox pattern for event processing, real-time webhooks, and automated refund processing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['GoLang', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/ayushwagdre',
      demo: '#',
    },
    {
      title: 'Merchant Dashboard & Manager',
      description:
        'Engineered comprehensive merchant onboarding platform with transaction views, bulk refunds, analytics, reports and operational tools for the Simpl network.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/ayushwagdre',
      demo: '#',
    },
    {
      title: 'Personal Finance Platform',
      description:
        'Engineered a personal finance dashboard integrating IPO tracker, company earnings calendar, stock screener, and wishlist with premium features.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&h=300&fit=crop',
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ayushwagdre',
      demo: '#',
    },
    {
      title: 'Lonari Kunbi Community Platform',
      description:
        'Building digital community platform with Google Sign-In, user registration, interactive features, role-based access control for biodata management and user matchmaking.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop',
      tech: ['GoLang', 'Firebase', 'GCP', 'React'],
      github: 'https://github.com/ayushwagdre',
      demo: '#',
    },
    {
      title: 'Access-Based Control Website',
      description:
        'Designed secure Role-based web application with authentication and authorization. Enabled role-specific access to blogs, portfolios, and testimonials with responsive UI.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      tech: ['Python', 'React', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/ayushwagdre',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub className="w-5 h-5 text-gray-900" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink className="w-5 h-5 text-gray-900" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
