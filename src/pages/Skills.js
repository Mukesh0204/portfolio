import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C", "C++"],
      gradient: "from-[#6366F1] to-[#8B5CF6]",
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["React.js", "HTML", "CSS", "RESTful APIs", "Node.js", "Flask", "Spring Boot"],
      gradient: "from-[#8B5CF6] to-[#EC4899]",
      icon: "🌐"
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
      gradient: "from-[#EC4899] to-[#6366F1]",
      icon: "🗄️"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "AWS", "TensorFlow", "Keras", "OpenCV"],
      gradient: "from-[#6366F1] to-[#EC4899]",
      icon: "🛠️"
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS", "Netlify", "Vercel"],
      gradient: "from-[#EC4899] to-[#8B5CF6]",
      icon: "☁️"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django", "Flask", "React", "Redux"],
      gradient: "from-[#8B5CF6] to-[#6366F1]",
      icon: "📚"
    },
    {
      title: "Other",
      skills: ["Unit Testing", "Agile Methodologies", "REST API Integration", "UI/UX Design"],
      gradient: "from-[#6366F1] to-[#EC4899]",
      icon: "🔧"
    }
  ];

  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-transparent bg-clip-text">
            Technical Skills
          </span>
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} text-transparent bg-clip-text`}>
                  {category.title}
                </h2>
                <div className={`h-[2px] flex-grow bg-gradient-to-r ${category.gradient} opacity-30`} />
              </div>

              {/* Skills Cloud */}
              <div className="flex flex-wrap gap-4 pl-12">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity`} />
                    <div className="relative px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 
                                  group-hover:border-[#6366F1]/50 transition-all">
                      <span className="text-gray-200">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Line */}
              {index !== skillCategories.length - 1 && (
                <div className="absolute -bottom-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#6366F1] rounded-full"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 