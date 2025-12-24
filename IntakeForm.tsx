import React, { useState } from 'react';
import { Send, CheckCircle2, Building2, Factory, Landmark, MapPin, ChevronRight, Briefcase, Lock } from 'lucide-react';

export const IntakeForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    entityName: '',
    purpose: 'Direct Acquisition / Buy',
    assetClass: '',
    spec: '',
    phone: ''
  });

  const handleNext = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const assetClasses = [
    { id: 'industrial', label: 'Industrial (Godowns & Lands)', icon: <Factory className="w-5 h-5" /> },
    { id: 'commercial', label: 'Commercial (Land & Offices)', icon: <Building2 className="w-5 h-5" /> },
    { id: 'residential', label: 'Residential (Luxury Estates)', icon: <Landmark className="w-5 h-5" /> },
    { id: 'mining', label: 'Mining Rights & Permits', icon: <MapPin className="w-5 h-5" /> }
  ];

  const specs: Record<string, string[]> = {
    industrial: ['Godowns / Warehousing', 'Industrial Zoned Land', 'Manufacturing Site'],
    commercial: ['Commercial Land (Prime CBD)', 'Grade-A Office Space', 'Retail Development Plot'],
    residential: ['Executive Stand-alone Villa', 'Luxury Apartment / Penthouse', 'Gated Community Project'],
    mining: ['Gold Rights (PL/ML)', 'Graphite / Critical Minerals', 'Mining Equipment Logistics']
  };

  return (
    <section id="intake-form" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#142c40 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              {/* Removed italic per brand guidelines */}
              <h2 className="font-luxury text-5xl text-[#142c40] mb-8 leading-tight uppercase tracking-tighter">Private <br/><span className="text-[#A6A8AB]">Mandate Intake</span></h2>
              <p className="text-base text-slate-500 leading-relaxed mb-12 font-light">
                Our acquisition desk operates on exclusive mandates only. We do not participate in speculative browsing. Initiate your mandate below to begin the strategic sourcing process.
              </p>
              
              <div className="p-10 border border-slate-200 bg-white shadow-sm border-l-4 border-[#142c40] rounded-none">
                 <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-5 h-5 text-[#A6A8AB]" />
                    {/* Removed italic per brand guidelines */}
                    <h4 className="font-luxury text-xl text-[#142c40] uppercase tracking-wide">Dossier Privacy</h4>
                 </div>
                 <p className="text-sm text-slate-600 mb-8 leading-relaxed font-light">
                   Legal dossiers, survey maps, and site valuations are classified assets and are only released once a mandate is configured and verified.
                 </p>
                 <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-[#142c40] uppercase tracking-[0.3em] border-b-2 border-[#A6A8AB] pb-2 hover:text-[#A6A8AB] transition-all">
                   Consult Senior Partner <ChevronRight className="w-3 h-3" />
                 </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-12 md:p-16 shadow-2xl border border-slate-100 rounded-none">
            <div className="mb-12 flex items-center justify-between border-b border-slate-100 pb-10">
               <div>
                 {/* Removed italic per brand guidelines */}
                 <h3 className="font-luxury text-3xl text-[#142c40] mb-2 uppercase tracking-tight">Mandate Configurator</h3>
                 <p className="text-[10px] text-[#A6A8AB] font-bold uppercase tracking-[0.4em]">Section {step} of 4</p>
               </div>
               <div className="hidden sm:block">
                 <Briefcase className="w-10 h-10 text-slate-100" />
               </div>
            </div>

            <div className="min-h-[380px]">
              {step === 1 && (
                <div className="animate-fade-in">
                  <div className="mb-12">
                    <label className="block text-[10px] font-bold text-[#142c40] uppercase tracking-widest mb-4">Principal Identity / Legal Entity</label>
                    <input 
                      type="text" 
                      className="w-full border-b-2 border-slate-100 focus:border-[#142c40] py-5 text-2xl font-light outline-none transition-all bg-transparent placeholder:text-slate-200 rounded-none" 
                      placeholder="e.g. Investment Fund or Private Office"
                      onChange={(e) => setFormData({...formData, entityName: e.target.value})}
                    />
                  </div>
                  
                  <label className="block text-[10px] font-bold text-[#142c40] uppercase tracking-widest mb-8">Transaction Scope</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Direct Acquisition', 'Joint Venture (JV)'].map(opt => (
                      <button 
                        key={opt}
                        onClick={() => handleNext('purpose', opt)}
                        className="p-8 border border-slate-100 hover:border-[#142c40] hover:bg-slate-50 text-left text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#142c40] transition-all flex justify-between items-center group rounded-none"
                      >
                        {opt}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-in">
                  <label className="block text-[10px] font-bold text-[#142c40] uppercase tracking-widest mb-10">Select Asset Portfolio Sector</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {assetClasses.map(ac => (
                      <button 
                        key={ac.id}
                        onClick={() => handleNext('assetClass', ac.id)}
                        className="p-10 border border-slate-100 hover:border-[#A6A8AB] flex flex-col gap-6 text-left transition-all group bg-white hover:shadow-lg rounded-none"
                      >
                        <div className="w-14 h-14 bg-slate-50 group-hover:bg-[#142c40] group-hover:text-white text-[#142c40] flex items-center justify-center transition-colors rounded-none">
                          {ac.icon}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#142c40]">
                          {ac.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">← Back to Identity</button>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fade-in">
                  <label className="block text-[10px] font-bold text-[#142c40] uppercase tracking-widest mb-10">Requirement Classification</label>
                  <div className="grid grid-cols-1 gap-4">
                    {specs[formData.assetClass]?.map(s => (
                      <button 
                        key={s}
                        onClick={() => handleNext('spec', s)}
                        className="w-full p-8 border border-slate-100 hover:border-[#142c40] hover:bg-slate-50 text-left text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 transition-all flex justify-between items-center group rounded-none"
                      >
                        {s}
                        <div className="w-2 h-2 rounded-none bg-[#A6A8AB] opacity-0 group-hover:opacity-100 transition-all"></div>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(2)} className="mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">← Back to Sector</button>
                </div>
              )}

              {step === 4 && (
                <div className="animate-fade-in">
                  <label className="block text-[10px] font-bold text-[#142c40] uppercase tracking-widest mb-6">Confidential Advisor Link (WhatsApp/Signal)</label>
                  {/* Removed italic per brand guidelines */}
                  <p className="text-sm text-slate-400 mb-12 leading-relaxed font-light uppercase tracking-wide">Market intelligence and legal dossiers are delivered via secured advisory channels only. We will contact the provided link within 2 hours.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="tel" 
                      className="flex-1 border-b-2 border-slate-100 px-6 py-6 focus:border-[#142c40] outline-none transition-all text-xl tracking-[0.2em] font-light rounded-none bg-transparent" 
                      placeholder="+255..."
                      autoFocus
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <button 
                      onClick={() => setStep(5)}
                      className="bg-[#142c40] text-white px-12 py-6 font-bold uppercase tracking-[0.3em] text-[10px] transition-all hover:bg-[#A6A8AB] shadow-xl rounded-none"
                    >
                      Log Mandate
                    </button>
                  </div>
                  <button onClick={() => setStep(3)} className="mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">← Back to Spec</button>
                </div>
              )}

              {step === 5 && (
                <div className="text-center py-16 animate-fade-in">
                  <div className="w-24 h-24 bg-slate-50 text-[#142c40] rounded-none flex items-center justify-center mx-auto mb-12 border border-slate-100">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  {/* Removed italic per brand guidelines */}
                  <h3 className="font-luxury text-4xl text-[#142c40] mb-6 uppercase tracking-tight">Mandate Executed</h3>
                  <p className="text-base text-slate-500 mb-12 max-w-sm mx-auto font-light leading-relaxed">
                    Strategy for <strong className="text-[#142c40] font-bold">{formData.spec}</strong> has been assigned to a Senior Partner. Check your secure channel for initial dossier matching.
                  </p>
                  <button 
                    onClick={() => setStep(1)} 
                    className="text-[10px] font-bold text-[#A6A8AB] uppercase tracking-[0.4em] border-b-2 border-[#A6A8AB] pb-2 hover:text-[#142c40] hover:border-[#142c40] transition-all rounded-none"
                  >
                    Configure New Acquisition
                  </button>
                </div>
              )}
            </div>

            {/* Visual Progress Engine */}
            {step < 5 && (
              <div className="mt-20 pt-12 border-t border-slate-50">
                <div className="flex justify-between mb-5">
                   <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em]">Mandate Logic Execution</span>
                   <span className="text-[9px] font-bold text-[#142c40] uppercase tracking-[0.4em]">{Math.round((step/4)*100)}%</span>
                </div>
                <div className="h-[1px] bg-slate-100 w-full overflow-hidden">
                  <div className="h-full bg-[#A6A8AB] transition-all duration-1000 ease-in-out" style={{ width: `${(step/4)*100}%` }}></div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};