import { motion } from 'motion/react';
import { Container, SectionHeading, GlowCard } from '@/components/common';
import { skills, experience } from '@/data/portfolio';
import * as Icons from 'lucide-react';

import { TagCloud } from '@/components/widgets/TagCloud';

const allSkillNames = skills.flatMap(group => group.items.map(item => item.name));

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.01] overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading subtitle="Capabilities">Technical Matrix</SectionHeading>
            <div className="grid gap-8 sm:grid-cols-2">
              {skills.map((group, groupIdx) => (
                <div key={group.category} className="preserve-3d">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-6 border-b border-primary/20 pb-2">
                    {group.category}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((skill, i) => {
                      const IconComponent = (Icons as any)[skill.icon] || Icons.Code2;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (groupIdx * 0.1) + (i * 0.05) }}
                          className="flex items-center gap-3 group cursor-default"
                        >
                          <div className="h-6 w-6 rounded-lg bg-white/5 flex items-center justify-center text-primary/40 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                             <IconComponent size={12} />
                          </div>
                          <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center perspective-1000"
          >
            <TagCloud tags={[...allSkillNames, "Engineering", "Architecture", "Systems", "Scalability", "Security"]} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function Experience() {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background structural lines */}
       <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent -z-10" />
       
       {/* Floating 3D Nodes */}
       <div className="absolute inset-0 -z-20 pointer-events-none">
          {[...Array(5)].map((_, i) => (
             <motion.div
               key={i}
               animate={{ 
                 y: [0, -100, 0],
                 x: [0, i % 2 === 0 ? 50 : -50, 0],
                 rotate: [0, 360]
               }}
               transition={{ 
                 duration: 15 + i * 5, 
                 repeat: Infinity,
                 ease: "linear"
               }}
               className="absolute glass h-12 w-12 rounded-lg border-primary/10 opacity-20"
               style={{ 
                 top: `${20 * i}%`, 
                 left: `${i * 15}%`,
               }}
             />
          ))}
       </div>

      <Container>
        <SectionHeading subtitle="Timeline" className="text-center">Engineering Journey</SectionHeading>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="absolute left-[-40px] md:left-[-60px] top-10 w-20 h-px bg-primary/20 hidden md:block" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 rounded-full glass border border-primary/30 flex items-center justify-center z-10 backdrop-blur-3xl">
                 <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#3b82f6]" />
              </div>
              
              <GlowCard className="p-10 border-white/5 bg-[#0a0f1d]/40" glowColor={i % 2 === 0 ? "primary" : "accent"}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tight">{exp.role}</h3>
                    <div className="text-lg font-bold text-gradient uppercase tracking-widest">{exp.company}</div>
                  </div>
                  <div className="px-6 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-black text-white/30 uppercase tracking-[0.2em] whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="grid gap-4 md:grid-cols-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-4 text-foreground/50 text-sm leading-relaxed p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
