import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, delay = 0, isStatic = false }) => {
  if (isStatic) {
    return (
      <div className="flex flex-wrap gap-1">
        {text.split(' ').map((word, wordIndex) => (
          <div key={wordIndex} className="overflow-hidden">
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className="inline-block text-base font-medium text-gray-200"
              >
                {char}
              </span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-1">
      {text.split(' ').map((word, wordIndex) => (
        <div key={wordIndex} className="overflow-hidden">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block text-base font-medium text-gray-200"
              animate={{ 
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: delay + (wordIndex * 0.2) + (charIndex * 0.05),
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
                repeatDelay: 1
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </div>
      ))}
    </div>
  );
};

const ResumeOutline = ({ mousePosition }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    if (!isHovered) return;
    
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * -35);
    setRotateY(xPct * 35);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const headings = [
    "SKILLS",
    "TECHNICAL EXPERIENCE",
    "PROJECTS",
    "EDUCATION"
  ];

  return (
    <motion.div
      className="relative bg-black/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/5 w-full"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        rotateX,
        rotateY,
        scale: isHovered ? 1.03 : 1,
        z: isHovered ? 75 : 0
      }}
      transition={{ 
        duration: 0.15,
        ease: "easeOut",
        rotateX: { duration: 0.1 },
        rotateY: { duration: 0.1 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 800,
        transformOrigin: "center center"
      }}
    >
      {/* Tilt Gradient Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-50"
        animate={{
          background: isHovered 
            ? `linear-gradient(${rotateY * 7}deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))`
            : 'linear-gradient(0deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Content Container with enhanced 3D effect */}
      <motion.div
        className="relative z-10"
        style={{
          transform: isHovered ? `translateZ(75px)` : `translateZ(0px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <div className="space-y-8 relative">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center space-y-4 pb-6 border-b border-white/10"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Name Container */}
            <motion.div className="space-y-1">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold tracking-tight"
              >
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                  ARTHAM
                </span>
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 text-transparent bg-clip-text mt-1">
                  MUKESH
                </span>
              </motion.h1>
            </motion.div>
            
            {/* Title Container */}
            <motion.div 
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div className="flex items-center space-x-3 text-lg sm:text-xl text-gray-300">
                <span className="relative">
                  <span className="relative z-10">Undergraduate</span>
                  <motion.div
                    className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                <span className="text-purple-400">&</span>
                <span className="relative">
                  <span className="relative z-10">Content Creator</span>
                  <motion.div
                    className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </span>
              </div>
            </motion.div>

            {/* Decorative Line */}
            <motion.div 
              className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-4"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {headings.map((heading, index) => (
              <motion.div
                key={heading}
                className="relative group"
                style={{
                  transform: isHovered ? `translateZ(${10 + index * 5}px)` : 'none',
                  transition: 'transform 0.2s ease-out'
                }}
              >
                {/* Animated section border */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))'
                  }}
                  animate={{
                    height: ["0%", "100%"],
                    opacity: [0, 1]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 * index
                  }}
                />

                <div className="pl-4">
                  <motion.div className="mb-2">
                    <AnimatedText 
                      text={heading} 
                      delay={2 + index * 0.5}
                      isStatic={false}
                    />
                  </motion.div>

                  {/* Animated lines */}
                  <div className="space-y-2">
                    {[...Array(2)].map((_, lineIndex) => (
                      <motion.div
                        key={lineIndex}
                        className="h-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                        animate={{ 
                          width: lineIndex === 0 ? "100%" : "70%",
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.1 * lineIndex
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced shine effect on tilt */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        animate={{
          opacity: isHovered ? 0.15 : 0,
          background: `linear-gradient(
            ${115 + rotateY}deg,
            transparent 20%,
            rgba(255, 255, 255, 0.4) 25%,
            transparent 30%
          )`
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Additional edge highlight */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        animate={{
          opacity: isHovered ? 0.1 : 0,
          boxShadow: `
            ${-rotateY}px ${-rotateX}px 20px rgba(139, 92, 246, 0.3),
            ${rotateY}px ${rotateX}px 20px rgba(236, 72, 153, 0.3)
          `
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
};

const IntroContent = () => {
  const introText = {
    greeting: "Hi, I'm",
    name: ["ARTHAM", "MUKESH"],
    taglines: [
      "Transforming ideas into elegant digital solutions.",
      "Let's build something extraordinary together."
    ]
  };

  return (
    <div className="space-y-8">
      <motion.p 
        className="text-gray-400 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {introText.greeting.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <div className="space-y-2">
        {introText.name.map((line, lineIndex) => (
          <motion.h2 
            key={lineIndex}
            className="text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            {line.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: lineIndex * 0.3 + charIndex * 0.05 + 0.8
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        ))}
      </div>

      <div className="space-y-4">
        {introText.taglines.map((line, index) => (
          <motion.p 
            key={index}
            className="text-2xl text-gray-300 leading-relaxed"
          >
            {line.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3 + wordIndex * 0.1 + 1.5
                }}
                whileHover={{ 
                  textShadow: "0 0 8px rgba(167, 139, 250, 0.5)",
                  scale: 1.05
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.E in Electronics and Communication Engineering",
      institution: "Vasavi College of Engineering, Hyderabad",
      duration: "2021 - Present",
      status: "Ongoing",
      icon: "🎓"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College, Hyderabad",
      duration: "2020 - 2021",
      score: "95%",
      icon: "📚"
    },
    {
      degree: "SSC",
      institution: "Krishnaveni High School, Hyderabad",
      score: "GPA: 10.0",
      icon: "🏫"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 sm:py-16 md:py-24 relative"
    >
      {/* Enhanced Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
            EDUCATION
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div 
            className="absolute left-[15px] sm:left-[15px] top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5), transparent)'
            }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Education Cards */}
          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.3 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline Node */}
                <motion.div 
                  className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.3 + 0.2, type: "spring" }}
                >
                  <span className="text-base sm:text-lg">{edu.icon}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      {edu.degree}
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-base sm:text-lg text-gray-300 font-medium">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                        {edu.duration && (
                          <p className="text-xs sm:text-sm text-gray-400 flex items-center">
                            <span className="mr-2">⏳</span>
                            {edu.duration}
                          </p>
                        )}
                        
                        {edu.status && (
                          <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {edu.status}
                          </span>
                        )}
                        
                        {edu.score && (
                          <p className="text-xs sm:text-sm font-medium text-pink-400 flex items-center">
                            <span className="mr-2">🎯</span>
                            {edu.score}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedWord = ({ word, index }) => {
  return (
    <motion.span
      className="inline-block mx-2 relative"
      initial={{ 
        opacity: 0,
        y: 20,
        filter: 'blur(8px)',
        scale: 0.95
      }}
      animate={{ 
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.6, 0.01, -0.05, 0.95],
        opacity: { duration: 0.8 },
        filter: { duration: 0.6 }
      }}
    >
      <span className="whitespace-nowrap">
        {word}
      </span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, opacity: [1, 0] }}
        transition={{
          duration: 1.2,
          delay: index * 0.15,
          ease: "easeInOut"
        }}
      />
    </motion.span>
  );
};

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const welcomeText = ["Welcome", "to", "My", "Digital", "Space"];

  return (
    <section className="min-h-screen bg-black overflow-hidden relative">
      {/* Background Particles with reduced speed */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i % 2 ? '1' : '2'} h-${i % 2 ? '1' : '2'} bg-white/20 rounded-full`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
              delay: Math.random() * -15
            }}
          />
        ))}
      </div>

      {/* Subtle Glow Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.13, 0.1],
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.13, 0.1],
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Welcome Section */}
        <motion.div 
          className="text-center py-20 sm:py-28 md:py-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative overflow-visible px-4"
          >
            <motion.div
              className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.5],
                scale: [0.9, 1.05, 1]
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                times: [0, 0.5, 1]
              }}
            />
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 text-transparent bg-clip-text relative z-10 flex flex-wrap justify-center gap-x-2 gap-y-4">
              {welcomeText.map((word, index) => (
                <AnimatedWord key={index} word={word} index={index} />
              ))}
            </div>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ 
              opacity: 0, 
              y: 20,
              filter: 'blur(4px)'
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              delay: welcomeText.length * 0.15, 
              duration: 1,
              ease: "easeOut"
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: welcomeText.length * 0.15 + 0.5, duration: 0.8 }}
            >
              Exploring the intersection of technology and creativity
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Content */}
          <div>
            <IntroContent />
            
            <motion.div className="space-y-3 pt-4">
              {[
                "Hyderabad, Telangana",
                "arthammukesh945@gmail.com"
              ].map((info, index) => (
                <motion.p
                  key={index}
                  className="text-gray-300 text-lg"
                  whileHover={{ 
                    x: 10,
                    textShadow: "0 0 8px rgba(167, 139, 250, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {info}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Resume Outline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="sticky top-24 hidden lg:block"
          >
            <div className="relative mx-auto">
              <ResumeOutline mousePosition={mousePosition} />
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <EducationSection />
      </div>

      {/* Additional Floating Particles with reduced count and speed */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`extra-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0, 0.5, 0],
              scale: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -8
            }}
          />
        ))}
      </div>
    </section>
  );
};

// Add this to your global CSS or Tailwind config
// @layer utilities {
//   .bg-radial-gradient {
//     background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
//   }
// }

export default Home; 