import React, { useState, useEffect } from 'react';
import { LayoutGrid, X, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-100' : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* INSTITUTIONAL LOGO */}
        <div className="flex items-center gap-5 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-12 h-12 border-2 border-navy flex items-center justify-center transition-all group-hover:bg-navy group-hover:text-white">
            <span className="font-luxury font-bold text-xl">SN</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter uppercase leading-none text-navy">StratNex</span>
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-grey mt-1">Properties Division</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {['advisory', 'sectors', 'about'].map((id) => (
            <button 
              key={id} 
              onClick={() => scrollTo(id)}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-navy/80 hover:text-navy transition-all border-b-2 border-transparent hover:border-grey pb-1"
            >
              {id.toUpperCase()}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('mandate-portal')}
            className="bg-navy text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-grey transition-all shadow-xl"
          >
            Initiate Mandate
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-navy p-2" onClick={() => setIsMobileMenuOpen(true)}>
          <LayoutGrid className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-navy z-[200] transition-transform duration-700 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex justify-between items-center border-b border-white/10">
          <div className="w-12 h-12 border-2 border-grey flex items-center justify-center text-white font-luxury">SN</div>
          <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-10 h-10 text-white" /></button>
        </div>
        <div className="flex flex-col p-12 gap-12">
          {['advisory', 'mandate-portal', 'sectors', 'about'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} className="text-white text-4xl font-luxury text-left uppercase tracking-widest">{id.replace('-', ' ')}</button>
          ))}
        </div>
      </div>
    </nav>
  );
};