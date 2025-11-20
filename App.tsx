import React, { useState } from 'react';
import { PRODUCTS, FAQ_ITEMS, TESTIMONIALS, CHECKOUT_LINK } from './constants';
import { CountdownTimer } from './components/CountdownTimer';
import { TestimonialCard } from './components/TestimonialCard';
import { StickyCTA } from './components/StickyCTA';
import { SalesNotification } from './components/SalesNotification';
import { CouponPopup } from './components/CouponPopup';
import { ShieldCheck, Heart, Lock, CheckCircle, ChevronDown, ChevronUp, MessageCircle, ArrowDown, Headset } from 'lucide-react';

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 pb-20 md:pb-0">
      <SalesNotification />
      <CouponPopup />
      
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
             <img src="https://i.pinimg.com/736x/12/36/49/12364993ce081c392822839bbd083312.jpg" alt="Camila Vendedora" className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover" />
             <div className="text-left">
               <p className="font-bold text-white text-sm">Com Camila, sua mentora</p>
               <p className="text-xs text-pink-200">Ex-desempregada, hoje dona de 3 lojas.</p>
             </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </header>

      {/* 2. MINI-STORYTELLING (The Hook) */}
      <section className="py-10 px-4 max-w-3xl mx-auto">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-l-4 border-brand-pink relative -mt-16 z-20">
          <h2 className="font-hand text-3xl text-brand-dark mb-4">Minha filha, escuta o que eu vou te contar...</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-brand-pink">Era 2021.</strong> Eu estava grávida de 8 meses, meu marido tinha acabado de perder o emprego e a gente só tinha <span className="bg-yellow-100 px-1 font-bold">R$ 47,00 na conta</span>.
            </p>
            <p>
              Eu chorava no banheiro pra ele não ver. Tentei vender de tudo, mas os fornecedores que eu achava no Google eram caros ou golpistas. Perdi o pouco que tinha comprando "listas" que não funcionavam.
            </p>
            <p>
              Até que um dia, Deus colocou uma cliente antiga no meu caminho. Ela sentiu minha dor e me passou o contato de <strong>UM fornecedor</strong> do Brás. Com os últimos trocados, comprei 10 batons. Vendi tudo em 2 horas na porta da escola.
            </p>
            <p className="font-bold text-brand-dark text-lg border-b-2 border-brand-light inline-block pb-1">
              Hoje, eu reuni não só aquele, mas os melhores fornecedores que mudaram a minha vida, pra você não passar pelo que eu passei.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROVA SOCIAL MASSIVA (Carousel) */}
      <section className="py-8 bg-brand-bg">
        <div className="text-center mb-6 px-4">
          <h3 className="font-heading font-bold text-2xl text-gray-800">
            Elas já receberam no Zap e amaram 👇
          </h3>
          <p className="text-sm text-gray-500 mt-1">Deslize para ver as mensagens reais</p>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:border-brand-pink transition-all hover:shadow-md group relative overflow-visible">
              {/* Dynamic Badge - Red Sticker Style */}
              {product.badge ? (
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-extrabold w-12 h-12 flex items-center justify-center text-center rounded-full shadow-md z-10 animate-pulse leading-tight border-2 border-white">
                  {product.badge.replace(' ', '\n')}
                </div>
              ) : (
                <div className="absolute top-0 left-0 bg-green-500 text-white text-[9px] font-bold px-2 py-1 rounded-br-lg z-10">
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
                    <h4 className="font-bold text-brand-dark">Lista Testada</h4>
                    <p className="text-sm text-gray-700">Todos os 38 contatos foram verificados.</p>
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
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-gray-500 line-through font-medium">R$ 29,90</span>
              <span className="text-6xl font-extrabold text-brand-pink drop-shadow-lg">R$ 7,99</span>
            </div>
            <CountdownTimer />
          </div>

          <a 
            href={CHECKOUT_LINK}
            className="block w-full max-w-md mx-auto bg-brand-pink hover:bg-pink-600 text-white font-bold text-xl py-5 px-8 rounded-full shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-transform transform hover:scale-105 hover:-translate-y-1 animate-pulse-fast mb-4"
          >
             RECEBER NO MEU WHATSAPP
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
              Se você comprar a lista, ligar para os fornecedores e achar que não valeu a pena, eu devolvo seus <strong>R$ 7,99</strong> NA HORA.
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