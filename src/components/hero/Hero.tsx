import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Terminal as TerminalIcon, ChevronRight, Download, Github } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Container, Button } from '@/components/common';
import { useEffect } from 'react';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden perspective-1000">
      {/* Dynamic 3D Layered Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full animate-grid -z-10 opacity-30" />

      <Container className="relative grid gap-16 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            Software Engineer / Competitive Programmer
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            ARCHITECTING <br />
            <span className="text-gradient">DIGITAL SCALE.</span>
          </h1>
          
          <p className="text-xl text-foreground/50 mb-12 max-w-lg leading-relaxed font-medium">
            Building high-performance full-stack systems and robust real-time infrastructures with precision.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Button className="h-14 px-8 text-base rounded-2xl group">
              Build Workspace <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-base rounded-2xl border-white/10 hover:border-primary/50">
              <Download size={20} className="mr-2" /> Resume.pdf
            </Button>
          </div>
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:block preserve-3d group"
        >
          {/* Main Terminal Card */}
          <div className="glass rounded-3xl p-1 shadow-[0_50px_100px_rgba(0,0,0,0.5)] translate-z-12">
            <div className="bg-[#0b1120] rounded-2xl p-8 font-mono text-sm border border-white/5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[10px] text-white/20 uppercase tracking-[0.3em]">core_processor.ts</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-blue-400">01</span>
                  <span className="text-purple-400">class</span>
                  <span className="text-yellow-400">Engineer</span>
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="flex gap-4 pl-8">
                  <span className="text-blue-400">02</span>
                  <span className="text-white">name:</span>
                  <span className="text-green-400">'Arpit'</span>
                </div>
                <div className="flex gap-4 pl-8">
                  <span className="text-blue-400">03</span>
                  <span className="text-white">stack: [</span>
                  <span className="text-green-400">'React', 'Node', 'C++'</span>
                  <span className="text-white">]</span>
                </div>
                <div className="flex gap-4 pl-0 mt-4">
                  <span className="text-blue-400">04</span>
                  <span className="text-white">{"}"}</span>
                </div>
                
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-4 text-xs">
                  <span className="text-primary font-bold">➜</span>
                  <span className="text-white/40">system.status()</span>
                  <span className="text-green-400">OPTIMIZED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Artifacts with Z-index depth */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-8 glass p-4 rounded-2xl shadow-xl transform translate-z-24 hidden xl:block"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <TerminalIcon size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white uppercase tracking-tighter">CP Rating</div>
                <div className="text-lg font-bold text-gradient">Expert</div>
              </div>
            </div>
          </motion.div>

          <div className="absolute -bottom-8 -left-8 glass px-6 py-4 rounded-2xl shadow-xl transform translate-z-16 hidden xl:block">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs font-bold text-white/60">Live: CampusMesh Server</span>
            </div>
          </div>

          {/* New 3D Creative Idea: Project Orbitals */}
          <div className="absolute inset-0 -z-10 preserve-3d animate-float" style={{ animationDuration: '10s' }}>
             {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: [0, 360],
                    y: [0, 20 * (i + 1), 0],
                    x: [0, -10 * (i + 1), 0]
                  }}
                  transition={{ 
                    rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                    y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 7 + i, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-1/2 left-1/2 w-40 h-40"
                  style={{ transform: `rotate(${i * 120}deg) translateX(300px)` }}
                >
                   <div className="glass h-16 w-16 rounded-xl flex items-center justify-center text-primary/40 border-primary/20 backdrop-blur-2xl">
                      {i === 0 ? <Icons.MessageSquare size={24} /> : i === 1 ? <Icons.ShieldCheck size={24} /> : <Icons.Zap size={24} />}
                   </div>
                </motion.div>
             ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
