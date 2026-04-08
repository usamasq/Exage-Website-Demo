import { UserRound, Globe, Zap, Database } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: UserRound,
    title: "Customer-centered",
    description: "Radical empathy driving every digital interaction and interface decision with precision.",
    accent: "purple"
  },
  {
    icon: Globe,
    title: "Impact-cognizant",
    description: "Sustainable scale that respects global ecosystems and ethical boundaries for longevity.",
    accent: "cyan"
  },
  {
    icon: Zap,
    title: "Digital that works",
    description: "High-performance engineering that eliminates friction from complex enterprise systems.",
    accent: "purple"
  },
  {
    icon: Database,
    title: "Data-driven",
    description: "Transforming raw noise into precise, actionable intelligence for exponential growth.",
    accent: "cyan"
  }
];

export default function Features() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-8 lg:px-24 bg-surface-container-lowest relative z-20 md:-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="tactile-realism p-8 md:p-12 transition-all duration-500 group relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${feature.accent === 'purple' ? 'bg-primary/5' : 'bg-secondary/5'} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <div className="mb-10 relative">
              <feature.icon className={`w-12 h-12 ${feature.accent === 'purple' ? 'text-primary' : 'text-secondary'} text-glow`} />
            </div>
            <h3 className="font-headline text-2xl font-extrabold mb-5 uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-outline text-sm leading-relaxed font-body font-medium">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
