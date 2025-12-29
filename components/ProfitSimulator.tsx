
import React, { useState, useMemo } from 'react';
import { Minus, Plus, TrendingUp, Calculator, ShoppingCart, Star } from 'lucide-react';
import { PROFIT_DATA, SUPPLIER_LIST_CHECKOUT } from '../constants';

export const ProfitSimulator: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [qtyPerDay, setQtyPerDay] = useState(3);

  const product = PROFIT_DATA[selectedIdx];
  
  const metrics = useMemo(() => {
    const cost = parseFloat(product.cost.replace(',', '.'));
    const resale = parseFloat(product.resale.replace(',', '.'));
    const profitPerUnit = resale - cost;
    const monthlyProfit = profitPerUnit * qtyPerDay * 30;
    
    return {
      profitPerUnit,
      monthlyProfit: monthlyProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      rawMonthly: monthlyProfit
    };
  }, [product, qtyPerDay]);

  const getEmotionalMessage = (profit: number) => {
    if (profit < 500) return "Ideal para começar seu estoque extra!";
    if (profit < 1500) return "Isso já paga o aluguel ou a parcela do carro! 🚗";
    if (profit < 3000) return "Sua independência financeira está batendo à porta! 🏠";
    return "Você está construindo um verdadeiro império de beleza! 👑";
  };

  return (
    <div className="mt-16 bg-white p-6 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden border-2 border-brand-light">
      <div className="absolute top-0 right-0 p-6 opacity-5">
        <Calculator size={120} className="text-brand-pink" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-10">
          <span className="bg-brand-pink/10 text-brand-pink px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-2 inline-block">
            Simulador de Liberdade
          </span>
          <h3 className="text-gray-900 font-black text-2xl md:text-3xl uppercase italic">
            Simule seu <span className="text-brand-pink">Futuro Faturamento</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de Configuração */}
          <div className="space-y-8">
            <div>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 block">
                1. Escolha o Produto:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {PROFIT_DATA.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={`p-3 rounded-2xl border-2 transition-all flex items-center gap-2 text-left ${
                      selectedIdx === idx 
                      ? 'border-brand-pink bg-brand-pink text-white shadow-lg shadow-pink-200' 
                      : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-brand-light'
                    }`}
                  >
                    <div className="w-8 h-8 bg-white rounded-lg p-1 shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-black uppercase leading-tight">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 block">
                2. Quantas você vende por dia?
              </label>
              <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-3xl w-fit mx-auto lg:mx-0 border border-gray-100">
                <button 
                  onClick={() => setQtyPerDay(prev => Math.max(1, prev - 1))}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-pink hover:bg-brand-pink hover:text-white transition-all active:scale-90"
                >
                  <Minus size={24} />
                </button>
                <span className="text-4xl font-black text-brand-dark min-w-[60px] text-center">
                  {qtyPerDay}
                </span>
                <button 
                  onClick={() => setQtyPerDay(prev => prev + 1)}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-pink hover:bg-brand-pink hover:text-white transition-all active:scale-90"
                >
                  <Plus size={24} />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-3 font-bold italic">* Consideramos 30 dias de vendas por mês.</p>
            </div>
          </div>

          {/* Coluna de Resultado */}
          <div className="bg-brand-dark rounded-[2.5rem] p-8 text-white relative shadow-2xl transform rotate-1">
             <div className="absolute -top-4 -right-4 bg-yellow-400 text-brand-dark font-black px-4 py-2 rounded-xl text-xs shadow-lg animate-bounce">
                SEU LUCRO ESTIMADO 💰
             </div>
             
             <div className="flex flex-col items-center text-center">
                <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-2">Lucro Mensal Livre:</span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold">R$</span>
                  <span className="text-5xl md:text-6xl font-black text-yellow-400 drop-shadow-lg">
                    {metrics.monthlyProfit}
                  </span>
                </div>
                
                <div className="w-full h-px bg-white/10 mb-6"></div>
                
                <p className="text-lg font-bold italic leading-tight mb-8 min-h-[60px] flex items-center justify-center">
                  "{getEmotionalMessage(metrics.rawMonthly)}"
                </p>

                <a 
                  href={SUPPLIER_LIST_CHECKOUT}
                  className="w-full bg-white text-brand-dark font-black py-5 rounded-2xl shadow-xl hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                >
                  QUERO ESSA REALIDADE
                  <TrendingUp size={24} />
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
