import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Certifications = () => {
  const certifications = [
    {
      title: "NPTEL: Introduction to Programming in C",
      issuer: "NPTEL",
      date: "2023",
      color: "from-neon-blue to-neon-purple"
    },
    {
      title: "NPTEL: Object-Oriented Programming with Java",
      issuer: "NPTEL",
      date: "2023",
      color: "from-neon-purple to-neon-pink"
    },
    {
      title: "Cisco CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "2022",
      color: "from-neon-pink to-neon-blue"
    },
    {
      title: "Cisco CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      date: "2022",
      color: "from-neon-blue to-neon-purple"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-200">
      <AnimatedSection className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
            Certifications
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.3 }}
              className="animate-gpu"
            >
              <div className="p-6 rounded-xl bg-dark-100/50 backdrop-blur-sm 
                            border border-gray-700/50 hover:border-neon-blue/50 
                            transition-all duration-300 h-full">
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${cert.color} text-transparent bg-clip-text`}>
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-neon-blue">{cert.issuer}</span>
                  <span className="text-neon-purple">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Certifications; 