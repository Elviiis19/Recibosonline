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
    description: 'Modelo genérico para pagamentos diversos e vendas rápidas.',
    icon: FileText,
    color: 'bg-brand-500', // Verde Principal
    path: '#'
  },
  {
    id: 'aluguel-residencial',
    label: 'Aluguel de Imóvel',
    description: 'Para proprietários e inquilinos. Lei do Inquilinato.',
    icon: Home,
    color: 'bg-blue-500',
    path: '#modelo/aluguel-residencial'
  },
  {
    id: 'veiculos',
    label: 'Venda de Veículo',
    description: 'Carros e Motos. Ideal para sinal de negócio ou quitação.',
    icon: Car,
    color: 'bg-orange-500',
    path: '#modelo/veiculos'
  },
  {
    id: 'servicos',
    label: 'Prestação de Serviços',
    description: 'Para autônomos, freelancers e MEI (RPA).',
    icon: Briefcase,
    color: 'bg-purple-500',
    path: '#modelo/servicos'
  },
  {
    id: 'mao-de-obra',
    label: 'Mão de Obra',
    description: 'Pedreiros, pintores, eletricistas e manutenção.',
    icon: Hammer,
    color: 'bg-slate-600',
    path: '#modelo/servicos' // Reutiliza logica de serviços com titulo diferente
  },
  {
    id: 'diarista',
    label: 'Diarista / Doméstica',
    description: 'Recibo de pagamento por dia trabalhado.',
    icon: UserCheck,
    color: 'bg-pink-500',
    path: '#modelo/servicos'
  },
  {
    id: 'aluguel-comercial',
    label: 'Aluguel Comercial',
    description: 'Salas, lojas e galpões comerciais.',
    icon: Building2,
    color: 'bg-indigo-600',
    path: '#modelo/aluguel-residencial'
  },
  {
    id: 'vale',
    label: 'Vale / Adiantamento',
    description: 'Comprovante de adiantamento salarial.',
    icon: Wallet,
    color: 'bg-green-600',
    path: '#modelo/vale'
  }
];

export const MENU_STRUCTURE = [
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
  },
  {
    label: 'Financeiro',
    path: '#modelos/financeiro',
    subItems: [
      { label: 'Pagamento de Salário', path: '#modelo/salario' },
      { label: 'Vale', path: '#modelo/vale' },
    ]
  }
];

// Helper for Number to Words (Simplified for Portuguese)
export const numberToWordsPT = (num: number): string => {
  if (num === 0) return 'zero reais';
  const formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  return `(valor de ${formatted} referente a...)`;
};

// Conteúdo Rico e SEO (Atualizado 2026 Strategy)
export const PAGE_CONTENT: Record<string, any> = {
  'default': {
    title: 'Gerador de Recibo Online Grátis - Recibo Simples e Rápido',
    heroTitle: 'Gerador de Recibo Online',
    heroDescription: 'A ferramenta #1 para criar Recibo Simples e Recibo de Pagamento. Escolha o modelo abaixo, preencha e baixe em PDF ou envie no WhatsApp. 100% Grátis.',
    description: 'Crie seu Recibo Online Grátis agora. Ideal para autônomos e empresas. O melhor gerador de recibo simples, aluguel e pagamento do Brasil.',
    receiptTitle: 'RECIBO DE PAGAMENTO',
    schemaType: 'SoftwareApplication',
    faqs: [
      { question: 'Como fazer um recibo simples online?', answer: 'Use nosso gerador acima: 1. Preencha o valor e os nomes. 2. Descreva o serviço. 3. Clique em "Imprimir" ou "WhatsApp". O Recibo Simples é gerado instantaneamente.' },
      { question: 'Este site gera Recibo de Pagamento válido?', answer: 'Sim. Nosso modelo segue o padrão jurídico (Art. 320 do Código Civil), contendo pagador, beneficiário, valor, data e assinatura, servindo como comprovante legal.' },
      { question: 'Preciso de cadastro para emitir recibo?', answer: 'Não. Diferente dos concorrentes, no RecibosOnline.com.br você não precisa fazer login ou deixar seu e-mail. É só entrar e usar.' },
      { question: 'Qual a diferença entre Recibo e Nota Fiscal?', answer: 'O recibo comprova o pagamento e a quitação de uma dívida. A Nota Fiscal comprova a propriedade do bem e recolhe impostos. Para autônomos (RPA) e aluguéis entre pessoas físicas, o recibo é o documento padrão.' }
    ],
    richText: `
      <h2>O Portal Definitivo de Recibos Online</h2>
      <p>Bem-vindo ao <strong>RecibosOnline.com.br</strong>, a plataforma desenvolvida para simplificar a vida de quem precisa emitir documentos financeiros com rapidez e segurança. Ao contrário de outros sites que oferecem apenas um formulário básico, aqui você encontra uma suíte completa de modelos específicos para cada necessidade.</p>
      
      <h3>Por que escolher nosso Gerador?</h3>
      <p>Nossa plataforma foi desenhada pensando na experiência do usuário (UX) e na conformidade com as leis brasileiras.</p>
      <ul>
        <li><strong>Variedade de Modelos:</strong> Temos recibos específicos para Aluguel (Lei do Inquilinato), Venda de Veículos (Detran/Cartório) e Serviços (RPA).</li>
        <li><strong>Design Profissional:</strong> Seus clientes vão receber um documento limpo, organizado e com aparência corporativa.</li>
        <li><strong>Mobile First:</strong> Funciona perfeitamente no seu celular, ideal para quem está na rua trabalhando.</li>
      </ul>

      <h3>Validade Jurídica (Artigo 320 - Código Civil)</h3>
      <p>Um <strong>recibo de pagamento</strong> gerado online tem total validade jurídica desde que contenha os requisitos fundamentais: valor, nome do devedor, tempo, lugar e a assinatura do credor. Nossa ferramenta preenche todos esses requisitos automaticamente para você.</p>
    `
  },
  'aluguel-residencial': {
    title: 'Recibo de Aluguel Grátis - Modelo Pronto PDF',
    heroTitle: 'Recibo de Aluguel',
    heroDescription: 'Modelo oficial para locação residencial e comercial. Cumpra a Lei do Inquilinato emitindo recibos claros e detalhados.',
    description: 'Gere Recibo de Aluguel Grátis. Modelo pronto com cálculo automático. Ideal para proprietários e imobiliárias. Baixe em PDF.',
    receiptTitle: 'RECIBO DE ALUGUEL',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'Como preencher recibo de aluguel?', answer: 'Informe o valor do aluguel, nome do inquilino, endereço do imóvel e o mês de referência (ex: Março/2024). Nosso sistema formata tudo automaticamente.' },
      { question: 'Serve para Imposto de Renda?', answer: 'Sim. O recibo de aluguel é o documento base para a declaração de rendimentos recebidos de pessoa física no IRPF.' }
    ],
    richText: `
      <h2>Recibo de Aluguel: Segurança para Locador e Locatário</h2>
      <p>Emitir o <strong>recibo de aluguel</strong> não é apenas uma boa prática, é uma obrigação do locador prevista na Lei do Inquilinato (Lei nº 8.245/91). Sem ele, o inquilino pode alegar que pagou e o proprietário não tem como provar o contrário, ou vice-versa.</p>
      
      <h3>O que este modelo inclui?</h3>
      <ul>
        <li><strong>Identificação do Imóvel:</strong> Campo específico para vincular o pagamento ao contrato.</li>
        <li><strong>Período de Referência:</strong> Evita a dúvida sobre qual mês está sendo quitado.</li>
        <li><strong>Detalhes de Multa/Juros:</strong> Some ao valor total caso haja atrasos.</li>
      </ul>
    `
  },
  'veiculos': {
    title: 'Recibo de Compra e Venda de Veículos - Carro e Moto',
    heroTitle: 'Recibo de Veículos',
    heroDescription: 'Comprovante seguro para compra e venda de carros, motos e caminhões. Ideal para sinal de negócio ou pagamento total.',
    description: 'Recibo de Compra e Venda de Veículos. Gere recibo para carro ou moto. Comprovante de pagamento e sinal de negócio.',
    receiptTitle: 'RECIBO DE COMPRA E VENDA',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'Este recibo transfere o veículo?', answer: 'Não. A transferência de propriedade exige o DUT assinado e reconhecido em cartório. Este recibo comprova apenas a transação financeira (o pagamento).' }
    ],
    richText: `
      <h2>Recibo de Venda de Veículo: Proteja sua Negociação</h2>
      <p>Ao comprar ou vender um veículo usado, o <strong>recibo de pagamento</strong> é a garantia de que o dinheiro foi entregue. Ele protege o vendedor de calotes e o comprador de cobranças indevidas.</p>

      <h3>Dicas para o Recibo de Veículo</h3>
      <ul>
        <li><strong>Descreva o Bem:</strong> Inclua Placa, Modelo, Cor e, se possível, o RENAVAM na descrição.</li>
        <li><strong>Sinal de Negócio:</strong> Se for apenas uma entrada, selecione o modelo de "Sinal" ou especifique na descrição "Referente a sinal/entrada".</li>
        <li><strong>Venda no Estado:</strong> É comum adicionar que o veículo está sendo vendido "no estado em que se encontra" para vendas entre particulares.</li>
      </ul>
    `
  },
  'servicos': {
    title: 'Recibo de Prestação de Serviços - Autônomo (RPA)',
    heroTitle: 'Recibo de Serviços',
    heroDescription: 'Modelo profissional para autônomos, MEI e freelancers. Formalize sua mão de obra e passe credibilidade.',
    description: 'Gerador de Recibo de Prestação de Serviços. Ideal para RPA, autônomos, pedreiros e freelancers. Emita grátis.',
    receiptTitle: 'RECIBO DE PRESTAÇÃO DE SERVIÇOS',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'O que é Recibo de Serviços?', answer: 'É o documento que comprova que um serviço foi realizado e pago. É essencial para prestadores autônomos que não emitem nota fiscal para pessoa física.' }
    ],
    richText: `
      <h2>Recibo de Serviços para Autônomos</h2>
      <p>A informalidade não significa desorganização. O <strong>Recibo de Prestação de Serviços</strong> é fundamental para pedreiros, pintores, técnicos de informática, designers e diaristas.</p>

      <h3>Vantagens para o Profissional</h3>
      <ul>
        <li><strong>Controle Financeiro:</strong> Mantenha registro de tudo que você recebeu.</li>
        <li><strong>Credibilidade:</strong> Clientes confiam mais em profissionais que fornecem comprovante.</li>
        <li><strong>Garantia:</strong> A descrição do serviço no recibo limita sua responsabilidade exatamente ao que foi contratado e pago.</li>
      </ul>
    `
  }
};