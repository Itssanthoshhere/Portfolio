import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Code, Calendar, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  project: any | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  if (isOpen) {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  } else {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  }

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl max-h-[90vh] bg-surface rounded-2xl border border-border/50 shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30 font-mono">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar size={14} />
                    {project.duration}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={24} className="text-muted-foreground hover:text-white" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Media */}
                  <div className="bg-black/50 aspect-video lg:aspect-auto lg:h-full relative overflow-hidden">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain lg:object-cover absolute inset-0"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 leading-tight">
                      {project.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {project.longDescription}
                    </p>

                    <div className="space-y-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                          <Code size={20} className="text-accent" />
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {project.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                              <span className="text-accent mt-1">▹</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string) => (
                            <span 
                              key={tech}
                              className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        {project.liveUrl && (
                          <Button asChild className="btn-primary">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={18} className="mr-2" />
                              View Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button asChild className="btn-secondary">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={18} className="mr-2" />
                              Source Code
                            </a>
                          </Button>
                        )}
                        {project.apkUrl && (
                          <Button asChild className="btn-secondary">
                            <a href={project.apkUrl} target="_blank" rel="noopener noreferrer">
                              <Download size={18} className="mr-2" />
                              Download APK
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
