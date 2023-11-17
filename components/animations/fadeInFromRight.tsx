"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';


interface FadeInFromRightProps {
  children: React.ReactNode;
  animationProps?: { [key: string]: any };
}

const FadeInFromRight: React.FC<FadeInFromRightProps> = ({ children, animationProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      style={{ zIndex: 999 }}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromRight;