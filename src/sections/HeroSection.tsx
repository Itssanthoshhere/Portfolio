import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Terminal, User, Code } from 'lucide-react';
import { ParticleField, GradientBlob } from '@/components';
import { FadeIn, TextReveal, MagneticButton } from '@/animations';
import { personalInfo } from '@/data/personal';
import profileImage from '@/assets/santhosh-profile1.jpg';

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = personalInfo.taglines ?? [];
  const taglineCount = taglines.length;
  const currentTaglineText = taglines[currentTagline] ?? '';

  useEffect(() => {
    if (taglineCount <= 0) return;

    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglineCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglineCount]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <ParticleField />
      <GradientBlob className="w-[500px] h-[500px] bg-violet-600/20 top-0 left-[-100px]" />
      <GradientBlob className="w-[400px] h-[400px] bg-cyan-600/20 bottom-0 right-[-100px]" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-custom relative z-10 px-6 py-12 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-sm font-mono text-accent mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for opportunities
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-4 text-white">
                Hi, I'm <br />
                <span className="text-gradient-primary">Santhosh.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6} className="h-12 md:h-16 mb-6 w-full">
              <div className="flex w-full max-w-xl items-center gap-4 text-xl md:text-3xl font-medium text-muted-foreground">
                <Terminal className="text-accent" size={28} />
                <div className="relative min-w-0 flex-1 overflow-hidden h-10 md:h-12">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={currentTaglineText || 'fallback-tagline'}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 whitespace-nowrap text-white"
                    >
                      {currentTaglineText}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed text-balance">
                Building scalable full-stack products, cross-platform mobile apps, and premium digital experiences powered by modern architecture and AI.
              </p>
            </FadeIn>

            <FadeIn delay={1.0} className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="btn-primary inline-flex items-center gap-2 group clickable"
                >
                  View Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </MagneticButton>
              
              <MagneticButton>
                <a 
                  href="/Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 clickable"
                >
                  <Download size={18} />
                  Resume
                </a>
              </MagneticButton>
            </FadeIn>
          </div>

          {/* Right Content - Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <FadeIn delay={0.6} direction="left">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-2 glass-strong z-10 spotlight">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay z-10" />
                  <img 
                    src={profileImage} 
                    alt="Santhosh VS" 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -right-4 top-10 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/20 bg-black/55 backdrop-blur-md"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code size={18} className="text-accent" />
                  <span className="text-sm font-medium font-mono text-white">React Developer</span>
                </motion.div>

                <motion.div 
                  className="absolute -left-8 bottom-20 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/20 bg-black/55 backdrop-blur-md"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <User size={18} className="text-primary" />
                  <span className="text-sm font-medium font-mono text-white">UI/UX Enthusiast</span>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground clickable"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
