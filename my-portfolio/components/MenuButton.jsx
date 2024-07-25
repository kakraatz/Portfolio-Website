'use client';

import React from 'react';
import { motion } from "framer-motion";

export default function MenuButton({ isOpen, color, ...props }) {

  return (
    <motion.svg viewBox="0 0 24 24" className="w-10 h-10" preserveAspectRatio="xMidYMid meet" {...props}>
        <motion.line
            x1="2"
            x2="22"
            y1="6"
            y2="6"
            stroke={color}
            strokeWidth={3}
            vectorEffect={'non-scaling-stroke'}
            transition={{duration: 0.2, ease: 'easeInOut'}}
            initial="closed"
            animate={isOpen ? 'opened' : 'closed'}
            variants={{
                closed: { rotate: 0, translateY: 0 },
                opened: { rotate: 45,  translateY: 6 },
            }}
        />
        <motion.line
            x1="2"
            x2="22"
            y1="12"
            y2="12"
            stroke={color}
            strokeWidth={3}
            vectorEffect={'non-scaling-stroke'}
            transition={{duration: 0.2, ease: 'easeInOut'}}
            initial="closed"
            animate={isOpen ? 'opened' : 'closed'}
            variants={{
                closed: { opacity: 1 },
                opened: { opacity: 0 },
            }}
        />
        <motion.line
            x1="2"
            x2="22"
            y1="18"
            y2="18"
            stroke={color}
            strokeWidth={3}
            vectorEffect={'non-scaling-stroke'}
            transition={{duration: 0.2, ease: 'easeInOut'}}
            initial="closed"
            animate={isOpen ? 'opened' : 'closed'}
            variants={{
                closed: { rotate: 0,  translateY: 0 },
                opened: { rotate: -45,  translateY: -6 },
            }}
        />
    </motion.svg>
  );
}