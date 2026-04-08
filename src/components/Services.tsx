import { BrainCircuit, Cloud, Brush, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section className="py-40 px-8 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="mb-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="font-label text-primary font-bold tracking-[0.4em] uppercase mb-4 block text-xs">Capabilities</span>
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter">THE SERVICE STACK</h2>
        </div>
        <p className="text-outline max-w-md font-body text-lg border-l border-primary/30 pl-8 py-2">
          Integrated solutions designed to bridge the gap between legacy operations and future-ready digital platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] relative z-10">
        {/* Neural AI Integration (Featured) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-8 md:row-span-2 group relative overflow-hidden glass-panel border border-white/10"
        >
          <img 
            alt="Neural AI Integration" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-110 transition-transform duration-1000" 
            src="https://picsum.photos/seed/neural-ai/1200/800"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/50"></div>
          <div className="absolute top-10 right-10">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary/10 backdrop-blur-xl border border-primary/30 shadow-[0_0_20px_rgba(225,182,255,0.2)]">
              <BrainCircuit className="text-primary w-10 h-10 animate-pulse" />
            </div>
          </div>
          <div className="relative h-full p-16 flex flex-col justify-end">
            <h3 className="font-headline text-5xl font-bold mb-6 tracking-tight leading-none text-white drop-shadow-lg">NEURAL AI <br /> INTEGRATION</h3>
            <p className="text-outline/90 max-w-lg mb-10 text-lg leading-relaxed font-body">Deploying proprietary LLMs and machine learning frameworks to automate high-level decision making at the edge.</p>
            <div className="flex items-center gap-6">
              <div className="w-24 h-[1px] bg-primary shadow-[0_0_10px_#e1b6ff]"></div>
              <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">Advanced Logic Frameworks</span>
            </div>
          </div>
        </motion.div>

        {/* Cloud Architecture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 md:row-span-2 group relative overflow-hidden bg-surface-container-high border border-white/5"
        >
          <img 
            alt="Cloud Architecture" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" 
            src="https://picsum.photos/seed/cloud-arch/800/1200"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-black/80"></div>
          <div className="relative h-full p-12 flex flex-col justify-between">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-[0_0_15px_rgba(0,218,243,0.2)]">
              <Cloud className="text-secondary w-8 h-8" />
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold text-white mb-6 leading-tight">CLOUD <br /> ARCHITECTURE</h3>
              <p className="text-outline mb-12 text-sm leading-relaxed font-body">Resilient, serverless ecosystems scaled for global enterprise demand using hyper-converged infrastructure.</p>
              <div className="flex items-center justify-between group/btn border-t border-outline/10 pt-8">
                <span className="font-label text-xs tracking-widest uppercase text-secondary/80 font-bold">Scale Ecosystem</span>
                <ArrowUpRight className="text-secondary group-hover/btn:translate-x-2 transition-transform w-5 h-5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Design */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-6 group relative overflow-hidden glass-panel border border-white/5"
        >
          <img 
            alt="Product Design" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-soft-light group-hover:scale-110 transition-transform duration-700" 
            src="https://picsum.photos/seed/product-design/1000/600"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
          <div className="p-10 h-full flex items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-[10px] text-primary uppercase tracking-[0.4em] font-label font-bold mb-3">HCI Optimization</p>
              <h4 className="font-headline font-extrabold text-2xl text-on-surface mb-3 uppercase tracking-tight">Product Design</h4>
              <p className="text-xs text-outline font-body max-w-xs">Creating seamless digital-physical interfaces that elevate the human experience through cognitive design.</p>
            </div>
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center glass-panel group-hover:border-primary/50 transition-colors">
              <Brush className="text-primary w-8 h-8 opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </motion.div>

        {/* Security Matrix */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-6 group relative overflow-hidden glass-panel border border-white/5"
        >
          <img 
            alt="Security Matrix" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen group-hover:scale-110 transition-transform duration-700" 
            src="https://picsum.photos/seed/security/1000/600"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent"></div>
          <div className="p-10 h-full flex items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-[10px] text-tertiary uppercase tracking-[0.4em] font-label font-bold mb-3">Zero-Trust Protocol</p>
              <h4 className="font-headline font-extrabold text-2xl text-on-surface mb-3 uppercase tracking-tight">Security Matrix</h4>
              <p className="text-xs text-outline font-body max-w-xs">Next-generation cryptographic shields and proactive threat intelligence for sovereign data protection.</p>
            </div>
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center glass-panel group-hover:border-tertiary/50 transition-colors">
              <ShieldCheck className="text-tertiary w-8 h-8 opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
