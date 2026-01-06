import { FileText, Home, Car, Briefcase, Hammer, UserCheck, Building2, Wallet } from 'lucide-react';

// Ecosystem Links (Strategy: Link Juice & Brand Authority)
export const ECOSYSTEM_LINKS = [
  { name: 'Recibo Grátis', url: 'https://recibogratis.com.br', label: 'Recibo Grátis (Simples)' },
  { name: 'Declaração Online', url: 'https://declaracaoonline.com.br', label: 'Gerador de Declaração' },
  { name: 'Gera Contrato', url: 'https://geracontrato.com.br', label: 'Gerar Contrato Jurídico' },
];

// Grid Visual da Home Page (Catálogo de Modelos)
// URLs (paths) otimizadas para SEO (palavras-chave exatas)
export const AVAILABLE_MODELS = [
  {
    id: 'default',
    label: 'Recibo Simples',
    description: 'Para pagamentos diversos, vendas de produtos e serviços rápidos.',
    icon: FileText,
    color: 'bg-emerald-500', // Verde Principal
    path: '/recibo-simples'
  },
  {
    id: 'aluguel-residencial',
    label: 'Aluguel de Imóvel',
    description: 'Para proprietários e inquilinos. Em conformidade com a Lei do Inquilinato.',
    icon: Home,
    color: 'bg-blue-500',
    path: '/recibo-de-aluguel' // URL Otimizada
  },
  {
    id: 'veiculos',
    label: 'Venda de Veículo',
    description: 'Carros e Motos. Ideal para sinal de negócio ou quitação de venda.',
    icon: Car,
    color: 'bg-orange-500',
    path: '/recibo-de-veiculo' // URL Otimizada
  },
  {
    id: 'servicos',
    label: 'Prestação de Serviços',
    description: 'Para autônomos, freelancers, MEI e RPA (Recibo de Pagamento Autônomo).',
    icon: Briefcase,
    color: 'bg-purple-500',
    path: '/recibo-de-servico' // URL Otimizada
  },
  {
    id: 'mao-de-obra',
    label: 'Mão de Obra',
    description: 'Pedreiros, pintores, eletricistas e manutenção geral.',
    icon: Hammer,
    color: 'bg-slate-600',
    path: '/recibo-mao-de-obra'
  },
  {
    id: 'diarista',
    label: 'Diarista / Doméstica',
    description: 'Recibo de diária ou salário para empregadas domésticas.',
    icon: UserCheck,
    color: 'bg-pink-500',
    path: '/recibo-diarista'
  },
  {
    id: 'aluguel-comercial',
    label: 'Aluguel Comercial',
    description: 'Salas, lojas e galpões comerciais. Com retenção de IR se necessário.',
    icon: Building2,
    color: 'bg-indigo-600',
    path: '/recibo-comercial'
  },
  {
    id: 'vale',
    label: 'Vale / Adiantamento',
    description: 'Comprovante de adiantamento salarial para funcionários.',
    icon: Wallet,
    color: 'bg-green-600',
    path: '/recibo-de-vale'
  }
];

export const MENU_STRUCTURE = [
  {
    label: 'Recibos Comuns',
    path: '/',
    subItems: [
      { label: 'Recibo Simples', path: '/recibo-simples' },
      { label: 'Recibo de Pagamento', path: '/recibo-simples' },
    ]
  },
  {
    label: 'Imóveis',
    path: '/',
    subItems: [
      { label: 'Aluguel Residencial', path: '/recibo-de-aluguel' },
      { label: 'Aluguel Comercial', path: '/recibo-comercial' },
    ]
  },
  {
    label: 'Veículos',
    path: '/',
    subItems: [
      { label: 'Compra e Venda', path: '/recibo-de-veiculo' },
      { label: 'Sinal de Negócio', path: '/recibo-de-veiculo' },
    ]
  },
  {
    label: 'Serviços',
    path: '/',
    subItems: [
      { label: 'Prestação de Serviços', path: '/recibo-de-servico' },
      { label: 'Mão de Obra', path: '/recibo-mao-de-obra' },
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
  'default': { // Fallback Content (Cópia do Simples para evitar crash)
    title: 'Gerador de Recibo Online Grátis',
    heroTitle: 'Gerador de Recibo Online',
    heroDescription: 'Preencha os dados e gere seu recibo em PDF ou envie no WhatsApp. Rápido e Grátis.',
    description: 'Gerador de recibo online gratuito.',
    receiptTitle: 'RECIBO',
    schemaType: 'SoftwareApplication',
    faqs: [],
    richText: `<p>Utilize nossa ferramenta gratuita para gerar recibos profissionais em segundos.</p>`
  },
  'home': { 
    title: 'Gerador de Recibo Online Grátis e Fácil (PDF e WhatsApp)',
    heroTitle: '', 
    heroDescription: 'Preencha o formulário abaixo e gere seu recibo em PDF pronto para imprimir ou enviar no WhatsApp. Sem login, sem cadastro e 100% gratuito.',
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
      <h2>O Gerador de Recibo Online Definitivo</h2>
      <p>Bem-vindo ao <strong>RecibosOnline.com.br</strong>, a ferramenta projetada para eliminar burocracias. Enquanto outros sistemas exigem cadastros longos e senhas, nós focamos no que importa: <strong>entregar seu documento pronto em segundos.</strong></p>
      
      <p>Nossa plataforma é otimizada para ser a mais rápida do Brasil. Seja via celular ou computador, você preenche, gera o PDF e envia no WhatsApp sem telas de carregamento desnecessárias.</p>
      <h3>Por que nossa ferramenta é a nº1?</h3>
      <p>Substituímos o antigo bloco de recibos da papelaria com vantagens tecnológicas e legais:</p>
      <ul class="grid md:grid-cols-2 gap-4 mt-4 mb-6">
        <li class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><span class="font-bold text-brand-600">✓</span> <strong>Agilidade Extrema:</strong> Interface limpa que vai direto ao ponto.</li>
        <li class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><span class="font-bold text-brand-600">✓</span> <strong>Formatação Jurídica:</strong> Campos baseados no Art. 320 do Código Civil.</li>
        <li class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><span class="font-bold text-brand-600">✓</span> <strong>Cálculos Automáticos:</strong> O valor por extenso é preenchido sozinho para evitar erros.</li>
        <li class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><span class="font-bold text-brand-600">✓</span> <strong>Privacidade LGPD:</strong> Seus dados não saem do seu dispositivo.</li>
      </ul>
    `
  },
  'quem-somos': {
    title: 'Quem Somos | RecibosOnline - Tecnologia Desburocratizada',
    heroTitle: 'Sobre Nós',
    heroDescription: 'Conheça a missão por trás da ferramenta de recibos mais simples do Brasil.',
    description: 'O RecibosOnline é uma iniciativa do desenvolvedor Elvis Dias para democratizar o acesso a ferramentas financeiras gratuitas e seguras.',
    receiptTitle: '',
    schemaType: 'AboutPage',
    faqs: [],
    richText: `
      <h2>A Missão: Desburocratizar</h2>
      <p>Olá, sou <strong>Elvis Dias</strong>, Desenvolvedor Full Stack e criador do <strong>RecibosOnline.com.br</strong>.</p>
      <p>A ideia para este projeto nasceu de uma frustração comum: a complexidade desnecessária. Ao tentar realizar tarefas simples, como emitir um recibo ou gerar um contrato, percebi que a maioria das ferramentas disponíveis na internet ou eram pagas (e caras), ou exigiam cadastros invasivos, ou estavam repletas de anúncios que atrapalhavam o uso.</p>
      <p>Decidi usar minha experiência em engenharia de software para criar uma solução diferente: <strong>Tecnologia acessível, gratuita e respeitosa.</strong></p>

      <h3>Por que gratuito?</h3>
      <p>Acredito que ferramentas utilitárias básicas devem ser acessíveis a todos: desde o pequeno prestador de serviços que está começando até o proprietário que aluga um imóvel para complementar a renda. O custo de manter este projeto é absorvido como uma contribuição para a comunidade digital brasileira.</p>

      <h3>Nossos Valores</h3>
      <ul class="space-y-4 my-6">
          <li class="flex gap-3"><div class="min-w-[1.5rem] mt-1 text-brand-600 font-bold">1.</div> <div><strong>Privacidade em Primeiro Lugar:</strong> Não queremos seus dados. Todo o processamento do recibo acontece no seu próprio navegador.</div></li>
          <li class="flex gap-3"><div class="min-w-[1.5rem] mt-1 text-brand-600 font-bold">2.</div> <div><strong>Simplicidade Radical:</strong> Se algo pode ser feito com 1 clique, não faremos com 2.</div></li>
          <li class="flex gap-3"><div class="min-w-[1.5rem] mt-1 text-brand-600 font-bold">3.</div> <div><strong>Qualidade Técnica:</strong> Utilizamos os padrões mais modernos de desenvolvimento web (React, TypeScript, SEO Técnico) para garantir velocidade e estabilidade.</div></li>
      </ul>
    `
  },
  'politica-privacidade': {
    title: 'Política de Privacidade e Cookies | RecibosOnline',
    heroTitle: 'Política de Privacidade',
    heroDescription: 'Sua segurança é nossa prioridade absoluta. Entenda como (não) tratamos seus dados.',
    description: 'Política de Privacidade em conformidade com a LGPD. Não coletamos dados bancários ou pessoais. Processamento local e seguro.',
    receiptTitle: '',
    schemaType: 'WebPage',
    faqs: [],
    richText: `
      <p>Última atualização: Março de 2026</p>
      <p>O <strong>RecibosOnline.com.br</strong> preza pela transparência total. Esta Política de Privacidade descreve como protegemos sua privacidade ao utilizar nossos serviços.</p>

      <h3>1. Arquitetura "Client-Side" (Processamento Local)</h3>
      <p>Diferente da maioria dos sites, o RecibosOnline opera sob uma arquitetura <em>Client-Side</em>. Isso significa que quando você preenche os campos do recibo (Nome, CPF, Valor), <strong>esses dados nunca são enviados para os nossos servidores</strong>.</p>
      <p>Todo o processo de geração do PDF e formatação acontece exclusivamente na memória do seu navegador (Google Chrome, Safari, Edge, etc.). Assim que você fecha a aba, os dados desaparecem.</p>

      <h3>2. Coleta de Dados</h3>
      <p>Nós <strong>NÃO</strong> coletamos, armazenamos ou compartilhamos:</p>
      <ul>
        <li>Nomes, endereços ou CPFs inseridos nos formulários;</li>
        <li>Dados bancários ou de pagamento;</li>
        <li>Arquivos gerados.</li>
      </ul>

      <h3>3. Cookies e Tecnologias de Rastreamento</h3>
      <p>Utilizamos cookies estritamente necessários para o funcionamento técnico do site e ferramentas anônimas de análise de tráfego (como Google Analytics) para entender quais modelos são mais utilizados e melhorar a plataforma. Nenhum cookie é utilizado para identificar você pessoalmente ou para fins de remarketing agressivo.</p>

      <h3>4. LGPD (Lei Geral de Proteção de Dados)</h3>
      <p>Estamos em total conformidade com a Lei nº 13.709/2018. Como não atuamos como "Controladores" ou "Operadores" de dados pessoais inseridos nos recibos (pois não temos acesso a eles), garantimos por design a proteção da sua liberdade e privacidade.</p>
    `
  },
  'termos-uso': {
    title: 'Termos de Uso | RecibosOnline',
    heroTitle: 'Termos de Uso',
    heroDescription: 'Regras para utilização da nossa plataforma gratuita de geração de documentos.',
    description: 'Termos de uso do RecibosOnline.com.br. Ferramenta gratuita para geração de recibos e documentos.',
    receiptTitle: '',
    schemaType: 'WebPage',
    faqs: [],
    richText: `
      <h3>1. Aceitação dos Termos</h3>
      <p>Ao acessar e usar o <strong>RecibosOnline.com.br</strong>, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.</p>

      <h3>2. Descrição do Serviço</h3>
      <p>O RecibosOnline fornece uma ferramenta gratuita para formatação e geração de recibos em PDF. O serviço é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.</p>

      <h3>3. Limitação de Responsabilidade</h3>
      <p>O RecibosOnline é uma ferramenta de facilitação tecnológica, não um escritório de advocacia ou contabilidade.</p>
      <ul>
        <li><strong>Responsabilidade do Usuário:</strong> Você é o único responsável pela veracidade das informações inseridas nos recibos.</li>
        <li><strong>Validade Legal:</strong> Embora nossos modelos sigam o Código Civil Brasileiro, a adequação legal específica para o seu caso deve ser verificada por você. Não nos responsabilizamos por disputas legais decorrentes do uso de documentos gerados aqui.</li>
      </ul>

      <h3>4. Uso Permitido</h3>
      <p>Você tem permissão para usar o site para gerar documentos para uso pessoal ou comercial lícito. É estritamente proibido utilizar a plataforma para gerar documentos falsos, fraudulentos ou para fins ilícitos.</p>

      <h3>5. Alterações</h3>
      <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso contínuo do site após quaisquer alterações constitui aceitação dos novos termos.</p>
    `
  },
  // --- MODELOS DE RECIBOS (EXISTENTES) ---
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
    richText: `
      <h3>A Importância do Recibo de Aluguel</h3>
      <p>Para proprietários e inquilinos, o <strong>Recibo de Aluguel</strong> não é apenas um papel, é uma segurança jurídica.</p>
      <p>Conforme a Lei do Inquilinato (Lei 8.245/91), o locador é obrigado a fornecer recibo discriminado das importâncias pagas. Nosso gerador cria este documento automaticamente, protegendo ambas as partes contra cobranças indevidas ou alegações de inadimplência.</p>
    `
  },
  'veiculos': {
    title: 'Recibo de Compra e Venda de Veículos - Carro e Moto',
    heroTitle: 'Recibo de Veículos',
    heroDescription: 'Comprovante financeiro para transações automotivas. Essencial para registrar o pagamento antes da transferência oficial no cartório.',
    description: 'Recibo para Venda de Carros e Motos. Comprovante de pagamento e sinal de negócio seguro.',
    receiptTitle: 'RECIBO DE COMPRA E VENDA',
    schemaType: 'BusinessApplication',
    faqs: [],
    richText: `
      <h3>Segurança na Venda de Veículos</h3>
      <p>Atenção: Este recibo comprova o <strong>pagamento financeiro</strong> (ou sinal/arras) da negociação do veículo. Ele serve como contrato particular de compra e venda simplificado.</p>
      <p>Para a transferência de propriedade legal, lembre-se de que ainda é necessário o preenchimento do CRV (DUT) e o reconhecimento de firma em cartório, conforme exigência do DETRAN.</p>
    `
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