import { motion } from 'motion/react';
import { Container, SectionHeading, Button } from '@/components/common';
import { Mail, Github, Linkedin, Twitter, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading subtitle="Connect">Start a Conversation</SectionHeading>
            <p className="text-foreground/60 text-lg mb-10 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, my inbox is open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/40">Email</div>
                  <div className="text-white font-medium">arpit899836@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/40">Socials</div>
                  <div className="flex gap-4 mt-1">
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Github size={18} /></a>
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Twitter size={18} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <Button className="w-full h-14 text-base gap-2">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span className="font-mono font-bold text-xs">AP</span>
          </div>
          <span className="font-mono text-sm font-bold tracking-tighter opacity-60">arpit.portfolio.v1</span>
        </div>
        
        <div className="text-sm text-foreground/40">
          © {new Date().getFullYear()} Arpit. Designed with precision.
        </div>
        
        <div className="flex gap-4">
          {['LinkedIn', 'GitHub', 'Twitter'].map(social => (
            <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">
              {social}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
