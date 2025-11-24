import React, { useState } from 'react';
import { Gift, Copy, X, Check } from 'lucide-react';
import { CHECKOUT_LINK } from '../constants';

interface CouponPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CouponPopup: React.FC<CouponPopupProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText("DESCONTOLOJADE10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative animate-bounce-in text-center pt-10 border-4 border-white ring-4 ring-pink-500/30">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Floating Icon */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center ring-4 ring-white shadow-lg">
            <Gift size={40} className="text-brand-pink animate-pulse" />
        </div>
        
        <h3 className="font-heading font-extrabold text-2xl text-brand-dark mb-2 mt-2 leading-tight">
          ESPERA, LINDA! 😱
        </h3>

        <p className="text-gray-600 text-sm mb-4 px-1 leading-relaxed">
          Eu vi que você quer mudar de vida, então consegui liberar um <strong>desconto extra</strong> só pra você fechar agora.
        </p>

        {/* GIF "Espiadinha" - Aumentado (Tela Maior) */}
        <div className="relative w-full h-48 mx-auto mb-5 rounded-xl overflow-hidden border-[6px] border-gray-800 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300 group bg-black">
           {/* Camada de Mistério */}
           <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none group-hover:bg-black/10 transition-colors"></div>
           
           {/* Selo Acesso Restrito */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center">
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] bg-red-600/90 px-3 py-1 rounded shadow-lg backdrop-blur-[2px] border border-white/20 whitespace-nowrap animate-pulse">
                  🔒 Espiada Secreta
               </span>
           </div>

           <img 
             src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmh0Y3Uxbm53dG93NDI3MnJjZzgwbHFldXI3cjJhMzBydGJpd2c2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Wfkq7BCVzOUwu1mqD/giphy.gif" 
             alt="Preview Fornecedores" 
             className="w-full h-full object-cover blur-[1px] brightness-[0.8] contrast-125 group-hover:blur-0 group-hover:brightness-100 transition-all duration-700"
           />
           
           {/* Fake Player Interface */}
           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50">
             <div className="h-full bg-red-600 w-1/3"></div>
           </div>
        </div>

        {/* Coupon Box */}
        <div 
          onClick={copyCoupon}
          className="border-2 border-dashed border-brand-pink bg-pink-50/50 rounded-xl p-3 mb-4 cursor-pointer relative group hover:bg-pink-50 transition-colors"
        >
           <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Toque para copiar</p>
           <div className="flex items-center justify-center gap-2">
              <span className="font-mono font-bold text-lg text-brand-pink tracking-wide select-all">DESCONTOLOJADE10</span>
              {copied ? <span className="text-xs text-green-600 font-bold animate-pulse flex items-center"><Check size={12} /> Copiado!</span> : <Copy size={16} className="text-brand-pink" />}
           </div>
        </div>
        
        <p className="text-xs text-red-500 mb-4 font-bold flex items-center justify-center gap-1 animate-pulse">
           ⏰ Válido pelos próximos 5 minutos
        </p>

        {/* Main CTA */}
        <a 
          href={CHECKOUT_LINK}
          className="block w-full bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 rounded-full shadow-lg shadow-green-100 transform hover:scale-105 transition-all text-lg flex items-center justify-center gap-2 group"
        >
          QUERO USAR MEU DESCONTO ⚡
        </a>
        
        <p 
          className="text-[10px] text-gray-400 mt-3 cursor-pointer hover:underline hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
           Não quero desconto, prefiro pagar o preço normal.
        </p>
      </div>
    </div>
  );
};