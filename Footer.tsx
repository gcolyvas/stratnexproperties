import React from 'react';

interface FooterProps {
  onMandateClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onMandateClick }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Division */}
          <div className="lg:col-span-1">
            <div className="mb-12">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 border-2 border-navy flex items-center justify-center font-luxury font-bold text-navy text-xl">
                   SN
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tighter text-navy uppercase leading-none">
                      StratNex
                    </span>
                    <span className="text-[9px] font-bold text-grey tracking-[0.3em] mt-1 uppercase">
                      Properties Division
                    </span>
                 </div>
               </div>
               <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-[0.4em] font-bold max-w-xs">
                Institutional Asset Advisory and acquisition mandates across East Africa.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-navy font-bold text-[11px] uppercase tracking-[0.5em] mb-12 border-b border-slate-50 pb-6">Ecosystem</h5>
            <ul className="space-y-6">
              <li><a href="https://stratnexconsulting.com/services/stratnex-properties" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] hover:text-navy transition-all">Strategic Properties</a></li>
              <li><a href="https://stratnexconsulting.com/services/stratnex-agri" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] hover:text-navy transition-all">StratNex Agri</a></li>
              <li><a href="https://stratnexconsulting.com/services/stratnex-digital" className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] hover:text-navy transition-all">Digital Advisory</a></li>
            </ul>
          </div>

          {/* Sourcing */}
          <div>
            <h5 className="text-navy font-bold text-[11px] uppercase tracking-[0.5em] mb-12 border-b border-slate-50 pb-6">Mandates</h5>
            <ul className="space-y-6">
              <li><span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Industrial Godowns</span></li>
              <li><span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Mining ML/PL Rights</span></li>
              <li><span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Grade-A Office Sourcing</span></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-navy font-bold text-[11px] uppercase tracking-[0.5em] mb-12 border-b border-slate-50 pb-6">Engagement</h5>
            <button 
              onClick={onMandateClick} 
              className="w-full bg-navy text-white text-[10px] font-bold uppercase tracking-[0.4em] py-7 px-8 hover:bg-grey transition-all shadow-xl"
            >
               Initiate Mandate
            </button>
          </div>
        </div>

        <div className="pt-20 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.6em]">
            © {new Date().getFullYear()} StratNex Properties | A StratNex Consulting Division
          </p>
        </div>
      </div>
    </footer>
  );
};