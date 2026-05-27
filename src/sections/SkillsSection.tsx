import { motion } from 'framer-motion';
import { SectionHeading, GlassCard } from '@/components';
import { StaggerChildren, StaggerItem, FadeIn } from '@/animations';
import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative z-10 bg-background">
      <div className="absolute inset-0 dot-bg opacity-30" />
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          number="02"
          title="Technical Arsenal"
          subtitle="The tools and technologies I use to bring ideas to life."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.15} direction="up">
              <GlassCard 
                className="h-full p-6 flex flex-col" 
                glowColor="none"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-8 flex-1">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
