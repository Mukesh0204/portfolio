import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  const achievements = [
    {
      category: "Technical Achievements",
      items: [
        {
          title: "Juspay Hiring Challenge 2024",
          description: "Ranked in the top 5% among participants, demonstrating strong technical proficiency and the ability to solve complex algorithmic challenges in a competitive environment.",
          icon: "🏆",
          gradient: "from-[#6366F1] via-[#8B5CF6] to-[#EC4899]"
        },
        {
          title: "Calendar Communication System",
          description: "Designed and deployed a high-performance system managing, streamlining business operations and increasing efficiency. Ranked 10% among the top solutions for enhancing operational workflows in the organization.",
          icon: "📅",
          gradient: "from-[#EC4899] via-[#8B5CF6] to-[#6366F1]"
        }
      ]
    },
    {
      category: "Leadership & Community",
      items: [
        {
          title: "Event Leadership",
          description: "Led 10+ college events, coordinating cross-functional teams of 15+ members to improve event execution, increasing event participation.",
          icon: "👥",
          gradient: "from-[#8B5CF6] via-[#EC4899] to-[#6366F1]"
        },
        {
          title: "Content Creation",
          description: "Grew a meme page from 0 to 5,000+ followers, achieving consistent growth through engaging content that resonated with a tech-savvy audience.",
          icon: "📱",
          gradient: "from-[#6366F1] to-[#EC4899]"
        }
      ]
    },
    {
      category: "Competitions & Sports",
      items: [
        {
          title: "Programming Competitions",
          description: "Participated in 5+ programming competitions, solving 95% of problems within time limits, ranking in the top 10% in 3 events, showcasing strong algorithmic skills and performance under pressure.",
          icon: "💻",
          gradient: "from-[#EC4899] via-[#8B5CF6] to-[#6366F1]"
        },
        {
          title: "Kabaddi Excellence",
          description: "Played competitive Kabaddi for 3 years, contributing to team victories in tournaments, while enhancing teamwork and strategic planning skills.",
          icon: "🏃",
          gradient: "from-[#8B5CF6] to-[#6366F1]"
        }
      ]
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
            Achievements & Recognition
          </span>
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {achievements.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} className="relative">
              {/* Category Header */}
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-transparent bg-clip-text"
              >
                {section.category}
              </motion.h2>

              <div className="space-y-8">
                {section.items.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative pl-12"
                  >
                    {/* Achievement Icon */}
                    <span className="absolute left-0 top-1 text-3xl">
                      {achievement.icon}
                    </span>

                    {/* Achievement Content */}
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-lg blur opacity-5 
                                    group-hover:opacity-10 transition-opacity`} />
                      <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 
                                    group-hover:border-[#6366F1]/50 transition-all">
                        <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${achievement.gradient} text-transparent bg-clip-text`}>
                          {achievement.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Line */}
              {sectionIndex !== achievements.length - 1 && (
                <div className="absolute -bottom-10 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
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

export default Achievements; 