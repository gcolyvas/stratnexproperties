import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-100' : 'bg-transparent py-8 md:py-10'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        {/* INSTITUTIONAL LOGO */}
        <div className="flex items-center gap-3 sm:gap-5 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-navy flex items-center justify-center transition-all group-hover:bg-navy group-hover:text-white">
            <span className="font-luxury font-bold text-lg sm:text-xl">SN</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tighter uppercase leading-none text-navy">StratNex</span>
            <span className="text-[7px] sm:text-[9px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-grey mt-0.5 sm:mt-1">StratNex Consulting Division</span>
          </div>
        </div>

        {/* Desktop Links - Hidden on Mobile/Tablet */}
        <div className="hidden lg:flex items-center gap-10">
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

        {/* Mobile/Tablet View - Only CTA Button shown, no hamburger menu */}
        <div className="lg:hidden">
          <button 
            onClick={() => scrollTo('mandate-portal')}
            className="bg-navy text-white px-4 sm:px-6 py-3 sm:py-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-grey transition-all shadow-lg"
          >
            Initiate Mandate
          </button>
        </div>
      </div>
    </nav>
  );
};