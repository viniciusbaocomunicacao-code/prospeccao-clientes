/**
 * Conteúdo institucional extraído do site original (westlinkcapital.com.br)
 * em 2026-07-14. Centralizado aqui para facilitar revisão e edição sem
 * mexer em JSX. Fonte: assets/original-site/*.html na raiz do projeto.
 */

export const site = {
  name: "Westlink Capital",
  tagline: "Conectando o Interior ao Centro do Mercado Financeiro",
  whatsapp: {
    number: "5517996620376",
    display: "+55 17 99662-0376",
    message:
      "Olá! Vim pelo site da Westlink Capital e gostaria de falar com um especialista.",
  },
  ouvidoriaXP: "0800 722 3730",
  address: {
    lines: [
      "Georgina Business Park",
      "Sala comercial nº 103, Bloco Milan Norte",
      "Av. Anísio Haddad, 8001 — Jardim Aclimação",
      "São José do Rio Preto/SP — CEP 15091-751",
    ],
  },
  legal: {
    razaoSocial: "WESTLINK CAPITAL AI LTDA",
    cnpj: "62.138.571/0001-44",
    disclaimer:
      'A WESTLINK CAPITAL AI LTDA, inscrita sob o CNPJ 62.138.571/0001-44, é uma empresa de Assessoria de Investimento devidamente registrada na Comissão de Valores Mobiliários na forma da Resolução CVM 178/23 ("Sociedade"), que mantém contrato de distribuição de produtos financeiros com a XP Investimentos Corretora de Câmbio, Títulos e Valores Mobiliários S.A. ("XP") e pode, por conta e ordem dos seus clientes, operar no mercado de capitais segundo a legislação vigente. Na forma da legislação da CVM, o Assessor de Investimento não pode administrar ou gerir o patrimônio de investidores. O investimento em ações é um investimento de risco e rentabilidade passada não é garantia de rentabilidade futura. Na realização de operações com derivativos existe a possibilidade de perdas superiores aos valores investidos, podendo resultar em significativas perdas patrimoniais. A Sociedade poderá exercer atividades complementares relacionadas aos mercados financeiro, securitário, de previdência e capitalização, desde que não conflitem com a atividade de assessoria de investimentos, podendo ser realizada por meio da pessoa jurídica acima descrita ou por meio de pessoa jurídica terceira. Todas as atividades são prestadas mantendo a devida segregação e em cumprimento ao quanto previsto nas regras da CVM ou de outros órgãos reguladores e autorreguladores. Para informações e dúvidas sobre produtos, contate seu assessor de investimentos. Para reclamações, contate a Ouvidoria da XP pelo telefone 0800 722 3730.',
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Estratégia & Resultados", href: "/estrategia-resultados" },
  { label: "Contato", href: "/contato" },
];

export const home = {
  eyebrow: "Assessoria de Investimento · Parceira XP",
  headline: [
    "Da estratégia ao capital:",
    "soluções sob medida para o crescimento corporativo",
  ],
  subhead:
    "O primeiro escritório credenciado ao grupo XP com o DNA PJ, especializado no atendimento a empresas sediado em São José do Rio Preto.",
  cta: "Fale com especialistas",
  pillarsEyebrow: "Nossos diferenciais",
  pillarsHeadline: "Soluções financeiras sofisticadas com atendimento próximo e personalizado",
  pillars: [
    {
      icon: "trendingUp" as const,
      title: "Solução de investimentos",
      description:
        "Acesso privilegiado a produtos de banco de atacado via XP Inc., personalizados para empresas.",
    },
    {
      icon: "building" as const,
      title: "Atendimento Corporativo",
      description:
        "Expertise em atendimento empresarial com décadas de experiência nos principais bancos do país.",
    },
    {
      icon: "globe" as const,
      title: "Mercado Financeiro",
      description:
        "Conhecimento profundo do mercado para conectar sua empresa às melhores oportunidades.",
    },
    {
      icon: "network" as const,
      title: "Networking Qualificado",
      description:
        "Conexões estratégicas unindo capital, oportunidades e crescimento sustentável.",
    },
  ],
};

export const sobre = {
  eyebrow: "Sobre",
  headline: "Sobre a Westlink Capital",
  intro:
    "Conectando o Interior ao Centro do Mercado Financeiro. Somos o primeiro escritório credenciado ao grupo XP com o DNA PJ, especializado no atendimento a empresas sediado em São José do Rio Preto.",
  body: [
    "A Westlink Capital nasce com o propósito de aproximar o empresariado do Noroeste Paulista das mais sofisticadas soluções do mercado financeiro nacional, combinando conhecimento profundo de mercado, acesso privilegiado a produtos de banco de atacado via XP Inc., e um relacionamento próximo e personalizado com cada cliente.",
    "Mais do que intermediar operações, atuamos como conectores estratégicos, unindo capital, oportunidades e networking qualificado para impulsionar o crescimento sustentável das empresas.",
    "Nosso time reúne décadas de experiência no atendimento Corporate dos principais bancos do país, traduzindo solidez técnica e compromisso de longo prazo em cada solução.",
  ],
  team: {
    eyebrow: "Equipe",
    // Nota: os nomes vêm do site original (página Sobre). O pareamento
    // nome ↔ foto não estava explícito na página de origem — ordem abaixo
    // é provisória e deve ser confirmada com o cliente antes de publicar.
    members: [
      {
        name: "Guilherme Datorre",
        role: "Sócio-Fundador",
        photo: "/images/team/equipe-01.jpg",
      },
      {
        name: "Edison Brandt",
        role: "Sócio-Fundador",
        photo: "/images/team/equipe-edson.jpg",
      },
      {
        name: "Marcelo Bastos",
        role: "Sócio-Fundador",
        photo: "/images/team/equipe-02.jpg",
      },
      {
        name: "Lucas Bezerra",
        role: "Assessor de Investimentos",
        photo: "/images/team/equipe-04.jpg",
      },
    ],
  },
  purpose: {
    eyebrow: "Nosso propósito",
    headline:
      "Potencializar o crescimento das empresas com inteligência financeira, relacionamento e propósito.",
    body: [
      "Acreditamos que cada empresa tem um ritmo, uma história e um desafio único. Por isso, atuamos lado a lado com nossos clientes, estruturando operações financeiras que otimizem a gestão de capital, ampliem conexões estratégicas e sustentem o crescimento de forma consistente.",
      "Com acesso direto à plataforma da XP Inc., oferecemos soluções de banco de atacado com eficiência e foco absoluto no que realmente importa: gerar valor real.",
    ],
  },
  concept: {
    eyebrow: "Conceito",
    headline: "Um novo conceito em soluções corporativas",
    intro:
      "A Westlink Capital chega para oferecer um modelo de assessoria especializado para empresas, na cidade de São José do Rio Preto. Nosso modelo de atendimento é personalizado, estratégico e independente, construído sobre o entendimento profundo das particularidades e do estágio de desenvolvimento de cada companhia. Mais do que assessores, atuamos como parceiros de crescimento, comprometidos em potencializar resultados e entregar soluções financeiras sob medida, alinhadas à realidade e aos objetivos de cada negócio.",
    segments: [
      {
        icon: "briefcase" as const,
        title: "Pequenas Empresas",
        subtitle: "Faturamento até R$ 50 milhões",
        description:
          "Soluções para alavancar negócios e promover o crescimento econômico com segurança e eficiência.",
      },
      {
        icon: "barChart" as const,
        title: "Médias Empresas — Middle Market",
        subtitle: "Faturamento entre R$ 50 e 500 milhões",
        description:
          "Compreendemos os desafios de expansão, capital de giro e estruturação de dívidas, entregando alternativas inovadoras de crédito e investimento.",
      },
      {
        icon: "building" as const,
        title: "Grandes Empresas — Corporate Banking",
        subtitle: "Faturamento acima de R$ 500 milhões",
        description:
          "Atendimento consultivo e acesso a um portfólio completo de produtos para gestão de capital, operações estruturadas e assessoria financeira estratégica.",
      },
    ],
  },
};

export const solucoes = {
  eyebrow: "Soluções",
  headline: "Um ecossistema completo para expansão corporativa e otimização de capital",
  frentes: {
    eyebrow: "Frentes de negócio · Ecossistema XP",
    headline: "Nossa atuação vai além do convencional",
    intro:
      "Oferecemos um ecossistema completo de soluções voltado à expansão corporativa e otimização de capital.",
    items: [
      {
        icon: "shield" as const,
        title: "Private B2B",
        description:
          "Atendimento exclusivo e personalizado, inspirado no modelo de Private Banking.",
      },
      {
        icon: "barChart" as const,
        title: "Mercado de Capitais B2B",
        description:
          "Assessoria estratégica e acesso a produtos sofisticados para estruturação de capital, emissão de dívidas e alternativas de funding.",
      },
      {
        icon: "briefcase" as const,
        title: "Empresas B2B",
        description:
          "Modelos inovadores para geração de negócios entre companhias e investidores.",
      },
    ],
  },
  financeiras: {
    eyebrow: "Soluções financeiras · Ecossistema XP",
    headline: "Um ecossistema robusto para novos patamares",
    intro:
      "Com assessoria dedicada, potencializamos o desempenho corporativo em cada etapa da operação.",
    items: [
      {
        icon: "trendingUp" as const,
        title: "Investimentos",
        description:
          "Plataforma completa e diversificada de ativos, com assessoria especializada.",
      },
      {
        icon: "creditCard" as const,
        title: "Crédito",
        description:
          "Linhas competitivas e suporte operacional em todas as etapas do processo.",
      },
      {
        icon: "barChart" as const,
        title: "Mercado de Capitais",
        description:
          "Estruturação de capital e assessoria financeira para expansão e reestruturação.",
      },
      {
        icon: "exchange" as const,
        title: "Câmbio e Derivativos",
        description:
          "Soluções para remessas internacionais e proteção contra oscilações cambiais.",
      },
      {
        icon: "shieldCheck" as const,
        title: "Seguro Garantia",
        description:
          "Produtos para otimizar obrigações contratuais e fortalecer a governança da empresa.",
      },
    ],
  },
};

export const estrategiaResultados = {
  estrategia: {
    eyebrow: "Estratégia",
    headline: "Onde a sinergia se torna estratégia",
    intro:
      "Evoluímos junto com cada empresa, em um relacionamento pautado pela transparência, consistência e alinhamento total de interesses.",
    // Esta é uma sequência real de processo — numeração faz sentido aqui.
    steps: [
      {
        title: "Diagnóstico",
        description: "do momento e desafios da empresa",
      },
      {
        title: "Mapeamento",
        description: "das soluções financeiras adequadas ao perfil",
      },
      {
        title: "Apresentação",
        description: "das alternativas de produtos e estratégias",
      },
      {
        title: "Implementação",
        description: "com suporte operacional completo",
      },
      {
        title: "Acompanhamento",
        description: "contínuo e identificação de novas oportunidades",
      },
    ],
  },
  resultados: {
    eyebrow: "Resultados",
    headline: "Excelência que se traduz em resultados",
    intro:
      "Convergimos expertise financeira com visão estratégica de negócio para entregar valor real e duradouro.",
    items: [
      {
        icon: "target" as const,
        title: "Atendimento orientado a objetivos",
        description:
          "Nosso foco está nos resultados e na realidade de cada cliente, com soluções que geram impacto econômico e crescimento sustentável.",
      },
      {
        icon: "layers" as const,
        title: "Plataforma multiprodutos",
        description:
          "Diversidade de produtos financeiros reunidos em um único ecossistema de assessoria.",
      },
      {
        icon: "users" as const,
        title: "Profissionais com experiência Corporate",
        description:
          "Time formado por especialistas com trajetória em instituições de referência no mercado nacional.",
      },
      {
        icon: "zap" as const,
        title: "Agilidade e presença em todas as etapas",
        description:
          "Acompanhamos o cliente desde a concepção até a execução de cada operação, assegurando eficiência e rapidez.",
      },
    ],
    closing:
      "Nosso compromisso é com a solidez, o crescimento e a perenidade dos nossos clientes. Com profissionais altamente qualificados e visão de longo prazo, a Westlink Capital consolida-se como referência em assessoria corporativa no interior paulista, conectando empresas a soluções financeiras que transformam realidades.",
  },
};

export const contato = {
  eyebrow: "Contato",
  headline: "Vamos conversar sobre o próximo passo da sua empresa",
  intro:
    "Fale com um de nossos especialistas e entenda como levar sua empresa ao centro do mercado financeiro.",
};
