
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
import { ProfitSimulator } from './components/ProfitSimulator';
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
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-24 md:pb-0 selection:bg-brand-pink selection:text-white overflow-x-hidden">
      
      <SalesNotification />
      <StickyCTA onAction={goToCatalog} />

      {/* --- HERO SECTION REFORMULADA (STYLE: META ADVANTAGE+) --- */}
      <header className="bg-[#fafafa] pt-20 pb-28 px-4 text-center relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center">
          
          {/* Selo Discreto de Autoridade - Reforço Neutro */}
          <div className="inline-flex items-center gap-1.5 border border-gray-200 text-gray-400 px-3 py-1 rounded-full font-medium text-[8px] md:text-[9px] uppercase tracking-[0.25em] mb-20 opacity-60 gpu-boost">
             <ShieldCheck size={10} strokeWidth={1.5} />
             Acesso VIP pra Lojistas
          </div>

          <h1 className="font-heading text-4xl md:text-7xl font-[900] text-gray-900 leading-[1.1] mb-14 uppercase tracking-tighter text-center flex flex-col items-center">
             <span className="opacity-90">ELA NÃO TEM SORTE.</span>
             <span className="text-brand-pink flex items-center gap-2">
                ELA TEM FORNECEDOR.
             </span>
          </h1>

          {/* ÁREA DE VÍDEO / GIF DE LOJA CHEIA - MÁXIMO IMPACTO */}
          <div className="w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] border-[12px] border-white gpu-boost relative group">
             <div className="absolute inset-0 bg-black/5 pointer-events-none z-10"></div>
             <img 
               src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN215eWl6Nmthdm4xaHpvbGJhc3oyY2R2MDNsNGdrZzEwM2Z5aW0yMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qf1og8TmCIbVD5giqa/giphy.gif" 
               alt="Loja cheia e estoque girando"
               className="w-full h-full object-cover block optimize-img gpu-boost"
               loading="eager"
             />
             
             {/* Overlay de Demanda */}
             <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20">
                   <p className="text-xs font-black text-gray-900 uppercase tracking-tighter">ESTOQUE ESGOTANDO EM</p>
                   <p className="text-2xl font-black text-brand-pink font-mono">04:12</p>
                </div>
                <div className="bg-[#25D366] text-white px-5 py-2 rounded-xl shadow-lg flex items-center gap-2 font-black text-xs uppercase animate-pulse">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                   Demanda Alta
                </div>
             </div>
          </div>
          
          <p className="mt-12 text-gray-400 font-bold italic text-lg max-w-xl">
             "O segredo das lojas que faturam R$ 10.000+ por mês não é sorte, é o contato direto com a fonte."
          </p>
        </div>
      </header>

      {/* --- PROFIT COMPARISON SECTION --- */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          <div className="mb-24">
            <ProfitSimulator />
          </div>

          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-yellow-400 text-brand-dark px-4 py-1 rounded-full font-black text-xs uppercase mb-4 shadow-lg">
                <DollarSign size={14} />
                A MATEMÁTICA DO SUCESSO
             </div>
             <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase italic leading-tight mb-4 tracking-tighter">
               Quanto você vai <span className="text-brand-pink">lucrar?</span>
             </h2>
             <p className="text-white/60 font-medium">Veja os preços que você pagará diretamente nas Importadoras da Lista:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFIT_DATA.map((item, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col items-center group hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 gpu-boost">
                  <div className="w-full aspect-square bg-white rounded-3xl mb-6 p-4 relative overflow-hidden shadow-inner">
                     <img 
                       src={item.img} 
                       alt={item.name} 
                       className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 optimize-img"
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
        </div>
      </section>

      {/* --- UNIQUE OFFER SECTION --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
             <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 uppercase italic mb-4 leading-tight tracking-tighter">
               Comece seu <span className="text-brand-pink">império hoje!</span>
             </h2>
             <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
               Pare de pagar caro em kits prontos. Compre direto das maiores importadoras do Brasil.
             </p>
          </div>

          <div className="relative group bg-brand-dark rounded-[3.5rem] p-8 md:p-12 border-4 border-yellow-400 shadow-[0_30px_60px_rgba(0,0,0,0.3)] z-10 gpu-boost">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-full text-black text-xs font-black uppercase tracking-widest animate-pulse">
               LUCRO MÁXIMO + BÔNUS
             </div>
             
             <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 shadow-inner border border-white/20">
                   <Globe size={48} className="text-yellow-400" />
                </div>
                
                <h3 className="font-heading text-4xl font-black text-white uppercase mb-4 italic tracking-tighter">Lista de Fornecedores</h3>
                
                <div className="w-full space-y-4 mb-10 max-w-md mx-auto">
                   <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                      <Gift size={16} /> VOCÊ TAMBÉM LEVA HOJE:
                   </p>
                   
                   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-left flex items-start gap-4 transition-all hover:bg-white/10 cursor-default">
                      <div className="bg-yellow-400/20 p-2 rounded-xl shrink-0">
                         <Star size={18} className="text-yellow-400 fill-yellow-400" />
                      </div>
                      <div>
                         <p className="text-white font-black text-sm uppercase italic">Manual Instagram que Vende</p>
                         <p className="text-white/60 text-xs leading-relaxed">Aprenda a atrair seguidoras que compram todos os dias.</p>
                      </div>
                   </div>

                   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-left flex items-start gap-4 transition-all hover:bg-white/10 cursor-default">
                      <div className="bg-yellow-400/20 p-2 rounded-xl shrink-0">
                         <MessageCircle size={18} className="text-yellow-400 fill-yellow-400" />
                      </div>
                      <div>
                         <p className="text-white font-black text-sm uppercase italic">Scripts de Venda WhatsApp</p>
                         <p className="text-white/60 text-xs leading-relaxed">O que falar para fechar vendas no automático.</p>
                      </div>
                   </div>
                </div>

                <div className="mb-10 flex flex-col items-center">
                   <span className="text-white/40 line-through text-lg font-bold">DE R$ 19,89</span>
                   <div className="flex flex-col items-center">
                      <div className="flex items-baseline gap-2">
                         <span className="text-white text-7xl font-black drop-shadow-lg tracking-tighter">R$ 9,99</span>
                      </div>
                      <span className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter mt-2">Taxa Única</span>
                   </div>
                </div>

                <a 
                  href={SUPPLIER_LIST_CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-brand-dark font-black py-6 rounded-full text-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 border-b-8 border-yellow-700 active:border-b-0 active:translate-y-1"
                >
                  GARANTIR LISTA + BÔNUS
                  <ArrowRight size={28} className="fill-brand-dark" />
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="font-heading text-4xl font-black text-gray-800 mb-4 uppercase italic tracking-tighter">
                Quem já acessou, <span className="text-brand-pink">está lucrando!</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand-pink mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
               <div className="bg-brand-dark rounded-[3rem] md:rounded-[4rem] p-6 md:p-14 relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] border-4 border-white/5 gpu-boost">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink rounded-full blur-[100px] opacity-20 -mr-40 -mt-40"></div>
                  
                  <div className="flex flex-col lg:flex-row items-center gap-14 relative z-10">
                     <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-black text-[10px] md:text-xs uppercase mb-8 shadow-lg border border-white/20">
                           <Zap size={14} className="fill-white" />
                           Acesso Imediato Liberado
                        </div>
                        <h3 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 uppercase italic leading-tight tracking-tighter">
                          Sua lista entregue <span className="text-brand-pink">em segundos!</span>
                        </h3>
                        <p className="text-white/60 font-medium">Você paga agora e recebe os contatos no mesmo minuto via e-mail e WhatsApp.</p>
                     </div>

                     <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[440px] gpu-boost">
                           <div className="relative bg-white rounded-[2.5rem] p-2 shadow-2xl overflow-hidden aspect-[16/10] md:aspect-auto gpu-boost border-8 border-white/10">
                              <img 
                                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNmNmI0MHdwczNoeXlvYjJucTZqbTZ4djk5YnI1dHM5d2JkeHhvOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sQDYXzIfNEzsXbxgX4/giphy.gif" 
                                alt="Prova de entrega" 
                                className="w-full h-full object-cover rounded-[2rem] optimize-img gpu-boost"
                                loading="lazy"
                              />
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
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
           <div className="inline-block bg-white/10 p-8 rounded-full mb-12 gpu-boost">
              <Gem className="w-20 h-20 text-yellow-400" />
           </div>
           <h2 className="font-heading text-4xl md:text-7xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
             Sua independência <span className="text-brand-pink">financeira</span> começa aqui!
           </h2>
           <p className="text-xl md:text-2xl text-pink-100 mb-14 leading-relaxed font-medium">
             Pare de adiar. Essa é a única diferença entre quem fatura e quem só observa: o acesso à fonte.
           </p>

           <div className="flex flex-col items-center justify-center gap-6">
              <a 
                href={SUPPLIER_LIST_CHECKOUT}
                className="w-full md:w-auto inline-flex items-center justify-center gap-5 bg-yellow-400 hover:bg-yellow-500 text-brand-dark font-black py-10 px-20 rounded-full shadow-2xl text-4xl transition-all transform hover:scale-105 border-b-8 border-yellow-700 active:border-b-0 active:translate-y-1 tracking-tighter"
              >
                 <Globe size={48} />
                 QUERO ACESSO AGORA
              </a>
           </div>
        </div>
      </header>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-1 rounded-full font-black text-xs uppercase mb-4 tracking-widest">
              <HelpCircle size={14} />
              Dúvidas Frequentes
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase italic tracking-tighter">
              Ainda com <span className="text-brand-pink">dúvidas?</span>
            </h2>
          </div>

          <div className="space-y-5">
            {FAQ_ITEMS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-[2rem] overflow-hidden border transition-all duration-300 ${
                  openFaq === idx ? 'border-brand-pink shadow-xl' : 'border-gray-200 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left group"
                >
                  <span className={`font-bold text-lg md:text-xl transition-colors ${
                    openFaq === idx ? 'text-brand-pink' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    {openFaq === idx ? (
                      <Minus size={24} className="text-brand-pink" />
                    ) : (
                      <Plus size={24} className="text-gray-400 group-hover:text-brand-pink" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed font-medium text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0f0005] text-white py-20 text-center border-t border-brand-dark/20">
         <div className="container mx-auto px-4">
            <h3 className="font-hand text-6xl mb-8 text-brand-pink">O sucesso é uma escolha!</h3>
            <p className="mb-10 opacity-30 text-sm max-w-md mx-auto font-medium">
               Make Revenda © 2024. Todos os direitos reservados.
            </p>
         </div>
      </footer>
    </div>
  );
}
