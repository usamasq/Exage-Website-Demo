import { Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="py-40 px-8 lg:px-24 bg-surface-container-lowest relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="font-label text-primary font-bold tracking-[0.4em] uppercase mb-6 text-sm block">Transmission Channel</span>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-none">
              READY TO <br /> <span className="text-glow text-primary">ARCHITECT?</span>
            </h2>
            <p className="font-body text-xl text-outline mb-12 leading-relaxed">
              Secure your position in the digital vanguard. Our strategists are standing by to decode your organizational requirements.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Mail className="text-secondary w-5 h-5" />
                </div>
                <span className="font-headline text-lg text-on-surface">strategy@exage.ai</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <span className="font-headline text-lg text-on-surface">Silicon Valley • London • Tokyo</span>
              </div>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="space-y-8">
              <div className="relative group/input">
                <input 
                  type="text" 
                  id="name" 
                  className="peer w-full bg-white/5 border-b border-outline/20 p-4 pt-8 outline-none focus:border-primary transition-colors text-on-surface"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-6 text-outline/60 text-xs uppercase tracking-widest font-label transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary"
                >
                  Full Identity
                </label>
              </div>

              <div className="relative group/input">
                <input 
                  type="email" 
                  id="email" 
                  className="peer w-full bg-white/5 border-b border-outline/20 p-4 pt-8 outline-none focus:border-primary transition-colors text-on-surface"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-6 text-outline/60 text-xs uppercase tracking-widest font-label transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary"
                >
                  Digital Address
                </label>
              </div>

              <div className="relative group/input">
                <select 
                  id="objective" 
                  className="peer w-full bg-white/5 border-b border-outline/20 p-4 pt-8 outline-none focus:border-primary transition-colors text-on-surface appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled></option>
                  <option value="ai">AI Transformation</option>
                  <option value="cloud">Cloud Migration</option>
                  <option value="design">Digital Product Design</option>
                  <option value="strategy">Strategic Consulting</option>
                </select>
                <label 
                  htmlFor="objective" 
                  className="absolute left-4 top-6 text-outline/60 text-xs uppercase tracking-widest font-label transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary"
                >
                  Mission Objective
                </label>
              </div>

              <div className="relative group/input">
                <textarea 
                  id="message" 
                  className="peer w-full bg-white/5 border-b border-outline/20 p-4 pt-8 outline-none focus:border-primary transition-colors text-on-surface min-h-[120px] resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-6 text-outline/60 text-xs uppercase tracking-widest font-label transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary"
                >
                  Detailed Parameters
                </label>
              </div>
            </div>

            <button className="w-full bg-white text-black px-8 py-5 mt-10 font-headline font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-on-primary transition-all relative overflow-hidden group/btn">
              <span className="relative z-10">Transmit Request</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
