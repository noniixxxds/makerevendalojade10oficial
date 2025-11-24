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
          className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Icon Header */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 relative">
            <PackageCheck size={32} className="text-green-600" />
            <div className="absolute -bottom-1 -right-1 bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                ?
            </div>
        </div>
        
        <h3 className="font-heading font-extrabold text-xl text-gray-800 mb-2 leading-tight">
          Está com dúvida de como vai receber a lista?
        </h3>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Não compre com dúvida, amiga! Fale comigo agora no WhatsApp que eu te explico certinho como o acesso chega no seu e-mail e celular.
        </p>

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