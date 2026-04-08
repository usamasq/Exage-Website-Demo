import { motion } from 'motion/react';

const impacts = [
  {
    id: "01",
    title: "GLOBAL TALENT SCALE",
    description: "45,000+ specialists across 40 countries operating in synchronized sprints.",
    color: "text-secondary/30"
  },
  {
    id: "02",
    title: "CARBON NEUTRAL OPS",
    description: "Net-zero digital infrastructure by 2026. Efficiency is our primary directive.",
    color: "text-primary/30"
  },
  {
    id: "03",
    title: "QUANTUM READINESS",
    description: "Preparing legacy data structures for the post-classical computing era.",
    color: "text-tertiary/30"
  }
];

export default function Impact() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0b0b0b]" style={{ 
      backgroundImage: `radial-gradient(circle at center, rgba(127, 57, 251, 0.05) 0%, transparent 70%), linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
      backgroundSize: '100% 100%, 40px 40px, 40px 40px'
    }}>
      <div className="absolute inset-0 z-0">
        <img 
          alt="Global Network" 
          className="w-full h-full object-cover opacity-[0.08] mix-blend-screen scale-110 pointer-events-none" 
          src="https://picsum.photos/seed/global-network/1920/1080"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 px-8 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">360° VALUE <br /> GENERATION</h2>
          <div className="space-y-12 pl-4">
            {impacts.map((impact, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-8"
              >
                <span className={`font-headline text-4xl font-black ${impact.color} text-glow min-w-[60px]`}>{impact.id}</span>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 uppercase tracking-tight">{impact.title}</h4>
                  <p className="text-outline text-sm">{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full rounded-full border-[1px] border-outline/20 border-t-primary/50 border-l-secondary/50 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[90%] h-[90%] rounded-full border-[1px] border-outline/10 border-b-tertiary/30 border-r-primary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute inset-4 glass-panel border border-white/10 flex flex-col items-center justify-center text-center p-12 shadow-2xl backdrop-blur-3xl bg-black/40"
          >
            <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
            <span className="font-label text-xs tracking-[0.6em] uppercase mb-4 text-outline/80">Total Impact</span>
            <div className="font-headline text-8xl font-black text-on-background tracking-tighter drop-shadow-2xl">
              <span className="text-primary">$</span>4.2B
            </div>
            <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mt-6 opacity-80">Value Delivered 2023</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
