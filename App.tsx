
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
  Sparkles,
  Globe,
  Star,
  Zap
} from 'lucide-react';
import { TestimonialCard } from './components/TestimonialCard';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';
import { CatalogView } from './components/CatalogView';
import { PRODUCTS, FAQ_ITEMS, TESTIMONIALS, SUPPORT_LINK, SUPPLIER_LIST_OFFER, SUPPLIER_LIST_CHECKOUT } from './constants';

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

      {/* --- DUAL OFFER SECTION --- */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 uppercase italic mb-4 leading-tight">
               Como você quer <span className="text-brand-pink">começar seu império?</span>
             </h2>
             <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
               Escolha o caminho que melhor se adapta ao seu momento hoje.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* OFFER 1: KITS PRONTOS */}
            <div className="relative group bg-gray-50 rounded-[3.5rem] p-8 md:p-12 border-2 border-dashed border-gray-200 hover:border-brand-pink transition-all duration-500 hover:bg-white hover:shadow-2xl">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full border-2 border-gray-200 text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-brand-pink group-hover:border-brand-pink">
                 Praticidade Total
               </div>
               
               <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mb-8 shadow-inner">
                     <Package size={48} className="text-brand-pink" />
                  </div>
                  
                  <h3 className="font-heading text-3xl font-black text-brand-dark uppercase mb-4 italic">Kits Prontos para Revenda</h3>
                  <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                    A forma mais fácil de começar. Receba kits montados com as makes que mais vendem na Shopee. Sem complicação, pronto para postar e vender.
                  </p>
                  
                  <ul className="space-y-4 mb-10 w-full text-left">
                    <li className="flex items-center gap-3 text-gray-700 font-bold">
                       <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600" /></div>
                       Seleção Expert (Só o que vende)
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-bold">
                       <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600" /></div>
                       Links Diretos da Shopee
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-bold">
                       <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600" /></div>
                       Menor investimento inicial
                    </li>
                  </ul>

                  <button 
                    onClick={goToCatalog}
                    className="w-full bg-brand-pink hover:bg-brand-dark text-white font-black py-6 rounded-full text-xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 border-b-8 border-brand-dark"
                  >
                    VER KITS DISPONÍVEIS
                    <ArrowRight size={24} />
                  </button>
               </div>
            </div>

            {/* OFFER 2: SUPLLIER LIST */}
            <div className="relative group bg-brand-dark rounded-[3.5rem] p-8 md:p-12 border-4 border-yellow-400 shadow-[0_30px_60px_rgba(0,0,0,0.3)] transform md:scale-105 z-10">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-full text-black text-xs font-black uppercase tracking-widest animate-pulse">
                 LUCRO MÁXIMO (VIPS)
               </div>
               
               <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white/20">
                     <Globe size={48} className="text-yellow-400" />
                  </div>
                  
                  <h3 className="font-heading text-3xl font-black text-white uppercase mb-4 italic">Lista de Importadoras</h3>
                  <p className="text-white/80 mb-8 font-medium leading-relaxed">
                    O segredo das lojistas que pagam centavos. Compre direto das maiores importadoras do Brasil. Preços até 40% menores que os kits.
                  </p>
                  
                  <ul className="space-y-4 mb-10 w-full text-left">
                    <li className="flex items-center gap-3 text-white font-bold">
                       <div className="bg-yellow-400/20 p-1 rounded-full"><Zap size={16} className="text-yellow-400 fill-yellow-400" /></div>
                       Preço de Custo Real (Sem Intermédio)
                    </li>
                    <li className="flex items-center gap-3 text-white font-bold">
                       <div className="bg-yellow-400/20 p-1 rounded-full"><Zap size={16} className="text-yellow-400 fill-yellow-400" /></div>
                       Contatos de WhatsApp das Importadoras
                    </li>
                    <li className="flex items-center gap-3 text-white font-bold">
                       <div className="bg-yellow-400/20 p-1 rounded-full"><Zap size={16} className="text-yellow-400 fill-yellow-400" /></div>
                       Até 400% de Lucro em cada peça
                    </li>
                  </ul>

                  <div className="mb-8 flex flex-col items-center">
                     <span className="text-white/60 line-through text-sm font-bold">DE R$ 197,00</span>
                     <div className="flex items-baseline gap-2">
                        <span className="text-white text-5xl font-black">R$ 25,90</span>
                        <span className="text-yellow-400 text-xs font-black uppercase">Taxa Única</span>
                     </div>
                  </div>

                  <a 
                    href={SUPPLIER_LIST_CHECKOUT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-brand-dark font-black py-6 rounded-full text-xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 border-b-8 border-yellow-700"
                  >
                    COMPRAR LISTA VIP
                    <Star size={24} className="fill-brand-dark" />
                  </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <Package className="w-14 h-14 text-brand-pink mb-4" />
              <h3 className="font-black text-xl mb-2 uppercase text-brand-dark">Curadoria Expert</h3>
              <p className="text-gray-600 font-medium">As makes que são tendência absoluta no TikTok e Instagram.</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <TrendingUp className="w-14 h-14 text-brand-pink mb-4" />
              <h3 className="font-black text-xl mb-2 uppercase text-brand-dark">Lucro Real</h3>
              <p className="text-gray-600 font-medium">Preço de atacado para você faturar até 300% de lucro.</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <CheckCircle2 className="w-14 h-14 text-brand-pink mb-4" />
              <h3 className="font-black text-xl mb-2 uppercase text-brand-dark">Zero Burocracia</h3>
              <p className="text-gray-600 font-medium">Não precisa de CNPJ. Comece agora mesmo.</p>
            </div>
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
             Pare de adiar seu sonho. Escolha agora como você vai dar o primeiro passo para ter sua loja de sucesso.
           </p>

           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={goToCatalog}
                className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-white text-brand-dark font-black py-6 px-12 rounded-full shadow-2xl text-2xl transition-all transform hover:scale-105 border-b-8 border-gray-300"
              >
                 <Package size={32} />
                 VER KITS PRONTOS
              </button>
              <a 
                href={SUPPLIER_LIST_CHECKOUT}
                className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-[#25D366] hover:bg-green-600 text-white font-black py-6 px-12 rounded-full shadow-2xl text-2xl transition-all transform hover:scale-105 border-b-8 border-green-800"
              >
                 <Globe size={32} />
                 LISTA IMPORTADORAS
              </a>
           </div>
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
