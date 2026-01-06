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
    title: 'Gerador de Recibo Online Grátis e Fácil (PDF e WhatsApp) | RecibosOnline',
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
      <h2>A Missão: Desburocratizar o Brasil</h2>
      <p>Olá, sou <strong>Elvis Dias</strong>, Desenvolvedor Full Stack e criador do <strong>RecibosOnline.com.br</strong>.</p>
      <p>A ideia para este projeto nasceu de uma frustração comum: a complexidade desnecessária. Ao tentar realizar tarefas simples, como emitir um recibo ou gerar um contrato, percebi que a maioria das ferramentas disponíveis na internet ou eram pagas (e caras), ou exigiam cadastros invasivos, ou estavam repletas de anúncios que atrapalhavam o uso.</p>
      
      <h2>Nossa Filosofia</h2>
      <p>Decidi usar minha experiência em engenharia de software para criar uma solução diferente: <strong>Tecnologia acessível, gratuita e respeitosa.</strong></p>

      <h3>Por que gratuito?</h3>
      <p>Acredito que ferramentas utilitárias básicas devem ser acessíveis a todos: desde o pequeno prestador de serviços que está começando até o proprietário que aluga um imóvel para complementar a renda. O custo de manter este projeto é absorvido como uma contribuição para a comunidade digital brasileira.</p>

      <h3>Nossos Valores Fundamentais</h3>
      <ul class="list-disc pl-5 space-y-2">
          <li><strong>Privacidade em Primeiro Lugar:</strong> Não queremos seus dados. Todo o processamento do recibo acontece no seu próprio navegador.</li>
          <li><strong>Simplicidade Radical:</strong> Se algo pode ser feito com 1 clique, não faremos com 2.</li>
          <li><strong>Qualidade Técnica:</strong> Utilizamos os padrões mais modernos de desenvolvimento web (React, TypeScript, SEO Técnico) para garantir velocidade e estabilidade.</li>
      </ul>
      
      <h2>Contato</h2>
      <p>Estamos sempre abertos a sugestões. Se você tem ideias para melhorar a plataforma, visite nossa página de contato.</p>
    `
  },
  'politica-privacidade': {
    title: 'Política de Privacidade e Proteção de Dados | RecibosOnline',
    heroTitle: 'Política de Privacidade',
    heroDescription: 'Sua segurança é nossa prioridade absoluta. Entenda como (não) tratamos seus dados.',
    description: 'Política de Privacidade em conformidade com a LGPD. Não coletamos dados bancários ou pessoais. Processamento local e seguro.',
    receiptTitle: '',
    schemaType: 'WebPage',
    faqs: [],
    richText: `
      <h2>Compromisso com a Privacidade</h2>
      <p>Última atualização: <strong>Março de 2026</strong></p>
      <p>O <strong>RecibosOnline.com.br</strong> preza pela transparência total. Esta Política de Privacidade descreve de forma clara e acessível como protegemos sua privacidade ao utilizar nossos serviços.</p>

      <h2>1. Arquitetura "Client-Side" (Segurança Máxima)</h2>
      <p>Diferente da maioria dos sites, o RecibosOnline opera sob uma arquitetura conhecida como <em>Client-Side Processing</em>. Isso significa que quando você preenche os campos do recibo (Nome, CPF, Valor), <strong>esses dados nunca saem do seu dispositivo</strong>.</p>
      <p>Todo o processo de geração do PDF e formatação acontece exclusivamente na memória do seu navegador (Google Chrome, Safari, Edge, etc.). Assim que você fecha a aba ou atualiza a página, os dados são eliminados da memória.</p>

      <h2>2. Coleta e Tratamento de Dados</h2>
      <p>Para garantir sua privacidade, estabelecemos limites estritos sobre o que coletamos:</p>
      
      <h3>O que NUNCA coletamos:</h3>
      <ul>
        <li>Nomes, endereços ou CPFs inseridos nos formulários de recibo.</li>
        <li>Dados bancários, chaves PIX ou informações de pagamento.</li>
        <li>Cópias dos arquivos PDF gerados.</li>
      </ul>

      <h3>O que coletamos automaticamente:</h3>
      <p>Utilizamos cookies técnicos anônimos apenas para:</p>
      <ul>
        <li>Monitorar o desempenho do site (Google Analytics 4 em modo anônimo).</li>
        <li>Entender quais modelos de recibo são mais populares.</li>
        <li>Proteger o site contra ataques cibernéticos (DDoS).</li>
      </ul>

      <h2>3. LGPD (Lei Geral de Proteção de Dados)</h2>
      <p>Estamos em total conformidade com a Lei nº 13.709/2018 (LGPD). Como não atuamos como "Controladores" ou "Operadores" de dados pessoais sensíveis inseridos nos documentos (pois tecnicamente não temos acesso a eles), garantimos "Privacy by Design" (Privacidade desde a Concepção).</p>
      
      <h2>4. Seus Direitos</h2>
      <p>Como usuário, você tem o direito de navegar livremente sem ser rastreado individualmente. Não vendemos, alugamos ou compartilhamos dados de navegação com corretores de dados.</p>
    `
  },
  'politica-cookies': {
    title: 'Política de Cookies e Rastreamento | RecibosOnline',
    heroTitle: 'Política de Cookies',
    heroDescription: 'Entenda como utilizamos cookies para melhorar sua experiência.',
    description: 'Saiba quais cookies utilizamos e como gerenciá-los. Priorizamos cookies essenciais e de desempenho, sem rastreamento invasivo.',
    receiptTitle: '',
    schemaType: 'WebPage',
    faqs: [],
    richText: `
      <h2>Política de Cookies e Tecnologias de Rastreamento</h2>
      <p>Para oferecer uma experiência de navegação rápida e segura, o RecibosOnline utiliza cookies. Esta página explica o que são, como os usamos e como você pode controlá-los.</p>

      <h2>O que são Cookies?</h2>
      <p>Cookies são pequenos arquivos de texto que os sites salvam no seu navegador. Eles funcionam como a "memória" do site, permitindo que ele reconheça seu dispositivo quando você retorna.</p>

      <h2>Categorias de Cookies Utilizados</h2>
      
      <h3>1. Cookies Estritamente Necessários</h3>
      <p>São essenciais para que o site funcione. Sem eles, recursos como a navegação entre páginas e acesso a áreas seguras não funcionariam. <strong>Estes cookies não podem ser desativados em nossos sistemas.</strong></p>

      <h3>2. Cookies de Desempenho e Análise</h3>
      <p>Utilizamos o Google Analytics para contar visitas e fontes de tráfego, de modo que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares.</p>
      <ul>
          <li>Toda a informação recolhida por estes cookies é agregada e, portanto, <strong>anônima</strong>.</li>
          <li>Não rastreamos seu IP individualmente.</li>
      </ul>

      <h3>3. Cookies de Publicidade (Opcional)</h3>
      <p>Podemos exibir anúncios não intrusivos (rede Google AdSense) para custear a manutenção dos servidores. Esses parceiros podem usar cookies para mostrar anúncios relevantes baseados em seus interesses gerais.</p>

      <h2>Como Gerenciar seus Cookies</h2>
      <p>Você tem o controle total. A maioria dos navegadores permite que você recuse cookies ou os apague. Consulte as configurações de privacidade do seu navegador (Chrome, Firefox, Safari) para modificar suas preferências.</p>
    `
  },
  'termos-uso': {
    title: 'Termos de Uso e Condições Gerais | RecibosOnline',
    heroTitle: 'Termos de Uso',
    heroDescription: 'Regras para utilização da nossa plataforma gratuita de geração de documentos.',
    description: 'Termos de uso do RecibosOnline.com.br. Ferramenta gratuita para geração de recibos e documentos.',
    receiptTitle: '',
    schemaType: 'WebPage',
    faqs: [],
    richText: `
      <h2>Termos e Condições Gerais de Uso</h2>
      <p>Bem-vindo ao <strong>RecibosOnline.com.br</strong>. Ao utilizar nossa plataforma, você concorda com os termos descritos abaixo. Leia atentamente.</p>

      <h2>1. Natureza do Serviço</h2>
      <p>O RecibosOnline é uma ferramenta tecnológica de <strong>automação de documentos</strong> (SaaS - Software as a Service). Fornecemos a tecnologia para formatar textos inseridos pelo usuário em um layout de recibo padronizado.</p>
      <p><strong>Isenção de Responsabilidade Profissional:</strong> Não prestamos consultoria jurídica, contábil ou financeira. Os modelos fornecidos são genéricos e baseados nas práticas comuns de mercado e no Código Civil Brasileiro.</p>

      <h2>2. Responsabilidades do Usuário</h2>
      <p>Ao gerar um documento, você declara que:</p>
      <ul>
        <li>As informações inseridas (valores, nomes, datas) são verdadeiras.</li>
        <li>O documento não será utilizado para fins ilícitos, como fraude, sonegação fiscal ou falsificação ideológica.</li>
        <li>Você verificou se o modelo atende às exigências legais específicas da sua região ou tipo de negócio.</li>
      </ul>

      <h2>3. Propriedade Intelectual</h2>
      <p>O código-fonte, design, logotipo e a estrutura da plataforma são propriedade exclusiva do RecibosOnline. Os documentos gerados (o PDF final) pertencem ao usuário que os criou.</p>

      <h2>4. Limitação de Garantias</h2>
      <p>O serviço é fornecido "no estado em que se encontra" ("as is"). Não garantimos que a ferramenta estará livre de interrupções temporárias ou erros técnicos, embora trabalhemos constantemente para manter 99.9% de disponibilidade.</p>

      <h2>5. Foro</h2>
      <p>Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer dúvidas decorrentes destes termos.</p>
    `
  },
  'contato': {
    title: 'Fale Conosco | RecibosOnline - Atendimento',
    heroTitle: 'Entre em Contato',
    heroDescription: 'Dúvidas, sugestões ou parcerias? Estamos prontos para ouvir você.',
    description: 'Entre em contato com a equipe do RecibosOnline. Tire suas dúvidas ou envie sugestões de novos modelos de recibo.',
    receiptTitle: '',
    schemaType: 'ContactPage',
    faqs: [],
    richText: `
      <h2>Central de Atendimento e Suporte</h2>
      <p>O <strong>RecibosOnline.com.br</strong> opera principalmente como uma plataforma de autoatendimento ("Self-Service"). Isso nos permite manter o serviço 100% gratuito para milhões de brasileiros.</p>
      
      <h2>Como podemos ajudar?</h2>
      <p>Embora não ofereçamos suporte técnico em tempo real (chat), valorizamos muito o feedback da nossa comunidade. Utilize nossos canais para:</p>

      <h3>1. Sugestões de Melhoria</h3>
      <p>Sentiu falta de um modelo específico? (Ex: Recibo de Táxi, Recibo de Doação). Envie sua ideia! A maioria dos nossos novos modelos vem de pedidos de usuários.</p>

      <h3>2. Reportar Problemas</h3>
      <p>Encontrou algum erro de cálculo ou bug visual? Avise-nos detalhando o navegador utilizado e o passo a passo para reproduzir o erro.</p>

      <h3>3. Parcerias e Imprensa</h3>
      <p>Para propostas comerciais, publicidade ou contatos de imprensa, utilize o e-mail corporativo abaixo.</p>

      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
        <h3 class="text-blue-800 font-bold text-lg m-0">Aviso Importante</h3>
        <p class="text-blue-700 mt-2">Não oferecemos consultoria jurídica ou contábil. Dúvidas sobre <strong>como preencher</strong> um recibo legalmente devem ser tiradas com seu contador ou advogado.</p>
      </div>
    `
  },
  // --- MODELOS DE RECIBOS (EXISTENTES) ---
  'recibo-simples': {
    title: 'Recibo Simples de Pagamento - Preencher, Imprimir ou PDF (Grátis)',
    heroTitle: 'Recibo Simples de Pagamento',
    heroDescription: 'A ferramenta definitiva para autônomos e pequenas vendas. Preencha os campos abaixo e baixe seu recibo oficial em PDF ou envie direto no WhatsApp.',
    description: 'Faça um Recibo Simples em segundos. Modelo pronto: preencha o valor, nome e descrição. Baixe em PDF ou envie no WhatsApp. Ideal para autônomos e vendas.',
    receiptTitle: 'RECIBO DE PAGAMENTO',
    schemaType: 'SoftwareApplication',
    faqs: [],
    richText: `
      <h2>O que é um Recibo Simples?</h2>
      <p>O <strong>Recibo Simples</strong> é um documento legal utilizado para comprovar que um pagamento foi efetuado e recebido. Ele serve como prova de quitação de dívidas, compras ou serviços prestados, sendo regulamentado pelo <strong>Art. 319 e 320 do Código Civil Brasileiro</strong>.</p>
      
      <p>Diferente de modelos complexos (como aluguel ou recibos fiscais), o recibo simples é ideal para situações cotidianas, como vendas de itens usados, pequenos serviços de reparo, aulas particulares ou qualquer transação entre pessoas físicas.</p>

      <h2>Passo a Passo: Como preencher este modelo?</h2>
      <p>Nosso gerador foi desenhado para ser intuitivo. Siga o guia abaixo para emitir seu documento sem erros:</p>
      
      <ol class="list-decimal pl-6 space-y-4 mb-8">
          <li><strong>Valor do Recibo (R$):</strong> Digite o valor numérico. Nosso sistema preencherá automaticamente o valor por extenso para evitar erros de escrita (requisito legal para validade).</li>
          <li><strong>Dados do Pagador (Quem paga):</strong> Insira o nome completo de quem está lhe pagando. Se for para uma empresa, coloque o nome da Razão Social. O CPF/CNPJ é opcional, mas recomendável para segurança.</li>
          <li><strong>Referente a (Motivo):</strong> Descreva exatamente o que está sendo pago. <br/><em>Exemplo: "Venda de uma Bicicleta Aro 29 usada" ou "Serviços de jardinagem realizados em Março".</em></li>
          <li><strong>Dados do Emitente (Você):</strong> Seus dados são necessários para identificar quem recebeu o dinheiro. Assine o recibo (digitalmente ou após imprimir) acima do seu nome.</li>
          <li><strong>Data e Local:</strong> O sistema define automaticamente a data de hoje e a cidade de São Paulo, mas você pode alterar conforme sua necessidade.</li>
      </ol>

      <h2>Recibo vale como Nota Fiscal?</h2>
      <p><strong>Não.</strong> O recibo comprova o pagamento, mas não recolhe impostos. </p>
      <ul>
          <li><strong>Recibo:</strong> Comprova que o dinheiro trocou de mãos. É suficiente para transações entre Pessoas Físicas ou de Autônomos (RPA) para empresas.</li>
          <li><strong>Nota Fiscal:</strong> É obrigatória para empresas (CNPJ) na venda de produtos e serviços, pois envolve o recolhimento de tributos (ICMS, ISS).</li>
      </ul>

      <h2>Vantagens de usar o RecibosOnline.com.br</h2>
      <p>Ao contrário de preencher um bloco de papelaria ("recibo de papelaria"), nosso gerador oferece:</p>
      <ul>
          <li><strong>Aparência Profissional:</strong> Envie um PDF limpo e formatado, transmitindo confiança ao seu cliente.</li>
          <li><strong>Cópia no WhatsApp:</strong> O botão "Enviar no WhatsApp" cria uma mensagem pronta com o resumo do recibo.</li>
          <li><strong>Histórico Zero (Privacidade):</strong> Não salvamos seus dados. Tudo é feito no seu computador ou celular.</li>
      </ul>
    `
  },
  'aluguel-residencial': {
    title: 'Recibo de Aluguel Online Grátis - Lei do Inquilinato (PDF)',
    heroTitle: 'Recibo de Aluguel',
    heroDescription: 'Modelo oficial para locação residencial. Garanta a segurança jurídica do seu imóvel emitindo comprovantes detalhados mensalmente.',
    description: 'Gerador de Recibo de Aluguel Online. Atende a Lei do Inquilinato. Ideal para proprietários e imobiliárias. Baixe em PDF.',
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
    description: 'Recibo para Venda de Carros e Motos. Comprovante de pagamento e sinal de negócio seguro. Documento auxiliar ao DUT.',
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
    title: 'Recibo de Prestação de Serviços (RPA) Online Grátis',
    heroTitle: 'Recibo de Serviços',
    heroDescription: 'A ferramenta essencial para o profissional autônomo. Formalize seus "bicos" e trabalhos freelance com profissionalismo.',
    description: 'Emita Recibo de Prestação de Serviços (RPA) Grátis. Ideal para autônomos, pedreiros, freelancers e MEI.',
    receiptTitle: 'RECIBO DE SERVIÇOS',
    schemaType: 'BusinessApplication',
    faqs: [],
    richText: `<p>Para prestadores de serviço que não possuem CNPJ, o <strong>RPA (Recibo de Pagamento Autônomo)</strong> é a forma correta de comprovar a renda e recolher os impostos devidos (INSS/IRRF) quando aplicável.</p>`
  }
};