import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-dark-100 flex items-center justify-center z-50">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
      />
    </div>
  );
};

export default Loading; 