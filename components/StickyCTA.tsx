
import React from 'react';
import { SUPPORT_LINK } from '../constants';

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-light shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden flex items-center justify-between px-4">
      <div className="flex flex-col justify-center">
         <div className="flex flex-col leading-tight items-start">
             <span className="text-sm font-bold text-gray-800">
                Kits de Revenda 💄
             </span>
             <span className="text-[10px] text-brand-pink font-bold uppercase tracking-wider">
                Consultoria Grátis
             </span>
         </div>
      </div>
      
      <a href={SUPPORT_LINK} className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg animate-heartbeat flex items-center gap-2 text-sm justify-center border-2 border-green-400">
         <svg viewBox="0 0 33 33" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6 0C7.4 0 0 7.5 0 16.7c0 3 .8 5.9 2.3 8.4L.6 33l8.1-2.1c2.4 1.3 5.1 2 7.9 2 9.2 0 16.6-7.5 16.6-16.7S25.8 0 16.6 0zm0 29.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.2 1.4 1.4-5.1-.3-.5C3.7 21.2 2.8 19 2.8 16.7c0-7.6 6.2-13.9 13.8-13.9s13.8 6.2 13.8 13.9-6.2 13.1-13.8 13.1zm7.6-10.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-1.7-.9-3.2-2.1-4.3-4.2-.3-.5 0-.8.2-1 .2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.8c.3.4 3.2 5 7.9 7 3.8 1.6 4.6 1.3 5.4 1.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.2-.2-.6-.3-1-.5z"/>
         </svg>
         SABER MAIS DOS KITS
      </a>
    </div>
  );
};
