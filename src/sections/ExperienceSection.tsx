import { motion } from 'framer-motion';
import { SectionHeading, GlassCard } from '@/components';
import { FadeIn } from '@/animations';
import { experiences } from '@/data/experience';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative z-10 bg-background">
      <div className="absolute inset-0 noise-overlay opacity-50" />
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          number="04"
          title="Experience"
          subtitle="My professional journey, roles, and the impact I've made along the way."
          align="center"
        />

        <div className="max-w-6xl mx-auto relative pt-8">
          {/* Central Timeline Line (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />
          
          {/* Left Timeline Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-[27px] w-px bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center group">
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-[27px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background bg-accent z-10 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(0,245,212,0.5)] transition-all duration-300 mt-6 md:mt-0`} />

                  {/* Desktop Layout - Left Side Content */}
                  <div className={`hidden md:block w-1/2 pr-12 text-right ${!isEven ? 'md:invisible' : ''}`}>
                    <FadeIn delay={0.2} direction="right" className={!isEven ? 'hidden' : ''}>
                      <GlassCard className="p-8 text-left" hoverEffect={false}>
                        <h3 className="text-2xl font-bold font-heading text-white mb-2">{exp.title}</h3>
                        <h4 className="text-primary font-medium mb-4">{exp.company}</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-2">
                            <Calendar size={16} /> {exp.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={16} /> {exp.location}
                          </span>
                        </div>
                        <p className="text-white/80 leading-relaxed mb-4">{exp.description}</p>
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <ul className="space-y-2 mb-6">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground text-left">
                                <span className="text-accent mt-0.5">▹</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-white/60">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </FadeIn>
                  </div>

                  {/* Desktop Layout - Right Side Content */}
                  <div className={`hidden md:block w-1/2 pl-12 ${isEven ? 'md:invisible' : ''}`}>
                    <FadeIn delay={0.2} direction="left" className={isEven ? 'hidden' : ''}>
                      <GlassCard className="p-8" hoverEffect={false}>
                        <h3 className="text-2xl font-bold font-heading text-white mb-2">{exp.title}</h3>
                        <h4 className="text-primary font-medium mb-4">{exp.company}</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-2">
                            <Calendar size={16} /> {exp.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={16} /> {exp.location}
                          </span>
                        </div>
                        <p className="text-white/80 leading-relaxed mb-4">{exp.description}</p>
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <ul className="space-y-2 mb-6">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground text-left">
                                <span className="text-accent mt-0.5">▹</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-white/60">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </FadeIn>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden w-full pl-16 pt-2">
                    <FadeIn delay={0.2} direction="up">
                      <GlassCard className="p-6">
                        <h3 className="text-xl font-bold font-heading text-white mb-1">{exp.title}</h3>
                        <h4 className="text-primary text-sm font-medium mb-4">{exp.company}</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-2">
                            <Calendar size={14} /> {exp.duration}
                          </span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">{exp.description}</p>
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <ul className="space-y-2 mb-6">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground text-left">
                                <span className="text-accent mt-0.5">▹</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map(tech => (
                              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-white/60">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </GlassCard>
                    </FadeIn>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
