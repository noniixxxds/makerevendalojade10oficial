import React, { useState, useEffect } from 'react';
import { PRODUCTS, FAQ_ITEMS, TESTIMONIALS, CHECKOUT_LINK } from './constants';
import { CountdownTimer } from './components/CountdownTimer';
import { TestimonialCard } from './components/TestimonialCard';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';
import { CouponPopup } from './components/CouponPopup';
import { SupportPopup } from './components/SupportPopup';
import { ShieldCheck, Heart, Lock, CheckCircle, ChevronDown, ChevronUp, MessageCircle, ArrowDown, Headset, PackageOpen, Gift, Smartphone, Calculator, BookOpen } from 'lucide-react';

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Controle de Estado dos Popups
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  useEffect(() => {
    // 5 segundos para aparecer o primeiro popup (Suporte) após carregamento
    const timer = setTimeout(() => {
      setIsSupportOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseSupport = () => {
    setIsSupportOpen(false);
    // Só inicia a contagem do segundo popup (Cupom) após o primeiro ser fechado
    // 9 segundos de intervalo conforme solicitado
    setTimeout(() => {
      setIsCouponOpen(true);
    }, 9000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 pb-20 md:pb-0">
      <SalesNotification />
      
      {/* Popups controlados pelo App */}
      <SupportPopup isOpen={isSupportOpen} onClose={handleCloseSupport} />
      <CouponPopup isOpen={isCouponOpen} onClose={() => setIsCouponOpen(false)} />
      
      {/* 1. HEADLINE + HERO */}
      <header className="bg-gradient-to-b from-brand-pink to-pink-700 text-white text-center pt-8 pb-12 px-4 relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="inline-block bg-yellow-300 text-pink-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-lg transform -rotate-2">
            ⚠️ Atenção: Oportunidade Única
          </div>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight mb-4">
            "Descubra a Lista Secreta de Fornecedores que as Donas de Loja de R$10 <span className="bg-white text-brand-pink px-1">Escondem de Você</span>"
          </h1>
          
          {/* WHATSAPP BADGE + GIF DEMO */}
          <div className="flex flex-col items-center justify-center mb-8">
             <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm md:text-base flex items-center shadow-lg animate-bounce mb-6 z-10 relative">
               <MessageCircle className="w-5 h-5 mr-2" fill="white" />
               Acesso enviado na hora no seu WhatsApp!
             </div>

             {/* GIF Container - Phone Mockup Style */}
             <div className="relative w-[260px] rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-20"></div>
                
                {/* Status Badge - Acesso Liberado */}
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 z-30 bg-black/80 text-white px-3 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 shadow-md border border-white/10 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  acesso liberado em segundos
                </div>

                {/* Suporte 24h Sticker */}
                <div className="absolute top-16 -right-3 z-30 bg-yellow-400 text-pink-900 text-[8px] font-black px-3 py-1 shadow-lg transform rotate-6 border-2 border-white rounded-lg flex items-center gap-1">
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
             <p className="text-xs text-white/80 mt-3 font-medium animate-pulse">👆 Veja como é fácil receber</p>
          </div>

          <p className="text-lg md:text-xl text-pink-100 mb-6 font-medium">
            Monte sua revenda em casa investindo menos que uma pizza.
          </p>
          
          {/* Author Profile */}
          <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 max-w-md mx-auto">
             <img src="https://i.postimg.cc/jq75SSvD/image.png" alt="Sônia Prado" className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover" />
             <div className="text-left">
               <p className="font-bold text-white text-sm">Com Sônia, da fase difícil à independência</p>
               <p className="text-xs text-pink-200">Uma história marcada por fé, recomeço e provisão.</p>
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
           <div className="absolute top-0 right-0 opacity-5 -mr-10 -mt-10">
              <Heart size={150} />
           </div>

          <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5 inline-block border border-pink-100">
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
            <p className="pl-4 border-l-2 border-brand-pink/30">
              Mas ao invés de desistir, Sônia agiu. Inspirada na irmã, juntou o que restava e abriu uma pequena loja vendendo <strong className="bg-yellow-100 text-gray-900 px-1">maquiagens.</strong>
            </p>
            <p>
              O que era um último suspiro virou um novo começo. A loja encheu, o dinheiro girou e Sônia recuperou algo valioso: <span className="text-brand-pink font-bold">sua dignidade e fé.</span>
            </p>

            <div className="bg-brand-bg/50 p-5 rounded-xl border border-brand-light mt-2 relative">
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

      {/* 3. PROVA SOCIAL MASSIVA (Carousel) */}
      <section className="py-8 bg-brand-bg">
        <div className="text-center mb-6 px-4">
          <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-800 flex items-center justify-center gap-2">
            Monitoramento de Entregas no Zap <span className="animate-pulse text-green-500">●</span>
          </h3>
          <p className="text-sm text-gray-500 mt-1">Atualizado em tempo real</p>
        </div>

        <div className="flex overflow-x-auto pb-8 px-4 space-x-4 hide-scrollbar snap-x">
           {/* Duplicate array for seamless feel mock */}
           {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
             <TestimonialCard key={i} {...t} />
           ))}
        </div>
      </section>

      {/* BOTÃO FURA-FILA PARA ANSIOSOS */}
      <div className="w-full bg-brand-bg pb-10 px-4 flex flex-col items-center">
         <a
           href="#oferta"
           className="group bg-[#25D366] hover:bg-green-600 text-white font-extrabold text-lg md:text-xl py-4 px-8 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transform transition duration-200 hover:scale-105 flex items-center gap-2 animate-pulse"
         >
           QUERO A LISTA AGORA ⚡
           <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
         </a>
         <p className="text-xs text-gray-500 mt-3">Clique para pular a explicação e ir para o cupom</p>
      </div>

      {/* 4. O QUE VOCÊ RECEBE (Product Showcase) */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h3 className="font-heading font-extrabold text-center text-2xl md:text-3xl text-brand-dark mb-2">
          Olha o preço que você vai pagar nas peças:
        </h3>
        <p className="text-center text-gray-600 mb-8">Você paga centavos e revende por R$ 10,00, R$ 15,00 ou mais.</p>

        {/* --- ESTRATÉGIA VISUAL: GIF DE ESTOQUE REAL (SNEAK PEEK) --- */}
        <div className="flex justify-center mb-12 relative z-10">
           <div className="relative w-[280px] rounded-2xl overflow-hidden border-[6px] border-gray-800 shadow-2xl bg-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500 group">
               {/* Phone Header */}
               <div className="bg-gray-800 h-6 w-full flex justify-center items-center">
                   <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
               </div>
               
               {/* Flutuante "Flagra" */}
               <div className="absolute top-10 right-2 z-10 bg-white/95 text-brand-pink font-extrabold text-[10px] px-3 py-1.5 rounded-lg shadow-md border border-pink-100 transform rotate-3 flex items-center gap-1">
                  <span>🎥</span>
                  IMAGEM DOS FORNECEDORES
               </div>

               {/* GIF INSERIDO AQUI */}
               <img 
                 src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmh0Y3Uxbm53dG93NDI3MnJjZzgwbHFldXI3cjJhMzBydGJpd2c2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Wfkq7BCVzOUwu1mqD/giphy.gif" 
                 alt="Unboxing fornecedor maquiagem" 
                 className="w-full h-auto object-cover blur-[2px] brightness-[0.6] contrast-125 group-hover:blur-0 group-hover:brightness-100 transition-all duration-700"
               />

               {/* Caption overlay */}
               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12 text-white text-center">
                   <div className="flex items-center justify-center gap-2 mb-1">
                      <PackageOpen size={16} className="text-yellow-400" />
                      <p className="text-xs font-bold text-yellow-300 uppercase tracking-wide animate-pulse">Chegou Reposição!</p>
                   </div>
                   <p className="text-[10px] text-gray-200">É mercadoria de verdade chegando todo dia.</p>
               </div>
           </div>
           
           {/* Background Glow Effect */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-brand-pink/20 blur-[50px] -z-10 rounded-full animate-pulse"></div>
        </div>
        {/* --- FIM DO GIF ESTRATÉGICO --- */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="bg-white p-3 pb-8 rounded-lg shadow-sm border border-gray-200 hover:border-brand-pink transition-all hover:shadow-md group relative overflow-visible">
              
              {/* Dynamic Badge - Red Sticker Style */}
              {product.badge ? (
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-extrabold w-12 h-12 flex items-center justify-center text-center rounded-full shadow-md z-30 animate-pulse leading-tight border-2 border-white">
                  {product.badge.replace(' ', '\n')}
                </div>
              ) : (
                <div className="absolute top-0 left-0 bg-green-500 text-white text-[9px] font-bold px-2 py-1 rounded-br-lg z-30">
                  LUCRO 400%
                </div>
              )}
              
              <div className="aspect-square overflow-hidden rounded-md mb-3 bg-gray-100 relative">
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
                   <span className="text-[10px] text-brand-pink font-bold">Custo</span>
                   <span className="text-lg font-extrabold text-brand-pink leading-none">R$ {product.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-brand-light p-4 rounded-lg flex items-start space-x-3">
                <Lock className="w-6 h-6 text-brand-pink flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-brand-dark">Lista Verificada</h4>
                    <p className="text-sm text-gray-700">Todos os contatos foram verificados.</p>
                </div>
            </div>
            <div className="flex-1 bg-green-100 p-4 rounded-lg flex items-start space-x-3 border border-green-200">
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
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -z-0"></div>

              {/* Passo 1 */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3 border-4 border-white">1</div>
                 <h4 className="font-bold text-gray-800 mb-1">Receba no Zap</h4>
                 <p className="text-xs text-gray-500">O acesso chega automaticamente no seu WhatsApp e E-mail.</p>
              </div>

              {/* Passo 2 */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3 border-4 border-white">2</div>
                 <h4 className="font-bold text-gray-800 mb-1">Chame os Lojistas</h4>
                 <p className="text-xs text-gray-500">Escolha os produtos de R$ 2,00 e faça seu pedido pelo celular.</p>
              </div>

              {/* Passo 3 */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3 border-4 border-white">3</div>
                 <h4 className="font-bold text-gray-800 mb-1">Lucre 400%</h4>
                 <p className="text-xs text-gray-500">Venda para amigas e vizinhas com lucro absurdo.</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- NOVO BLOCO: BÔNUS (The Stack) --- */}
      <section className="py-12 px-4 bg-gray-50 border-t border-b border-gray-200">
         <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
               <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  Somente Hoje
               </span>
               <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-gray-800">
                  Leve <span className="text-brand-pink">3 Presentes</span> de Graça
               </h3>
               <p className="text-gray-600 mt-2">Eu preparei esses manuais para você não ter medo de começar.</p>
            </div>

            <div className="space-y-4">
               {/* Bonus 1 */}
               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 relative overflow-hidden group hover:border-brand-pink transition-colors">
                  <div className="absolute top-0 right-0 bg-brand-pink text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">DE GRAÇA</div>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Smartphone className="text-brand-pink w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-800 text-sm">Scripts de Venda Prontos</h4>
                     <p className="text-xs text-gray-500">Copie e cole minhas mensagens no Zap para vender sem ser chata.</p>
                     <p className="text-[10px] text-gray-400 mt-1 line-through">Valor: R$ 29,90</p>
                  </div>
               </div>

               {/* Bonus 2 */}
               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 relative overflow-hidden group hover:border-brand-pink transition-colors">
                   <div className="absolute top-0 right-0 bg-brand-pink text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">DE GRAÇA</div>
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Calculator className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-800 text-sm">Calculadora de Lucro</h4>
                     <p className="text-xs text-gray-500">Saiba exatamente por quanto vender cada peça para ter lucro.</p>
                     <p className="text-[10px] text-gray-400 mt-1 line-through">Valor: R$ 19,90</p>
                  </div>
               </div>

               {/* Bonus 3 */}
               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 relative overflow-hidden group hover:border-brand-pink transition-colors">
                  <div className="absolute top-0 right-0 bg-brand-pink text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">DE GRAÇA</div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <BookOpen className="text-yellow-600 w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-800 text-sm">Guia: Perdendo a Vergonha</h4>
                     <p className="text-xs text-gray-500">Técnicas simples para oferecer seus produtos com confiança.</p>
                     <p className="text-[10px] text-gray-400 mt-1 line-through">Valor: R$ 27,00</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. OFFER + URGENCY */}
      <section id="oferta" className="py-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center rounded-t-[3rem] relative shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-hand text-4xl text-brand-pink mb-2 animate-pulse">
            É agora ou nunca, minha flor!
          </h3>
          <p className="text-gray-300 mb-6">
            Essa oferta só vale enquanto o botão estiver rosa. Eu não posso garantir esse preço amanhã.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 inline-block w-full max-w-md mb-8">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Cupom Aplicado: <span className="text-green-400 font-bold">DESCONTOLOJADE10</span></p>
            
            {/* STACK RECAP */}
            <div className="text-left bg-black/20 p-3 rounded-lg mb-4 text-xs space-y-1 text-gray-300">
               <div className="flex justify-between"><span>✅ Lista de Fornecedores</span> <span className="line-through opacity-50">R$ 49,90</span></div>
               <div className="flex justify-between"><span>🎁 Bônus 1: Scripts de Venda</span> <span className="text-green-400">GRÁTIS</span></div>
               <div className="flex justify-between"><span>🎁 Bônus 2: Calculadora</span> <span className="text-green-400">GRÁTIS</span></div>
               <div className="flex justify-between"><span>🎁 Bônus 3: Guia Vergonha Zero</span> <span className="text-green-400">GRÁTIS</span></div>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-gray-500 line-through font-medium">R$ 97,90</span>
              <span className="text-6xl font-extrabold text-brand-pink drop-shadow-lg">R$ 17,99</span>
            </div>
            <CountdownTimer />
          </div>

          <a 
            href={CHECKOUT_LINK}
            className="block w-full max-w-md mx-auto bg-[#25D366] hover:bg-green-600 text-white font-bold text-xl py-5 px-8 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.6)] transition-transform transform hover:scale-105 hover:-translate-y-1 animate-pulse-fast mb-4 flex items-center justify-center gap-3"
          >
             <MessageCircle className="w-8 h-8" fill="white" />
             RECEBER TUDO NO MEU ZAP
          </a>
          
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
             <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1" /> Compra Segura</span>
             <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> Chega no Zap</span>
          </div>
        </div>
      </section>

      {/* 6. GARANTIA + RECIPROCIDADE */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Guarantee Box */}
          <div className="border-2 border-brand-pink border-dashed p-6 rounded-2xl bg-brand-bg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-pink text-white px-4 py-1 rounded-full font-bold shadow-lg">
              DESAFIO 7 DIAS
            </div>
            <h4 className="text-center font-bold text-xl mt-4 mb-2 text-brand-dark">Eu confio tanto que assumo o risco</h4>
            <p className="text-center text-gray-700 mb-4">
              Se você comprar a lista, ligar para os fornecedores e achar que não valeu a pena, eu devolvo seus <strong>R$ 17,99</strong> NA HORA.
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
        <h3 className="font-heading font-bold text-2xl text-center mb-8 text-gray-800">
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
                <div className="p-4 bg-brand-bg border-t border-gray-100 text-gray-700 text-sm">
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
             className="inline-flex items-center justify-center gap-2 text-green-700 bg-white px-6 py-3 rounded-full border border-green-200 shadow-sm hover:bg-green-50 hover:scale-105 transition-all font-bold text-sm"
           >
             <MessageCircle size={20} className="fill-green-100" />
             Falar com Suporte: (11) 98021-9977
           </a>
        </div>
      </section>

      {/* 8. FOOTER PROOF */}
      <footer className="bg-gray-100 pt-12 pb-24 md:pb-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          
          <h4 className="text-center font-bold text-gray-500 mb-6 uppercase text-sm tracking-widest">Mais gente chegando agora:</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 opacity-75">
             {/* Generating random avatars for extra social proof feeling */}
             {Array.from({ length: 10 }).map((_, i) => (
               <div key={i} className="flex items-center space-x-2 bg-white p-2 rounded border border-gray-200">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 50}`} className="w-8 h-8 rounded-full" alt="Avatar" />
                 <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-gray-600">Comprou agora</span>
                   <span className="text-[8px] text-green-500">Verificado</span>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="text-center text-xs text-gray-400 space-y-2">
            <p>© 2025 Lista de Fornecedores Oficial.</p>
            <p>Este site não tem vínculo com o Facebook ou Instagram.</p>
            <p className="max-w-md mx-auto">
              Os resultados podem variar de pessoa para pessoa. O sucesso depende da sua dedicação. Mas com fornecedor barato, metade do caminho já tá andado!
            </p>
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
}

export default App;