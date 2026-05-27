import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
}

export function GradientBlob({ className = "" }: GradientBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-screen filter blur-[100px] opacity-30 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}
