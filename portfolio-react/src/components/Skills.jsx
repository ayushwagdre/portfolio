import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiRubyonrails,
  SiGo,
  SiFirebase,
  SiGooglecloud,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'GoLang', icon: SiGo, color: 'text-cyan-500' },
        { name: 'Ruby', icon: SiRubyonrails, color: 'text-red-600' },
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'HTML/CSS', icon: FaHtml5, color: 'text-orange-500' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-cyan-500' },
        { name: 'Ruby on Rails', icon: SiRubyonrails, color: 'text-red-600' },
      ],
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
        { name: 'AWS', icon: FaAws, color: 'text-yellow-600' },
        { name: 'GCP', icon: SiGooglecloud, color: 'text-blue-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.1,
                    }}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 10 }}
                  >
                    <skill.icon
                      className={`w-8 h-8 ${skill.color} group-hover:scale-125 transition-transform`}
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {[
              { name: 'Backend Development (GoLang, Ruby)', level: 95 },
              { name: 'Microservices Architecture', level: 90 },
              { name: 'Database Design & Optimization', level: 88 },
              { name: 'Payment Systems Integration', level: 92 },
              { name: 'Cloud & DevOps (AWS, GCP)', level: 80 },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-r from-primary-500 to-purple-600 h-3 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
