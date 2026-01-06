import { FileText, Home, Car, Briefcase, Hammer, UserCheck, Building2, Wallet } from 'lucide-react';

// Ecosystem Links (Strategy: Link Juice & Brand Authority)
export const ECOSYSTEM_LINKS = [
  { name: 'Recibo Grátis', url: 'https://recibogratis.com.br', label: 'Recibo Grátis (Simples)' },
  { name: 'Declaração Online', url: 'https://declaracaoonline.com.br', label: 'Gerador de Declaração' },
  { name: 'Gera Contrato', url: 'https://geracontrato.com.br', label: 'Gerar Contrato Jurídico' },
];

// Grid Visual da Home Page (Catálogo de Modelos)
export const AVAILABLE_MODELS = [
  {
    id: 'default',
    label: 'Recibo Simples',
    description: 'Para pagamentos diversos, vendas de produtos e serviços rápidos.',
    icon: FileText,
    color: 'bg-emerald-500', // Verde Principal
    path: '#recibo-simples' // Alterado para não ser a home
  },
  {
    id: 'aluguel-residencial',
    label: 'Aluguel de Imóvel',
    description: 'Para proprietários e inquilinos. Em conformidade com a Lei do Inquilinato.',
    icon: Home,
    color: 'bg-blue-500',
    path: '#modelo/aluguel-residencial'
  },
  {
    id: 'veiculos',
    label: 'Venda de Veículo',
    description: 'Carros e Motos. Ideal para sinal de negócio ou quitação de venda.',
    icon: Car,
    color: 'bg-orange-500',
    path: '#modelo/veiculos'
  },
  {
    id: 'servicos',
    label: 'Prestação de Serviços',
    description: 'Para autônomos, freelancers, MEI e RPA (Recibo de Pagamento Autônomo).',
    icon: Briefcase,
    color: 'bg-purple-500',
    path: '#modelo/servicos'
  },
  {
    id: 'mao-de-obra',
    label: 'Mão de Obra',
    description: 'Pedreiros, pintores, eletricistas e manutenção geral.',
    icon: Hammer,
    color: 'bg-slate-600',
    path: '#modelo/servicos'
  },
  {
    id: 'diarista',
    label: 'Diarista / Doméstica',
    description: 'Recibo de diária ou salário para empregadas domésticas.',
    icon: UserCheck,
    color: 'bg-pink-500',
    path: '#modelo/servicos'
  },
  {
    id: 'aluguel-comercial',
    label: 'Aluguel Comercial',
    description: 'Salas, lojas e galpões comerciais. Com retenção de IR se necessário.',
    icon: Building2,
    color: 'bg-indigo-600',
    path: '#modelo/aluguel-residencial'
  },
  {
    id: 'vale',
    label: 'Vale / Adiantamento',
    description: 'Comprovante de adiantamento salarial para funcionários.',
    icon: Wallet,
    color: 'bg-green-600',
    path: '#modelo/vale'
  }
];

export const MENU_STRUCTURE = [
  {
    label: 'Recibos Comuns',
    path: '#',
    subItems: [
      { label: 'Recibo Simples', path: '#recibo-simples' },
      { label: 'Recibo de Pagamento', path: '#recibo-simples' },
    ]
  },
  {
    label: 'Imóveis',
    path: '#modelos/imoveis',
    subItems: [
      { label: 'Aluguel Residencial', path: '#modelo/aluguel-residencial' },
      { label: 'Aluguel Comercial', path: '#modelo/aluguel-comercial' },
      { label: 'Temporada', path: '#modelo/temporada' },
      { label: 'Vaga de Garagem', path: '#modelo/garagem' },
    ]
  },
  {
    label: 'Veículos',
    path: '#modelos/veiculos',
    subItems: [
      { label: 'Compra e Venda', path: '#modelo/veiculos' },
      { label: 'Sinal de Negócio', path: '#modelo/sinal' },
    ]
  },
  {
    label: 'Serviços',
    path: '#modelos/servicos',
    subItems: [
      { label: 'Prestação de Serviços', path: '#modelo/servicos' },
      { label: 'Mão de Obra', path: '#modelo/mao-de-obra' },
      { label: 'Diarista', path: '#modelo/diarista' },
    ]
  }
];

// Helper for Number to Words (Simplified for Portuguese)
export const numberToWordsPT = (num: number): string => {
  if (num === 0) return 'zero reais';
  const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  return `(valor de ${formatted} referente a...)`;
};

// Conteúdo Rico e SEO (Estratégia "Skyscraper" para superar Neofin/Contabilizei)
export const PAGE_CONTENT: Record<string, any> = {
  'home': { // Nova HOME PAGE Conteúdo
    title: 'Gerador de Recibo Online Grátis e Fácil (PDF e WhatsApp)',
    heroTitle: 'Gerador de Recibo Online',
    heroDescription: 'Fácil, Gratuito e Profissional. O sistema nº1 para emitir recibos de pagamento, aluguel e serviços. Baixe em PDF ou envie no WhatsApp sem cadastro.',
    description: 'Gere recibos de pagamento ilimitados com o Gerador de Recibo Online nº1 do Brasil. Fácil, Gratuito e Seguro. Baixe em PDF ou envie via WhatsApp sem cadastro.',
    receiptTitle: '',
    schemaType: 'WebSite',
    faqs: [
      { question: 'O que é um Gerador de Recibo Online?', answer: 'É uma ferramenta digital que permite criar comprovantes de pagamento (recibos) formatados automaticamente, sem a necessidade de preencher blocos de papel à mão. O RecibosOnline.com.br é o gerador mais fácil e gratuito do mercado.' },
      { question: 'O Recibo Online tem validade jurídica?', answer: 'Sim. De acordo com o Código Civil Brasileiro (Art. 320), qualquer documento escrito que contenha o valor, a espécie da dívida, o nome do devedor, a assinatura do credor, a data e o local tem validade legal como prova de quitação.' },
      { question: 'Como fazer um recibo online grátis?', answer: 'Basta escolher um dos modelos acima (Simples, Aluguel, Veículo), preencher os dados do pagador e do recebedor, e clicar em "Imprimir" ou "Enviar no WhatsApp". O processo leva menos de 1 minuto.' },
      { question: 'É seguro gerar recibos neste site?', answer: 'Totalmente. Diferente de sites concorrentes que pedem cadastro, o RecibosOnline.com.br processa os dados diretamente no seu navegador. Nenhuma informação financeira é enviada para nossos servidores, garantindo sua privacidade.' }
    ],
    richText: `
      <h2>O Melhor Gerador de Recibo Online (Fácil e Gratuito)</h2>
      <p>Se você procura por um <strong>Gerador de Recibo Online</strong> que seja realmente prático, você encontrou. Enquanto outros sites (como Neofin ou Contabilizei) focam em empresas grandes e exigem cadastros complexos, nossa missão é desburocratizar.</p>
      
      <p>Aqui no <strong>RecibosOnline.com.br</strong>, entendemos que você precisa de agilidade. Seja você um proprietário recebendo aluguel, um autônomo prestando serviços ou alguém vendendo um carro, nossa ferramenta resolve seu problema em segundos.</p>

      <h3>Por que abandonar o talão de papel?</h3>
      <p>O recibo digital traz profissionalismo imediato para o seu negócio. Veja as vantagens de usar nosso sistema:</p>
      <ul class="grid md:grid-cols-2 gap-4">
        <li class="flex items-start gap-2"><span class="font-bold text-brand-600">✓</span> <strong>Recibo no WhatsApp:</strong> O cliente recebe na hora, no celular dele.</li>
        <li class="flex items-start gap-2"><span class="font-bold text-brand-600">✓</span> <strong>PDF Profissional:</strong> Gere documentos em alta qualidade para impressão.</li>
        <li class="flex items-start gap-2"><span class="font-bold text-brand-600">✓</span> <strong>Cálculos Automáticos:</strong> O valor por extenso é preenchido sozinho.</li>
        <li class="flex items-start gap-2"><span class="font-bold text-brand-600">✓</span> <strong>100% Gratuito:</strong> Gere quantos recibos quiser, sem pegadinhas.</li>
      </ul>

      <h3>Modelos Disponíveis no Gerador</h3>
      <p>Nossa plataforma é um verdadeiro portal de documentos. Diferente de um gerador genérico, oferecemos:</p>
      <ul>
        <li><strong>Recibo de Pagamento Simples:</strong> Para o dia a dia.</li>
        <li><strong>Recibo de Aluguel (Residencial e Comercial):</strong> Essencial para evitar problemas na justiça.</li>
        <li><strong>RPA (Recibo de Pagamento Autônomo):</strong> Para regularizar serviços prestados por pessoa física.</li>
        <li><strong>Recibo de Compra e Venda de Veículos:</strong> Segurança na transação de carros e motos.</li>
      </ul>

      <hr class="my-8 border-slate-200"/>

      <h2>Como funciona o Recibo Online?</h2>
      <p>É muito simples. Você seleciona a categoria desejada no topo desta página. O sistema carregará o formulário específico com as leis e campos pertinentes àquela transação (como a Lei do Inquilinato para aluguéis). Após preencher, nossa tecnologia gera o documento instantaneamente na sua tela.</p>
    `
  },
  'recibo-simples': {
    title: 'Gerador de Recibo Simples Online - PDF e WhatsApp',
    heroTitle: 'Recibo Simples',
    heroDescription: 'O modelo mais versátil para o dia a dia. Ideal para vendas rápidas, pequenos serviços e comprovação de pagamento genérico.',
    description: 'Crie um Recibo Simples agora. Preencha, gere em PDF e envie. Rápido, fácil e grátis.',
    receiptTitle: 'RECIBO DE PAGAMENTO',
    schemaType: 'SoftwareApplication',
    faqs: [],
    richText: `<p>Este é o modelo padrão de <strong>Recibo Simples</strong>. Ele é aceito juridicamente para comprovar pagamentos entre pessoas físicas e jurídicas para valores que não exigem nota fiscal obrigatória.</p>`
  },
  'aluguel-residencial': {
    title: 'Recibo de Aluguel Online Grátis - Lei do Inquilinato',
    heroTitle: 'Recibo de Aluguel',
    heroDescription: 'Modelo oficial para locação residencial. Garanta a segurança jurídica do seu imóvel emitindo comprovantes detalhados mensalmente.',
    description: 'Gerador de Recibo de Aluguel Online. Atende a Lei do Inquilinato. Ideal para proprietários e imobiliárias.',
    receiptTitle: 'RECIBO DE ALUGUEL',
    schemaType: 'BusinessApplication',
    faqs: [],
    richText: `<p>O <strong>Recibo de Aluguel</strong> é obrigatório. Mantenha seu histórico de pagamentos organizado para evitar problemas futuros na justiça ou na declaração do Imposto de Renda.</p>`
  },
  'veiculos': {
    title: 'Recibo de Compra e Venda de Veículos - Carro e Moto',
    heroTitle: 'Recibo de Veículos',
    heroDescription: 'Comprovante financeiro para transações automotivas. Essencial para registrar o pagamento antes da transferência oficial no cartório.',
    description: 'Recibo para Venda de Carros e Motos. Comprovante de pagamento e sinal de negócio seguro.',
    receiptTitle: 'RECIBO DE COMPRA E VENDA',
    schemaType: 'BusinessApplication',
    faqs: [],
    richText: `<p>Atenção: Este recibo comprova o <strong>pagamento</strong> do veículo. A transferência de propriedade requer o preenchimento do CRV (DUT) e reconhecimento de firma em cartório.</p>`
  },
  'servicos': {
    title: 'Recibo de Prestação de Serviços (RPA) Online',
    heroTitle: 'Recibo de Serviços',
    heroDescription: 'A ferramenta essencial para o profissional autônomo. Formalize seus "bicos" e trabalhos freelance com profissionalismo.',
    description: 'Emita Recibo de Prestação de Serviços (RPA) Grátis. Ideal para autônomos e freelancers.',
    receiptTitle: 'RECIBO DE SERVIÇOS',
    schemaType: 'BusinessApplication',
    faqs: [],
    richText: `<p>Para prestadores de serviço que não possuem CNPJ, o <strong>RPA (Recibo de Pagamento Autônomo)</strong> é a forma correta de comprovar a renda e recolher os impostos devidos (INSS/IRRF) quando aplicável.</p>`
  }
};