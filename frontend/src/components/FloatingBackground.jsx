import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Background element 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-olive-100/30 blur-[80px] rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Background element 2 */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-olive-100/40 blur-[100px] rounded-full"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Background element 3 */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-olive-100/20 blur-[60px] rounded-full"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingBackground;
