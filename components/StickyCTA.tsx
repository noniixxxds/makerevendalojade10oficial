
import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { SUPPLIER_LIST_CHECKOUT } from '../constants';

interface StickyCTAProps {
  onAction?: (e: React.MouseEvent) => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onAction }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-brand-light shadow-[0_-10px_30px_rgba(0,0,0,0.15)] p-3 z-50 md:hidden flex flex-col gap-2.5 pb-5">
      <div className="flex items-center justify-between px-1">
         <div className="flex flex-col leading-tight items-start">
             <span className="text-[13px] font-black text-gray-800 tracking-tight flex items-center gap-1">
                Lista de Fornecedores 💎
             </span>
             <span className="text-[10px] text-brand-pink font-black uppercase tracking-widest">
                ACESSO LIBERADO POR R$ 7,90
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
      
      <div className="w-full">
        <a 
          href={SUPPLIER_LIST_CHECKOUT}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-brand-dark font-black py-4 px-2 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-lg border-b-4 border-yellow-700 transition-all uppercase tracking-tighter active:translate-y-1 active:border-b-0"
        >
           <Globe size={20} className="animate-pulse" />
           QUERO MINHA LISTA AGORA
           <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};
