
import React, { useState, useMemo } from 'react';
import { Minus, Plus, Zap, Sparkles, TrendingUp, DollarSign } from 'lucide-react';
import { PROFIT_DATA, SUPPLIER_LIST_CHECKOUT } from '../constants';

export const ProfitSimulator: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [qtyPerDay, setQtyPerDay] = useState(5);

  const product = PROFIT_DATA[selectedIdx];
  
  const metrics = useMemo(() => {
    const cost = parseFloat(product.cost.replace(',', '.'));
    const resale = parseFloat(product.resale.replace(',', '.'));
    const profitPerUnit = resale - cost;
    const monthlyProfit = profitPerUnit * qtyPerDay * 30;
    
    return {
      monthlyProfit: monthlyProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      rawMonthly: monthlyProfit
    };
  }, [product, qtyPerDay]);

  const getExcitementMsg = (profit: number) => {
    if (profit < 1000) return "Dinheiro extra garantido! 💸";
    if (profit < 2500) return "Sua liberdade financeira começa! 🚀";
    if (profit < 5000) return "Adeus patrão, olá vida nova! 🕊️";
    return "Você está criando um IMPÉRIO! 👑";
  };

  return (
    <div className="mt-8 bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl relative border-2 border-brand-light overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      
      <div className="text-center mb-8 relative z-10">
        <h3 className="text-brand-dark font-black text-2xl md:text-4xl uppercase italic tracking-tighter leading-none mb-2">
          QUANTO VOCÊ QUER <span className="text-brand-pink">GANHAR?</span> 💸
        </h3>
        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em]">Simule sua nova realidade em 2 segundos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10">
        {/* Configuração Simplificada */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">1. Escolha um produto:</p>
            <div className="grid grid-cols-2 gap-2">
              {PROFIT_DATA.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-3 rounded-2xl border-2 transition-all flex items-center gap-2 group ${
                    selectedIdx === idx 
                    ? 'border-brand-pink bg-brand-pink text-white shadow-lg shadow-pink-200' 
                    : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-brand-light'
                  }`}
                >
                  <div className="w-8 h-8 bg-white rounded-lg p-1 shrink-0 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-black uppercase truncate leading-tight">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-brand-light/30 p-6 rounded-[2.5rem] border border-brand-light/50 text-center">
            <p className="text-[10px] font-black text-brand-dark/50 uppercase tracking-widest mb-4">2. Quantos você vende por dia?</p>
            <div className="flex items-center justify-center gap-8">
              <button 
                onClick={() => setQtyPerDay(prev => Math.max(1, prev - 1))}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-pink hover:bg-brand-pink hover:text-white transition-all active:scale-90"
              >
                <Minus size={24} />
              </button>
              <div className="flex flex-col">
                <span className="text-6xl font-black text-brand-dark leading-none">{qtyPerDay}</span>
                <span className="text-[9px] font-bold text-brand-pink uppercase mt-1 tracking-tighter">Unidades</span>
              </div>
              <button 
                onClick={() => setQtyPerDay(prev => prev + 1)}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-pink hover:bg-brand-pink hover:text-white transition-all active:scale-90"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Resultado Impactante */}
        <div className="bg-brand-dark rounded-[2.5rem] p-8 text-center text-white relative shadow-2xl flex flex-col justify-center transform lg:rotate-1">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-white to-yellow-400"></div>
          
          <div className="mb-6">
            <span className="text-[11px] font-black text-yellow-400 uppercase tracking-[0.3em] block mb-2">LUCRO NO SEU BOLSO:</span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-2xl font-bold opacity-50">R$</span>
              <span className="text-6xl md:text-7xl font-black text-white drop-shadow-[0_5px_15px_rgba(255,0,127,0.5)]">
                {metrics.monthlyProfit}
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl mb-8 border border-white/10 animate-pulse">
            <p className="text-base md:text-lg font-black italic text-yellow-400 flex items-center justify-center gap-2">
              <Sparkles size={20} />
              {getExcitementMsg(metrics.rawMonthly)}
            </p>
          </div>

          <a 
            href={SUPPLIER_LIST_CHECKOUT}
            className="w-full bg-yellow-400 hover:bg-white text-brand-dark font-black py-6 rounded-2xl flex items-center justify-center gap-3 text-xl transition-all transform hover:scale-105 shadow-[0_15px_30px_rgba(250,204,21,0.3)] border-b-8 border-yellow-700 active:border-b-0 active:translate-y-1"
          >
            VOU COMEÇAR AGORA!
            <Zap size={24} className="fill-brand-dark" />
          </a>
          
          <p className="text-[9px] text-white/30 mt-4 font-bold uppercase tracking-widest italic">
            * Cálculo baseado em 30 dias de vendas
          </p>
        </div>
      </div>
    </div>
  );
};
