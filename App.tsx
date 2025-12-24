import React from 'react';
// Corrected imports: removed "./components/" because your files are in the main folder
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { IntakeForm } from './IntakeForm';
import { TrustSection } from './TrustSection';
import { VerificationSteps } from './VerificationSteps';
import { BuyerSegments } from './BuyerSegments';
import { AboutSection } from './AboutSection';
import { Footer } from './Footer';
import { AIChatWidget } from './AIChatWidget';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* HERO Section */}
        <Hero onCtaClick={() => scrollTo('mandate-portal')} />
        
        {/* Institutional Trust Section */}
        <TrustSection />

        {/* The Intake Form / Mandate Portal */}
        <div id="mandate-portal">
          <IntakeForm />
        </div>
        
        {/* Asset Categories: Strategic SEO blocks */}
        <section id="sectors" className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-slate-400"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#142C40]">Asset Classes</span>
              </div>
              <h2 className="font-luxury text-5xl md:text-6xl text-[#142C40] mb-8 leading-tight">Strategic Sourcing for Industrial and Mining Assets.</h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed">
                We facilitate the direct connection between global institutional capital and high-yield Tanzanian assets. Our expertise covers full regulatory compliance for foreign investors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: 'Industrial Godowns', 
                  desc: 'Verified warehousing facilities and strategic logistics hubs in key transport corridors.',
                  seo: 'Warehouse acquisition in Dar es Salaam.'
                },
                { 
                  title: 'Commercial Land', 
                  desc: 'Prime Grade-A office development sites and retail hospitality land mandates.',
                  seo: 'CBD commercial real estate sourcing.'
                },
                { 
                  title: 'Mining Licenses', 
                  desc: 'Advisory for Prospecting Licenses (PL) and Mining Licenses (ML) within the mineral-rich sectors.',
                  seo: 'Mining rights acquisition and due diligence.'
                },
                { 
                  title: 'Luxury Residential', 
                  desc: 'Exclusive executive villas and penthouses for high-net-worth institutional principals.',
                  seo: 'Premium residential estates for corporate mandates.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-12 bg-white border border-slate-200 hover:border-[#142C40] transition-all group shadow-sm">
                  <h3 className="font-luxury text-2xl text-[#142C40] mb-6 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">{item.desc}</p>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.seo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VerificationSteps />
        <BuyerSegments />
        <AboutSection />
      </main>

      <Footer onMandateClick={() => scrollTo('mandate-portal')} />
      <AIChatWidget />
    </div>
  );
};

export default App;
