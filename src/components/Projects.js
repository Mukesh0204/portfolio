import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: "Ulcer Detection Using Deep Learning",
    description: "A CNN-based model for accurate ulcer detection in medical imaging, achieving 95% accuracy in diagnosis.",
    tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20"
  },
  {
    title: "YouTube Downloader Clone",
    description: "A modern web application for downloading YouTube videos with multiple format options and quality settings.",
    tech: ["React", "Node.js", "Express", "YouTube API"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10 }}
        className={`relative rounded-2xl overflow-hidden bg-dark-100 
                   backdrop-blur-sm border border-gray-800
                   hover:border-neon-blue/50 transition-all duration-500`}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-dark-100/50 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="relative p-8">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
                className="px-3 py-1 text-sm rounded-full 
                         bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 
                         border border-neon-blue/20 text-neon-blue
                         hover:border-neon-blue/50 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 to-neon-purple/0 
                        group-hover:from-neon-blue/5 group-hover:to-neon-purple/5 
                        transition-all duration-500 pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-200">
      <AnimatedSection className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects; 