import React from 'react';
import { CHECKOUT_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-light shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden flex items-center justify-between px-6">
      <div className="flex flex-col">
         <span className="text-xs text-gray-400 line-through">De R$ 17,99</span>
         <span className="text-xl font-bold text-brand-pink">Por R$ 3,99</span>
         <span className="text-[10px] text-green-600 font-extrabold flex items-center animate-pulse"><span className="mr-1">📲</span> Chega no Zap</span>
      </div>
      <a href={CHECKOUT_LINK} className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg animate-pulse flex items-center gap-2">
        <MessageCircle size={24} fill="white" className="text-white" />
        QUERO AGORA
      </a>
    </div>
  );
};