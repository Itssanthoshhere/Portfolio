import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'violet' | 'cyan' | 'purple' | 'none';
  hoverEffect?: boolean;
}

export function GlassCard({ 
  children, 
  className = "", 
  glowColor = 'none',
  hoverEffect = true 
}: GlassCardProps) {
  
  const getGlowClass = () => {
    switch(glowColor) {
      case 'violet': return 'hover:glow-violet hover:border-violet/30';
      case 'cyan': return 'hover:glow-cyan hover:border-cyan/30';
      case 'purple': return 'hover:glow-purple hover:border-purple/30';
      default: return 'hover:border-white/10 hover:bg-white/[0.05]';
    }
  };

  return (
    <motion.div
      className={`glass-strong rounded-2xl transition-all duration-500 overflow-hidden ${
        hoverEffect ? getGlowClass() + ' hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
