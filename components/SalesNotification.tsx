
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const NOTIFICATIONS = [
  { 
    id: 1,
    name: "Alerta de Vendas", 
    text: "Mais 6 pessoas compraram a lista", 
    time: "nos últimos 2 min",
    type: "alert",
    icon: "🔥" 
  },
  { 
    id: 2,
    name: "Julia M.", 
    text: "acabou de comprar", 
    time: "Agora mesmo", 
    type: "person",
    avatarSeed: "Julia" 
  },
  { 
    id: 3,
    name: "Fernanda S.", 
    text: "recebeu o acesso no Zap", 
    time: "Há 1 minuto", 
    type: "person",
    avatarSeed: "Fernanda" 
  },
  { 
    id: 4,
    name: "Amanda R. de SP", 
    text: "garantiu a oferta", 
    time: "Há 3 minutos", 
    type: "person",
    avatarSeed: "Amanda" 
  }
];

export const SalesNotification = () => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial delay before starting the loop
    const initialTimeout = setTimeout(() => {
      setVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Hide after 5 seconds
    const hideTimeout = setTimeout(() => {
      setVisible(false);
      
      // Wait 4 seconds then show next
      const nextTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 4000);

      return () => clearTimeout(nextTimeout);
    }, 5000);

    return () => clearTimeout(hideTimeout);
  }, [visible, currentIndex]);

  const current = NOTIFICATIONS[currentIndex];

  return (
    <div 
      className={`fixed top-4 right-4 md:bottom-6 md:top-auto md:left-6 md:right-auto z-[60] transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-4 md:translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border-l-4 border-brand-pink p-3 flex items-center gap-3 min-w-[260px] max-w-[320px]">
        
        {current.type === 'alert' ? (
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl shadow-inner animate-pulse">
            {current.icon}
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden relative shadow-sm">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${current.avatarSeed}`} alt="Avatar" />
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        )}

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-gray-800">{current.name}</span>
            {current.type === 'person' && <CheckCircle className="w-3 h-3 text-green-500 fill-green-100" />}
          </div>
          <span className="text-xs text-gray-600 leading-tight">
            {current.text}
          </span>
          <span className="text-[10px] text-gray-400 mt-0.5">
            {current.time}
          </span>
        </div>
      </div>
    </div>
  );
};
