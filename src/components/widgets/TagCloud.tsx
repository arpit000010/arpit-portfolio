import { useEffect, useState, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TagProps {
  text: string;
  index: number;
  total: number;
  radius: number;
  key?: string | number;
}

function Tag({ text, index, total, radius }: TagProps) {
  // Fibonacci Sphere distribution
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        x,
        y,
        z,
        transformStyle: 'preserve-3d',
      }}
      className="cursor-default select-none group"
    >
      <motion.div
        whileHover={{ scale: 1.5, color: '#3b82f6' }}
        className="text-xs font-black uppercase tracking-widest text-white/20 whitespace-nowrap group-hover:text-white transition-colors"
        style={{
           // Billboarding: keep text facing camera effectively
           transform: 'translate(-50%, -50%)',
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

export function TagCloud({ tags }: { tags: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate rotation based on distance from center
      rotateY.set(((e.clientX - centerX) / (window.innerWidth / 2)) * 45);
      rotateX.set(((e.clientY - centerY) / (window.innerHeight / 2)) * -45);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000"
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [smoothY.get(), smoothY.get() + 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative"
      >
        {tags.map((tag, i) => (
          <Tag 
            key={`${tag}-${i}`} 
            text={tag} 
            index={i} 
            total={tags.length} 
            radius={200} 
          />
        ))}
      </motion.div>
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
    </div>
  );
}
