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
    title: 'Gerador de Recibos Online Grátis – Simples, Rápido e Profissional (2024)',
    heroTitle: 'Gerador de Recibos Online',
    heroDescription: 'A ferramenta #1 do Brasil para emitir recibos profissionais. Preencha, gere em PDF e envie no WhatsApp em segundos. 100% Grátis e Seguro.',
    description: 'Crie recibos online grátis com validade jurídica. Modelos para aluguel, serviços e vendas. Gere em PDF ou envie direto para o WhatsApp sem cadastro.',
    receiptTitle: 'RECIBO DE PAGAMENTO',
    schemaType: 'SoftwareApplication',
    faqs: [
      { question: 'O RecibosOnline é realmente gratuito?', answer: 'Sim, 100% gratuito. Você pode gerar recibos ilimitados, baixar em PDF e compartilhar no WhatsApp sem pagar nada e sem precisar fazer cadastro.' },
      { question: 'O recibo gerado tem validade jurídica?', answer: 'Sim. O documento gerado atende aos requisitos do Artigo 320 do Código Civil Brasileiro, servindo como prova legal de quitação de pagamento, desde que assinado pelo emitente.' },
      { question: 'Meus dados ficam salvos no site?', answer: 'Não. Para sua segurança e privacidade (LGPD), nossa tecnologia processa tudo no seu navegador. Nenhuma informação financeira ou dado pessoal é enviado para nossos servidores.' },
      { question: 'Posso usar no celular?', answer: 'Sim! O sistema é responsivo e funciona perfeitamente em Android e iPhone (iOS), facilitando o envio do comprovante pelo WhatsApp logo após receber o pagamento.' }
    ],
    richText: `
      <h2>A Maneira Mais Rápida de Criar Recibos Profissionais</h2>
      <p>Bem-vindo ao <strong>RecibosOnline.com.br</strong>, a solução definitiva para autônomos, proprietários de imóveis e pequenos empresários que precisam formalizar pagamentos sem burocracia. Esqueça os blocos de papel de papelaria; nossa tecnologia permite criar documentos digitais, organizados e legíveis em segundos.</p>
      
      <h3>Por que abandonar o talão de recibo tradicional?</h3>
      <p>No cenário digital de 2024, entregar um papel escrito à mão transmite amadorismo. Utilizar um gerador online oferece:</p>
      <ul>
        <li><strong>Profissionalismo:</strong> Um PDF bem formatado aumenta a confiança do seu cliente.</li>
        <li><strong>Agilidade:</strong> Preenchimento automático de datas e conversão de valores.</li>
        <li><strong>Sustentabilidade:</strong> Economize papel enviando o comprovante digitalmente.</li>
        <li><strong>Organização:</strong> Facilidade para arquivar os PDFs no seu computador ou nuvem.</li>
      </ul>

      <h3>Validade Jurídica e Segurança (Código Civil)</h3>
      <p>Muitos usuários perguntam: <em>"Um recibo online vale como prova?"</em>. A resposta é <strong>sim</strong>.</p>
      <p>De acordo com o <strong>Artigo 320 do Código Civil Brasileiro</strong>, a quitação é válida quando contém:</p>
      <ol>
        <li>O valor da dívida (numérico e por extenso);</li>
        <li>O nome do devedor (quem pagou);</li>
        <li>O tempo e o lugar do pagamento;</li>
        <li>A assinatura do credor (quem recebeu).</li>
      </ol>
      <p>Nosso sistema garante que todos esses campos estejam presentes. Após imprimir, basta assinar fisicamente ou, se enviado digitalmente, a confirmação de envio pode servir como rastro da transação.</p>

      <h3>Como usar o Gerador de Recibos</h3>
      <p>É extremamente simples e leva menos de 1 minuto:</p>
      <ol>
        <li><strong>Preencha o Valor:</strong> Digite o valor numérico. O sistema sugere o valor por extenso automaticamente.</li>
        <li><strong>Identifique as Partes:</strong> Coloque o nome de quem pagou e de quem recebeu (com CPF/CNPJ para maior segurança).</li>
        <li><strong>Descreva o Pagamento:</strong> Seja específico. Ex: "Aluguel Maio/2024" ou "Serviço de Manutenção PC".</li>
        <li><strong>Finalize:</strong> Clique em "Imprimir / Salvar PDF" ou envie direto para o WhatsApp do cliente.</li>
      </ol>

      <h3>Modelos Específicos Disponíveis</h3>
      <p>Além do modelo genérico, oferecemos templates otimizados para necessidades específicas:</p>
      <ul>
        <li><a href="#modelo/aluguel-residencial">Recibo de Aluguel</a>: Com campos para mês de referência e endereço.</li>
        <li><a href="#modelo/veiculos">Compra e Venda de Veículos</a>: Ideal para sinal ou transferência de carros/motos.</li>
        <li><a href="#modelo/servicos">Prestação de Serviços</a>: Para autônomos, diaristas e freelancers (RPA simples).</li>
      </ul>
    `
  },
  'aluguel-residencial': {
    title: 'Recibo de Aluguel Residencial Grátis - Modelo Lei do Inquilinato',
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
      
      <h3>Destaques do Modelo de Aluguel</h3>
      <p>Nosso gerador é otimizado especificamente para locações residenciais e comerciais, incluindo campos vitais como:</p>
      <ul>
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

      <h3>O que incluir na descrição?</h3>
      <p>Recomendamos que, no campo "Descrição/Referente a", você inclua:</p>
      <ul>
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

      <h3>Ideal para quais profissionais?</h3>
      <ul>
        <li><strong>Domésticos:</strong> Diaristas, jardineiros, piscineiros.</li>
        <li><strong>Construção Civil:</strong> Pedreiros, eletricistas, encanadores, pintores.</li>
        <li><strong>Beleza e Estética:</strong> Manicures, cabeleireiros, maquiadores.</li>
        <li><strong>Profissionais Liberais:</strong> Professores particulares, consultores, designers.</li>
      </ul>

      <p>Descreva detalhadamente o serviço realizado (ex: "Mão de obra para pintura de 2 quartos e 1 sala") para evitar dúvidas posteriores sobre o escopo do trabalho contratado.</p>
    `
  }
};