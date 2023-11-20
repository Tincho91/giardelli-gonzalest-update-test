import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  animationProps?: { [key: string]: any };
}

const FadeIn: React.FC<FadeInProps> = ({ children, animationProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      style={{ zIndex: 999 }}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;