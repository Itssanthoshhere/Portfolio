import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, ProjectModal } from '@/components';
import { FadeIn, SlideReveal } from '@/animations';
import { projects, Project } from '@/data/projects';
import { ExternalLink, Github, Code } from 'lucide-react';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects.filter(p => p.featured) 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section-padding relative z-10 bg-surface/30">
      <div className="container-custom">
        <SectionHeading 
          number="03"
          title="Featured Work"
          subtitle="A selection of my best projects spanning full-stack apps, mobile, and 3D experiences."
          align="left"
        />

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-[0_0_15px_rgba(0,245,212,0.3)]'
                    : 'bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid/List */}
        <div className="space-y-16 lg:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Visual */}
                <div className={`relative ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <SlideReveal direction={index % 2 === 0 ? "left" : "right"}>
                    <div 
                      className="group relative rounded-2xl overflow-hidden aspect-video bg-black/50 border border-white/10 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                      
                      {project.video ? (
                        <video
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      
                      {/* View details overlay */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-sm">
                        <span className="btn-primary py-3 px-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Case Study
                        </span>
                      </div>
                    </div>
                  </SlideReveal>
                </div>

                {/* Content */}
                <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent font-mono text-sm">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                    {project.title}
                  </h3>
                  
                  <div className="glass-strong p-6 rounded-xl mb-6 shadow-xl relative z-10">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="text-sm font-mono text-white/70">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-sm font-mono text-white/40">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center gap-2 text-white font-medium hover:text-accent transition-colors"
                    >
                      <span>Read More</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-white transition-colors"
                        aria-label="View Source Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Code size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-xl font-medium text-white mb-2">No featured projects found</h3>
            <p className="text-muted-foreground">Select a different category to see more work.</p>
          </div>
        )}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
