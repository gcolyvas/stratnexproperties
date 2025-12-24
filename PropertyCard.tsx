import React from 'react';
import { MapPin, FileText, ShieldCheck, ChevronRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div 
      className="group bg-white border border-slate-100 hover:border-[#142c40] transition-all duration-700 cursor-pointer flex flex-col h-full shadow-sm hover:shadow-2xl rounded-none"
      onClick={() => onClick(property)}
    >
      <div className="relative h-72 overflow-hidden bg-slate-100 rounded-none">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-[#142c40] text-white px-6 py-4 text-[9px] font-bold uppercase tracking-[0.3em] z-10 rounded-none">
          {property.type}
        </div>
        
        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 shadow-xl flex items-center gap-3 border-l-4 border-[#A6A8AB] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 rounded-none">
           <ShieldCheck className="w-4 h-4 text-[#142c40]" />
           <span className="text-[9px] font-bold text-[#142c40] uppercase tracking-widest">Verified Dossier</span>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <div className="mb-8">
           {/* Removed italic per brand guidelines */}
           <h3 className="font-luxury text-2xl text-[#142c40] mb-3 leading-tight group-hover:text-[#A6A8AB] transition-colors">
             {property.title}
           </h3>
           <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              <MapPin className="w-3.5 h-3.5 text-[#A6A8AB]" /> {property.location}
           </div>
        </div>

        <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-50 mb-10">
          <div className="text-center">
             <div className="text-slate-300 text-[9px] font-bold uppercase tracking-widest mb-1.5">Asset Status</div>
             <div className="text-[#142c40] text-[10px] font-bold uppercase tracking-wider">100% Clear</div>
          </div>
          <div className="text-center border-x border-slate-50 px-2">
             <div className="text-slate-300 text-[9px] font-bold uppercase tracking-widest mb-1.5">Investment</div>
             <div className="text-[#142c40] text-[10px] font-bold uppercase tracking-wider">High Yield</div>
          </div>
          <div className="text-center">
             <div className="text-slate-300 text-[9px] font-bold uppercase tracking-widest mb-1.5">Dossier ID</div>
             <div className="text-[#142c40] text-[10px] font-bold uppercase tracking-wider">SN-{property.id.padStart(3, '0')}</div>
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
           <div className="text-xl font-bold text-[#142c40] tracking-tighter">
             ${property.price.toLocaleString()}
           </div>
           
           <button className="flex items-center gap-2 text-[10px] font-bold text-[#142c40] uppercase tracking-[0.2em] hover:text-[#A6A8AB] transition-all border-b-2 border-slate-100 hover:border-[#A6A8AB] pb-1.5 group/btn rounded-none">
             Access Dossier <ChevronRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};