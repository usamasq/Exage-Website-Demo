import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/15 flex justify-between items-center px-8 py-4 max-w-full shadow-[0_60px_60px_0px_rgba(229,226,225,0.06)]">
      <div className="flex items-center gap-12">
        <span className="text-2xl font-black tracking-tighter text-on-background font-headline uppercase">EXAGE</span>
        <div className="hidden md:flex gap-8">
          <a className="font-headline tracking-tight text-sm uppercase text-outline hover:text-on-background transition-colors" href="#">Solutions</a>
          <a className="font-headline tracking-tight text-sm uppercase text-outline hover:text-on-background transition-colors" href="#">Global Impact</a>
          <a className="font-headline tracking-tight text-sm uppercase text-outline hover:text-on-background transition-colors" href="#">Insights</a>
          <a className="font-headline tracking-tight text-sm uppercase text-outline hover:text-on-background transition-colors" href="#">About</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 border-b border-outline/30">
          <Search className="text-outline w-4 h-4" />
          <input 
            className="bg-transparent border-none focus:ring-0 text-xs font-label tracking-widest uppercase ml-2 w-32 placeholder:text-outline/50 outline-none" 
            placeholder="SEARCH MATRIX" 
            type="text"
          />
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 font-headline font-extrabold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all">
          Partner With Us
        </button>
      </div>
    </nav>
  );
}
