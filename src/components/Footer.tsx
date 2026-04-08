import { Share2, Globe, Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface-container-lowest pt-24 pb-12 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          {/* Branding Column */}
          <div className="col-span-2 lg:col-span-2">
            <span className="text-3xl font-black tracking-tighter text-on-background font-headline uppercase block mb-6">EXAGE</span>
            <p className="text-outline text-sm leading-relaxed max-w-xs mb-8">
              Synthesizing intelligence and imagination to build the infrastructures of the future. Registered globally, operating at scale.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-outline/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all" href="#">
                <Share2 className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full border border-outline/20 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all" href="#">
                <Globe className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full border border-outline/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all" href="#">
                <Bot className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="col-span-1">
            <h5 className="font-headline font-bold text-on-surface uppercase tracking-widest text-xs mb-8">Solutions</h5>
            <ul className="space-y-4">
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Neural AI</a></li>
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Cloud Scale</a></li>
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Security Matrix</a></li>
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Edge Compute</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-headline font-bold text-on-surface uppercase tracking-widest text-xs mb-8">Global Impact</h5>
            <ul className="space-y-4">
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Sustainability</a></li>
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Case Studies</a></li>
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Talent Portal</a></li>
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Innovation Hub</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-headline font-bold text-on-surface uppercase tracking-widest text-xs mb-8">Insights</h5>
            <ul className="space-y-4">
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Intelligence Report</a></li>
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Webinars</a></li>
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Whitepapers</a></li>
              <li><a className="text-outline hover:text-primary transition-colors text-sm" href="#">Press Matrix</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-headline font-bold text-on-surface uppercase tracking-widest text-xs mb-8">About</h5>
            <ul className="space-y-4">
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Our Mission</a></li>
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Leadership</a></li>
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Contact</a></li>
              <li><a className="text-outline hover:text-secondary transition-colors text-sm" href="#">Investor Relations</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">
            © 2024 EXAGE SYSTEMS INTERNATIONAL. ALL PROTOCOLS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-outline/60 hover:text-on-surface transition-colors" href="#">Privacy Protocol</a>
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-outline/60 hover:text-on-surface transition-colors" href="#">Terms of Engagement</a>
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-outline/60 hover:text-on-surface transition-colors" href="#">Security Standards</a>
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-outline/60 hover:text-on-surface transition-colors" href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
