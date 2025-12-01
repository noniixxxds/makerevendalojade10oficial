import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const NOTIFICATIONS = [
  { 
    id: 1,
    name: "Alerta de Vendas", 
    text: "Mais 40 pessoas receberam no WhatsApp", 
    time: "nos últimos 3 dias",
    type: "alert",
    icon: "🔥" 
  },
  { 
    id: 2,
    name: "Tatiane Souza", 
    text: "acabou de receber o acesso no WhatsApp", 
    time: "Agora mesmo", 
    type: "person" 
  },
  { 
    id: 3,
    name: "Marta Alves", 
    text: "acabou de receber o acesso no WhatsApp", 
    time: "Há 1 minuto", 
    type: "person" 
  },
  { 
    id: 4,
    name: "Gracielly Oliveira", 
    text: "acabou de receber o acesso no WhatsApp", 
    time: "Há 3 minutos", 
    type: "person" 
  }
];

export const SalesNotification = () => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial delay before starting the loop
    // Ajustado para 10 segundos (10000ms) conforme solicitado
    const initialTimeout = setTimeout(() => {
      setVisible(true);
    }, 10000);

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
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border-l-4 border-[#25D366] p-3 flex items-center gap-3 min-w-[260px] max-w-[320px]">
        
        {current.type === 'alert' ? (
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl shadow-inner animate-pulse shrink-0">
            {current.icon}
          </div>
        ) : (
          <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-sm shrink-0 border border-green-400">
             {/* Ícone SVG WhatsApp Branco */}
             <svg viewBox="0 0 33 33" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 0C7.4 0 0 7.5 0 16.7c0 3 .8 5.9 2.3 8.4L.6 33l8.1-2.1c2.4 1.3 5.1 2 7.9 2 9.2 0 16.6-7.5 16.6-16.7S25.8 0 16.6 0zm0 29.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.2 1.4 1.4-5.1-.3-.5C3.7 21.2 2.8 19 2.8 16.7c0-7.6 6.2-13.9 13.8-13.9s13.8 6.2 13.8 13.9-6.2 13.1-13.8 13.1zm7.6-10.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-1.7-.9-3.2-2.1-4.3-4.2-.3-.5 0-.8.2-1 .2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.8c.3.4 3.2 5 7.9 7 3.8 1.6 4.6 1.3 5.4 1.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.2-.2-.6-.3-1-.5z"/>
             </svg>
          </div>
        )}

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-gray-800">{current.name}</span>
            {current.type === 'person' && <CheckCircle className="w-3 h-3 text-[#25D366] fill-green-100" />}
          </div>
          <span className="text-xs text-gray-600 leading-tight font-medium">
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