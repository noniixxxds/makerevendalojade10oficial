import React, { useState, useEffect } from 'react';
import { PRODUCTS, FAQ_ITEMS, TESTIMONIALS, CHECKOUT_LINK } from './constants';
import { CountdownTimer } from './components/CountdownTimer';
import { TestimonialCard } from './components/TestimonialCard';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';
import { CouponPopup } from './components/CouponPopup';
import { ShieldCheck, Heart, Lock, CheckCircle, ChevronDown, ChevronUp, MessageCircle, ArrowDown, Headset, PackageOpen, Gift, Smartphone, Calculator, BookOpen, Flame, Star, Crown, FileCheck } from 'lucide-react';

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Controle de Estado dos Popups
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  useEffect(() => {
    // Timer para aparecer o popup de Cupom (10 segundos)
    const timer = setTimeout(() => {
      setIsCouponOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 bg-[#fff0f5] pb-20 md:pb-0">
      <SalesNotification />
      
      {/* Popups controlados pelo App */}
      <CouponPopup isOpen={isCouponOpen} onClose={() => setIsCouponOpen(false)} />
      
      {/* FAIXA TOPO */}
      <div className="bg-brand-pink text-white text-center py-2 px-2 text-[10px] md:text-xs font-black uppercase tracking-widest animate-pulse sticky top-0 z-40 border-b border-pink-700 shadow-md">
         🔥 Black November: O preço vai subir a qualquer momento! 🔥
      </div>

      {/* 1. HEADLINE + HERO (PINK THEME) */}
      <header className="bg-gradient-to-b from-brand-pink via-purple-600 to-[#fff0f5] text-white text-center pt-8 pb-12 px-4 relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-md border border-white/40 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(255,255,255,0.3)] transform -rotate-1">
             ⚡ OFERTA ANTECIPADA DE BLACK FRIDAY
          </div>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight mb-4 drop-shadow-md text-white">
            "Descubra a Lista Secreta de Fornecedores que as Donas de Loja de R$10 <span className="bg-white text-brand-pink px-1 italic transform -skew-x-12 inline-block">Escondem de Você</span>"
          </h1>
          
          {/* WHATSAPP BADGE + GIF DEMO */}
          <div className="flex flex-col items-center justify-center mb-8">
             <div className="bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-sm md:text-base flex items-center shadow-lg animate-bounce mb-6 z-10 relative border-2 border-white/50">
               <svg viewBox="0 0 33 33" className="w-5 h-5 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg">
                   <path d="M16.6 0C7.4 0 0 7.5 0 16.7c0 3 .8 5.9 2.3 8.4L.6 33l8.1-2.1c2.4 1.3 5.1 2 7.9 2 9.2 0 16.6-7.5 16.6-16.7S25.8 0 16.6 0zm0 29.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.2 1.4 1.4-5.1-.3-.5C3.7 21.2 2.8 19 2.8 16.7c0-7.6 6.2-13.9 13.8-13.9s13.8 6.2 13.8 13.9-6.2 13.1-13.8 13.1zm7.6-10.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-1.7-.9-3.2-2.1-4.3-4.2-.3-.5 0-.8.2-1 .2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.8c.3.4 3.2 5 7.9 7 3.8 1.6 4.6 1.3 5.4 1.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.2-.2-.6-.3-1-.5z"/>
               </svg>
               Acesso enviado na hora no seu WhatsApp!
             </div>

             {/* GIF Container - Phone Mockup Style */}
             <div className="relative w-[260px] rounded-[2.5rem] border-8 border-brand-dark bg-brand-dark shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ring-4 ring-pink-400/50">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-20"></div>
                
                {/* Status Badge - Acesso Liberado */}
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 z-30 bg-white/90 text-brand-dark px-3 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 shadow-md border border-gray-200 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  acesso liberado em segundos
                </div>

                {/* Suporte 24h Sticker */}
                <div className="absolute top-16 -right-3 z-30 bg-yellow-400 text-black text-[8px] font-black px-3 py-1 shadow-lg transform rotate-6 border-2 border-white rounded-lg flex items-center gap-1">
                   <Headset size={12} />
                   SUPORTE 24H
                </div>

                {/* Screen Content */}
                <img 
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWJ3c2E0emxpdDF6a3ZsbWljNTRzNGZ6cmhrYXhjeXFobnp6ZWdlaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y0arF4lGb1PN6xwDva/giphy.gif" 
                  alt="Demonstração recebendo a lista no WhatsApp" 
                  className="w-full h-auto rounded-[2rem] scale-[1.02]"
                />
             </div>
             <p className="text-xs text-brand-dark mt-3 font-bold animate-pulse">👆 Veja como é fácil receber</p>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-6 font-medium drop-shadow-sm">
            Monte sua revenda em casa investindo menos que uma pizza.
          </p>
          
          {/* Author Profile - VISIBILIDADE MELHORADA */}
          <div className="flex items-center justify-center space-x-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/50 max-w-md mx-auto shadow-2xl transform hover:scale-105 transition-all duration-300">
             <img src="https://i.postimg.cc/jq75SSvD/image.png" alt="Sônia Prado" className="w-16 h-16 rounded-full border-2 border-brand-pink p-0.5 object-cover" />
             <div className="text-left">
               <p className="font-bold text-brand-dark text-sm leading-tight">Com Sônia, da fase difícil à independência</p>
               <p className="text-xs text-gray-700 mt-1 font-medium">Uma história marcada por fé, recomeço e provisão.</p>
             </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </header>

      {/* 2. MINI-STORYTELLING (The Hook) */}
      <section className="py-10 px-4 max-w-3xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-l-4 border-brand-pink relative -mt-16 z-20 overflow-hidden">
           {/* Background subtle touch */}
           <div className="absolute top-0 right-0 opacity-5 -mr-10 -mt-10 text-brand-pink">
              <Heart size={150} fill="currentColor" />
           </div>

          <span className="bg-brand-pink text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5 inline-block shadow-md">
            História Real
          </span>
          
          <h2 className="font-heading font-bold text-xl md:text-2xl text-gray-800 mb-6 leading-tight">
            Baseada em uma história real de recomeço com <span className="text-brand-pink underline decoration-pink-200 decoration-4 underline-offset-4">maquiagem acessível</span>
          </h2>
          
          <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Existem momentos em que a vida parece desabar. Foi o que aconteceu com <strong className="text-gray-800">Sônia Prado</strong>.
            </p>
            <p>
              Ela vendeu a casa para investir na Bolsa e perdeu tudo. O impacto foi devastador: nas finanças, no emocional e na saúde. Em suas palavras, <span className="bg-red-50 text-red-800 px-1 rounded font-medium">foi desesperador.</span>
            </p>
            <p className="pl-4 border-l-2 border-pink-300">
              Mas ao invés de desistir, Sônia agiu. Inspirada na irmã, juntou o que restava e abriu uma pequena loja vendendo <strong className="bg-pink-100 text-pink-900 px-1">maquiagens.</strong>
            </p>
            <p>
              O que era um último suspiro virou um novo começo. A loja encheu, o dinheiro girou e Sônia recuperou algo valioso: <span className="text-brand-pink font-bold">sua dignidade e fé.</span>
            </p>

            <div className="bg-[#fff0f5] p-5 rounded-xl border border-pink-100 mt-2 relative">
              <p className="italic text-gray-700 font-medium mb-3 text-center">
                "Deus é especialista em transformar cinzas em alegria. Ele continua agindo através de decisões corajosas."
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-brand-dark/70 font-bold uppercase tracking-wide border-t border-brand-dark/10 pt-3">
                <span>📖 Jeremias 29:11</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROVA SOCIAL MASSIVA (GRID LAYOUT) */}
      <section className="py-12 bg-[#E5DDD5] relative border-t border-gray-200">
        {/* Pattern Background WhatsApp Style */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-green-200 mb-3 inline-block">
                Tempo Real
              </span>
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-gray-800 flex flex-col md:flex-row items-center justify-center gap-2 leading-tight">
                <span>Elas acabaram de receber o acesso</span> 
                <span className="hidden md:inline text-gray-300">|</span>
                <span className="text-green-600 flex items-center gap-1.5 text-lg">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Entregas Hoje
                </span>
              </h3>
              <p className="text-sm text-gray-500 mt-2 max-w-lg mx-auto">
                Não é só você que está aproveitando a Black Friday. Veja quem já está com a lista na mão agora mesmo:
              </p>
            </div>

            {/* GRID LAYOUT - Um embaixo do outro (Mobile) e Lados (Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="transform hover:-translate-y-1 transition-transform duration-300">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
               <p className="text-xs text-gray-500 animate-pulse">
                 ⬇ Carregando mais entregas recentes...
               </p>
            </div>
        </div>
      </section>

      {/* BOTÃO FURA-FILA PARA ANSIOSOS */}
      <div className="w-full bg-[#E5DDD5] pb-12 px-4 flex flex-col items-center border-b border-gray-200 relative z-20">
         <a
           href="#oferta"
           className="group bg-[#25D366] hover:bg-green-600 text-white font-extrabold text-lg md:text-xl py-4 px-8 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transform transition duration-200 hover:scale-105 flex items-center gap-2 animate-pulse border-4 border-white"
         >
           QUERO A OFERTA BLACK AGORA ⚡
           <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
         </a>
         <p className="text-xs text-gray-500 mt-3 font-medium">Clique para garantir antes que acabe</p>
      </div>

      {/* 4. O QUE VOCÊ RECEBE (Product Showcase) */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
            <span className="bg-brand-dark text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md">Black November</span>
        </div>
        <h3 className="font-heading font-extrabold text-center text-2xl md:text-3xl text-brand-dark mb-2">
          Preços de <span className="text-white bg-brand-pink px-1 rotate-1 inline-block transform">Black Friday</span> o ano todo:
        </h3>
        <p className="text-center text-gray-600 mb-8">Você paga centavos e revende por R$ 10,00, R$ 15,00 ou mais.</p>

        {/* --- ESTRATÉGIA VISUAL: GIF DE ESTOQUE REAL (SNEAK PEEK) --- */}
        <div className="flex justify-center mb-12 relative z-10">
           <div className="relative w-[280px] rounded-2xl overflow-hidden border-[6px] border-brand-pink shadow-2xl bg-brand-dark rotate-1 hover:rotate-0 transition-transform duration-500 group ring-4 ring-pink-100">
               {/* Phone Header */}
               <div className="bg-white h-6 w-full flex justify-center items-center border-b border-gray-100">
                   <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
               </div>
               
               {/* Flutuante "Flagra" */}
               <div className="absolute top-10 right-2 z-10 bg-brand-pink text-white font-extrabold text-[10px] px-3 py-1.5 rounded-lg shadow-md border border-white/20 transform rotate-3 flex items-center gap-1">
                  <span>🎥</span>
                  IMAGEM DOS FORNECEDORES
               </div>

               {/* GIF INSERIDO AQUI */}
               <img 
                 src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmh0Y3Uxbm53dG93NDI3MnJjZzgwbHFldXI3cjJhMzBydGJpd2c2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Wfkq7BCVzOUwu1mqD/giphy.gif" 
                 alt="Unboxing fornecedor maquiagem" 
                 className="w-full h-auto object-cover blur-[5px] brightness-[0.9] contrast-110 transition-all duration-700"
               />

               {/* Caption overlay */}
               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/60 to-transparent p-4 pt-12 text-white text-center">
                   <div className="flex items-center justify-center gap-2 mb-1">
                      <PackageOpen size={16} className="text-yellow-300" />
                      <p className="text-xs font-bold text-yellow-200 uppercase tracking-wide animate-pulse">Chegou Reposição Black!</p>
                   </div>
                   <p className="text-[10px] text-white">É mercadoria de verdade chegando todo dia.</p>
               </div>
           </div>
           
           {/* Background Glow Effect */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-pink-500/20 blur-[50px] -z-10 rounded-full animate-pulse"></div>
        </div>
        {/* --- FIM DO GIF ESTRATÉGICO --- */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="bg-white p-3 pb-8 rounded-lg shadow-sm border border-gray-100 hover:border-brand-pink transition-all hover:shadow-xl group relative overflow-visible">
              
              {/* Dynamic Badge - Black Friday Style */}
              {product.badge ? (
                <div className="absolute -top-3 -right-3 bg-brand-pink text-white text-[9px] font-black w-14 h-14 flex items-center justify-center text-center rounded-full shadow-lg z-30 animate-pulse leading-tight border-2 border-white transform rotate-12">
                  {product.badge.replace(' ', '\n')}
                </div>
              ) : (
                <div className="absolute top-0 left-0 bg-green-500 text-white text-[9px] font-bold px-2 py-1 rounded-br-lg z-30">
                  LUCRO 400%
                </div>
              )}
              
              <div className="aspect-square overflow-hidden rounded-md mb-3 bg-gray-50 relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">{product.brand}</p>
              <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1 h-9 overflow-hidden">{product.name}</h4>
              <div className="flex items-end justify-between mt-2">
                <div className="flex flex-col">
                   <span className="text-[10px] text-gray-400">Revenda</span>
                   <span className="text-xs text-gray-400 line-through">R$ 15,00</span>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-[10px] text-green-600 font-bold">Custo Black</span>
                   <span className="text-lg font-extrabold text-green-600 leading-none">R$ {product.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white p-4 rounded-lg flex items-start space-x-3 border border-pink-100 shadow-sm">
                <Lock className="w-6 h-6 text-brand-pink flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-brand-dark">Lista Verificada</h4>
                    <p className="text-sm text-gray-700">Todos os contatos foram verificados.</p>
                </div>
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg flex items-start space-x-3 border border-green-200 shadow-sm">
                <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-green-800">Envio no WhatsApp</h4>
                    <p className="text-sm text-green-700">Você recebe o link no seu Zap na hora.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4.5 SUPORTE ANTES DO ROADMAP */}
      <section className="bg-[#f0fdf4] border-y border-green-100 py-8 px-4">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
               <div className="bg-white p-3 rounded-full shadow-sm border border-green-200 animate-pulse">
                  <Headset className="w-6 h-6 text-green-600" />
               </div>
               <div>
                  <h4 className="font-heading font-bold text-green-900 text-lg">Precisa tirar alguma dúvida?</h4>
                  <p className="text-sm text-green-700">Chame nosso suporte oficial antes de comprar.</p>
               </div>
            </div>
            
            <a 
               href="https://wa.me/5511980219977?text=Oi,%20tenho%20uma%20dúvida%20sobre%20a%20lista"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-green-200 transform transition hover:scale-105 flex items-center gap-2"
            >
               <MessageCircle size={20} fill="white" />
               CLIQUE AQUI
            </a>
         </div>
      </section>

      {/* --- NOVO BLOCO: PASSO A PASSO (Roadmap) --- */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
           <h3 className="font-heading font-extrabold text-center text-2xl text-gray-800 mb-8">
             Como funciona? <span className="text-brand-pink">É simples assim:</span>
           </h3>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative">
              {/* Linha Conectora (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-pink-50 -z-0"></div>

              {/* Passo 1 */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3 border-4 border-white ring-4 ring-pink-50">1</div>
                 <h4 className="font-bold text-gray-800 mb-1">Receba no Zap</h4>
                 <p className="text-xs text-gray-500">O acesso chega automaticamente no seu WhatsApp e E-mail.</p>
              </div>

              {/* Passo 2 */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3 border-4 border-white ring-4 ring-pink-50">2</div>
                 <h4 className="font-bold text-gray-800 mb-1">Chame os Lojistas</h4>
                 <p className="text-xs text-gray-500">Escolha os produtos de R$ 2,00 e faça seu pedido pelo celular.</p>
              </div>

              {/* Passo 3 */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3 border-4 border-white ring-4 ring-green-50">3</div>
                 <h4 className="font-bold text-gray-800 mb-1">Lucre 400%</h4>
                 <p className="text-xs text-gray-500">Venda para amigas e vizinhas com lucro absurdo.</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- NOVO BLOCO: BÔNUS (The Stack) - BRAND DARK THEME --- */}
      <section className="py-12 px-4 bg-brand-dark border-t border-b border-pink-900 text-white relative overflow-hidden">
         {/* Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/40 blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 blur-[100px] pointer-events-none"></div>

         <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-8">
               <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 inline-block animate-pulse shadow-md">
                  Exclusivo Black Friday
               </span>
               <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                  Leve <span className="text-yellow-300">3 Presentes</span> de Graça
               </h3>
               <p className="text-pink-100 mt-2">Só nessa oferta de Black Friday eu liberei tudo isso:</p>
            </div>

            <div className="space-y-4">
               {/* Bonus 1 */}
               <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4 relative overflow-hidden group hover:bg-white/20 transition-colors">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-brand-dark text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">DE GRAÇA</div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                     <Smartphone className="text-pink-200 w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-sm">Scripts de Venda Prontos</h4>
                     <p className="text-xs text-pink-100">Copie e cole minhas mensagens no Zap para vender sem ser chata.</p>
                     <p className="text-[10px] text-pink-300 mt-1 line-through">Valor: R$ 29,90</p>
                  </div>
               </div>

               {/* Bonus 2 */}
               <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4 relative overflow-hidden group hover:bg-white/20 transition-colors">
                   <div className="absolute top-0 right-0 bg-yellow-400 text-brand-dark text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">DE GRAÇA</div>
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                     <Calculator className="text-pink-200 w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-sm">Calculadora de Lucro</h4>
                     <p className="text-xs text-pink-100">Saiba exatamente por quanto vender cada peça para ter lucro.</p>
                     <p className="text-[10px] text-pink-300 mt-1 line-through">Valor: R$ 19,90</p>
                  </div>
               </div>

               {/* Bonus 3 */}
               <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4 relative overflow-hidden group hover:bg-white/20 transition-colors">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-brand-dark text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">DE GRAÇA</div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                     <BookOpen className="text-pink-200 w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-sm">Guia: Perdendo a Vergonha</h4>
                     <p className="text-xs text-pink-100">Técnicas simples para oferecer seus produtos com confiança.</p>
                     <p className="text-[10px] text-pink-300 mt-1 line-through">Valor: R$ 27,00</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. OFFER + URGENCY (PINK GRADIENT) */}
      <section id="oferta" className="py-12 px-4 bg-gradient-to-b from-brand-pink to-brand-dark text-white text-center rounded-t-[3rem] relative shadow-[0_-10px_40px_rgba(179,0,89,0.3)] mt-[-2rem]">
        <div className="max-w-2xl mx-auto">
           <div className="flex justify-center mb-4">
              <span className="bg-yellow-400 text-brand-dark px-4 py-1 rounded-full font-black uppercase text-sm animate-bounce flex items-center gap-2 shadow-lg">
                 <Flame className="w-4 h-4" /> Oferta Black
              </span>
           </div>
          <h3 className="font-hand text-4xl text-white mb-2">
            É agora ou nunca, minha flor!
          </h3>
          <p className="text-pink-100 mb-6">
            Essa oferta de <strong className="text-white">Black November</strong> pode sair do ar a qualquer momento.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 inline-block w-full max-w-md mb-8 relative overflow-hidden">
             {/* Ribbon */}
             <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg z-20 shadow-sm">90% OFF</div>

            <p className="text-sm uppercase tracking-widest text-pink-100 mb-2">Cupom Black: <span className="text-yellow-300 font-bold">DESCONTOLOJADE10</span></p>
            
            {/* STACK RECAP (NEW VISUAL) */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 text-left shadow-lg">
               <div className="flex items-center gap-2 mb-3 border-b border-gray-200 pb-2">
                  <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></span>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Resumo do Pedido</p>
               </div>

               <div className="space-y-3">
                  {/* Item Principal - HIGHLIGHT CARD */}
                  <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 p-4 rounded-xl border border-pink-100 shadow-sm mb-4 relative overflow-hidden group">
                      {/* Badge "O MAIS DESEJADO" */}
                      <div className="absolute top-0 right-0 bg-yellow-400 text-brand-dark text-[8px] font-black px-2 py-1 rounded-bl-lg z-10">
                          💎 O MAIS DESEJADO
                      </div>

                      <div className="flex items-start gap-3">
                          {/* Icon Box */}
                          <div className="bg-brand-pink text-white p-2 rounded-lg shadow-md flex-shrink-0 mt-1 border border-white ring-2 ring-pink-100">
                              <Crown size={20} fill="#FFD700" className="text-yellow-300" />
                          </div>

                          <div className="flex-1">
                              <h4 className="font-black text-brand-dark text-lg leading-tight mb-1">
                                  Lista de Fornecedores 2.0
                              </h4>
                              <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-green-200 flex items-center gap-1">
                                    <CheckCircle size={8} /> Vitalício
                                  </span>
                                  <span className="bg-blue-100 text-blue-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-blue-200">
                                    Atualizado 2025
                                  </span>
                              </div>
                          </div>
                      </div>

                      {/* Price Line dentro do Card */}
                      <div className="flex items-end justify-between border-t border-pink-100 pt-2 mt-2">
                          <p className="text-xs text-gray-400 line-through">De R$ 17,99</p>
                          <div className="text-right">
                              <p className="text-xs text-brand-pink font-bold">Por apenas:</p>
                              <p className="text-2xl font-black text-green-600 leading-none tracking-tight">R$ 7,90</p>
                          </div>
                      </div>
                  </div>

                  {/* Bônus 1 */}
                  <div className="flex justify-between items-center opacity-90 pl-2">
                     <div className="flex items-center gap-2">
                        <Gift className="w-3 h-3 text-brand-pink flex-shrink-0" />
                        <p className="text-xs text-gray-600">Bônus: Scripts de Venda</p>
                     </div>
                  </div>

                  {/* Bônus 2 */}
                  <div className="flex justify-between items-center opacity-90 pl-2">
                     <div className="flex items-center gap-2">
                        <Gift className="w-3 h-3 text-brand-pink flex-shrink-0" />
                        <p className="text-xs text-gray-600">Bônus: Calculadora de Lucro</p>
                     </div>
                  </div>

                   {/* Bônus 3 */}
                  <div className="flex justify-between items-center opacity-90 pl-2">
                     <div className="flex items-center gap-2">
                        <Gift className="w-3 h-3 text-brand-pink flex-shrink-0" />
                        <p className="text-xs text-gray-600">Bônus: Guia Vergonha Zero</p>
                     </div>
                  </div>
               </div>

               {/* Total Line */}
               <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <p className="text-xs text-gray-500">Valor Total:</p>
                  <div className="text-right">
                     <p className="text-xl font-black text-brand-pink leading-none">R$ 7,90</p>
                     <p className="text-[9px] text-gray-500">ou 1x no cartão</p>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-pink-200 line-through font-medium">R$ 17,99</span>
              <span className="text-6xl font-extrabold text-white drop-shadow-md">R$ 7,90</span>
            </div>
            <CountdownTimer />
          </div>

          <a 
            href={CHECKOUT_LINK}
            className="block w-full max-w-md mx-auto bg-[#25D366] hover:bg-green-600 text-white font-bold text-xl py-5 px-8 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.6)] transition-transform transform hover:scale-105 hover:-translate-y-1 animate-pulse-fast mb-4 flex items-center justify-center gap-3 border-2 border-white/20"
          >
             <svg viewBox="0 0 33 33" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 0C7.4 0 0 7.5 0 16.7c0 3 .8 5.9 2.3 8.4L.6 33l8.1-2.1c2.4 1.3 5.1 2 7.9 2 9.2 0 16.6-7.5 16.6-16.7S25.8 0 16.6 0zm0 29.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.2 1.4 1.4-5.1-.3-.5C3.7 21.2 2.8 19 2.8 16.7c0-7.6 6.2-13.9 13.8-13.9s13.8 6.2 13.8 13.9-6.2 13.1-13.8 13.1zm7.6-10.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-1.7-.9-3.2-2.1-4.3-4.2-.3-.5 0-.8.2-1 .2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.8c.3.4 3.2 5 7.9 7 3.8 1.6 4.6 1.3 5.4 1.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.2-.2-.6-.3-1-.5z"/>
             </svg>
             GARANTIR OFERTA NO WHATSAPP
          </a>
          
          {/* TRUST BADGES ROW */}
          <div className="mt-6 bg-white/5 rounded-xl p-3 border border-white/10 flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 md:gap-6 backdrop-blur-sm">
             <div className="flex items-center gap-2 opacity-90 bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
                <Lock size={14} className="text-green-400" />
                <span className="text-xs text-white font-bold tracking-wide">COMPRA 100% SEGURA</span>
             </div>
             <div className="flex gap-4 items-center opacity-80">
                 <div className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-white" />
                    <span className="text-[10px] text-white">Dados Protegidos</span>
                 </div>
                 <div className="flex items-center gap-1">
                    <FileCheck size={14} className="text-white" />
                    <span className="text-[10px] text-white">Entrega Garantida</span>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. GARANTIA + RECIPROCIDADE */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Guarantee Box */}
          <div className="border-2 border-brand-pink border-dashed p-6 rounded-2xl bg-[#fff0f5] relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-pink text-white px-4 py-1 rounded-full font-bold shadow-lg">
              DESAFIO 7 DIAS
            </div>
            <h4 className="text-center font-bold text-xl mt-4 mb-2 text-brand-dark">Eu confio tanto que assumo o risco</h4>
            <p className="text-center text-gray-700 mb-4">
              Se você comprar a lista, ligar para os fornecedores e achar que não valeu a pena, eu devolvo seus <strong>R$ 7,90</strong> NA HORA.
            </p>
            <p className="text-center text-xs text-gray-500 mt-2">É sério. Eu não brinco com o sonho de ninguém.</p>
          </div>

          {/* Reciprocity Request */}
          <div className="text-center">
            <Heart className="w-12 h-12 text-brand-pink mx-auto mb-3 animate-bounce" />
            <h4 className="font-heading font-bold text-lg">Um pedido de amiga...</h4>
            <p className="text-gray-600 italic">
              "A única coisa que te peço em troca desse preço simbólico é: assim que você fizer seus primeiros <strong className="text-green-600">R$ 500,00</strong> de lucro, me manda uma foto? Quero postar no meu Instagram e mostrar pro mundo que você venceu."
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-10 px-4 max-w-3xl mx-auto">
        <h3 className="font-heading font-bold text-2xl text-center mb-8 text-brand-dark">
          Tirando suas dúvidas (de mãe pra mãe)
        </h3>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 text-left focus:outline-none"
              >
                <span className="font-bold text-gray-700 text-sm md:text-base">{item.question}</span>
                {openFaqIndex === index ? <ChevronUp className="w-5 h-5 text-brand-pink" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              {openFaqIndex === index && (
                <div className="p-4 bg-[#fff0f5] border-t border-gray-100 text-gray-700 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Support Block in FAQ */}
        <div className="mt-8 p-6 bg-[#f0fdf4] rounded-2xl border border-green-100 text-center shadow-sm">
           <p className="text-gray-700 font-medium mb-4">
             Ainda está com o coração apertado ou com dúvida? <br/>
             <span className="text-sm text-gray-500">Fica tranquila, eu mesma te respondo no Zap:</span>
           </p>
           <a 
             href="https://wa.me/5511980219977?text=Oi,%20tenho%20uma%20dúvida%20sobre%20a%20lista%20de%20fornecedores"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors"
           >
             <MessageCircle size={18} />
             Chamar no WhatsApp
           </a>
        </div>
      </section>

      <footer className="bg-brand-dark text-white py-8 text-center text-xs">
        <p className="mb-2">© 2024 Sônia Prado - Todos os direitos reservados.</p>
        <p className="text-pink-200">Este site não faz parte do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.</p>
      </footer>
      
      <StickyCTA />
    </div>
  );
}

export default App;