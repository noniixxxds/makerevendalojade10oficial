import React from 'react';
import { CHECKOUT_LINK } from '../constants';
import { CreditCard } from 'lucide-react';

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-light shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden flex items-center justify-between px-4">
      <div className="flex flex-col justify-center">
         <span className="text-[10px] text-gray-400 line-through leading-none mb-1">De R$ 17,99</span>
         
         <div className="flex flex-col leading-tight">
             <div className="flex items-center gap-1 mb-1">
                <span className="text-base font-black text-brand-pink">R$ 7,90</span>
                <span className="text-[10px] text-gray-500 font-bold">à vista</span>
                <span className="text-[8px] text-green-600 font-bold bg-green-100 px-1 rounded ml-1 whitespace-nowrap">(maior economia)</span>
             </div>
             <div className="flex items-center gap-1">
                {/* PREÇO PARCELADO GIGANTE E COM BORDA GROSSA */}
                <span className="text-xl font-black text-[#FF0000] bg-[#FFFF00] px-2 py-0.5 rounded border-[3px] border-black shadow-sm transform -rotate-1 inline-block leading-none">
                  2x R$ 3,95 🔥🔥
                </span>
                <CreditCard size={12} className="text-black ml-0.5" />
             </div>
         </div>
      </div>
      
      <a href={CHECKOUT_LINK} className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg animate-heartbeat flex items-center gap-2 text-sm max-w-[190px] justify-center border-2 border-green-400">
         {/* Ícone WhatsApp Maior e com Sombra */}
         <img src="https://i.postimg.cc/6QxZ2mxg/download-removebg-preview.png" alt="WhatsApp" className="w-8 h-8 drop-shadow-sm filter brightness-110" />
        QUERO AGORA
      </a>
    </div>
  );
};