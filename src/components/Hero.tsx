import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[921px] flex items-center overflow-hidden px-6 md:px-8 lg:px-20 pt-24 md:pt-0">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cyber-Humanism: A cinematic digital neural network interaction" 
          className="w-full h-full object-cover opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjE45bmruRgR43dWrHUiv2g40jHn0V-7oOpjexBB_mC3dEkyVcdpf9MNOcEwhYHtHxGTRnc5fHp4V5f3Su6FE4rYwTeY8FEgirO3jiDn7GNZxEDgPAvZl1O1EB9jdADQxdsIYBKtpje9YPR_7A9rtsGn4QrGoks0uxZ-x9pvorxIsDz_yBaqH5nEXshE2UoD2j2cMLBv6vKW7Pd5dTNCFXKk6VSwM7OpDkYVg1FIHNqVCr7cklm7jdhGKGiqf6GpSnaiaOHGFau28"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block font-label text-primary font-bold tracking-[0.4em] uppercase mb-6 text-sm"
        >
          Enterprise Evolution
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-on-background mb-8"
        >
          REIMAGINE YOUR <br /> BUSINESS FOR THE <br /> 
          <span className="text-primary text-glow">DIGITAL TOMORROW</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-xl text-outline max-w-2xl mb-12 leading-relaxed"
        >
          Synthesizing cold technical logic with high-impact human creativity to architect the next era of industrial dominance.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <button className="cyber-gradient text-on-primary px-8 md:px-10 py-4 md:py-5 font-headline font-black uppercase tracking-widest text-base md:text-lg hover:shadow-[0_0_30px_rgba(159,0,252,0.4)] transition-all">
            Initiate Strategy
          </button>
          <button className="group flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 border border-outline/20 hover:bg-surface-bright transition-all">
            <span className="font-headline font-bold uppercase tracking-widest text-base md:text-lg">View Portfolio</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform w-5 h-5 md:w-6 md:h-6" />
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent"></div>
        <span className="font-label text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-rl]">Scroll</span>
      </div>
    </section>
  );
}
