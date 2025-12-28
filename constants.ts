
export const SUPPORT_LINK = "https://wa.me/5511980219977?text=Olá!+Quero+saber+mais+sobre+os+kits+de+revenda+de+maquiagem.";

// Link para compra da lista (Checkout Kirvano conforme solicitado)
export const SUPPLIER_LIST_CHECKOUT = "https://pay.kirvano.com/a39cd2c2-492c-42f6-b29e-f4046aaf666c"; 

export const SUPPLIER_LIST_OFFER = {
  title: "Acesso VIP: Lista das Importadoras",
  description: "Acesso direto aos contatos que as grandes lojas escondem de você. Pague preço de custo real e lucre até 400%.",
  price: "R$ 25,90",
  originalPrice: "R$ 197,00",
  benefit: "Preços 40% menores que os Kits"
};

export const PRODUCTS = [
  { 
    id: 1,
    name: "Kit Revenda Iniciante", 
    items: "5 ITENS",
    originalPrice: "R$ 35,90",
    price: "22,42",
    discount: "38% OFF",
    brand: "Mix Essencial",
    img: "https://i.postimg.cc/0MRfHMvn/kit-maquiagem-revenda.png",
    badge: "MAIS ECONÔMICO"
  },
  { 
    id: 2,
    name: "Kit Revenda Empreendedora", 
    items: "9 ITENS",
    originalPrice: "R$ 58,00",
    price: "41,48",
    discount: "29% OFF",
    brand: "Os mais vendidos",
    img: "https://i.postimg.cc/0MRfHMvn/kit-maquiagem-revenda.png",
    badge: "O QUERIDINHO",
    featured: true
  },
  { 
    id: 3,
    name: "Kit Revenda Avançado", 
    items: "15 ITENS",
    originalPrice: "R$ 99,90",
    price: "72,50",
    discount: "27% OFF",
    brand: "Estoque Completo",
    img: "https://i.postimg.cc/0MRfHMvn/kit-maquiagem-revenda.png",
    badge: "MAIOR LUCRO"
  }
];

export const SHOPEE_KITS = [
  {
    id: 's1',
    name: "Kit de maquiagem Completo para revenda 28 Itens",
    description: "Serão enviados 28 itens dentre esses produtos. Pode Conter mais de um Item do Mesmo Produto.",
    price: "R$ 119,99",
    shopeeUrl: "https://s.shopee.com.br/3VdZVu3vMV", 
    img: "https://i.postimg.cc/nLb16Lg8/Gemini-Generated-Image-5temoa5temoa5tem.png",
    tag: "MAIS VENDIDO"
  },
  {
    id: 's2',
    name: "Maquiagem para Revenda Mega Kit com 60 Itens",
    description: "Em cada produto tem um valor unitário de preço sugerido para revenda, você poderá utilizar esse valor ou definir por quanto quer vender cada produto",
    price: "R$ 269,00",
    shopeeUrl: "https://s.shopee.com.br/7pmYgOVhM5",
    img: "https://i.postimg.cc/y6bbYcbL/image.png",
    tag: "ALTA MARGEM"
  },
  {
    id: 's3',
    name: "Kit 30 itens Produtos Maquiagem, Skincare e Acessórios Atacado para Revenda gloss",
    description: "Produtos pra você investir e lucrar com produtos que possuem Ótima Saída e pigmentação.",
    price: "R$ 139,99",
    shopeeUrl: "https://s.shopee.com.br/8V2FUDebzM",
    img: "https://i.postimg.cc/Zn5nf1Sj/image.png",
    tag: "MIX COMPLETO"
  },
  {
    id: 's4',
    name: "KIT MAQUIAGEM 40 ITENS!! COMBO SUPER PREMIUM BOX",
    description: "Eleve o nível da sua maquiagem ou garanta o presente perfeito com este Kit Super Premium",
    price: "R$ 99,99",
    shopeeUrl: "https://s.shopee.com.br/805yu59SCb",
    img: "https://i.postimg.cc/tgzV2dx8/image.png",
    tag: "QUALIDADE PREMIUM"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funcionam os kits de revenda?",
    answer: "Nós selecionamos as maquiagens que mais vendem no momento (tendências de TikTok e Instagram) e montamos kits estratégicos. Você recebe o link direto dos melhores fornecedores da Shopee que já testamos e aprovamos."
  },
  {
    question: "As marcas são boas?",
    answer: "Sim! Trabalhamos com Vivai, Febella, Max Love, Face Beautiful e outras que as clientes já conhecem e amam."
  }
];

export const TESTIMONIALS = [
  { 
    name: "Mariana Silva", 
    type: "whatsapp-dark",
    conversation: [
      { side: "left", text: "Oi! O acesso aos fornecedores chegou?", time: "09:15" },
      { side: "right", text: "Chegou sim! Já tô aqui olhando os preços, tô chocada que o gloss é R$ 2,50 real kkkk", time: "09:17" },
      { side: "right", text: "Vou montar meu primeiro kit hoje mesmo!", time: "09:18" }
    ]
  },
  { 
    name: "Letícia R.", 
    type: "photo",
    img: "https://i.postimg.cc/3RQjg2Xq/image.png",
    text: "Meninas, surreal! O kit chegou muito rápido e as marcas são maravilhoras. Só de postar no status do zap já tem 3 amigas querendo reservar as bases. É o empurrão que eu precisava!"
  },
  { 
    name: "Bruna Medeiros", 
    type: "photo",
    img: "https://i.postimg.cc/DycFDkjw/image.png",
    text: "Gente, acabei de abrir meu kit e estou sem palavras! A qualidade das bases e dos batons é de outro mundo. Veio tudo lacradinho. Já vou montar as cestinhas pra começar a vender amanhã cedo!"
  },
  { 
    name: "Aline Souza", 
    type: "photo",
    img: "https://i.postimg.cc/PqS0MpbC/Gemini-Generated-Image-z7xi7xz7xi7xz7xi.png",
    text: "Meu pedido chegou hoje! Tudo lacrado e os fornecedores são super atenciosos. Já vendi 3 kits pra vizinhas."
  }
];
