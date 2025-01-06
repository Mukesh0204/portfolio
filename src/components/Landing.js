import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <section id="home" className="min-h-screen bg-dark-100 relative overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-7xl font-bold font-montserrat">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
                Artham Mukesh
              </span>
            </h1>

            <h2 className="text-2xl font-medium text-gray-300">
              Electronics & Communication Engineering Student
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              Transforming ideas into reality through code and innovation, 
              passionate about creating impactful solutions in technology.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-200/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">
              Education
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white">Vasavi College of Engineering</h4>
                <p className="text-gray-400">B.E in Electronics and Communication Engineering</p>
                <p className="text-neon-blue">2021 - 2025 (Expected)</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">Narayana Junior College</h4>
                <p className="text-gray-400">Intermediate (MPC)</p>
                <p className="text-neon-purple">2020 - 2021</p>
                <p className="text-gray-400">Percentage: 95%</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">Krishnaveni High School</h4>
                <p className="text-gray-400">SSC</p>
                <p className="text-neon-pink">2006 - 2019</p>
                <p className="text-gray-400">GPA: 10.0</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing; 