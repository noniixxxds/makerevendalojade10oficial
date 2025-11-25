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
      <div className="bg-[#E5DDD5] p-4 rounded-xl shadow-lg border border-gray-300 flex flex-col relative overflow-hidden h-full">
        {/* Background Pattern Simulation */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
        
        <div className="flex items-center mb-4 relative z-10 border-b border-black/5 pb-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2 border border-white">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 text-xs">{name}</span>
            <span className="text-[10px] text-gray-500">online agora</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col space-y-2 flex-grow">
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
  // This unifies the style for photo proofs as requested
  if (type === 'photo' || img) {
      return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-xl">
             {/* Header "ACESSO LIBERADO" */}
            <div className="bg-[#f0fdf4] border-b border-green-100 py-2 px-3 flex items-center justify-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="font-extrabold text-green-600 text-[10px] md:text-[11px] uppercase tracking-wider">
                    Acesso Liberado em Segundos
                </span>
            </div>

            {/* User Info */}
            <div className="flex items-center p-3 border-b border-gray-50">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden mr-3 border border-gray-100">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-sm leading-tight">{name}</p>
                    <div className="flex items-center gap-1">
                        <span className="text-[10px] text-gray-500">Aluna verificada</span>
                        <div className="bg-green-500 rounded-full p-[1px]"><CheckCircle size={8} className="text-white" /></div>
                    </div>
                </div>
            </div>

            {/* The Evidence Image */}
            <div className="relative group cursor-pointer bg-gray-100">
                <img src={img} alt="Prova social" className="w-full h-auto object-cover" />
                {text && (
                   <div className="bg-white/95 backdrop-blur-sm p-3 text-xs text-gray-700 italic border-t border-gray-100">
                      "{text}"
                   </div>
                )}
            </div>

            {/* Footer "Entregue com Sucesso" */}
            <div className="bg-green-50 py-2 px-3 mt-auto border-t border-green-100 flex items-center justify-center gap-1.5">
                <CheckCircle size={14} className="text-green-600 fill-green-100" />
                <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">
                    Acesso Entregue com Sucesso
                </span>
            </div>
            <div className="text-[9px] text-gray-300 text-right px-2 pb-1 bg-green-50">
               Postado há 2 horas
            </div>
        </div>
      );
  }

  // 3. FALLBACK / TEXT ONLY CARD
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
        </div>
        <div>
          <p className="font-bold text-gray-800 text-sm">{name}</p>
          <p className="text-xs text-gray-500">Aluna verificada ✅</p>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm italic mb-4">"{text}"</p>
      
      {type === 'audio' && (
        <div className="bg-gray-100 rounded-full px-3 py-2 flex items-center space-x-2 mb-4">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-500 border-b-[6px] border-b-transparent ml-1"></div>
          <div className="h-1 flex-1 bg-gray-300 rounded relative overflow-hidden">
             <div className="absolute left-0 top-0 h-full w-1/3 bg-green-500"></div>
          </div>
          <span className="text-xs text-gray-500 font-mono">{audioTime}</span>
        </div>
      )}

      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
         <span className="text-[10px] text-gray-400">Postado há 2 horas</span>
         <div className="flex items-center gap-1">
             <CheckCircle size={12} className="text-green-500" />
             <span className="text-[10px] font-bold text-green-600">Verificado</span>
         </div>
      </div>
    </div>
  );
};