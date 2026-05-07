import { motion } from 'motion/react';
import { Container, SectionHeading, GlowCard, Button } from '@/components/common';
import { projects } from '@/data/portfolio';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export function Projects() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <Container>
        <SectionHeading subtitle="Works">Featured Engineering</SectionHeading>
        
        <div className="space-y-32">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-12 lg:grid-cols-2 items-center"
            >
              <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className="perspective-1000 group">
                  <motion.div 
                    whileHover={{ rotateY: i % 2 === 0 ? 5 : -5, rotateX: 5, scale: 1.02 }}
                    className="relative aspect-video glass rounded-3xl overflow-hidden shadow-2xl preserve-3d"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-white/[0.03] text-[10rem] font-black group-hover:text-primary/[0.05] transition-colors select-none">
                      {project.id.toUpperCase()}
                    </div>
                    
                    {/* Floating Tech Stack Overlay */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 max-w-[70%]">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Stats display */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="space-y-2">
                        {project.stats?.map(stat => (
                          <div key={stat} className="flex items-center gap-2">
                            <div className="h-1 w-4 bg-primary rounded-full" />
                            <span className="text-[10px] font-bold text-white/60 uppercase">{stat}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                         <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                            <Github size={18} />
                         </div>
                         <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                            <ExternalLink size={18} />
                         </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className={i % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">{project.title}</h3>
                <p className="text-foreground/50 text-xl mb-8 leading-relaxed font-medium">
                  {project.longDescription || project.description}
                </p>
                <div className="flex gap-6">
                  <Button className="h-12 px-6 rounded-xl">View case study</Button>
                  <Button variant="ghost" className="text-primary hover:text-white group">
                    Live deployment <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48">
          <SectionHeading subtitle="Archive" className="text-center">Secondary Systems</SectionHeading>
          <div className="grid gap-8 md:grid-cols-2">
            {others.map((project) => (
              <GlowCard key={project.id} className="min-h-[220px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                    <Github size={20} className="text-white/20 hover:text-primary cursor-pointer transition-colors" />
                  </div>
                  <p className="text-foreground/50 leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] font-black text-primary/70 uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                  <ExternalLink size={16} className="text-white/40" />
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
