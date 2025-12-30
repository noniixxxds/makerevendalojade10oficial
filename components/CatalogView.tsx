
import React from 'react';
import { ArrowLeft, Globe, ShieldCheck, Truck, Sparkles, Star } from 'lucide-react';
import { SHOPEE_KITS, SUPPORT_LINK, SUPPLIER_LIST_CHECKOUT } from '../constants';

interface CatalogViewProps {
  onBack: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in pb-20">
      {/* Header do Catálogo */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 font-bold text-sm hover:text-brand-pink transition-colors"
          >
            <ArrowLeft size={18} />
            VOLTAR
          </button>
          <div className="text-center">
            <h1 className="font-heading font-black text-brand-dark text-lg md:text-xl uppercase italic leading-none">
              Catálogo de <span className="text-brand-pink">Ouro</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Exemplos Reais da Lista</p>
          </div>
          <div className="w-10"></div> {/* Spacer para centralizar */}
        </div>
      </header>

      {/* Banner de Aviso */}
      <div className="bg-brand-dark text-white py-3 px-4 text-center">
         <p className="text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-yellow-400 animate-pulse" />
            PRODUTOS DISPONÍVEIS NA LISTA DE FORNECEDORES COM ATÉ 400% DE LUCRO!
         </p>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-10 text-center">
           <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-3 italic uppercase">O que você vai encontrar lá dentro?</h2>
           <p className="text-gray-500 text-sm font-medium max-w-xl mx-auto leading-relaxed">
             Estes são apenas alguns exemplos dos milhares de produtos que você poderá comprar direto das importadoras usando nossa Lista de Fornecedores.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHOPEE_KITS.map((kit) => (
            <div key={kit.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 bg-white overflow-hidden">
                 <img 
                   src={kit.img} 
                   alt={kit.name} 
                   className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase shadow-lg flex items-center gap-1">
                       <Star size={10} className="fill-black" />
                       ITEM DISPONÍVEL
                    </span>
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                 <h3 className="font-heading font-black text-xl text-gray-800 mb-3 uppercase leading-tight">{kit.name}</h3>
                 <p className="text-gray-500 text-xs mb-8 flex-grow leading-relaxed font-medium">{kit.description}</p>
                 
                 <div className="mb-8 p-4 bg-brand-light/30 rounded-2xl border border-brand-light/50">
                    <div className="flex items-center gap-2 text-brand-pink font-black text-[10px] uppercase tracking-widest mb-1">
                       <Truck size={14} /> Fornecedor Validado
                    </div>
                    <p className="text-gray-700 font-bold text-xs italic">Preço de custo exclusivo para alunas.</p>
                 </div>

                 <a 
                   href={SUPPLIER_LIST_CHECKOUT}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full bg-brand-pink hover:bg-brand-dark text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-pink-100 transition-all transform active:scale-95 text-lg border-b-4 border-brand-dark"
                 >
                   ADQUIRIR LISTA COMPLETA
                   <Globe size={20} />
                 </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 bg-brand-dark p-8 md:p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Sparkles size={100} className="text-white" />
           </div>
           <div className="relative z-10">
              <h3 className="text-white font-black text-2xl md:text-3xl uppercase italic mb-4">Acesso Vitalício + Bônus</h3>
              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                Não perca tempo procurando. Tenha em mãos os contatos de quem realmente manda as mercadorias para as maiores lojas de maquiagem do Brasil.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                 <a 
                   href={SUPPLIER_LIST_CHECKOUT}
                   className="w-full md:w-auto bg-yellow-400 text-brand-dark font-black px-10 py-5 rounded-full text-xl shadow-xl hover:bg-yellow-500 transition-all"
                 >
                   QUERO MINHA LISTA AGORA
                 </a>
                 <a 
                   href={SUPPORT_LINK}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest"
                 >
                   Ainda tenho dúvidas
                 </a>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};
