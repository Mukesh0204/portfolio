import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skills = [
    { name: "C/C++", percentage: 90, color: "from-neon-blue to-neon-purple" },
    { name: "Python", percentage: 85, color: "from-neon-purple to-neon-pink" },
    { name: "Java", percentage: 80, color: "from-neon-pink to-neon-blue" },
    { name: "Web Development", percentage: 75, color: "from-neon-blue to-neon-purple" }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-200">
      <AnimatedSection className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
            Skills
          </span>
        </motion.h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                <span className="text-lg font-medium text-neon-blue">{skill.percentage}%</span>
              </div>
              
              {/* Progress bar background */}
              <div className="h-3 bg-dark-100 rounded-full overflow-hidden">
                {/* Progress bar fill */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} relative`}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    animate={{
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 bottom-0 left-0 w-20 
                             bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) + (i * 0.1) }}
                    className={`w-1 h-1 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl" />
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills; 