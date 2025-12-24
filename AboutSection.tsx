
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
         <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
               <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-16 bg-grey"></div>
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-navy">The StratNex Methodology</h2>
               </div>
               <h3 className="font-luxury text-5xl md:text-6xl text-navy mb-12 leading-tight">Institutional Stability in Tanzanian Assets.</h3>
               <p className="text-xl text-slate-500 leading-relaxed mb-10 font-light">
                 StratNex Properties is the specialized acquisition division of StratNex Consulting. We bridge the gap between global principals and verified local opportunities through rigorous advisory and technical due diligence.
               </p>
               <p className="text-lg text-slate-500 leading-relaxed mb-16 font-light">
                 Our mandate-driven approach ensures that every project—whether an industrial warehouse, a CBD commercial site, or a prospecting license—undergoes a comprehensive ministry-level verification process. We facilitate legal certainty and investment protection.
               </p>
               
               <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-16">
                  {[
                    { label: 'Institutional Sourcing', val: 'Direct Mandate' },
                    { label: 'Due Diligence', val: 'Ministry Level' },
                    { label: 'Agri Ecosystem', val: 'Connected' },
                    { label: 'Regulatory Compliance', val: 'Guaranteed' },
                  ].map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-xl font-bold text-navy mb-3 uppercase tracking-tighter">{stat.val}</div>
                      <div className="text-[10px] font-bold text-grey uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-navy opacity-5 -skew-x-12 translate-x-10 translate-y-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                 alt="StratNex Properties Institutional Advisory Office" 
                 className="relative z-10 w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
         </div>
      </div>
    </section>
  );
};
