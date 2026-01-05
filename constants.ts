import type { MenuItem, PageContent } from './types';

// Ecosystem Links (Backlinks strategy)
export const ECOSYSTEM_LINKS = [
  { name: 'Declaração Online', url: 'https://declaracaoonline.com.br', label: 'Precisa de uma Declaração?' },
  { name: 'Gera Contrato', url: 'https://geracontrato.com.br', label: 'Gerar Contrato Jurídico' },
];

export const MENU_STRUCTURE: MenuItem[] = [
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

// Conteúdo Rico e SEO para cada tipo de página
export const PAGE_CONTENT: Record<string, PageContent> = {
  'default': {
    title: 'Gerador de Recibos Online Grátis – Simples, Rápido e Profissional',
    heroTitle: 'Gerador de Recibos Online Grátis',
    heroDescription: 'A ferramenta gratuita mais completa para emitir recibos online. Ideal para aluguel, serviços, vendas e autônomos. PDF pronto para imprimir.',
    description: 'Gerador de Recibos Online Grátis – Simples, Rápido e Profissional. Emita recibos de aluguel, serviços e venda em PDF ou para WhatsApp.',
    receiptTitle: 'RECIBO DE PAGAMENTO',
    schemaType: 'SoftwareApplication',
    faqs: [
      { question: 'Como emitir um recibo online grátis?', answer: 'Basta preencher os campos acima, clicar em "Imprimir" ou "Enviar no WhatsApp". É 100% gratuito e não requer cadastro.' },
      { question: 'Este recibo tem validade jurídica?', answer: 'Sim, um recibo assinado comprova a quitação de uma dívida ou pagamento, conforme o Código Civil Brasileiro.' }
    ],
    richText: 'A emissão de um recibo simples é essencial para a organização financeira. Nossa ferramenta permite criar recibos comerciais, recibos de pagamento e documentos para autônomos com facilidade.'
  },
  'aluguel-residencial': {
    title: 'Recibo de Aluguel Residencial Grátis - Modelo PDF/Word',
    heroTitle: 'Emitir Recibo de Aluguel',
    heroDescription: 'Gere recibos de aluguel residencial em segundos. Modelo atualizado conforme a Lei do Inquilinato. Grátis e sem cadastro.',
    description: 'Emita seu recibo de aluguel residencial em segundos. Modelo profissional.',
    receiptTitle: 'RECIBO DE ALUGUEL',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'O que deve constar no recibo de aluguel?', answer: 'Deve constar o nome do locador, locatário, valor, endereço do imóvel, mês de referência e data do pagamento.' },
      { question: 'Posso usar este recibo para Imposto de Renda?', answer: 'Sim, os dados gerados aqui servem como comprovante para declaração do IR.' }
    ],
    richText: 'O recibo de aluguel é o documento que comprova que o inquilino pagou o valor mensal acordado. Para o locador, é a segurança de que a obrigação foi cumprida. Nosso modelo já vem formatado para incluir o endereço do imóvel e o mês de referência, facilitando a vida de proprietários e imobiliárias.'
  },
  'veiculos': {
    title: 'Recibo de Compra e Venda de Veículos - Carro e Moto',
    heroTitle: 'Recibo de Venda de Veículo',
    heroDescription: 'Comprovante de pagamento para entrada, sinal ou venda total de carros e motos. Segurança para comprador e vendedor.',
    description: 'Gere recibo de compra e venda de veículos. Ideal para sinal ou pagamento integral.',
    receiptTitle: 'RECIBO DE COMPRA E VENDA',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'Este recibo substitui o DUT?', answer: 'Não. O Recibo de Compra e Venda é um comprovante financeiro entre as partes. A transferência legal exige o preenchimento do DUT no cartório.' }
    ],
    richText: 'Ao negociar um veículo usado, é crucial emitir um recibo que detalhe o valor pago, a placa, o modelo e o chassi (opcional) do veículo. Isso protege o vendedor de reclamações futuras sobre o pagamento e garante ao comprador a prova da quitação.'
  },
  'servicos': {
    title: 'Recibo de Prestação de Serviços - Autônomo e MEI',
    heroTitle: 'Recibo de Serviços (RPA/Autônomo)',
    heroDescription: 'Modelo ideal para prestadores de serviço, diaristas, pedreiros, técnicos e freelancers.',
    description: 'Modelo de recibo para prestação de serviços. Gere agora para mão de obra, consultoria e outros.',
    receiptTitle: 'RECIBO DE PRESTAÇÃO DE SERVIÇOS',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'Autônomo precisa emitir nota fiscal?', answer: 'Em muitos casos, o Recibo de Pagamento a Autônomo (RPA) ou um recibo simples serve para comprovar o serviço prestado quando não há obrigatoriedade de NF.' }
    ],
    richText: 'Prestadores de serviços devem sempre emitir recibos para manter a transparência com seus clientes. Descreva detalhadamente o serviço realizado (ex: "Mão de obra para pintura de 2 quartos") para evitar dúvidas posteriores.'
  }
};