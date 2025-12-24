import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export const Hero: React.FC<{onCtaClick: () => void}> = ({ onCtaClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-24 overflow-hidden">
      {/* Background Decor - Institutional Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#142c40 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-6 mb-12 animate-fade-in">
            <div className="h-px w-16 bg-grey"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-navy">Asset Acquisition Mandate Desk</span>
          </div>
          
          <h1 className="font-luxury text-6xl md:text-8xl lg:text-9xl text-navy leading-[1.05] mb-14 tracking-tighter">
            Institutional <br/> Property <br/> Advisory.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mb-16 leading-relaxed font-light">
            Professional sourcing and legal due diligence for Industrial Godowns, Commercial Land, and Mining Licenses in Tanzania. We prioritize contractual stability and institutional transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mb-32">
            <button 
              onClick={onCtaClick}
              className="bg-navy text-white px-14 py-8 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-grey transition-all shadow-2xl flex items-center justify-center gap-4"
            >
              Initiate Acquisition Mandate <ChevronRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('advisory')?.scrollIntoView({behavior:'smooth'})}
              className="border border-slate-200 text-navy px-14 py-8 text-[11px] font-bold uppercase tracking-[0.4em] hover:border-navy transition-all"
            >
              Due Diligence Protocol
            </button>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-slate-100 pt-16">
            {[
              { label: 'Ministry Verification', icon: <ShieldCheck className="w-5 h-5 text-grey" /> },
              { label: 'Survey Confirmation', icon: <ShieldCheck className="w-5 h-5 text-grey" /> },
              { label: 'Dossier Disclosure', icon: <ShieldCheck className="w-5 h-5 text-grey" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {item.icon}
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};