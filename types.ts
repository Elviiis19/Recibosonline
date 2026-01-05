export interface ReceiptData {
  payerName: string;
  payerDoc: string; // CPF or CNPJ
  receiverName: string;
  receiverDoc: string;
  amount: number;
  amountInWords: string;
  description: string;
  city: string;
  date: string;
  receiptType: ReceiptType;
}

export type ReceiptType = 
  | 'generico'
  | 'aluguel-residencial'
  | 'aluguel-comercial'
  | 'temporada'
  | 'garagem'
  | 'veiculos'
  | 'sinal'
  | 'servicos'
  | 'mao-de-obra'
  | 'diarista'
  | 'salario'
  | 'vale';

export interface MenuItem {
  label: string;
  path: string;
  icon?: string;
  subItems?: MenuItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageContent {
  title: string;
  heroTitle: string;
  heroDescription: string;
  description: string; // Meta description
  receiptTitle: string; // O que sai impresso no papel (ex: RECIBO DE ALUGUEL)
  richText: any; // Conteúdo longo para SEO
  faqs: FAQItem[];
  schemaType: string;
}