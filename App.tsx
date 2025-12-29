
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
  Zap,
  MousePointer2,
  Lock,
  DollarSign,
  Plus,
  Minus,
  HelpCircle,
  Gift
} from 'lucide-react';
import { TestimonialCard } from './components/TestimonialCard';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';
import { CatalogView } from './components/CatalogView';
import { PRODUCTS, FAQ_ITEMS, TESTIMONIALS, SUPPORT_LINK, SUPPLIER_LIST_OFFER, SUPPLIER_LIST_CHECKOUT, PROFIT_DATA } from './constants';

export default function App() {
  const [view, setView] = useState<'landing' | 'catalog'>('landing');
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Primeira aberta por padrão

  const goToCatalog = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setView('catalog');
    window.scrollTo(0, 0);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
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

                {/* GIF DE PROVA REAL NO HERO */}
                <div className="mt-10 w-full max-w-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-pink relative group bg-black aspect-[9/16]">
                   <div className="absolute top-0 left-0 w-full bg-brand-pink/90 py-1.5 px-3 text-white font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2 z-10 shadow-md">
                      <Sparkles size={12} className="text-yellow-300" />
                      INAUGURAÇÃO LOJA 10
                      <Sparkles size={12} className="text-yellow-300" />
                   </div>
                   
                   <img 
                     src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN215eWl6Nmthdm4xaHpvbGJhc3oyY2R2MDNsNGdrZzEwM2Z5aW0yMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qf1og8TmCIbVD5giqa/giphy.gif" 
                     alt="Inauguração Loja 10"
                     className="w-full h-full object-cover block"
                   />
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* --- PROFIT COMPARISON SECTION --- */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-yellow-400 text-brand-dark px-4 py-1 rounded-full font-black text-xs uppercase mb-4 shadow-lg">
                <DollarSign size={14} />
                A MATEMÁTICA DO SUCESSO
             </div>
             <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase italic leading-tight mb-4">
               Quanto você vai <span className="text-brand-pink">lucrar?</span>
             </h2>
             <p className="text-white/60 font-medium">Veja os preços que você pagará diretamente nas Importadoras da Lista VIP:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFIT_DATA.map((item, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col items-center group hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-full aspect-square bg-white rounded-3xl mb-6 p-4 relative overflow-hidden shadow-inner">
                     <img 
                       src={item.img} 
                       alt={item.name} 
                       className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute top-2 right-2 bg-brand-pink text-white text-[9px] font-black px-2 py-1 rounded-full uppercase">
                        {item.profit} lucro
                     </div>
                  </div>

                  <span className="text-white font-black text-center mb-4 leading-tight min-h-[40px] flex items-center">{item.name}</span>
                  <div className="w-full h-px bg-white/10 mb-4"></div>
                  
                  <div className="flex flex-col items-center gap-1 mb-4">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">CUSTO REAL</span>
                     <span className="text-yellow-400 font-black text-3xl">R$ {item.cost}</span>
                  </div>

                  <div className="flex flex-col items-center gap-1 mb-6">
                     <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">PODE SER REVENDIDO POR</span>
                     <span className="text-white font-black text-xl">R$ {item.resale}</span>
                  </div>

                  <div className="w-full bg-brand-pink/20 py-2.5 px-4 rounded-xl border border-brand-pink/30 text-center">
                     <span className="text-brand-pink font-black text-xs uppercase tracking-widest">LUCRO DE R$ {(parseFloat(item.resale.replace(',', '.')) - parseFloat(item.cost.replace(',', '.'))).toFixed(2).replace('.', ',')}</span>
                  </div>
               </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-6 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <TrendingUp size={80} className="text-brand-pink" />
             </div>
             <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="bg-brand-pink/10 p-5 rounded-3xl border border-brand-pink/20">
                   <TrendingUp size={48} className="text-brand-pink" />
                </div>
                <div className="flex-1 text-center md:text-left">
                   <p className="text-gray-900 font-black text-2xl md:text-3xl leading-tight">
                     Vendendo apenas 3 gloss por dia, seu lucro mensal ultrapassa <span className="text-brand-pink">R$ 1.100,00!</span>
                   </p>
                   <p className="text-gray-500 font-bold text-lg mt-3">Imagine quando você estiver vendendo o kit completo...</p>
                </div>
                <a 
                  href={SUPPLIER_LIST_CHECKOUT}
                  className="bg-brand-dark text-white font-black px-10 py-5 rounded-full shadow-xl hover:bg-black transition-all transform hover:scale-105"
                >
                   QUERO ESSES PREÇOS
                </a>
             </div>
          </div>
        </div>
      </section>

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

            {/* OFFER 2: LISTA FORNECEDORES VIP */}
            <div className="relative group bg-brand-dark rounded-[3.5rem] p-8 md:p-12 border-4 border-yellow-400 shadow-[0_30px_60px_rgba(0,0,0,0.3)] transform md:scale-105 z-10">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-full text-black text-xs font-black uppercase tracking-widest animate-pulse">
                 LUCRO MÁXIMO + BÔNUS
               </div>
               
               <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white/20">
                     <Globe size={48} className="text-yellow-400" />
                  </div>
                  
                  <h3 className="font-heading text-3xl font-black text-white uppercase mb-4 italic">{SUPPLIER_LIST_OFFER.title}</h3>
                  <p className="text-white/80 mb-8 font-medium leading-relaxed">
                    O caminho das lojistas profissionais. Compre direto das maiores importadoras e receba todo o treinamento para vender.
                  </p>
                  
                  {/* BÔNUS HIGHLIGHT */}
                  <div className="w-full space-y-3 mb-8">
                     <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                        <Gift size={16} /> VOCÊ TAMBÉM LEVA HOJE:
                     </p>
                     {SUPPLIER_LIST_OFFER.bonuses.map((bonus, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-2xl text-left flex items-start gap-3">
                           <div className="bg-yellow-400/20 p-1.5 rounded-lg shrink-0">
                              <Star size={14} className="text-yellow-400 fill-yellow-400" />
                           </div>
                           <div>
                              <p className="text-white font-black text-xs uppercase italic">{bonus.title}</p>
                              <p className="text-white/60 text-[10px] leading-tight">{bonus.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mb-8 flex flex-col items-center">
                     <span className="text-white/60 line-through text-sm font-bold">DE {SUPPLIER_LIST_OFFER.originalPrice}</span>
                     <div className="flex items-baseline gap-2">
                        <span className="text-white text-5xl font-black">{SUPPLIER_LIST_OFFER.price}</span>
                        <span className="text-yellow-400 text-xs font-black uppercase tracking-tighter">Taxa Única</span>
                     </div>
                  </div>

                  <a 
                    href={SUPPLIER_LIST_CHECKOUT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-brand-dark font-black py-6 rounded-full text-xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 border-b-8 border-yellow-700"
                  >
                    GARANTIR LISTA + BÔNUS
                    <ArrowRight size={24} className="fill-brand-dark" />
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
      <section className="py-20 bg-white overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-black text-gray-800 mb-4 uppercase italic">
                Quem já acessou, <span className="text-brand-pink">está lucrando!</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand-pink mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
               <div className="bg-brand-dark rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4)] border-4 border-white/5">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink rounded-full blur-[120px] opacity-20 -mr-40 -mt-40"></div>
                  
                  <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
                     <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase mb-6 shadow-lg border border-white/20">
                           <Zap size={14} className="fill-white" />
                           Acesso Imediato Liberado
                        </div>
                        <h3 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 uppercase italic leading-tight">
                          Sua lista entregue <span className="text-brand-pink">em tempo real!</span>
                        </h3>
                        <p className="text-base md:text-xl text-white/80 font-medium mb-8 leading-relaxed">
                          Nada de esperar dias ou horas. Nosso sistema é 100% automatizado: pagou, recebeu o link direto no seu e-mail e WhatsApp. 
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                           <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                              <p className="text-yellow-400 font-black text-2xl md:text-3xl">100%</p>
                              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Seguro & Vitalício</p>
                           </div>
                           <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                              <p className="text-brand-pink font-black text-2xl md:text-3xl">INSTANT</p>
                              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Entrega Automática</p>
                           </div>
                        </div>

                        <a 
                          href={SUPPLIER_LIST_CHECKOUT}
                          className="inline-flex items-center gap-3 bg-yellow-400 text-brand-dark font-black px-8 py-5 rounded-full text-lg shadow-xl hover:bg-yellow-500 transition-all transform hover:scale-105 border-b-4 border-yellow-700"
                        >
                           GARANTIR MEU ACESSO
                           <ArrowRight size={20} />
                        </a>
                     </div>

                     <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[420px]">
                           <div className="relative bg-white rounded-[2rem] p-2 shadow-2xl overflow-hidden aspect-[16/10] md:aspect-auto">
                              <img 
                                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNmNmI0MHdwczNoeXlvYjJucTZqbTZ4djk5YnI1dHM5d2JkeHhvOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sQDYXzIfNEzsXbxgX4/giphy.gif" 
                                alt="Prova de entrega em tempo real" 
                                className="w-full h-full object-cover rounded-[1.5rem]"
                              />
                              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                                 <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] text-white font-black uppercase">LIVE PROOF</span>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 animate-bounce max-w-[200px] hidden md:block">
                              <div className="flex items-center gap-3">
                                 <div className="bg-green-100 p-2 rounded-full">
                                    <CheckCircle2 size={24} className="text-green-600" />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-xs font-black text-gray-800">Sucesso!</span>
                                    <span className="text-[10px] text-gray-500 font-medium">Link enviado com sucesso.</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
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
                 LISTA FORNECEDORES VIP
              </a>
           </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-1 rounded-full font-black text-xs uppercase mb-4">
              <HelpCircle size={14} />
              Dúvidas Frequentes
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase italic">
              Ainda com <span className="text-brand-pink">dúvidas?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
                  openFaq === idx ? 'border-brand-pink shadow-lg' : 'border-gray-200 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className={`font-bold text-base md:text-lg transition-colors ${
                    openFaq === idx ? 'text-brand-pink' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    {openFaq === idx ? (
                      <Minus size={20} className="text-brand-pink" />
                    ) : (
                      <Plus size={20} className="text-gray-400 group-hover:text-brand-pink" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <p className="text-gray-500 font-bold mb-6 italic">Não encontrou sua dúvida aqui?</p>
             <a 
               href={SUPPORT_LINK}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-brand-pink font-black uppercase tracking-widest hover:underline"
             >
                <MessageCircle size={18} />
                Falar com suporte no WhatsApp
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
