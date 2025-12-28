
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  Gem, 
  Package,
  CheckCircle2,
  TrendingUp,
  ShoppingBag,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TestimonialCard } from './components/TestimonialCard';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';
import { CatalogView } from './components/CatalogView';
import { PRODUCTS, FAQ_ITEMS, TESTIMONIALS, SUPPORT_LINK } from './constants';

export default function App() {
  const [view, setView] = useState<'landing' | 'catalog'>('landing');

  const goToCatalog = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setView('catalog');
    window.scrollTo(0, 0);
  };

  if (view === 'catalog') {
    return <CatalogView onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-gray-800 pb-24 md:pb-0 selection:bg-brand-pink selection:text-white overflow-x-hidden">
      
      <SalesNotification />
      {/* Passamos a função de ir para o catálogo para o StickyCTA também */}
      <StickyCTA onAction={goToCatalog} />

      {/* --- HERO SECTION --- */}
      <header className="bg-gradient-to-b from-[#d9006b] to-[#800040] pt-12 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-lg w-full animate-bounce-in border-4 border-white">
             <div className="flex flex-col items-center">
                <h1 className="font-heading text-3xl md:text-4xl font-black text-[#e62222] leading-tight flex flex-col uppercase italic tracking-tighter">
                   <span>MONTE SUA</span>
                   <span>PRÓPRIA LOJA</span>
                   <span>COM NOSSOS</span>
                </h1>
                
                <div className="bg-[#ffeb3b] border-2 border-black px-6 py-2 mt-4 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                   <span className="text-black font-black text-2xl md:text-4xl italic uppercase">
                     KITS PRONTOS
                   </span>
                </div>

                <p className="font-bold text-gray-800 text-sm md:text-base mt-6 leading-tight">
                  KITS DE 5, 9 E 15 ITENS PARA<br/>
                  COMEÇAR HOJE! 💄✨
                </p>

                <div className="mt-8 w-full rounded-2xl overflow-hidden shadow-inner border-2 border-brand-pink/20 relative group bg-gray-50">
                   <div className="absolute top-0 left-0 w-full bg-brand-pink/90 py-1.5 px-3 text-white font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2 z-10 shadow-md">
                      <Sparkles size={12} className="text-yellow-300" />
                      O SEGREDO DAS LOJAS LOTADAS
                      <Sparkles size={12} className="text-yellow-300" />
                   </div>
                   <img 
                     src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXJqaWVjdGh2amRncXRuNXdldHk2NzZ4MWNlZ3J2eXExa2JqZDhkcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qf1og8TmCIbVD5giqa/giphy.gif" 
                     alt="Loja Lotada" 
                     className="w-full h-auto object-contain block"
                   />
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-8 bg-pink-50 rounded-3xl border border-pink-100 shadow-sm">
              <Package className="w-14 h-14 text-brand-pink mb-4" />
              <h3 className="font-black text-xl mb-2 uppercase text-brand-dark">Curadoria Expert</h3>
              <p className="text-gray-600 font-medium">As makes que são tendência absoluta no TikTok e Instagram.</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-pink-50 rounded-3xl border border-pink-100 shadow-sm">
              <TrendingUp className="w-14 h-14 text-brand-pink mb-4" />
              <h3 className="font-black text-xl mb-2 uppercase text-brand-dark">Lucro Real</h3>
              <p className="text-gray-600 font-medium">Preço de atacado para você faturar até 300% de lucro.</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-pink-50 rounded-3xl border border-pink-100 shadow-sm">
              <CheckCircle2 className="w-14 h-14 text-brand-pink mb-4" />
              <h3 className="font-black text-xl mb-2 uppercase text-brand-dark">Zero Burocracia</h3>
              <p className="text-gray-600 font-medium">Não precisa de CNPJ. Comece agora mesmo com seu CPF.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE --- */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
         <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-6xl font-black text-brand-dark mb-4 leading-none uppercase italic tracking-tighter">
                Escolha seu Kit de Sucesso
              </h2>
              <div className="h-2 w-32 bg-brand-pink mx-auto rounded-full mb-8"></div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Acesso imediato aos melhores fornecedores</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
             {PRODUCTS.map((product) => (
               <div 
                 key={product.id} 
                 className={`group bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col transform transition-all duration-500 hover:-translate-y-6 border-4 ${product.featured ? 'border-brand-pink ring-8 ring-brand-pink/5 scale-105 z-10' : 'border-white'}`}
               >
                 <div className="relative pt-12 px-10 pb-6 bg-gradient-to-b from-pink-50 to-white">
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-brand-dark text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                        {product.badge}
                      </span>
                    </div>

                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-brand-pink text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white transform rotate-6">
                         <span className="text-2xl font-black leading-none">{product.items.split(' ')[0]}</span>
                         <span className="text-[10px] font-bold uppercase leading-none">ITENS</span>
                      </div>
                    </div>

                    <div className="relative z-10 h-72 flex items-center justify-center">
                       <img 
                         src={product.img} 
                         alt={product.name} 
                         className="max-h-full max-w-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-700" 
                       />
                    </div>
                 </div>

                 <div className="p-10 flex-grow flex flex-col text-center">
                    <h3 className="font-heading font-black text-3xl text-brand-dark mb-2 uppercase italic leading-none">{product.name}</h3>
                    <p className="text-gray-400 font-bold text-sm uppercase mb-8 tracking-widest">{product.brand}</p>
                    
                    <div className="bg-gray-50 rounded-3xl p-6 mb-8 border border-gray-100">
                       <div className="flex items-center justify-center gap-3 mb-1">
                          <span className="text-gray-400 line-through font-bold text-lg">{product.originalPrice}</span>
                          <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full">{product.discount}</span>
                       </div>
                       <div className="flex items-baseline justify-center">
                          <span className="text-brand-pink font-black text-5xl">R$ {product.price}</span>
                          <span className="text-gray-400 text-sm ml-1 font-bold">À VISTA</span>
                       </div>
                    </div>

                    <button 
                      onClick={goToCatalog}
                      className={`w-full py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-2xl ${
                        product.featured 
                        ? 'bg-[#25D366] hover:bg-green-600 text-white border-b-8 border-green-800' 
                        : 'bg-brand-pink hover:bg-brand-dark text-white border-b-8 border-brand-dark'
                      }`}
                    >
                       <ShoppingBag size={24} />
                       ACESSAR CATÁLOGO
                       <ArrowRight size={20} />
                    </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-black text-gray-800 mb-4 uppercase italic">
                Quem já acessou, <span className="text-brand-pink">está lucrando!</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand-pink mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {TESTIMONIALS.map((t, i) => (
                 <TestimonialCard key={i} {...t} />
               ))}
            </div>
         </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
           <div className="inline-block bg-white/10 p-6 rounded-full mb-10">
              <Gem className="w-16 h-16 text-yellow-400" />
           </div>
           <h2 className="font-heading text-4xl md:text-7xl font-black mb-8 leading-tight italic uppercase">
             Sua independência <span className="text-brand-pink">financeira</span> começa hoje!
           </h2>
           <p className="text-xl md:text-2xl text-pink-100 mb-12 leading-relaxed font-medium">
             Pare de adiar seu sonho. Clique abaixo para escolher os kits que vão mudar sua história.
           </p>

           <button 
             onClick={goToCatalog}
             className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-green-600 text-white font-black py-8 px-16 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.5)] text-3xl md:text-4xl transition-all transform hover:scale-105 border-b-8 border-green-800"
           >
              <ShoppingBag size={40} />
              VER KITS NA SHOPEE
           </button>
        </div>
      </section>

      <footer className="bg-[#0f0005] text-white py-16 text-center border-t border-brand-dark/20">
         <div className="container mx-auto px-4">
            <h3 className="font-hand text-5xl mb-6 text-brand-pink">O sucesso é uma escolha!</h3>
            <p className="mb-10 opacity-40 text-sm max-w-md mx-auto">
               Make Revenda © 2024. Todos os direitos reservados.
            </p>
         </div>
      </footer>
    </div>
  );
}
