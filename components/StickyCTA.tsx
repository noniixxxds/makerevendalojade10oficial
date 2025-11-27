import React from 'react';
import { CHECKOUT_LINK } from '../constants';
import { CreditCard } from 'lucide-react';

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-light shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden flex items-center justify-between px-4">
      <div className="flex flex-col justify-center">
         <span className="text-[10px] text-gray-400 line-through leading-none mb-1">De R$ 17,99</span>
         
         <div className="flex flex-col leading-tight">
             <div className="flex items-center gap-1">
                <span className="text-base font-black text-brand-pink">R$ 7,90</span>
                <span className="text-[10px] text-gray-500 font-bold">à vista</span>
                <span className="text-[8px] text-green-600 font-bold bg-green-100 px-1 rounded ml-1 whitespace-nowrap">(maior economia)</span>
             </div>
             <div className="flex items-center gap-1">
                <span className="text-base font-black text-[#FFD700]">2x R$ 3,95</span>
                <CreditCard size={10} className="text-[#FFD700]" />
             </div>
         </div>
      </div>
      
      <a href={CHECKOUT_LINK} className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg animate-pulse flex items-center gap-2 text-sm max-w-[180px] justify-center">
         {/* Ícone SVG WhatsApp Oficial */}
         <img src="https://i.postimg.cc/6QxZ2mxg/download-removebg-preview.png" alt="WhatsApp" className="w-6 h-6" />
        QUERO AGORA
      </a>
    </div>
  );
};