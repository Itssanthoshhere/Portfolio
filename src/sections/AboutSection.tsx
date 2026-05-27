import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, FileText } from 'lucide-react';
import { SectionHeading, Counter, GlassCard } from '@/components';
import { FadeIn, TextReveal, StaggerChildren, StaggerItem, MagneticButton } from '@/animations';
import { personalInfo } from '@/data/personal';
import secondaryImage from '@/assets/santhosh-profile.jpg';

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10 bg-surface/50">
      <div className="container-custom">
        <SectionHeading 
          number="01"
          title="About Me"
          subtitle="A glimpse into my journey, mindset, and what drives me to build."
          align="left"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-8">
                {['Frontend Architecture', 'UI/UX Design', 'Full Stack Integration', 'Creative Coding', 'AI Integration'].map((tag, i) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-mono bg-white/5 border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="pt-6">
                <MagneticButton className="inline-block">
                  <a href="#contact" className="group flex items-center gap-2 text-primary font-bold hover:text-white transition-colors clickable">
                    <span>Let's talk about your next project</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visuals & Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Image Card */}
            <FadeIn delay={0.3} direction="left">
              <GlassCard className="p-2 relative aspect-square max-h-[400px] w-full mx-auto" glowColor="violet">
                <div className="w-full h-full rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                  <img 
                    src={secondaryImage} 
                    alt="Santhosh in action" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <TextReveal 
                      text="Code. Design. Innovate." 
                      className="text-xl font-bold font-heading text-white mb-1" 
                    />
                    <p className="text-sm font-mono text-accent">Always learning.</p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            {/* Stats Grid */}
            <StaggerChildren delay={0.5} staggerDelay={0.1} className="grid grid-cols-2 gap-4">
              <StaggerItem>
                <GlassCard className="p-6 flex flex-col items-center justify-center text-center gap-2 h-full" hoverEffect={false}>
                  <Code2 className="text-primary mb-2" size={24} />
                  <div className="text-3xl font-bold font-heading text-white">
                    <Counter value={personalInfo.stats.projects} suffix="+" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Projects Completed</div>
                </GlassCard>
              </StaggerItem>

              <StaggerItem>
                <GlassCard className="p-6 flex flex-col items-center justify-center text-center gap-2 h-full" hoverEffect={false}>
                  <Cpu className="text-accent mb-2" size={24} />
                  <div className="text-3xl font-bold font-heading text-white">
                    <Counter value={personalInfo.stats.technologies} suffix="+" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Technologies</div>
                </GlassCard>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
