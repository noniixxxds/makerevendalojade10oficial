import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  Lock, 
  ChevronDown, 
  Sparkles, 
  Gem, 
  Smile
} from 'lucide-react';
import { CouponPopup } from './components/CouponPopup';
import { TestimonialCard } from './components/TestimonialCard';
import { CountdownTimer } from './components/CountdownTimer';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';
import { PRODUCTS, FAQ_ITEMS, TESTIMONIALS, CHECKOUT_LINK } from './constants';

export default function App() {
  // State for Popups logic
  const [showCouponPopup, setShowCouponPopup] = useState(false);

  // Show Coupon Popup after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCouponPopup(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-gray-800 pb-24 md:pb-0 selection:bg-brand-pink selection:text-white overflow-x-hidden">
      
      {/* Notifications & Sticky Elements */}
      <SalesNotification />
      <StickyCTA />

      {/* Popups */}
      <CouponPopup isOpen={showCouponPopup} onClose={() => setShowCouponPopup(false)} />

      {/* --- HERO SECTION --- */}
      <header className="bg-gradient-to-b from-brand-pink to-brand-dark text-white pt-8 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          
          {/* PAIN BOX */}
          <div className="bg-white text-brand-dark p-6 rounded-xl shadow-2xl transform rotate-1 border-b-8 border-brand-dark max-w-3xl mx-auto mb-8 animate-bounce-in">
             <div className="flex flex-col items-center gap-6">
                <div className="text-center w-full">
                   <p className="font-hand text-2xl md:text-3xl font-bold text-red-600 leading-tight mb-2">
                    VOCÊ MERECE UMA RENDA QUE ACOMPANHE OS SONHOS DA <span className="bg-yellow-300 px-1 transform -rotate-2 inline-block border-2 border-black">FAMÍLIA</span>
                   </p>
                   <p className="font-bold text-lg text-gray-800 uppercase mb-2">
                     TÁ NA HORA DE TER SUA PRÓPRIA RENDA💸💸💸
                   </p>
                   <span className="inline-flex items-center gap-2 bg-[#25D366] text-white px-3 py-1 rounded-md font-bold shadow-sm transform rotate-1 border-2 border-white text-base md:text-lg animate-pulse">
                      <svg viewBox="0 0 33 33" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 0C7.4 0 0 7.5 0 16.7c0 3 .8 5.9 2.3 8.4L.6 33l8.1-2.1c2.4 1.3 5.1 2 7.9 2 9.2 0 16.6-7.5 16.6-16.7S25.8 0 16.6 0zm0 29.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.2 1.4 1.4-5.1-.3-.5C3.7 21.2 2.8 19 2.8 16.7c0-7.6 6.2-13.9 13.8-13.9s13.8 6.2 13.8 13.9-6.2 13.1-13.8 13.1zm7.6-10.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-1.7-.9-3.2-2.1-4.3-4.2-.3-.5 0-.8.2-1 .2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.8c.3.4 3.2 5 7.9 7 3.8 1.6 4.6 1.3 5.4 1.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.2-.2-.6-.3-1-.5z"/></svg>
                      Acesso imediato à Lista 2.0
                   </span>
                </div>
                <div className="w-full max-w-md mx-auto relative group">
                   <img 
                      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnFocGZheHdjdnZ4eGM1dHA4bW5tbGVhMW8ybm03ZGxnNjRlcDY0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qf1og8TmCIbVD5giqa/giphy.gif" 
                      alt="Independência Financeira" 
                      className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300 border-2 border-gray-100"
                   />
                   {/* Faixa Inauguração */}
                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] bg-red-600 text-white font-black text-center py-2 shadow-lg border-2 border-yellow-400 rotate-1 uppercase tracking-wider text-base md:text-lg z-10 flex items-center justify-center gap-2">
                     Ela já faz acontecer. E você?
                   </div>
                </div>
             </div>
          </div>

        </div>
      </header>

      {/* --- HOW IT WORKS (WITH PRODUCTS INSIDE STEP 2) --- */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
         <div className="container mx-auto px-4 max-w-6xl">
           
           {/* IMAGES SHOWCASE */}
           <div className="mb-12 max-w-3xl mx-auto flex flex-col gap-8">
             
             {/* 1. PHYSICAL STORE */}
             <div className="bg-white p-2 md:p-4 rounded-2xl shadow-xl border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative group z-10">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#25D366] text-white px-6 py-1.5 rounded-full font-bold shadow-lg border-2 border-white z-10 whitespace-nowrap text-sm md:text-base animate-pulse">
                   🤑 O resultado é esse aqui:
                </div>
                <img 
                   src="https://i.postimg.cc/d3QNyWCf/Gemini-Generated-Image-vutdtyvutdtyvutd.png" 
                   alt="Loja de Maquiagem Lotada" 
                   className="w-full rounded-xl shadow-inner"
                />
             </div>

             {/* 2. SHOPEE SALES */}
             <div className="relative">
                <div className="text-center mb-4 relative z-20 -mt-2">
                   <h3 className="font-hand text-3xl md:text-5xl font-black text-[#ee4d2d] bg-white px-6 py-2 rounded-full shadow-[0_4px_14px_rgba(238,77,45,0.3)] transform rotate-2 inline-block border-2 border-orange-100">
                      Vendas na Shopee também! 🛍️✨
                   </h3>
                </div>
                
                <div className="bg-white p-2 md:p-4 rounded-2xl shadow-xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300 relative group">
                   <img 
                      src="https://i.postimg.cc/PqS0MpbC/Gemini-Generated-Image-z7xi7xz7xi7xz7xi.png" 
                      alt="Vendas na Shopee e Online" 
                      className="w-full rounded-xl shadow-inner"
                   />
                </div>
             </div>

           </div>

           <h2 className="text-center font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-8">
             Como funciona? É simples assim:
           </h2>
           
           <div className="flex flex-col gap-16">
              
              {/* STEP 1 */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-black text-brand-pink shadow-md mb-4 border-4 border-pink-50">1</div>
                 <h3 className="font-bold text-lg mb-2">Receba no Zap</h3>
                 <p className="text-sm text-gray-600 mb-3">O acesso Lista Fornecedores usados pelas lojas de 10 chega automaticamente no seu WhatsApp e E-mail.</p>
                 
                 <div className="relative inline-block max-w-[280px]">
                    {/* Badge Overlay */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg whitespace-nowrap">
                       <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                       </span>
                       <span className="text-[10px] font-bold uppercase tracking-wider">Acesso Liberado em Segundos</span>
                    </div>

                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejk3Z2I1aDY3czRxYzBxanRkN3V0OGU1OHZqN3Jwdm04bjJ6djhlayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sQDYXzIfNEzsXbxgX4/giphy.gif" className="w-full rounded-xl shadow-md border-2 border-green-100" alt="Recebendo no WhatsApp" />
                 </div>
              </div>

              {/* STEP 2 - NOW INCLUDES PRODUCT SHOWCASE */}
              <div className="flex flex-col items-center text-center w-full">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-black text-brand-pink shadow-md mb-4 border-4 border-pink-50">2</div>
                 
                 {/* --- MOVED PRODUCTS SECTION CONTENT START --- */}
                 <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100">
                    <div className="text-center mb-12">
                      <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-brand-dark mb-4">
                        Preços de <span className="bg-black text-white px-2">Black Friday</span> o ano todo:
                      </h2>
                      <p className="text-lg text-gray-600">
                        Você paga centavos e revende por R$ 10,00, R$ 15,00 ou mais.
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4">
                       {/* Phone Mockup */}
                       <div className="relative w-64 h-[500px] border-8 border-gray-900 rounded-[3rem] shadow-2xl overflow-hidden bg-black shrink-0">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-24 bg-black rounded-b-2xl z-20"></div>
                          
                          <div className="w-full h-full bg-gray-100 overflow-y-auto no-scrollbar relative">
                             <div className="bg-[#008069] p-4 pt-10 text-white flex items-center gap-3 sticky top-0 z-10 shadow-md">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#008069] font-bold text-xs">F</div>
                                <div>
                                  <p className="font-bold text-sm">Fornecedor #01</p>
                                  <p className="text-[10px] opacity-90">visto por último hoje às 09:42</p>
                                </div>
                             </div>

                             <div className="flex justify-center my-4">
                                <span className="bg-[#e2e6ea] text-gray-600 text-[10px] px-2 py-1 rounded shadow-sm">HOJE</span>
                             </div>

                             <div className="px-3 mb-4 group relative">
                                <div className="bg-white p-1 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative overflow-hidden">
                                   <div className="relative">
                                      <img 
                                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmh0Y3Uxbm53dG93NDI3MnJjZzgwbHFldXI3cjJhMzBydGJpd2c2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Wfkq7BCVzOUwu1mqD/giphy.gif" 
                                        alt="Segredo" 
                                        className="w-full h-40 object-cover rounded blur-[5px] transition-all duration-500"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                         <div className="bg-black/40 p-2 rounded-full">
                                            <span className="text-2xl">🎥</span>
                                         </div>
                                      </div>
                                   </div>
                                   <p className="text-xs text-gray-600 mt-2 font-medium px-1">IMAGEM DOS FORNECEDORES<br/>Unboxing fornecedor maquiagem</p>
                                   <div className="text-[9px] text-gray-400 text-right mt-1">10:45</div>
                                </div>
                                
                                <div className="absolute -right-2 top-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce shadow-md z-10">
                                  Chegou Reposição Black!
                                </div>
                             </div>

                             <div className="px-3 mb-2">
                                 <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-xs text-left">
                                    É mercadoria de verdade chegando todo dia.
                                    <div className="text-[9px] text-gray-400 text-right mt-1">10:46</div>
                                 </div>
                             </div>

                          </div>
                       </div>

                       {/* Products Grid */}
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                         {PRODUCTS.map((product, index) => (
                           <div key={index} className="bg-white p-3 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 relative group">
                              <div className="absolute top-2 left-2 bg-black text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                                 {product.badge}
                              </div>
                              <div className="h-32 flex items-center justify-center mb-2 bg-gray-50 rounded-lg overflow-hidden relative">
                                 <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                              </div>
                              <h3 className="font-bold text-gray-800 text-xs md:text-sm leading-tight h-8 mb-1 line-clamp-2 text-left">{product.name}</h3>
                              <p className="text-[10px] text-gray-400 mb-1 text-left">{product.brand}</p>
                              <div className="flex justify-between items-end border-t border-dashed border-gray-200 pt-2">
                                 <div className="text-left">
                                   <p className="text-[10px] text-gray-400">Revenda</p>
                                   <p className="text-xs font-bold text-gray-500 line-through decoration-red-500 decoration-2">R$ 15,00</p>
                                 </div>
                                 <div className="text-right">
                                   <p className="text-[10px] text-brand-pink font-bold">Custo Black</p>
                                   <p className="text-lg font-black text-brand-dark leading-none">R$ {product.cost}</p>
                                 </div>
                              </div>
                           </div>
                         ))}
                       </div>
                    </div>
                 </div>
                 {/* --- MOVED PRODUCTS SECTION CONTENT END --- */}

              </div>
           </div>
         </div>
      </section>

      {/* --- NEWS SECTION --- */}
      <section className="bg-white py-12 border-b border-gray-200">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg p-2 max-w-3xl mx-auto">
               <div className="border-l-4 border-[#c4170c] pl-4 mb-4">
                  <span className="text-[#c4170c] font-bold text-xs uppercase tracking-wide">Alagoas • Maceió</span>
                  <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#333] leading-tight mt-1">
                     Inauguração de loja de maquiagem com produtos a R$ 10 em Maceió causa tumulto e polícia é acionada
                  </h2>
                  <p className="text-gray-500 text-xs mt-2 font-medium">Há 2 dias — Por Redação</p>
               </div>
               
               <figure className="relative mt-4">
                  <img 
                     src="https://i.postimg.cc/sgKLVCZ5/image.png" 
                     alt="Multidão na loja" 
                     className="w-full rounded-md shadow-sm"
                  />
                  <figcaption className="text-[10px] text-gray-500 mt-1 italic border-b pb-2">
                     Multidão se aglomerou para aproveitar ofertas de inauguração em loja de maquiagem. (Foto: Reprodução/Redes Sociais)
                  </figcaption>
               </figure>
               
               <div className="mt-4 p-4 bg-gray-50 rounded text-sm text-gray-700 leading-relaxed border-l-2 border-gray-200">
                  <p>
                     <strong>Resumo:</strong> Centenas de pessoas formaram filas quilométricas na madrugada desta sexta-feira para a inauguração de uma loja com preço fixo de R$ 10,00. O estoque que deveria durar um mês foi vendido em poucas horas, gerando confusão e correria.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* --- SOCIAL PROOF (DELIVERIES) --- */}
      <section className="py-12 bg-[#E5DDD5] relative border-b border-gray-200 pt-16">
         <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block border border-green-200 animate-pulse">
                Tempo Real
              </span>
              <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-gray-800 mb-2">
                Elas acabaram de receber o acesso
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
               {TESTIMONIALS.map((t, i) => (
                 <TestimonialCard key={i} {...t} />
               ))}
            </div>
            
            <div className="text-center mt-8 text-xs text-gray-400 animate-pulse">
               ⬇ Carregando mais entregas recentes...
            </div>
            
            {/* CTA Middle */}
             <div className="mt-10 text-center">
              <a href={CHECKOUT_LINK} className="inline-flex flex-col items-center bg-brand-pink hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-full shadow-xl transform hover:scale-105 transition-all text-lg group animate-heartbeat border-4 border-pink-300">
                 <span>QUERO A OFERTA BLACK AGORA ⚡</span>
                 <span className="text-[10px] font-normal opacity-90 group-hover:underline">Clique para garantir antes que acabe</span>
              </a>
            </div>
         </div>
      </section>

      {/* --- SUPPORT SECTION (Steps moved to top) --- */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
           
           {/* Support Box */}
           <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                 <div className="bg-[#25D366] p-3 rounded-full shrink-0">
                    <MessageCircle className="text-white w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-800">Precisa tirar alguma dúvida?</h3>
                    <p className="text-sm text-gray-600">Chame nosso suporte oficial antes de comprar.</p>
                 </div>
              </div>
              <a 
                href="https://wa.me/5511980219977" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors whitespace-nowrap"
              >
                CLIQUE AQUI
              </a>
           </div>

        </div>
      </section>

      {/* --- BONUS STACK --- */}
      <section className="py-12 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
             <span className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-2 inline-block">Exclusivo Black Friday</span>
             <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-2">Leve 3 Presentes de Graça</h2>
             <p className="text-pink-200">Só nessa oferta de Black Friday eu liberei tudo isso:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {/* Bônus 1 */}
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <MessageCircle className="w-8 h-8 text-yellow-300" />
                   <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">DE GRAÇA</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Scripts de Venda Prontos</h3>
                <p className="text-sm text-gray-200 mb-4">Copie e cole minhas mensagens no Zap para vender sem ser chata.</p>
                <p className="text-xs text-gray-400 line-through">Valor: R$ 29,90</p>
             </div>
             
             {/* Bônus 2 */}
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <Gem className="w-8 h-8 text-yellow-300" />
                   <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">DE GRAÇA</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Calculadora de Lucro</h3>
                <p className="text-sm text-gray-200 mb-4">Saiba exatamente por quanto vender cada peça para ter lucro.</p>
                <p className="text-xs text-gray-400 line-through">Valor: R$ 19,90</p>
             </div>

             {/* Bônus 3 */}
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <Smile className="w-8 h-8 text-yellow-300" />
                   <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">DE GRAÇA</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Guia: Perdendo a Vergonha</h3>
                <p className="text-sm text-gray-200 mb-4">Técnicas simples para oferecer seus produtos com confiança.</p>
                <p className="text-xs text-gray-400 line-through">Valor: R$ 27,00</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- MAIN OFFER --- */}
      <section className="py-16 bg-gradient-to-b from-brand-dark to-[#2a0a18] text-white text-center relative overflow-hidden">
        {/* Confetti Effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/confetti.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl">
             
             <div className="inline-block bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
                Oferta Black
             </div>

             <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
               É agora ou nunca, minha flor! <br/>
               <span className="text-yellow-400">Acesso imediato à Lista 2.0</span>
             </h2>

             <p className="text-lg text-gray-300 mb-8">Essa oferta de Black November pode sair do ar a qualquer momento.</p>

             <div className="bg-white rounded-xl p-4 md:p-6 mb-8 max-w-sm mx-auto shadow-inner">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                   <span className="text-gray-500 font-bold text-sm">90% OFF</span>
                   <span className="text-pink-600 font-bold text-xs bg-pink-50 px-2 py-1 rounded">Cupom Black: DESCONTOLOJADE10</span>
                </div>
                
                {/* Order Summary */}
                <div className="text-left space-y-3">
                   {/* Main Product Highlight */}
                   <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-3 flex items-start gap-3 shadow-sm relative overflow-hidden">
                      <div className="absolute -right-4 -top-4 bg-brand-pink w-10 h-10 transform rotate-45"></div>
                      <div className="bg-pink-100 p-2 rounded shrink-0">
                         <Gem size={20} className="text-brand-pink fill-pink-200" />
                      </div>
                      <div className="flex-grow">
                         <div className="flex justify-between items-start">
                            <div>
                               <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-0.5">💎 O MAIS DESEJADO</p>
                               <h4 className="font-black text-gray-800 text-sm md:text-base leading-tight">Lista de Fornecedores 2.0</h4>
                            </div>
                         </div>
                         <div className="flex gap-2 mt-1">
                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Vitalício</span>
                            <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">Atualizado 2025</span>
                         </div>
                      </div>
                   </div>

                   {/* Bonuses List */}
                   <div className="space-y-2 pl-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                         <GiftIcon /> <span>Bônus: Scripts de Venda</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                         <GiftIcon /> <span>Bônus: Calculadora de Lucro</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                         <GiftIcon /> <span>Bônus: Guia Vergonha Zero</span>
                      </div>
                   </div>
                </div>

                {/* PRICING BLOCK */}
                <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200 text-center">
                   
                   {/* PREÇO PARCELADO AGRESSIVO (AMARELO NEON + VERMELHO + BORDA PRETA) */}
                   <div className="inline-block transform hover:scale-105 transition-transform duration-300">
                      <span className="bg-[#FFFF00] text-[#FF0000] font-black text-5xl md:text-6xl px-4 py-2 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] tracking-tighter leading-none block -rotate-1">
                         2x R$ 3,91 🔥🔥
                      </span>
                   </div>
                   
                   {/* TEXTO ECONOMIA VERDE VIBRANTE */}
                   <p className="text-[#00FF00] font-bold text-sm md:text-base mt-3 tracking-wide">
                     
                   </p>

                   {/* SEPARADOR OU */}
                   <div className="flex items-center justify-center gap-2 my-4 opacity-50">
                      <div className="h-px w-8 bg-gray-300"></div>
                      <span className="text-xs font-bold text-gray-400">OU</span>
                      <div className="h-px w-8 bg-gray-300"></div>
                   </div>

                   <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Por Apenas:</p>
                   
                   {/* PREÇO À VISTA (VERDE) */}
                   <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-black text-green-400">R$ 7,90</span>
                      <span className="text-sm text-gray-400 font-bold">à vista</span>
                      <span className="text-[10px] bg-green-100 text-green-600 px-1 rounded font-bold">(maior economia)</span>
                   </div>

                </div>
             </div>

             <CountdownTimer />

             <a href={CHECKOUT_LINK} className="w-full bg-[#25D366] hover:bg-green-600 text-white font-bold py-5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] animate-heartbeat text-xl md:text-2xl flex items-center justify-center gap-3 group border-b-4 border-green-700 transition-all">
                {/* SVG WhatsApp Branco */}
                <svg viewBox="0 0 33 33" className="w-8 h-8 fill-white group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 0C7.4 0 0 7.5 0 16.7c0 3 .8 5.9 2.3 8.4L.6 33l8.1-2.1c2.4 1.3 5.1 2 7.9 2 9.2 0 16.6-7.5 16.6-16.7S25.8 0 16.6 0zm0 29.8c-2.5 0-4.9-.7-7-1.9l-.5-.3-5.2 1.4 1.4-5.1-.3-.5C3.7 21.2 2.8 19 2.8 16.7c0-7.6 6.2-13.9 13.8-13.9s13.8 6.2 13.8 13.9-6.2 13.1-13.8 13.1zm7.6-10.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-1.7-.9-3.2-2.1-4.3-4.2-.3-.5 0-.8.2-1 .2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.8c.3.4 3.2 5 7.9 7 3.8 1.6 4.6 1.3 5.4 1.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.2-.2-.6-.3-1-.5z"/></svg>
                MINHA LOJA AGORA
             </a>

             <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1"><Lock size={12} /> COMPRA 100% SEGURA</span>
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Dados Protegidos</span>
                <span className="flex items-center gap-1"><Sparkles size={12} /> Entrega Garantida</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- GUARANTEE SECTION --- */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
           <div className="bg-brand-bg rounded-2xl p-8 border-2 border-brand-light">
              <ShieldCheck className="w-16 h-16 text-brand-pink mx-auto mb-4" />
              <h2 className="font-heading text-2xl font-bold text-brand-dark mb-2">DESAFIO 7 DIAS</h2>
              <h3 className="font-bold text-gray-800 mb-4">Eu confio tanto que assumo o risco</h3>
              <p className="text-gray-600 mb-6">
                Se você comprar a lista, ligar para os fornecedores e achar que não valeu a pena, eu devolvo seus <strong>R$ 7,90 NA HORA</strong>.
              </p>
              <p className="text-sm text-gray-500 italic">"É sério. Eu não brinco com o sonho de ninguém."</p>
           </div>
        </div>
      </section>
      
      {/* --- FINAL MESSAGE --- */}
      <section className="py-12 bg-white">
         <div className="container mx-auto px-4 text-center max-w-2xl">
            <h3 className="font-hand text-3xl text-brand-dark font-bold mb-4">Um pedido de amiga...</h3>
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "A única coisa que te peço em troca desse preço simbólico é: assim que você fizer seus primeiros R$ 500,00 de lucro, me manda uma foto? Quero postar no meu Instagram e mostrar pro mundo que você venceu."
            </p>
         </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
           <h2 className="text-center font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-10">
             Tirando suas dúvidas (de mãe pra mãe)
           </h2>
           <div className="space-y-4">
             {FAQ_ITEMS.map((item, index) => (
               <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                 <summary className="flex justify-between items-center font-bold text-gray-800 cursor-pointer p-4 list-none group-open:bg-pink-50 transition-colors">
                    <span>{item.question}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <ChevronDown className="text-brand-pink" />
                    </span>
                 </summary>
                 <div className="text-gray-600 p-4 pt-0 border-t border-gray-100 mt-2 leading-relaxed bg-pink-50/30">
                   {item.answer}
                 </div>
               </details>
             ))}
           </div>
           
           <div className="mt-12 text-center">
              <p className="font-bold text-gray-800 mb-4">Ainda está com o coração apertado ou com dúvida?</p>
              <p className="text-sm text-gray-600 mb-4">Fica tranquila, eu mesma te respondo no Zap:</p>
              <a 
                href="https://wa.me/5511980219977" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-md"
              >
                 <MessageCircle size={20} /> Chamar no WhatsApp
              </a>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-dark text-white py-8 text-center text-sm opacity-90">
         <div className="container mx-auto px-4">
            <p className="mb-2">&copy; 2024 - Todos os direitos reservados Make Revenda Loja 10.</p>
         
         </div>
      </footer>

    </div>
  );
}

// Small helper component for icons in stack
const GiftIcon = () => (
  <div className="bg-pink-100 p-1 rounded-full">
     <div className="w-3 h-3 bg-brand-pink rounded-full"></div>
  </div>
);