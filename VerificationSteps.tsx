
import React from 'react';
import { ArrowDown } from 'lucide-react';

export const VerificationSteps: React.FC = () => {
  const steps = [
    { title: "Physical Verification", desc: "Site visit & boundary check" },
    { title: "Authority Check", desc: "Ward/Village office confirmation" },
    { title: "Ministry Search", desc: "Official title deed verification" },
    { title: "Legal Review", desc: "Encumbrance check by legal team" },
    { title: "Final Dossier", desc: "Issuance of Verified Badge" }
  ];

  return (
    <section id="verification" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h4 className="text-[#A6A8AB] font-bold uppercase tracking-[0.2em] text-xs mb-4">The Standard</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#142c40] mb-6">Our Verification Methodology</h2>
          <div className="w-16 h-1 bg-[#A6A8AB] mx-auto"></div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white p-6 border border-slate-200 shadow-sm md:shadow-none hover:border-[#A6A8AB] transition-colors group rounded-none">
                <div className="w-10 h-10 bg-[#142c40] text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto md:absolute md:-top-5 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:bg-[#A6A8AB] transition-colors rounded-none">
                  {idx + 1}
                </div>
                <div className="text-center pt-2 md:pt-8">
                  <h3 className="text-[#142c40] font-bold text-sm uppercase tracking-wide mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs">{step.desc}</p>
                </div>
                {/* Mobile Arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4 text-slate-300">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          {/* Removed italic per brand guidelines */}
          <div className="inline-block bg-[#142c40] text-white px-8 py-4 text-sm font-light rounded-none">
            "We reject approximately 40% of properties due to failed due diligence."
            <span className="block mt-2 font-bold text-[#A6A8AB] uppercase tracking-widest text-[10px]">— StratNex Consulting Legal Desk</span>
          </div>
        </div>
      </div>
    </section>
  );
};
