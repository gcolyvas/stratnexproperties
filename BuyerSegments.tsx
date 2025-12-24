import React from 'react';
import { Building2, Globe, TrendingUp, ChevronRight } from 'lucide-react';

export const BuyerSegments: React.FC = () => {
  return (
    <section id="segments" className="py-40 bg-navy text-white relative overflow-hidden">
      {/* Structural Decor */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-grey mb-10">Mandate Execution Targets</h2>
          <h3 className="font-luxury text-5xl md:text-7xl mb-12 leading-tight uppercase tracking-tighter">Strategic Acquisition Segments.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Institutional Investors */}
          <div className="p-16 border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
            <TrendingUp className="w-14 h-14 text-grey mb-10" />
            <h4 className="font-luxury text-3xl mb-8 uppercase tracking-tighter">Institutional Capital</h4>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
              We provide data-driven sourcing for high-yield industrial and commercial portfolios. Supporting TIC and ZIPA compliance for international acquisition mandates and joint ventures.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest"><ChevronRight className="w-4 h-4 text-grey" /> Industrial Logistics Hubs</li>
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest"><ChevronRight className="w-4 h-4 text-grey" /> TIC Incentive Compliance</li>
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest"><ChevronRight className="w-4 h-4 text-grey" /> Mining Rights Advisory</li>
            </ul>
          </div>

          {/* Diaspora Segment */}
          <div className="p-16 border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
            <Globe className="w-14 h-14 text-grey mb-10" />
            <h4 className="font-luxury text-3xl mb-8 uppercase tracking-tighter">Diaspora Advisory</h4>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
              Securing Tanzanian property investment for the global diaspora. We act as the independent professional bridge, bypassing unreliable intermediaries with ministry-verified due diligence.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest"><ChevronRight className="w-4 h-4 text-grey" /> Remote Title Verification</li>
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest"><ChevronRight className="w-4 h-4 text-grey" /> Secure Escrow Structuring</li>
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest"><ChevronRight className="w-4 h-4 text-grey" /> Executive Estate Mandates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};