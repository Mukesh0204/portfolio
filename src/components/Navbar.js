import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import profileImage from '../assets/profile.jpg'; // Make sure to add your image to assets folder

const ProfilePhoto = ({ onClick, className = "w-10 h-10" }) => (
  <motion.div
    className={`relative cursor-pointer ${className}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <div className="rounded-full overflow-hidden border-2 border-purple-500/30 aspect-square">
      <div className="w-full h-full relative">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover absolute inset-0"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>
    </div>
  </motion.div>
);

const ImageModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative max-w-2xl w-full rounded-lg overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative w-full max-h-[80vh] rounded-lg overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            <IoMdClose size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="relative group px-3 py-2"
    >
      <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
        {children}
      </span>

      {/* Background hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg -z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Underline effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-purple-500/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          filter: 'blur(8px)'
        }}
      />
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' }
  ];

  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      url: 'https://github.com/Mukesh0204',
      label: 'GitHub'
    },
    { 
      icon: <FaLinkedin size={20} />, 
      url: 'https://www.linkedin.com/in/arthammukesh/',
      label: 'LinkedIn'
    }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand with animation */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="relative group">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Portfolio
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation with enhanced animations */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <NavLink to={item.path}>
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  className="absolute h-0.5 w-6 bg-white transform transition-transform"
                  style={{ top: "50%" }}
                  variants={{
                    open: { rotate: 45, y: 0 },
                    closed: { rotate: 0, y: -8 }
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-white"
                  style={{ top: "50%" }}
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-white transform transition-transform"
                  style={{ top: "50%" }}
                  variants={{
                    open: { rotate: -45, y: 0 },
                    closed: { rotate: 0, y: 8 }
                  }}
                />
              </motion.div>
            </motion.button>

            {/* Desktop Social Links with tooltips */}
            <div className="hidden md:flex items-center space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <ProfilePhoto onClick={() => setIsImageExpanded(true)} />
            </div>
          </div>
        </div>

        {/* Mobile Menu with enhanced animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      to={item.path}
                      className="block py-3 px-4 rounded-lg bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 text-gray-300 hover:text-white transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Social Links */}
              <div className="px-4 py-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                  <ProfilePhoto onClick={() => {
                    setIsImageExpanded(true);
                    setIsMobileMenuOpen(false);
                  }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Expanded Image Modal */}
      <ImageModal 
        isOpen={isImageExpanded} 
        onClose={() => setIsImageExpanded(false)} 
      />
    </>
  );
};

export default Navbar; 
