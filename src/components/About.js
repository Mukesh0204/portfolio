import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <AnimatedSection className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
            About Me
          </span>
        </motion.h2>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I am an Electronics and Communication Engineering student at Vasavi College of Engineering, passionate about bridging the gap between hardware and software solutions.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in technology has been driven by curiosity and a desire to create meaningful impact. I specialize in embedded systems and digital signal processing, while also maintaining a strong interest in software development.
          </p>
          <p className="text-lg leading-relaxed">
            Through my projects and studies, I aim to contribute to technological advancement and solve real-world problems using innovative solutions.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About; 