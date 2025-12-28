
import React from 'react';
import { ShoppingCart, ArrowLeft, ExternalLink, ShieldCheck, Truck } from 'lucide-react';
import { SHOPEE_KITS, SUPPORT_LINK } from '../constants';

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
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Kits Direto da Shopee</p>
          </div>
          <a href={SUPPORT_LINK} className="text-brand-pink">
             <ShoppingCart size={22} />
          </a>
        </div>
      </header>

      {/* Banner de Aviso */}
      <div className="bg-brand-pink text-white py-3 px-4 text-center">
         <p className="text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2">
            <Truck size={16} className="animate-bounce" />
            FRETE GRÁTIS DISPONÍVEL NOS LINKS ABAIXO!
         </p>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center">
           <h2 className="text-2xl font-black text-gray-800 mb-2 italic uppercase">Escolha seu estoque inicial</h2>
           <p className="text-gray-500 text-sm">Clique no botão para ver o preço atualizado e as avaliações na Shopee.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SHOPEE_KITS.map((kit) => (
            <div key={kit.id} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col group hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                 <img 
                   src={kit.img} 
                   alt={kit.name} 
                   className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-sm">
                       {kit.tag}
                    </span>
                 </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                 <h3 className="font-heading font-black text-xl text-gray-800 mb-2 uppercase leading-tight">{kit.name}</h3>
                 <p className="text-gray-500 text-xs mb-6 flex-grow">{kit.description}</p>
                 
                 <div className="flex items-center justify-between mb-6">
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">A partir de</p>
                       <p className="text-2xl font-black text-brand-pink">{kit.price}</p>
                    </div>
                    <div className="flex flex-col items-end">
                       <div className="flex items-center gap-1 text-green-600 font-bold text-[10px] uppercase">
                          <ShieldCheck size={12} />
                          Vendedor Premium
                       </div>
                    </div>
                 </div>

                 <a 
                   href={kit.shopeeUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full bg-[#EE4D2D] hover:bg-[#d73211] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-100 transition-all transform active:scale-95"
                 >
                   VER NA SHOPEE
                   <ExternalLink size={18} />
                 </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white p-6 rounded-3xl border border-gray-200 text-center">
           <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4">
             "Esses links levam aos vendedores que eu pessoalmente utilizo para abastecer minha loja. São os preços mais baixos que você vai encontrar com essa qualidade."
           </p>
           <p className="font-hand text-3xl text-brand-pink">- Sua Mentora de Sucesso</p>
        </div>
      </main>
    </div>
  );
};
