// Ecosystem Links (Backlinks strategy)
export const ECOSYSTEM_LINKS = [
  { name: 'Declaração Online', url: 'https://declaracaoonline.com.br', label: 'Precisa de uma Declaração?' },
  { name: 'Gera Contrato', url: 'https://geracontrato.com.br', label: 'Gerar Contrato Jurídico' },
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

// Conteúdo Rico e SEO para cada tipo de página
export const PAGE_CONTENT: Record<string, any> = {
  'default': {
    title: 'Gerador de Recibos Online Grátis – Simples, Rápido e Profissional',
    heroTitle: 'Gerador de Recibos Online Grátis',
    heroDescription: 'A ferramenta gratuita mais completa para emitir recibos online. Ideal para aluguel, serviços, vendas e autônomos. PDF pronto para imprimir.',
    description: 'Gerador de Recibos Online Grátis – Simples, Rápido e Profissional. Emita recibos de aluguel, serviços e venda em PDF ou para WhatsApp.',
    receiptTitle: 'RECIBO DE PAGAMENTO',
    schemaType: 'SoftwareApplication',
    faqs: [
      { question: 'Como emitir um recibo online grátis?', answer: 'Basta preencher os campos no formulário acima (valor, pagador, emitente e descrição). O sistema gera automaticamente o modelo pronto. Depois, clique em "Imprimir / Salvar PDF" ou envie direto para o WhatsApp.' },
      { question: 'Este recibo tem validade jurídica?', answer: 'Sim. Um recibo assinado comprova a quitação de uma dívida ou pagamento, conforme o Código Civil Brasileiro (Art. 319 e 320), desde que contenha os dados essenciais (valor, nomes, data e assinatura).' },
      { question: 'É seguro usar o RecibosOnline?', answer: 'Totalmente seguro. Não salvamos seus dados em nenhum servidor. Todo o processamento do recibo acontece dentro do seu próprio navegador/celular.' }
    ],
    richText: `
      <p>A emissão de um <strong>recibo de pagamento</strong> é uma etapa fundamental para garantir a segurança jurídica de qualquer transação financeira, seja ela comercial ou pessoal. O <strong>RecibosOnline</strong> foi desenvolvido para facilitar esse processo, oferecendo uma solução ágil, gratuita e sem burocracia.</p>
      
      <h3 class="text-lg font-bold text-slate-800 mt-4 mb-2">Por que usar nosso Gerador de Recibos?</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Sem Cadastro:</strong> Não exigimos e-mail ou login. É entrar e usar.</li>
        <li><strong>Formatação Profissional:</strong> Modelos limpos e organizados que transmitem credibilidade.</li>
        <li><strong>Compatível com Mobile:</strong> Gere recibos direto do seu celular Android ou iOS.</li>
        <li><strong>Integração com WhatsApp:</strong> Envie o comprovante para seu cliente com um clique.</li>
      </ul>

      <h3 class="text-lg font-bold text-slate-800 mt-4 mb-2">Elementos Essenciais de um Recibo</h3>
      <p>Para que um recibo seja válido legalmente, ele precisa conter:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Valor:</strong> Numérico e por extenso (nosso sistema preenche automaticamente).</li>
        <li><strong>Partes:</strong> Nome completo ou Razão Social de quem paga e de quem recebe (com CPF/CNPJ).</li>
        <li><strong>Descrição:</strong> O motivo do pagamento (ex: "Aluguel referente a Março").</li>
        <li><strong>Data e Local:</strong> Onde e quando o pagamento foi efetuado.</li>
        <li><strong>Assinatura:</strong> Do emitente (quem recebeu o dinheiro).</li>
      </ul>
    `
  },
  'aluguel-residencial': {
    title: 'Recibo de Aluguel Residencial Grátis - Modelo PDF/Word',
    heroTitle: 'Emitir Recibo de Aluguel',
    heroDescription: 'Gere recibos de aluguel residencial em segundos. Modelo atualizado conforme a Lei do Inquilinato. Grátis e sem cadastro.',
    description: 'Emita seu recibo de aluguel residencial em segundos. Modelo profissional pronto para imprimir ou enviar no WhatsApp.',
    receiptTitle: 'RECIBO DE ALUGUEL',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'O que deve constar no recibo de aluguel?', answer: 'Deve constar obrigatoriamente: nome do locador e locatário, valor do aluguel, endereço completo do imóvel, mês de referência do pagamento e data da quitação.' },
      { question: 'Posso usar este recibo para Imposto de Renda?', answer: 'Sim. Tanto o locador quanto o locatário podem utilizar este documento como comprovante para a Declaração de Imposto de Renda (IRPF), desde que os valores e CPFs estejam corretos.' },
      { question: 'Como enviar recibo de aluguel pelo WhatsApp?', answer: 'Preencha os dados do aluguel no formulário e clique no botão verde "Enviar no WhatsApp". O sistema criará uma mensagem formatada com o link ou resumo do recibo.' }
    ],
    richText: `
      <p>O <strong>recibo de aluguel</strong> é o documento que comprova que o inquilino cumpriu sua obrigação financeira mensal. Para o proprietário (locador), é a segurança de que o valor foi recebido e a dívida daquele mês está quitada.</p>
      
      <h3 class="text-lg font-bold text-slate-800 mt-4 mb-2">Destaques do Modelo de Aluguel</h3>
      <p>Nosso gerador é otimizado especificamente para locações residenciais e comerciais, incluindo campos vitais como:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Mês de Referência:</strong> Evita confusões sobre qual período está sendo pago.</li>
        <li><strong>Endereço do Imóvel:</strong> Vincula o pagamento ao contrato de locação específico.</li>
        <li><strong>Multas e Juros:</strong> O campo de valor permite que você some eventuais acréscimos por atraso.</li>
      </ul>

      <p>Este modelo está em conformidade com a <strong>Lei do Inquilinato (Lei nº 8.245/91)</strong>, que obriga o locador a fornecer recibo discriminado das importâncias pagas.</p>
    `
  },
  'veiculos': {
    title: 'Recibo de Compra e Venda de Veículos - Carro e Moto',
    heroTitle: 'Recibo de Venda de Veículo',
    heroDescription: 'Comprovante de pagamento para entrada, sinal ou venda total de carros e motos. Segurança para comprador e vendedor.',
    description: 'Gere recibo de compra e venda de veículos. Ideal para sinal ou pagamento integral. Modelo seguro para negociações.',
    receiptTitle: 'RECIBO DE COMPRA E VENDA',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'Este recibo substitui o DUT (CRV)?', answer: 'Não. O Recibo gerado aqui é um comprovante financeiro (recibo de pagamento) entre as partes. A transferência legal de propriedade exige o preenchimento do DUT (Documento Único de Transferência) e reconhecimento de firma em cartório.' },
      { question: 'Para que serve o recibo de sinal de veículo?', answer: 'Serve para garantir o negócio. Se o comprador desistir, geralmente perde o sinal. Se o vendedor desistir, deve devolver o sinal (conforme acordo entre as partes).' }
    ],
    richText: `
      <p>Ao negociar um veículo usado, seja carro, moto ou caminhão, é crucial emitir um <strong>recibo de compra e venda</strong> que detalhe a transação financeira. Isso protege o vendedor de reclamações futuras sobre falta de pagamento e garante ao comprador a prova da quitação.</p>

      <h3 class="text-lg font-bold text-slate-800 mt-4 mb-2">O que incluir na descrição?</h3>
      <p>Recomendamos que, no campo "Descrição/Referente a", você inclua:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Modelo e Marca:</strong> Ex: Honda Civic LXR 2.0.</li>
        <li><strong>Placa e Cor:</strong> Para identificação única do bem.</li>
        <li><strong>Renavam ou Chassi:</strong> (Opcional, mas recomendado para maior segurança).</li>
        <li><strong>Condição:</strong> "Vendido no estado em que se encontra" (cláusula comum em vendas de usados).</li>
      </ul>
    `
  },
  'servicos': {
    title: 'Recibo de Prestação de Serviços - Autônomo e MEI',
    heroTitle: 'Recibo de Serviços (RPA)',
    heroDescription: 'Modelo ideal para prestadores de serviço, diaristas, pedreiros, técnicos e freelancers. Emita e imprima grátis.',
    description: 'Modelo de recibo para prestação de serviços. Gere agora para mão de obra, consultoria e outros serviços autônomos.',
    receiptTitle: 'RECIBO DE PRESTAÇÃO DE SERVIÇOS',
    schemaType: 'BusinessApplication',
    faqs: [
      { question: 'Autônomo precisa emitir nota fiscal ou recibo?', answer: 'Se você é MEI, a nota fiscal é obrigatória para PJ, mas opcional para Pessoa Física. No entanto, o recibo simples é sempre recomendado para controle e profissionalismo, servindo como comprovante de pagamento.' },
      { question: 'O que é RPA?', answer: 'RPA é o Recibo de Pagamento Autônomo, usado quando uma empresa paga uma pessoa física. Nosso gerador pode ser usado para criar um recibo simples que cumpre a função de comprovar o recebimento do valor.' }
    ],
    richText: `
      <p>Prestadores de serviços, freelancers e profissionais liberais devem sempre emitir recibos para manter a transparência com seus clientes e organizar sua contabilidade.</p>

      <h3 class="text-lg font-bold text-slate-800 mt-4 mb-2">Ideal para quais profissionais?</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Domésticos:</strong> Diaristas, jardineiros, piscineiros.</li>
        <li><strong>Construção Civil:</strong> Pedreiros, eletricistas, encanadores, pintores.</li>
        <li><strong>Beleza e Estética:</strong> Manicures, cabeleireiros, maquiadores.</li>
        <li><strong>Profissionais Liberais:</strong> Professores particulares, consultores, designers.</li>
      </ul>

      <p>Descreva detalhadamente o serviço realizado (ex: "Mão de obra para pintura de 2 quartos e 1 sala") para evitar dúvidas posteriores sobre o escopo do trabalho contratado.</p>
    `
  }
};