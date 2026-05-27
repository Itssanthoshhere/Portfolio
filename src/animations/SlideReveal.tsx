import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  className?: string;
}

export function SlideReveal({ children, direction = "left", delay = 0, className = "" }: SlideRevealProps) {
  const getClipPath = () => {
    switch (direction) {
      case "left":
        return "polygon(0 0, 0 0, 0 100%, 0% 100%)";
      case "right":
        return "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
      case "top":
        return "polygon(0 0, 100% 0, 100% 0, 0 0)";
      case "bottom":
        return "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
    }
  };

  return (
    <motion.div
      initial={{ clipPath: getClipPath() }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
