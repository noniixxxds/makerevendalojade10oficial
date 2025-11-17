
import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Gift } from 'lucide-react';

export const CouponPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Aparece após 12 segundos de navegação (momento de decisão)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("DESCONTOLOJADE10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative border-t-8 border-brand-pink animate-bounce-in">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner ring-4 ring-white absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Gift size={40} className="text-brand-pink animate-pulse" />
          </div>
          
          <div className="mt-8">
            <h3 className="font-heading font-extrabold text-2xl text-brand-dark mb-1">ESPERA, LINDA! 😱</h3>
            <p className="text-gray-600 text-sm mb-4 px-2">
              Eu vi que você quer mudar de vida, então consegui liberar um <strong>desconto extra</strong> só pra você fechar agora.
            </p>

            {/* Caixa do Cupom */}
            <div 
              onClick={copyToClipboard}
              className="bg-gray-50 border-2 border-dashed border-brand-pink rounded-xl p-4 mb-2 cursor-pointer hover:bg-pink-50 transition-colors relative group select-none active:scale-95 transform duration-100"
            >
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Toque para copiar</p>
              <div className="flex items-center justify-center gap-2 font-mono font-black text-xl text-brand-pink">
                <span>DESCONTOLOJADE10</span>
                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              </div>
              
              {/* Overlay de Sucesso */}
              {copied && (
                <div className="absolute inset-0 bg-green-500 flex items-center justify-center rounded-xl text-white font-bold text-lg shadow-inner">
                  CUPOM COPIADO! ✅
                </div>
              )}
            </div>

            <p className="text-xs text-red-500 font-bold animate-pulse mb-5 flex justify-center items-center gap-1">
              <span>⏰</span> Válido pelos próximos 5 minutos
            </p>

            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-brand-pink text-white font-bold py-3.5 rounded-full shadow-lg hover:bg-pink-700 transition-all transform hover:scale-105 active:scale-95"
            >
              USAR MEU DESCONTO AGORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
