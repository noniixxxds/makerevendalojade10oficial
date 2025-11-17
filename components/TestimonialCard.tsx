
import React from 'react';

interface TestimonialProps {
  name: string;
  text?: string;
  type: string;
  audioTime?: string;
  img?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, type, audioTime, img }) => {
  if (type === 'whatsapp') {
    return (
      <div className="min-w-[280px] md:min-w-[320px] bg-[#E5DDD5] p-4 rounded-xl shadow-md border border-gray-200 mx-2 flex flex-col relative overflow-hidden">
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

  return (
    <div className="min-w-[280px] md:min-w-[320px] bg-white p-4 rounded-xl shadow-md border border-gray-100 mx-2 flex flex-col">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
        </div>
        <div>
          <p className="font-bold text-gray-800 text-sm">{name}</p>
          <p className="text-xs text-gray-500">Aluna verificada ✅</p>
        </div>
      </div>
      
      {type === 'text' && <p className="text-gray-700 text-sm italic">"{text}"</p>}
      
      {type === 'audio' && (
        <div className="bg-gray-100 rounded-full px-3 py-2 flex items-center space-x-2">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-500 border-b-[6px] border-b-transparent ml-1"></div>
          <div className="h-1 flex-1 bg-gray-300 rounded relative overflow-hidden">
             <div className="absolute left-0 top-0 h-full w-1/3 bg-green-500"></div>
          </div>
          <span className="text-xs text-gray-500 font-mono">{audioTime}</span>
        </div>
      )}
      {type === 'audio' && <p className="text-xs text-gray-500 mt-2 italic">Transcriçao: "{text}"</p>}

      {type === 'photo' && img && (
        <div className="mt-2">
            <p className="text-gray-700 text-sm mb-2">"{text}"</p>
            <img src={img} alt="Prova social" className="w-full h-48 object-cover object-top rounded-lg" />
        </div>
      )}
      
      <div className="mt-auto pt-3 text-xs text-gray-400 text-right">
        Há 2 horas
      </div>
    </div>
  );
};
