import React from 'react';

interface TestimonialProps {
  name: string;
  text?: string;
  type: string;
  audioTime?: string;
  img?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, type, audioTime, img }) => {
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
            <img src={img} alt="Prova social" className="w-full h-32 object-cover rounded-lg" />
        </div>
      )}
      
      <div className="mt-auto pt-3 text-xs text-gray-400 text-right">
        Há 2 horas
      </div>
    </div>
  );
};