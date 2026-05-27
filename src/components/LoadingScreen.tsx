import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      
      // Easing function for progress bar
      const easeProgress = 100 - (100 - newProgress) * Math.pow(1 - newProgress / 100, 3);
      setProgress(easeProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a beat before fading out
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -20,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="w-full max-w-md px-8 flex flex-col items-center">
        {/* Logo / Name reveal */}
        <div className="overflow-hidden mb-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-gradient-primary"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            Santhosh VS
          </motion.h1>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-accent rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
          />
        </div>
        
        {/* Percentage */}
        <div className="mt-4 w-full flex justify-between text-sm font-mono text-muted-foreground">
          <span>Loading System</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
