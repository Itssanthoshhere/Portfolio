import { SectionHeading, GlassCard } from '@/components';
import { StaggerChildren, StaggerItem } from '@/animations';
import { achievements } from '@/data/experience';
import { Trophy, Star, Target, Zap } from 'lucide-react';

export function AchievementsSection() {
  const getIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'coding streak': return <Zap className="text-yellow-400" size={24} />;
      case 'competition': return <Trophy className="text-accent" size={24} />;
      case 'certification': return <Star className="text-primary" size={24} />;
      default: return <Target className="text-purple" size={24} />;
    }
  };

  return (
    <section id="achievements" className="section-padding relative z-10 bg-surface/30">
      <div className="container-custom">
        <SectionHeading 
          number="05"
          title="Milestones"
          subtitle="Key achievements, certifications, and highlights from my learning journey."
          align="center"
        />

        <StaggerChildren delay={0.2} staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <StaggerItem key={index}>
              <GlassCard className="h-full p-6 relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 opacity-10 transform group-hover:scale-150 transition-transform duration-700">
                  {getIcon(achievement.category)}
                </div>
                
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full glass bg-white/5 border border-white/10">
                  {getIcon(achievement.category)}
                </div>
                
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  {achievement.title}
                </h3>
                
                <div className="text-accent font-mono text-sm mb-4">
                  {achievement.date}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
