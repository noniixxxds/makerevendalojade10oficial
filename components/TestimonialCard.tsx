import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text?: string;
  type: string;
  audioTime?: string;
  img?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, type, audioTime, img }) => {
  // 1. WHATSAPP CONVERSATION SIMULATION
  if (type === 'whatsapp') {
    return (
      <div className="bg-[#E5DDD5] p-3 rounded-xl shadow-lg border border-gray-300 flex flex-col relative overflow-hidden">
        {/* Background Pattern Simulation */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
        
        <div className="flex items-center mb-3 relative z-10 border-b border-black/5 pb-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2 border border-white">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 text-xs">{name}</span>
            <span className="text-[10px] text-gray-500">online agora</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col space-y-2">
           {/* Seller Bubble */}
           <div className="self-end bg-[#d9fdd3] text-gray-800 p-2 rounded-lg rounded-tr-none shadow-sm text-xs max-w-[85%]">
              Te enviei o acesso! Me avisa se deu certo? 😘
              <div className="text-[9px] text-gray-400 text-right mt-1 flex justify-end items-center gap-0.5">
                10:24 <span className="text-blue-400">✓✓</span>
              </div>
           </div>

           {/* Buyer Bubble */}
           <div className="self-start bg-white text-gray-800 p-2 rounded-lg rounded-tl-none shadow-sm text-sm max-w-[90%]">
              {text}
              <div className="text-[9px] text-gray-400 text-right mt-1">
                10:25
              </div>
           </div>
        </div>
      </div>
    );
  }

  // 2. PHOTO/SCREENSHOT CARD WITH "ACCESS LIBERATED" HEADER
  // Compact style to remove whitespace
  if (type === 'photo' || img) {
      return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-xl">
            {/* Header "ACESSO LIBERADO" */}
            <div className="bg-[#f0fdf4] border-b border-green-100 py-1.5 px-3 flex items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-extrabold text-green-600 text-[9px] md:text-[10px] uppercase tracking-wider">
                    Acesso Liberado em Segundos
                </span>
            </div>

            {/* User Info - Compact */}
            <div className="flex items-center p-2 border-b border-gray-50">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2 border border-gray-100 shrink-0">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-xs leading-tight">{name}</p>
                    <div className="flex items-center gap-1">
                        <span className="text-[9px] text-gray-500">Aluna verificada</span>
                        <div className="bg-green-500 rounded-full p-[1px]"><CheckCircle size={6} className="text-white" /></div>
                    </div>
                </div>
            </div>

            {/* The Evidence Image */}
            <div className="relative group cursor-pointer bg-gray-100">
                <img src={img} alt="Prova social" className="w-full h-auto object-cover" />
                {text && (
                   <div className="bg-white/95 backdrop-blur-sm p-2 text-xs text-gray-700 italic border-t border-gray-100 leading-tight">
                      "{text}"
                   </div>
                )}
            </div>

            {/* Footer "Entregue com Sucesso" - Compact */}
            <div className="bg-green-50 py-1.5 px-3 border-t border-green-100 flex items-center justify-center gap-1.5">
                <CheckCircle size={12} className="text-green-600 fill-green-100" />
                <span className="text-[9px] font-black text-green-700 uppercase tracking-widest">
                    Acesso Entregue
                </span>
            </div>
            <div className="text-[8px] text-gray-300 text-right px-2 pb-1 bg-green-50">
               Postado há 2 horas
            </div>
        </div>
      );
  }

  // 3. FALLBACK / TEXT ONLY CARD
  return (
    <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 flex flex-col">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
        </div>
        <div>
          <p className="font-bold text-gray-800 text-xs">{name}</p>
          <p className="text-[10px] text-gray-500">Aluna verificada ✅</p>
        </div>
      </div>
      
      <p className="text-gray-700 text-xs italic mb-2">"{text}"</p>
      
      <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
         <span className="text-[9px] text-gray-400">Postado há 2 horas</span>
         <div className="flex items-center gap-1">
             <CheckCircle size={10} className="text-green-500" />
             <span className="text-[9px] font-bold text-green-600">Verificado</span>
         </div>
      </div>
    </div>
  );
};