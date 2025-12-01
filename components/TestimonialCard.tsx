import React from 'react';
import { CheckCircle, FileText } from 'lucide-react';

interface ConversationItem {
  side: string;
  text?: string;
  type?: string;
  fileName?: string;
  fileInfo?: string;
  time: string;
}

interface TestimonialProps {
  name: string;
  text?: string;
  type: string;
  audioTime?: string;
  img?: string;
  conversation?: ConversationItem[];
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, type, audioTime, img, conversation }) => {
  
  // 0. WHATSAPP DARK MODE (CUSTOM IMAGE REQUEST)
  if (type === 'whatsapp-dark') {
    return (
      <div className="bg-[#0b141a] rounded-xl shadow-2xl border border-gray-800 flex flex-col relative overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-green-900/20">
        
        {/* Floating Badge 'Acesso em Tempo Real' */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
           <div className="bg-black/40 backdrop-blur-md border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(37,211,102,0.3)] flex items-center gap-2 animate-pulse">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              acesso em tempo real
           </div>
        </div>

        {/* Header Dark */}
        <div className="bg-[#202c33] p-3 flex items-center gap-3 z-20 border-b border-gray-800/50">
           <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden border border-gray-600">
              <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=005c4b`} alt={name} />
           </div>
           <div className="flex flex-col">
              <span className="text-[#e9edef] font-bold text-sm">{name}</span>
              <span className="text-gray-400 text-xs">online</span>
           </div>
        </div>

        {/* Body Dark */}
        <div className="p-4 flex flex-col gap-3 relative bg-[#0b141a] min-h-[300px]">
           {/* Background Pattern */}
           <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-[0.06] bg-repeat"></div>

           <div className="relative z-10 flex flex-col gap-3 pb-2">
              {conversation?.map((msg, idx) => (
                  <div key={idx} className={`max-w-[85%] rounded-lg p-2 text-sm relative shadow-sm ${
                      msg.side === 'right' 
                      ? 'self-end bg-[#005c4b] text-[#e9edef] rounded-tr-none' 
                      : 'self-start bg-[#202c33] text-[#e9edef] rounded-tl-none'
                  }`}>
                      {msg.type === 'file' ? (
                          <div className="flex items-center gap-3 p-1">
                              <div className="bg-[#ff5a5f] h-10 w-8 rounded flex items-center justify-center text-white font-bold text-[8px] shadow-sm shrink-0">
                                PDF
                              </div>
                              <div className="flex flex-col min-w-0">
                                  <span className="font-bold line-clamp-1 text-sm text-white">{msg.fileName}</span>
                                  <span className="text-[10px] opacity-70 text-gray-300">{msg.fileInfo}</span>
                              </div>
                          </div>
                      ) : (
                          <p className="whitespace-pre-line leading-relaxed text-[13px]">{msg.text}</p>
                      )}
                      
                      <div className="text-[9px] text-gray-400 text-right mt-1 flex justify-end items-center gap-1">
                          {msg.time}
                          {msg.side === 'right' && <span className="text-[#53bdeb] font-bold">✓✓</span>}
                      </div>
                  </div>
              ))}
           </div>
        </div>
        
        {/* Footer Input simulation */}
         <div className="bg-[#202c33] p-2 flex items-center gap-3 z-20 border-t border-gray-800">
            <div className="bg-[#2a3942] rounded-full h-9 w-9 flex items-center justify-center text-gray-400 text-xl pb-1">+</div>
            <div className="bg-[#2a3942] rounded-lg h-9 flex-1 flex items-center px-4 text-sm text-gray-400">
                Digite uma mensagem
            </div>
            <div className="bg-[#00a884] rounded-full h-9 w-9 flex items-center justify-center text-white shadow-md">
               <span className="ml-0.5 mt-0.5">➤</span>
            </div>
         </div>
      </div>
    );
  }

  // 1. WHATSAPP CONVERSATION SIMULATION (LIGHT)
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
                {img && <img src={img} alt="Prova social" className="w-full h-auto object-cover" />}
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