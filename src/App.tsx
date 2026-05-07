import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About, CompetitiveProgramming } from '@/components/about/About';
import { Projects } from '@/components/projects/Projects';
import { Skills, Experience } from '@/components/skills/Skills';
import { Contact, Footer } from '@/components/contact/Contact';
import { CustomCursor } from '@/components/widgets/CustomCursor';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects for background glows
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <main className="relative selection:bg-primary/30">
      <CustomCursor />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="space-y-0 relative z-10">
        <Hero />
        
        <div className="relative">
          {/* Subtle connecting line decoration */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-white/5 to-transparent -z-10 hidden md:block" />
          
          <About />
          <CompetitiveProgramming />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
        
        <Footer />
      </div>

      {/* Global Background Glows with Parallax */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]" 
        />
      </div>
    </main>
  );
}
