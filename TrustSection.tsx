import React from 'react';
import { ShieldCheck, FileCheck, Scale, Landmark } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-navy" />,
      title: "Physical Asset Verification",
      desc: "Every industrial site and commercial plot is physically inspected by our engineering team to confirm boundaries."
    },
    {
      icon: <FileCheck className="w-10 h-10 text-navy" />,
      title: "Ministry-Level Searches",
      desc: "Direct confirmation of title validity with the Ministry of Lands to ensure zero encumbrances on the asset."
    },
    {
      icon: <Scale className="w-10 h-10 text-navy" />,
      title: "Legal Risk Mitigation",
      desc: "Mandates are backed by thorough contractual due diligence, protecting capital from speculative risks."
    },
    {
      icon: <Landmark className="w-10 h-10 text-navy" />,
      title: "TIC & ZIPA Regulatory Link",
      desc: "Direct advisory for foreign investors requiring compliance with Investment Center incentives."
    }
  ];

  return (
    <section id="advisory" className="py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-2/5">
             <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-grey"></div>
                <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-navy">Why StratNex Advisory?</span>
             </div>
             <h2 className="font-luxury text-5xl text-navy mb-12 leading-tight uppercase tracking-tighter">Institutional Verification Standards.</h2>
             <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
               StratNex Properties provides a professional alternative to speculative agencies. In an environment where title security is paramount, we offer professional, data-backed consulting to protect your institutional capital.
             </p>
             <div className="p-10 bg-slate-50 border-l-4 border-navy">
                <p className="text-sm font-bold uppercase tracking-widest text-navy mb-4">The Agri-Link Protocol</p>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Strategic land mandates often involve agricultural potential. We provide direct links to StratNex Agri for feasibility and large-scale industrial farming integration.
                </p>
             </div>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-1px bg-slate-100 border border-slate-100">
            {points.map((point, index) => (
              <div key={index} className="p-12 bg-white transition-all hover:bg-slate-50 group">
                <div className="mb-10 group-hover:scale-110 transition-transform">{point.icon}</div>
                <h3 className="font-luxury text-2xl text-navy mb-6 uppercase tracking-tighter">{point.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};