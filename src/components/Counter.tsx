import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({ 
  value, 
  duration = 2, 
  suffix = "", 
  prefix = "",
  className = "" 
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  // Use a spring for smooth, natural counting
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  // Display the integer value of the spring
  const display = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView && !hasStarted) {
      springValue.set(value);
      setHasStarted(true);
    }
  }, [isInView, value, springValue, hasStarted]);

  return (
    <span ref={ref} className={`font-mono font-bold ${className}`}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
