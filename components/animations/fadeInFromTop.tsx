"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';


interface FadeInFromTopProps {
  children: React.ReactNode;
  animationProps?: { [key: string]: any };
}

const FadeInFromTop: React.FC<FadeInFromTopProps> = ({ children, animationProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      style={{ zIndex: 999 }}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromTop;