import React from 'react';
import { CHECKOUT_LINK } from '../constants';

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-light shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden flex items-center justify-between px-6">
      <div className="flex flex-col">
         <span className="text-xs text-gray-500 line-through">De R$ 17,90</span>
         <span className="text-xl font-bold text-brand-pink">Por R$ 7,99</span>
      </div>
      <a href={CHECKOUT_LINK} className="bg-brand-pink text-white font-bold py-3 px-6 rounded-full shadow-lg animate-pulse">
        QUERO AGORA
      </a>
    </div>
  );
};