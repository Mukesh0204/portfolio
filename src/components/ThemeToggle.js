import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full 
                 bg-dark-200/80 backdrop-blur-sm border border-gray-700/50
                 hover:border-neon-blue/50 transition-all duration-300
                 shadow-lg hover:shadow-neon-blue/20 z-50"
    >
      {theme === 'dark' ? (
        <motion.svg
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          className="w-6 h-6 text-neon-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </motion.svg>
      ) : (
        <motion.svg
          initial={{ rotate: 45 }}
          animate={{ rotate: 0 }}
          className="w-6 h-6 text-neon-purple"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </motion.svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle; 