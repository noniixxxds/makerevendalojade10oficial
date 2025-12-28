
import React from 'react';
import { Globe, ShoppingBag } from 'lucide-react';
import { SUPPLIER_LIST_CHECKOUT } from '../constants';

interface StickyCTAProps {
  onAction?: (e: React.MouseEvent) => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onAction }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-brand-light shadow-[0_-10px_30px_rgba(0,0,0,0.15)] p-3 z-50 md:hidden flex flex-col gap-2.5 pb-5">
      {/* Label superior da barra fixa conforme imagem enviada */}
      <div className="flex items-center justify-between px-1">
         <div className="flex flex-col leading-tight items-start">
             <span className="text-[13px] font-black text-gray-800 tracking-tight flex items-center gap-1">
                Kits de Revenda 💄
             </span>
             <span className="text-[10px] text-brand-pink font-black uppercase tracking-widest">
                ACESSO LIBERADO
             </span>
         </div>
         <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5 overflow-hidden">
               <img className="inline-block h-4 w-4 rounded-full ring-2 ring-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana" alt=""/>
               <img className="inline-block h-4 w-4 rounded-full ring-2 ring-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria" alt=""/>
            </div>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Vagas Limitadas</span>
         </div>
      </div>
      
      {/* Botões de Ação Dupla: Kits vs Lista de Importadoras */}
      <div className="flex gap-2.5 w-full">
        {/* Botão VER OS KITS (Foco em quem quer os produtos prontos) */}
        <button 
          onClick={onAction}
          className="flex-[1.2] bg-[#25D366] hover:bg-green-600 text-white font-black py-4 px-2 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-[11px] border-b-4 border-green-800 animate-heartbeat transition-all uppercase tracking-tighter active:translate-y-1 active:border-b-0"
        >
           <svg viewBox="0 0 33 33" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6 0C7.4 0 0 7.5 0 16.7c0 3 .8 5.9 2.3 8.4L.6 33l8.1-2.1c2.4 1.3 5.1 2 7.9 2 9.2 0 16.6-7.5 16.6-16.7S25.8 0 16.6 0zm0 29.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.2 1.4 1.4-5.1-.3-.5C3.7 21.2 2.8 19 2.8 16.7c0-7.6 6.2-13.9 13.8-13.9s13.8 6.2 13.8 13.9-6.2 13.1-13.8 13.1zm7.6-10.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-1.7-.9-3.2-2.1-4.3-4.2-.3-.5 0-.8.2-1 .2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.8c.3.4 3.2 5 7.9 7 3.8 1.6 4.6 1.3 5.4 1.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.2-.2-.6-.3-1-.5z"/>
           </svg>
           VER OS KITS
        </button>

        {/* Botão LISTA VIP (Foco em quem quer importar direto e pagar mais barato) */}
        <a 
          href={SUPPLIER_LIST_CHECKOUT}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-brand-dark font-black py-4 px-2 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-[11px] border-b-4 border-yellow-700 transition-all uppercase tracking-tighter active:translate-y-1 active:border-b-0"
        >
           <Globe size={14} className="animate-pulse" />
           LISTA VIP
        </a>
      </div>
    </div>
  );
};
