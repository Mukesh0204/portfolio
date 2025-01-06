import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Education = () => {
  const educationData = [
    {
      degree: "B.E in Electronics and Communication Engineering",
      institution: "Vasavi College of Engineering",
      location: "Hyderabad",
      period: "2021 - 2025",
      status: "Expected",
      courses: [
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Database Management Systems (DBMS)",
        "Cloud Computing",
        "Machine Learning",
        "Blockchain Fundamentals"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      location: "Hyderabad",
      period: "2020 - 2021",
      score: "Percentage: 95%"
    },
    {
      degree: "SSC",
      institution: "Krishnaveni High School",
      location: "Hyderabad",
      period: "2006 - 2019",
      score: "GPA: 10.0"
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-100">
      <AnimatedSection className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
            Education
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink rounded-full" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.3 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark-100 border-2 border-neon-blue rounded-full" />

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                <div className="p-6 rounded-xl bg-dark-200/50 backdrop-blur-sm border border-gray-700/50
                             hover:border-neon-blue/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-gray-400 mb-2">{edu.location}</p>
                  <p className="text-neon-blue">{edu.period}</p>
                  {edu.status && (
                    <span className="inline-block px-3 py-1 mt-2 rounded-full text-sm 
                                   bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                      {edu.status}
                    </span>
                  )}
                  {edu.score && (
                    <p className="mt-2 text-neon-pink">{edu.score}</p>
                  )}
                  {edu.courses && (
                    <div className="mt-4">
                      <p className="text-gray-300 mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 rounded-full text-sm
                                     bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Empty column for timeline alignment */}
              <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`} />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Education; 