import React from 'react';
import { MessageCircle, X, PackageCheck } from 'lucide-react';

interface SupportPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportPopup: React.FC<SupportPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[110] flex items-end justify-center md:items-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative animate-slide-up md:animate-bounce-in text-center border-t-4 border-green-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 p-1 hover:bg-gray-100 rounded-full transition-colors z-30"
        >
          <X size={20} />
        </button>

        {/* Icon Header */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 relative">
            <PackageCheck size={32} className="text-green-600" />
            <div className="absolute -bottom-1 -right-1 bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                ?
            </div>
        </div>
        
        <h3 className="font-heading font-extrabold text-xl text-gray-800 mb-2 leading-tight">
          Está com dúvida de como vai receber a lista?
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Não compre com dúvida, amiga! Veja o que chega no seu celular:
        </p>

        {/* GIF Preview Block - Tamanho Reduzido */}
        <div className="relative w-4/5 h-24 mx-auto mb-4 rounded-xl overflow-hidden border-[3px] border-gray-800 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300 group bg-black">
           {/* Camada de Proteção Visual */}
           <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors"></div>

           {/* Selo Informativo */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center">
               <span className="text-[8px] font-black text-white uppercase tracking-[0.05em] bg-green-600/90 px-2 py-1 rounded shadow-lg backdrop-blur-[2px] border border-white/20 whitespace-nowrap animate-pulse">
                  📦 É isso que você recebe
               </span>
           </div>

           <img 
             src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmh0Y3Uxbm53dG93NDI3MnJjZzgwbHFldXI3cjJhMzBydGJpd2c2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Wfkq7BCVzOUwu1mqD/giphy.gif" 
             alt="Preview Fornecedores" 
             className="w-full h-full object-cover blur-[0.5px] hover:blur-0 transition-all duration-700"
           />
        </div>

        {/* Main CTA */}
        <a 
          href="https://wa.me/5511980219977?text=Oi,%20estou%20com%20dúvida%20sobre%20a%20entrega%20da%20lista,%20pode%20me%20ajudar?"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#25D366] hover:bg-green-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-green-100 transform hover:scale-105 transition-all text-base flex items-center justify-center gap-2 mb-3"
        >
          <MessageCircle size={20} fill="white" />
          TIRAR DÚVIDA E FAZER PEDIDO
        </a>
        
        <button 
          className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
          onClick={onClose}
        >
           Não tenho dúvidas, quero comprar agora.
        </button>
      </div>
    </div>
  );
};