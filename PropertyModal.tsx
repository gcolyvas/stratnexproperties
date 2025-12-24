import React, { useState } from 'react';
import { X, Lock, CheckCircle, Smartphone, ShieldAlert, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(phone) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-[#142c40]/95 backdrop-blur-xl"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-full max-w-2xl overflow-hidden animate-fade-in-up shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 rounded-none">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-[#142c40] hover:bg-[#A6A8AB] text-white rounded-none transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 relative bg-slate-100 hidden md:block">
               <img src={property.imageUrl} className="w-full h-full object-cover filter grayscale blur-[4px] scale-110 rounded-none" />
               <div className="absolute inset-0 bg-[#142c40]/70 flex flex-col items-center justify-center p-10 text-center">
                  <div className="bg-white/5 p-8 rounded-none backdrop-blur-md border border-white/10 mb-8">
                    <Lock className="w-12 h-12 text-[#A6A8AB]" />
                  </div>
                  {/* Removed italic per brand guidelines */}
                  <h4 className="font-luxury text-xl text-white mb-4 uppercase tracking-wider">Confidential Asset</h4>
                  <p className="text-[10px] text-[#A6A8AB] uppercase tracking-[0.3em] leading-relaxed">
                    Full disclosure requires principal identification
                  </p>
               </div>
            </div>
            
            <div className="md:col-span-3 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <ShieldAlert className="w-5 h-5 text-[#A6A8AB]" />
                <span className="text-[10px] font-bold text-[#142c40] uppercase tracking-[0.4em]">Restricted Briefing</span>
              </div>
              
              {/* Removed italic per brand guidelines */}
              <h3 className="font-luxury text-3xl text-[#142c40] mb-6 leading-tight">Unlock Dossier: <br/><span className="text-[#A6A8AB]">{property.title}</span></h3>
              
              <p className="text-slate-500 mb-10 leading-relaxed text-sm font-light">
                To protect asset confidentiality and seller privacy, we require a direct advisory link. We will send the full technical briefing and survey map via your secured WhatsApp channel.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-[#142c40] uppercase tracking-widest mb-3">WhatsApp / Signal Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+255 000 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-b-2 border-slate-100 bg-transparent px-0 py-5 focus:border-[#142c40] focus:outline-none transition-all text-xl font-light tracking-widest rounded-none"
                    autoFocus
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#142c40] hover:bg-[#A6A8AB] text-white font-bold py-6 transition-all shadow-xl uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 disabled:opacity-50 rounded-none"
                >
                  {isSubmitting ? 'Authenticating...' : 'Request Private Briefing'} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              
              <div className="mt-10 pt-8 border-t border-slate-50 flex items-center gap-4 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                <CheckCircle className="w-3.5 h-3.5 text-green-600" /> Direct Senior Advisor Response Guaranteed
              </div>
            </div>
          </div>
        ) : (
          <div className="p-16 md:p-24 text-center">
            {/* Using rounded-none for status indicators as well */}
            <div className="w-24 h-24 bg-green-50 rounded-none flex items-center justify-center mx-auto mb-12 border border-green-100 animate-bounce">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            {/* Removed italic per brand guidelines */}
            <h3 className="font-luxury text-4xl text-[#142c40] mb-6">Access Authorized.</h3>
            <p className="text-slate-500 mb-12 leading-relaxed text-lg font-light max-w-md mx-auto">
              Our Senior Advisor has been notified. The digital dossier for <strong className="text-[#142c40] font-bold">{property.title}</strong> will be dispatched to your secure channel shortly.
            </p>
            <button 
              onClick={onClose} 
              className="text-[#A6A8AB] font-bold hover:text-[#142c40] uppercase tracking-[0.4em] text-[10px] border-b-2 border-[#A6A8AB] pb-2 transition-all rounded-none"
            >
              Continue Sourcing Assets
            </button>
          </div>
        )}
      </div>
    </div>
  );
};