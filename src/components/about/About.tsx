import { motion } from 'motion/react';
import { Container, SectionHeading, GlowCard } from '@/components/common';
import { cpStats } from '@/data/portfolio';
import { Trophy, Code2, LineChart, Hash } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading subtitle="Who I am">Engineering Mindset</SectionHeading>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                My journey into software engineering started with a pure obsession for algorithm efficiency. What began as solving competitive programming problems evolved into building full-scale distributed systems.
              </p>
              <p>
                I don't just "write code." I architect experiences. Whether I'm optimizing a Socket.io event loop or crafting a responsive UI that feels like physical hardware, my goal is always absolute precision.
              </p>
              <p>
                At <span className="text-white font-semibold">RECursion</span>, I lead technical initiatives, focusing on how we can push the boundaries of what our internal tools can do.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <GlowCard className="aspect-square flex flex-col items-center justify-center text-center">
              <Code2 className="mb-4 text-primary" size={32} />
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-foreground/40 font-medium">Problems Solved</div>
            </GlowCard>
            <GlowCard className="aspect-square flex flex-col items-center justify-center text-center" glowColor="accent">
              <LineChart className="mb-4 text-accent" size={32} />
              <div className="text-3xl font-bold text-white">1600+</div>
              <div className="text-sm text-foreground/40 font-medium">Max CP Rating</div>
            </GlowCard>
            <GlowCard className="aspect-square flex flex-col items-center justify-center text-center" glowColor="accent">
              <Hash className="mb-4 text-accent" size={32} />
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-foreground/40 font-medium">Projects Built</div>
            </GlowCard>
            <GlowCard className="aspect-square flex flex-col items-center justify-center text-center">
              <Trophy className="mb-4 text-primary" size={32} />
              <div className="text-3xl font-bold text-white">Top 12%</div>
              <div className="text-sm text-foreground/40 font-medium">LeetCode Global</div>
            </GlowCard>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CompetitiveProgramming() {
  return (
    <section id="cp" className="py-24 bg-white/[0.02]">
      <Container>
        <SectionHeading subtitle="Metrics" className="text-center">Competitive Stats</SectionHeading>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cpStats.map((stat, i) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-l-4"
              style={{ borderLeftColor: stat.color }}
            >
              <div className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-2">
                {stat.platform}
              </div>
              <div className="text-4xl font-black text-white mb-1">{stat.rating}</div>
              <div className="text-sm font-medium" style={{ color: stat.color }}>
                {stat.rank}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
