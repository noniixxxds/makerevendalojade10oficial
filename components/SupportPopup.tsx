import React from 'react';
import { MessageCircle, X } from 'lucide-react';

interface SupportPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportPopup: React.FC<SupportPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 relative animate-bounce-in border-t-4 border-[#25D366]">
        
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center -mt-10 mb-3 border-4 border-white shadow-lg">
              <MessageCircle className="text-white w-8 h-8" />
           </div>

           <h3 className="font-bold text-xl text-gray-800 mb-2">
             Posso te ajudar?
           </h3>
           
           <p className="text-gray-600 text-sm mb-5 leading-relaxed">
             Oi, sou a Sônia! Vi que você está olhando a lista. Se tiver qualquer dúvida sobre como funciona ou sobre os fornecedores, me chama no WhatsApp!
           </p>

           <a 
             href="https://wa.me/5511980219977"
             target="_blank"
             rel="noopener noreferrer"
             className="w-full bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105"
             onClick={onClose}
           >
             <MessageCircle size={18} />
             Falar com Sônia
           </a>
           
           <button 
             onClick={onClose}
             className="mt-3 text-xs text-gray-400 hover:text-gray-600 underline"
           >
             Não, obrigado. Estou só olhando.
           </button>
        </div>
      </div>
    </div>
  );
};