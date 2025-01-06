import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
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

  const projects = [
    {
      title: "ResumeAI",
      tech: ["Next.js 14", "Gemini API", "TypeScript", "React", "Zustand", "Clerk", "Firebase"],
      points: [
        "AI-Driven Resume Enhancement: Created an AI-driven resume enhancement feature, integrating Gemini API to provide tailored suggestions",
        "Designed and Integrated a multi-step form generator with live previews and PDF downloads",
        "Built a user dashboard for secure resume management"
      ],
      gradient: "from-[#6366F1] via-[#8B5CF6] to-[#EC4899]",
      icon: "🤖"
    },
    {
      title: "TicketGalaxy",
      tech: ["TypeScript", "React", "Next.js", "TailwindCSS", "Redux", "NextAuth.js", "Supabase", "PostgreSQL"],
      points: [
        "Built a flight booking platform with Next.js and Supabase, reducing server-side rendering time by 40%",
        "Implemented role-based access for admins, agencies, and clients",
        "Engineered a user-friendly dashboard for verifying agencies and managing ticket uploads"
      ],
      gradient: "from-[#EC4899] via-[#8B5CF6] to-[#6366F1]",
      icon: "✈️"
    },
    {
      title: "ProductsGrid",
      tech: ["JavaScript", "React", "Next.js", "React Context", "Prisma", "Python", "Flask", "ML Algorithms"],
      points: [
        "Engineered a machine learning-based recommendation system, processing 100K+ behavioral data points",
        "Leveraged Flask for real-time recommendations and seamless backend integration",
        "Increased repeat purchase rates by 20%"
      ],
      gradient: "from-[#8B5CF6] via-[#EC4899] to-[#6366F1]",
      icon: "🛍️"
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
            Featured Projects
          </span>
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Project Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{project.icon}</span>
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text`}>
                  {project.title}
                </h2>
                <div className={`h-[2px] flex-grow bg-gradient-to-r ${project.gradient} opacity-30`} />
              </div>

              {/* Tech Stack */}
              <div className="mb-8 pl-14">
                <h3 className="text-gray-400 text-sm uppercase mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
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
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <div className="relative px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 
                                    group-hover:border-[#6366F1]/50 transition-all">
                        <span className="text-gray-200">{tech}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4 pl-14">
                <h3 className="text-gray-400 text-sm uppercase mb-4">Key Features</h3>
                {project.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start group"
                  >
                    <span className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text mr-3 mt-1.5 
                                    text-xl transform group-hover:scale-125 transition-transform`}>
                      •
                    </span>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{point}</p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Line */}
              {index !== projects.length - 1 && (
                <div className="absolute -bottom-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
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

export default Projects; 