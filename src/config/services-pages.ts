import type { Metadata } from "next";
import {
  COMMERCIAL_PAYMENT_HIGHLIGHT,
  DIFFERENTIALS,
  SERVICES,
  SITE_URL,
  type DifferentialItem,
  type ProcessStep,
  type ServiceItem,
  type ServicePricing,
} from "./site";

export type ServicePageSlug =
  | "criacao-landing-pages"
  | "criacao-de-sites"
  | "desenvolvimento-de-aplicativos"
  | "softwares-personalizados"
  | "automacao-empresarial";

export interface ServiceProblemItem {
  title: string;
  description: string;
}

export interface ServiceBenefitItem {
  title: string;
  description: string;
  items: string[];
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: ServicePageSlug;
  navLabel: string;
  accent: ServiceItem["accent"];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    h1: string;
    h1Highlight: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    whatsappMessage: string;
    keyDeliverablesTitle: string;
    keyDeliverables: string[];
    customQuoteCallout?: {
      badge: string;
      title: string;
      description: string;
    };
  };
  pricing?: ServicePricing;
  problemsSection: {
    badge: string;
    heading: string;
    description: string;
    problems: ServiceProblemItem[];
  };
  solutionsSection: {
    badge: string;
    heading: string;
    description: string;
    benefits: ServiceBenefitItem[];
  };
  processSection: {
    badge: string;
    heading: string;
    description: string;
    steps: ProcessStep[];
  };
  differentialsSection: {
    badge: string;
    heading: string;
    description: string;
    items: DifferentialItem[];
  };
  faqSection: {
    badge: string;
    heading: string;
    description: string;
    faqs: ServiceFaqItem[];
  };
  finalCta: {
    badge: string;
    heading: string;
    description: string;
    ctaLabel: string;
    whatsappMessage: string;
  };
}

function getPricingByServiceId(id: string): ServicePricing | undefined {
  return SERVICES.find((s) => s.id === id)?.pricing;
}

export const SERVICE_PAGES: Record<ServicePageSlug, ServicePageData> = {
  "criacao-landing-pages": {
    slug: "criacao-landing-pages",
    navLabel: "Criação de Landing Pages",
    accent: "blue",
    seo: {
      title: "Criação de Landing Pages Profissionais | NEXZ DIGITAL",
      description:
        "Criação de landing pages profissionais de alta conversão para empresas e autônomos. Design exclusivo, carregamento rápido e contato direto no WhatsApp.",
      keywords: [
        "criação de landing pages",
        "landing page profissional",
        "página de vendas",
        "landing page de alta conversão",
        "desenvolvimento de landing page",
        "NEXZ DIGITAL",
      ],
    },
    hero: {
      badge: "Presença & Conversão Comercial",
      h1: "Criação de Landing Pages Profissionais para",
      h1Highlight: "gerar mais orçamentos e clientes",
      subtitle:
        "Transforme visitantes em contatos comerciais qualificados com uma página rápida, persuasiva e projetada sob medida para o seu negócio.",
      description:
        "Na NEXZ DIGITAL, desenvolvemos landing pages com arquitetura estratégica de conversão, visual moderno e integração direta com o seu WhatsApp. Ideal para campanhas de anúncios, lançamento de serviços e posicionamento digital de empresas e profissionais autônomos.",
      ctaLabel: "Solicitar Orçamento de Landing Page",
      whatsappMessage:
        "Olá! Vim pela página de Criação de Landing Pages da NEXZ DIGITAL e gostaria de solicitar um orçamento para minha empresa.",
      keyDeliverablesTitle: "O que sua Landing Page inclui:",
      keyDeliverables: [
        "Design exclusivo alinhado à identidade visual da sua marca",
        "Estrutura persuasiva com foco em captação de contatos",
        "Botões estratégicos integrados diretamente ao seu WhatsApp",
        "Layout 100% responsivo para celulares, tablets e computadores",
        "Código otimizado para carregamento rápido e SEO técnico",
      ],
    },
    pricing: getPricingByServiceId("landing-pages"),
    problemsSection: {
      badge: "Desafios Comerciais",
      heading: "Por que muitas empresas perdem clientes no ambiente digital?",
      description:
        "Direcionar clientes em potencial apenas para redes sociais ou páginas lentas e genéricas reduz drasticamente as chances de fechar novos negócios.",
      problems: [
        {
          title: "Visitantes que saem sem entrar em contato",
          description:
            "Páginas confusas, sem hierarquia de informações e sem chamadas claras para ação fazem o visitante perder o interesse antes de pedir um orçamento.",
        },
        {
          title: "Baixo aproveitamento em campanhas de anúncios",
          description:
            "Investir em tráfego no Google ou redes sociais sem uma página de destino preparada para conversão desperdiça verba publicitária.",
        },
        {
          title: "Lentidão e má experiência no celular",
          description:
            "A maior parte dos acessos ocorre pelo smartphone. Páginas pesadas ou desalinhadas no mobile passam impressão de amadorismo e afastam clientes.",
        },
        {
          title: "Falta de credibilidade profissional",
          description:
            "Depender exclusivamente de perfis em redes sociais limita a apresentação dos seus diferenciais e dificulta transmitir solidez no mercado.",
        },
      ],
    },
    solutionsSection: {
      badge: "Solução & Benefícios",
      heading: "Como nossa Landing Page impulsiona a captação de clientes",
      description:
        "Combinamos design de alto padrão, comunicação orientada a negócios e engenharia web moderna para entregar uma página pronta para converter.",
      benefits: [
        {
          title: "Arquitetura Pensada para Conversão",
          description:
            "Organizamos títulos, argumentos comerciais, blocos de serviços e botões de ação em uma sequência lógica que conduz o visitante ao contato.",
          items: [
            "Dobra principal clara com proposta de valor imediata",
            "Apresentação objetiva dos seus serviços e diferenciais",
            "Chamadas de WhatsApp distribuídas em pontos estratégicos",
          ],
        },
        {
          title: "Alta Velocidade e Performance Mobile",
          description:
            "Desenvolvemos com tecnologia moderna (Next.js e React), garantindo carregamento ágil e navegação fluida em qualquer tela.",
          items: [
            "Imagens otimizadas e código limpo sem peso desnecessário",
            "Leitura confortável e botões fáceis de acionar no celular",
            "Excelente experiência tanto em redes móveis quanto Wi-Fi",
          ],
        },
        {
          title: "Base Técnica de SEO e Compartilhamento",
          description:
            "Sua página nasce preparada para ser compreendida pelo Google e exibir pré-visualizações profissionais quando compartilhada no WhatsApp.",
          items: [
            "Títulos semânticos (H1, H2, H3) e metadados configurados",
            "Open Graph configurado para compartilhamento de links",
            "Estrutura técnica limpa e indexável pelos buscadores",
          ],
        },
      ],
    },
    processSection: {
      badge: "Como Funciona",
      heading: "Do alinhamento inicial à sua Landing Page publicada",
      description:
        "Um processo claro e direto para entregar sua página profissional sem burocracia.",
      steps: [
        {
          step: "01",
          title: "Briefing e Objetivo Comercial",
          description:
            "Entendemos seu público-alvo, os serviços que você deseja destacar e a principal ação que o visitante deve realizar na página.",
        },
        {
          step: "02",
          title: "Estruturação e Design Exclusivo",
          description:
            "Organizamos os argumentos comerciais e desenhamos o layout completo respeitando as cores e o posicionamento da sua marca.",
        },
        {
          step: "03",
          title: "Desenvolvimento, SEO e WhatsApp",
          description:
            "Programamos a landing page com foco em velocidade, responsividade mobile, metadados de busca e mensagens personalizadas no WhatsApp.",
        },
        {
          step: "04",
          title: "Revisão e Publicação Oficial",
          description:
            "Validamos cada detalhe junto com você e realizamos a publicação no seu domínio oficial para começar a receber contatos.",
        },
      ],
    },
    differentialsSection: {
      badge: "Diferenciais NEXZ DIGITAL",
      heading: "Por que desenvolver sua Landing Page com a NEXZ DIGITAL?",
      description:
        "Não utilizamos templates lentos ou engessados. Projetamos páginas profissionais feitas para destacar o seu negócio.",
      items: DIFFERENTIALS,
    },
    faqSection: {
      badge: "Dúvidas Frequentes",
      heading: "Perguntas frequentes sobre Criação de Landing Pages",
      description:
        "Confira as respostas para as principais dúvidas antes de solicitar sua proposta.",
      faqs: [
        {
          question: "Qual a diferença entre uma landing page e um site institucional completo?",
          answer:
            "A landing page é uma página única e altamente focada em um objetivo específico — como gerar contatos no WhatsApp ou apresentar um serviço para campanhas de anúncios. Já o site institucional pode conter múltiplas páginas e áreas de conteúdo mais extensas.",
        },
        {
          question: "A landing page funciona bem em celulares?",
          answer:
            "Sim. Todas as nossas landing pages são desenvolvidas com abordagem responsiva, garantindo leitura clara, carregamento rápido e botões confortáveis em smartphones, tablets e computadores.",
        },
        {
          question: "Os contatos dos clientes chegam diretamente no meu WhatsApp?",
          answer:
            "Sim. Configuramos os botões de ação com links diretos e mensagens personalizadas para que você identifique imediatamente o interesse do visitante ao receber a mensagem no WhatsApp.",
        },
        {
          question: "Como funcionam o pagamento e a manutenção após a entrega?",
          answer:
            "O desenvolvimento da landing page conta com condições facilitadas a partir de R$ 99,70 por parcela, com possibilidade de parcelamento em até 10x no cartão de crédito conforme proposta comercial. Também oferecemos planos mensais opcionais de manutenção para manter sua página sempre atualizada.",
        },
      ],
    },
    finalCta: {
      badge: "Pronto para Captar Mais Clientes?",
      heading: "Solicite o orçamento da sua Landing Page Profissional",
      description:
        "Converse agora pelo WhatsApp com a NEXZ DIGITAL, apresente o seu negócio e receba uma proposta sob medida com condições facilitadas em até 10x no cartão.",
      ctaLabel: "Quero Criar Minha Landing Page",
      whatsappMessage:
        "Olá! Vim pela página de Criação de Landing Pages da NEXZ DIGITAL e quero solicitar um orçamento para o meu negócio.",
    },
  },

  "criacao-de-sites": {
    slug: "criacao-de-sites",
    navLabel: "Criação de Sites Profissionais",
    accent: "cyan",
    seo: {
      title: "Criação de Sites Profissionais para Empresas | NEXZ DIGITAL",
      description:
        "Criação de sites profissionais e institucionais sob medida para empresas e profissionais. Estrutura moderna, responsiva e otimizada para o Google.",
      keywords: [
        "criação de sites",
        "criação de sites profissionais",
        "desenvolvimento de sites",
        "site institucional para empresas",
        "empresa de criação de sites",
        "NEXZ DIGITAL",
      ],
    },
    hero: {
      badge: "Autoridade & Presença Institucional",
      h1: "Criação de Sites Profissionais para",
      h1Highlight: "fortalecer sua marca e atrair clientes",
      subtitle:
        "Posicione sua empresa na internet com um site institucional moderno, rápido, responsivo e estruturado para ser encontrado no Google.",
      description:
        "Desenvolvemos sites profissionais sob medida para empresas, clínicas, escritórios e prestadores de serviços que buscam consolidar sua reputação digital, apresentar seu portfólio completo de soluções e abrir um canal permanente de captação de negócios.",
      ctaLabel: "Solicitar Orçamento de Site Profissional",
      whatsappMessage:
        "Olá! Vim pela página de Criação de Sites Profissionais da NEXZ DIGITAL e gostaria de solicitar um orçamento personalizado para minha empresa.",
      keyDeliverablesTitle: "Estrutura do seu Site Profissional:",
      keyDeliverables: [
        "Arquitetura personalizada para apresentar sua empresa e serviços",
        "Design institucional moderno, exclusivo e alinhado à sua marca",
        "Estrutura completa de SEO técnico para indexação no Google",
        "Navegação responsiva e intuitiva em celulares e computadores",
        "Integração direta com WhatsApp e canais oficiais de atendimento",
      ],
      customQuoteCallout: {
        badge: "Orçamento Sob Medida",
        title: "Proposta personalizada conforme a estrutura do seu site",
        description:
          "Avaliamos a quantidade de páginas, seções e recursos necessários para o seu negócio e preparamos um orçamento transparente, com possibilidade de parcelamento em até 10x no cartão de crédito.",
      },
    },
    pricing: undefined,
    problemsSection: {
      badge: "Desafios de Posicionamento",
      heading: "O que acontece quando sua empresa não possui um site profissional?",
      description:
        "Clientes pesquisam no Google antes de contratar. Quando não encontram um site confiável ou se deparam com páginas desatualizadas, procuram o concorrente.",
      problems: [
        {
          title: "Invisibilidade nas buscas orgânicas do Google",
          description:
            "Sem um site estruturado tecnicamente com páginas bem definidas e metadados corretos, sua empresa deixa de ser encontrada por quem já está procurando pelos seus serviços.",
        },
        {
          title: "Apresentação incompleta dos seus serviços",
          description:
            "Empresas com múltiplos serviços ou áreas de atuação precisam de um espaço organizado para explicar cada solução com clareza e profundidade.",
        },
        {
          title: "Sites antigos que não funcionam no celular",
          description:
            "Layouts ultrapassados, lentos ou que quebram na tela do smartphone prejudicam a percepção de valor da sua marca e aumentam a taxa de rejeição.",
        },
        {
          title: "Dificuldade para converter visitantes em contatos",
          description:
            "Muitos sites funcionam apenas como um cartão de visitas estático, sem conduzir o visitante de forma natural para o atendimento comercial no WhatsApp.",
        },
      ],
    },
    solutionsSection: {
      badge: "Solução Institucional Completa",
      heading: "Um site projetado para transmitir solidez e gerar negócios",
      description:
        "Construímos a base digital da sua empresa unindo estética corporativa refinada, desempenho técnico e foco comercial.",
      benefits: [
        {
          title: "Identidade Visual e Credibilidade Corporativa",
          description:
            "Projetamos cada seção para refletir o profissionalismo da sua empresa, organizando sua história, diferenciais e áreas de atuação.",
          items: [
            "Layout personalizado de acordo com o segmento da sua empresa",
            "Apresentação clara de serviços, diferenciais e processo de atendimento",
            "Comunicação visual limpa, moderna e de fácil leitura",
          ],
        },
        {
          title: "SEO Técnico e Estrutura para o Google",
          description:
            "Desenvolvemos seu site seguindo as melhores práticas de indexação para ampliar sua visibilidade orgânica nas pesquisas.",
          items: [
            "Hierarquia semântica de títulos (H1, H2, H3) e URLs amigáveis",
            "Configuração de sitemap.xml, robots.txt, tags canônicas e Schema.org",
            "Carregamento otimizado para favorecer a experiência do usuário",
          ],
        },
        {
          title: "Foco em Atendimento e Geração de Orçamentos",
          description:
            "Seu site trabalha como um canal comercial ativo 24 horas por dia, facilitando o contato imediato da sua audiência.",
          items: [
            "Botões de WhatsApp com mensagens contextualizadas por assunto",
            "Integração com redes sociais oficiais e canais de contato",
            "Navegação fluida em qualquer dispositivo móvel ou desktop",
          ],
        },
      ],
    },
    processSection: {
      badge: "Metodologia de Desenvolvimento",
      heading: "Como criamos o site profissional da sua empresa",
      description:
        "Acompanhamento próximo do planejamento inicial até a publicação no domínio oficial.",
      steps: [
        {
          step: "01",
          title: "Diagnóstico e Arquitetura de Conteúdo",
          description:
            "Mapeamos as páginas, seções e informações essenciais para apresentar sua empresa e seus serviços com clareza.",
        },
        {
          step: "02",
          title: "Proposta Comercial e Planejamento Visual",
          description:
            "Definimos o escopo completo do projeto, o cronograma e o design institucional alinhado à identidade do seu negócio.",
        },
        {
          step: "03",
          title: "Desenvolvimento Web e Otimização SEO",
          description:
            "Codificamos o site com tecnologias modernas, garantindo alta velocidade, responsividade e configuração completa para o Google.",
        },
        {
          step: "04",
          title: "Validação Final e Publicação",
          description:
            "Realizamos todos os testes de navegação e publicamos o site no seu domínio oficial, pronto para receber clientes.",
        },
      ],
    },
    differentialsSection: {
      badge: "Por Que a NEXZ DIGITAL",
      heading: "Engenharia moderna e visão comercial para o seu site",
      description:
        "Entregamos sites rápidos, seguros e construídos sob medida para a realidade do seu negócio.",
      items: DIFFERENTIALS,
    },
    faqSection: {
      badge: "Dúvidas Frequentes",
      heading: "Perguntas frequentes sobre Criação de Sites Profissionais",
      description:
        "Esclareça suas principais dúvidas sobre o desenvolvimento do site da sua empresa.",
      faqs: [
        {
          question: "Como é definido o valor para a criação de um site profissional?",
          answer:
            "O investimento varia conforme a estrutura necessária para o seu negócio (quantidade de páginas, seções específicas e integrações). Após uma conversa rápida pelo WhatsApp, elaboramos uma proposta personalizada e transparente, com opção de parcelamento em até 10x no cartão de crédito.",
        },
        {
          question: "O site será preparado para aparecer no Google?",
          answer:
            "Sim. Aplicamos boas práticas de SEO técnico desde a construção do código, incluindo títulos semânticos, meta descriptions, URLs canônicas, dados estruturados (Schema.org), sitemap.xml e alta velocidade de carregamento.",
        },
        {
          question: "Meu site funcionará perfeitamente em celulares e tablets?",
          answer:
            "Sim. Todo o layout é projetado de forma responsiva para se adaptar automaticamente a smartphones, tablets, notebooks e monitores de alta resolução.",
        },
        {
          question: "A NEXZ DIGITAL oferece suporte e manutenção após o site ficar pronto?",
          answer:
            "Sim. Além da entrega completa do projeto, contamos com planos mensais opcionais de manutenção para manter seu site sempre monitorado, seguro e atualizado.",
        },
      ],
    },
    finalCta: {
      badge: "Solicite Sua Proposta Personalizada",
      heading: "Vamos criar o novo site profissional da sua empresa?",
      description:
        "Entre em contato pelo WhatsApp para apresentar a sua necessidade e receber um orçamento sob medida, com parcelamento facilitado em até 10x no cartão.",
      ctaLabel: "Solicitar Orçamento para Meu Site",
      whatsappMessage:
        "Olá! Vim pela página de Criação de Sites Profissionais da NEXZ DIGITAL e quero solicitar um orçamento personalizado.",
    },
  },

  "desenvolvimento-de-aplicativos": {
    slug: "desenvolvimento-de-aplicativos",
    navLabel: "Desenvolvimento de Aplicativos",
    accent: "cyan",
    seo: {
      title: "Desenvolvimento de Aplicativos Sob Medida | NEXZ DIGITAL",
      description:
        "Desenvolvimento de aplicativos mobile e web apps sob medida para empresas e projetos digitais. Interface intuitiva, performance e integração com sistemas.",
      keywords: [
        "desenvolvimento de aplicativos",
        "criação de aplicativos",
        "aplicativos sob medida",
        "desenvolvimento de app para empresas",
        "web app personalizado",
        "NEXZ DIGITAL",
      ],
    },
    hero: {
      badge: "Mobilidade & Experiência Digital",
      h1: "Desenvolvimento de Aplicativos Sob Medida para",
      h1Highlight: "conectar clientes e escalar operações",
      subtitle:
        "Transforme sua ideia ou necessidade operacional em um aplicativo moderno, fluido, seguro e preparado para crescer junto com o seu negócio.",
      description:
        "Na NEXZ DIGITAL, projetamos e desenvolvemos aplicativos focados na experiência do usuário, estabilidade e desempenho. Seja para lançar um novo produto digital no mercado, criar um canal exclusivo de relacionamento com clientes ou apoiar equipes em campo.",
      ctaLabel: "Solicitar Orçamento de Aplicativo",
      whatsappMessage:
        "Olá! Vim pela página de Desenvolvimento de Aplicativos da NEXZ DIGITAL e tenho interesse em desenvolver um aplicativo. Gostaria de apresentar minha ideia e solicitar um orçamento.",
      keyDeliverablesTitle: "Pilares do nosso Desenvolvimento de Apps:",
      keyDeliverables: [
        "Interface moderna (UI/UX) intuitiva e fácil de utilizar",
        "Arquitetura escalável e focada em estabilidade e rapidez",
        "Autenticação segura, perfis de usuário e regras de negócio",
        "Integração com bancos de dados, painéis web e APIs externas",
        "Acompanhamento desde a concepção técnica até a publicação",
      ],
    },
    pricing: getPricingByServiceId("aplicativos"),
    problemsSection: {
      badge: "Gargalos de Experiência e Operação",
      heading: "Quais problemas um aplicativo sob medida ajuda a resolver?",
      description:
        "Quando processos dependem de trocas manuais de mensagens ou ferramentas improvisadas, o crescimento do negócio fica limitado.",
      problems: [
        {
          title: "Experiência fragmentada para o seu cliente",
          description:
            "Sem um ambiente digital próprio e organizado, o cliente encontra dificuldade para solicitar serviços, acompanhar pedidos ou acessar informações importantes.",
        },
        {
          title: "Falta de mobilidade para equipes e operações",
          description:
            "Profissionais em campo ou operações externas perdem produtividade quando não conseguem registrar dados e consultar informações diretamente pelo celular.",
        },
        {
          title: "Ideias de negócios digitais que não saem do papel",
          description:
            "Empreendedores muitas vezes adiam o lançamento de um produto digital por falta de um parceiro técnico que estruture o aplicativo com clareza e viabilidade.",
        },
        {
          title: "Soluções prontas que não atendem sua regra de negócio",
          description:
            "Aplicativos genéricos de prateleira cobram mensalidades por usuário e frequentemente não se adaptam ao fluxo real da sua empresa.",
        },
      ],
    },
    solutionsSection: {
      badge: "Soluções Mobile & Web Apps",
      heading: "Aplicativos projetados com foco em usabilidade e resultado",
      description:
        "Unimos design centrado no usuário e engenharia de software sólida para entregar aplicações confiáveis.",
      benefits: [
        {
          title: "Design Intuitivo e Navegação Fluida",
          description:
            "Desenhamos telas limpas e objetivas para que seus clientes ou colaboradores utilizem o aplicativo sem precisar de treinamentos complexos.",
          items: [
            "Fluxos de telas planejados para reduzir cliques desnecessários",
            "Identidade visual personalizada com as cores da sua marca",
            "Feedback visual claro em cada ação realizada pelo usuário",
          ],
        },
        {
          title: "Integração Completa e Gestão Centralizada",
          description:
            "Seu aplicativo pode operar conectado a um painel administrativo e a serviços externos essenciais para a sua operação.",
          items: [
            "Sincronização de dados em tempo real com banco de dados seguro",
            "Conexão com APIs, notificações e serviços de terceiros",
            "Controle de acessos e permissões por perfil de usuário",
          ],
        },
        {
          title: "Arquitetura Preparada para Evolução",
          description:
            "Construímos o código com boas práticas e organização modular, facilitando a adição de novas funcionalidades conforme sua empresa cresce.",
          items: [
            "Desenvolvimento estruturado desde o MVP até versões completas",
            "Foco em performance, segurança da informação e estabilidade",
            "Opções de planos mensais de manutenção para suporte contínuo",
          ],
        },
      ],
    },
    processSection: {
      badge: "Etapas do Projeto",
      heading: "Como transformamos sua ideia em um aplicativo funcional",
      description:
        "Planejamento técnico transparente para você acompanhar cada avanço do desenvolvimento.",
      steps: [
        {
          step: "01",
          title: "Levantamento de Requisitos e Escopo",
          description:
            "Conversamos sobre a sua ideia, mapeamos os perfis de usuários, as funcionalidades principais e os objetivos do aplicativo.",
        },
        {
          step: "02",
          title: "Arquitetura e Prototipação das Telas",
          description:
            "Definimos a jornada do usuário, a estrutura de dados e apresentamos a proposta comercial detalhada do projeto.",
        },
        {
          step: "03",
          title: "Desenvolvimento, Integrações e Testes",
          description:
            "Programamos a interface e o back-end da aplicação, realizando baterias de testes de usabilidade, segurança e desempenho.",
        },
        {
          step: "04",
          title: "Implantação e Suporte Evolutivo",
          description:
            "Entregamos o aplicativo pronto para operação, orientamos sua equipe e oferecemos acompanhamento técnico contínuo.",
        },
      ],
    },
    differentialsSection: {
      badge: "Diferenciais NEXZ DIGITAL",
      heading: "Segurança técnica para tirar seu aplicativo do papel",
      description:
        "Comunicação direta, código de qualidade e visão prática para viabilizar o seu projeto mobile ou web app.",
      items: DIFFERENTIALS,
    },
    faqSection: {
      badge: "Dúvidas Frequentes",
      heading: "Perguntas frequentes sobre Desenvolvimento de Aplicativos",
      description:
        "Tire suas dúvidas sobre como funciona a criação de um aplicativo sob medida.",
      faqs: [
        {
          question: "Ainda tenho apenas a ideia do aplicativo. A NEXZ DIGITAL ajuda a estruturar o projeto?",
          answer:
            "Sim. Na etapa inicial de diagnóstico, ajudamos você a organizar as funcionalidades essenciais (escopo inicial / MVP) para que o projeto seja viável, objetivo e alinhado ao seu orçamento.",
        },
        {
          question: "Qual o investimento para desenvolver um aplicativo?",
          answer:
            "Nossos projetos de aplicativos contam com condições a partir de R$ 299,70 por parcela, com possibilidade de parcelamento em até 10x no cartão de crédito. O valor total é definido na proposta comercial conforme as funcionalidades do seu projeto.",
        },
        {
          question: "O aplicativo pode ter um painel administrativo para minha equipe gerenciar os dados?",
          answer:
            "Sim. Podemos desenvolver tanto a interface utilizada pelos usuários finais quanto o painel de gestão para você administrar cadastros, solicitações e informações.",
        },
        {
          question: "Existe suporte técnico após a entrega do aplicativo?",
          answer:
            "Sim. Contamos com plano mensal específico de manutenção para Aplicativos (a partir de R$ 147,00/mês) para garantir monitoramento, estabilidade e suporte recorrente.",
        },
      ],
    },
    finalCta: {
      badge: "Tire Seu Aplicativo do Papel",
      heading: "Apresente sua ideia e solicite um orçamento personalizado",
      description:
        "Fale diretamente com a equipe da NEXZ DIGITAL pelo WhatsApp e descubra como desenvolver seu aplicativo com parcelamento em até 10x no cartão.",
      ctaLabel: "Quero Conversar Sobre Meu Aplicativo",
      whatsappMessage:
        "Olá! Vim pela página de Desenvolvimento de Aplicativos da NEXZ DIGITAL e gostaria de apresentar minha ideia e solicitar um orçamento.",
    },
  },

  "softwares-personalizados": {
    slug: "softwares-personalizados",
    navLabel: "Softwares Personalizados",
    accent: "teal",
    seo: {
      title: "Softwares Personalizados e Sistemas Web | NEXZ DIGITAL",
      description:
        "Desenvolvimento de softwares personalizados e sistemas web sob medida para pequenas e médias empresas. Substitua planilhas e organize sua gestão.",
      keywords: [
        "softwares personalizados",
        "desenvolvimento de software sob medida",
        "sistema web personalizado",
        "sistema de gestão sob medida",
        "empresa de desenvolvimento de software",
        "NEXZ DIGITAL",
      ],
    },
    hero: {
      badge: "Gestão, Controle & Produtividade",
      h1: "Softwares Personalizados que se adaptam",
      h1Highlight: "exatamente à rotina da sua empresa",
      subtitle:
        "Substitua planilhas desconectadas e controles manuais por um sistema web desenvolvido exclusivamente para as regras do seu negócio.",
      description:
        "A NEXZ DIGITAL desenvolve sistemas sob medida para empresas que precisam organizar operações, centralizar cadastros, acompanhar indicadores e dar mais agilidade à equipe — sem ficar presas às limitações de softwares genéricos de mercado.",
      ctaLabel: "Solicitar Orçamento de Software",
      whatsappMessage:
        "Olá! Vim pela página de Softwares Personalizados da NEXZ DIGITAL e tenho interesse em desenvolver um sistema sob medida para meu negócio.",
      keyDeliverablesTitle: "O que entregamos no seu Sistema Sob Medida:",
      keyDeliverables: [
        "Mapeamento fiel dos fluxos e regras de negócio da sua operação",
        "Painéis administrativos claros, filtros rápidos e relatórios visuais",
        "Controle de usuários, níveis de permissão e histórico de ações",
        "Acesso seguro via navegador em computadores, tablets e celulares",
        "Arquitetura preparada para crescer e receber novos módulos",
      ],
    },
    pricing: getPricingByServiceId("softwares"),
    problemsSection: {
      badge: "Desafios Operacionais",
      heading: "Sinais de que sua empresa precisa de um software personalizado",
      description:
        "Conforme o volume de clientes e demandas aumenta, controles improvisados começam a gerar retrabalho, erros e perda de informações.",
      problems: [
        {
          title: "Excesso de planilhas e informações descentralizadas",
          description:
            "Dados espalhados em várias planilhas, mensagens de WhatsApp e anotações dificultam encontrar informações rápidas e causam falhas de comunicação.",
        },
        {
          title: "Sistemas prontos que não atendem a sua rotina",
          description:
            "Softwares de prateleira muitas vezes trazem dezenas de telas que você não usa, mas deixam faltar exatamente o controle específico que sua operação exige.",
        },
        {
          title: "Falta de visão clara sobre o andamento do negócio",
          description:
            "Sem um painel centralizado, o gestor gasta horas consolidando números manualmente para entender o status de pedidos, atendimentos ou serviços.",
        },
        {
          title: "Risco de perda de dados e falta de controle de acesso",
          description:
            "Planilhas compartilhadas permitem edições acidentais ou exclusão de registros importantes sem rastreabilidade de quem realizou cada alteração.",
        },
      ],
    },
    solutionsSection: {
      badge: "Sistemas Web Sob Medida",
      heading: "Como um software personalizado transforma sua operação",
      description:
        "Projetamos ferramentas internas e portais web pensados para simplificar o trabalho diário da sua equipe.",
      benefits: [
        {
          title: "Centralização e Organização de Processos",
          description:
            "Reúna cadastros, acompanhamentos de serviços, status de demandas e documentos em um único ambiente seguro e estruturado.",
          items: [
            "Telas desenhadas exatamente com os campos que sua empresa utiliza",
            "Busca rápida e filtros inteligentes para localizar registros em segundos",
            "Padronização do fluxo de trabalho entre todos os colaboradores",
          ],
        },
        {
          title: "Segurança, Controle de Acessos e Mobilidade",
          description:
            "Defina o que cada perfil de usuário pode visualizar ou editar, acessando o sistema de qualquer lugar pelo navegador.",
          items: [
            "Login individual com níveis de permissão personalizados",
            "Interface responsiva que funciona no computador do escritório ou no celular",
            "Boas práticas de segurança e proteção das informações do negócio",
          ],
        },
        {
          title: "Liberdade para Evoluir o Sistema",
          description:
            "Ao contrário de ferramentas engessadas, um software sob medida acompanha a evolução da sua empresa.",
          items: [
            "Possibilidade de criar novos módulos e integrações no futuro",
            "Painéis de acompanhamento com os indicadores que realmente importam",
            "Suporte técnico e manutenção opcional para sustentação contínua",
          ],
        },
      ],
    },
    processSection: {
      badge: "Etapas de Construção",
      heading: "Como desenvolvemos o software ideal para o seu negócio",
      description:
        "Um método consultivo para traduzir a rotina da sua empresa em um sistema simples de usar.",
      steps: [
        {
          step: "01",
          title: "Imersão e Mapeamento do Fluxo",
          description:
            "Entendemos como sua operação funciona hoje, quais planilhas ou controles você utiliza e quais gargalos precisam ser eliminados.",
        },
        {
          step: "02",
          title: "Especificação Técnica e Proposta",
          description:
            "Estruturamos os módulos, telas e permissões do sistema e apresentamos uma proposta comercial clara e detalhada.",
        },
        {
          step: "03",
          title: "Desenvolvimento Modular e Validação",
          description:
            "Construímos o software com tecnologia web moderna, validando os fluxos para garantir que tudo funcione de forma prática e intuitiva.",
        },
        {
          step: "04",
          title: "Implantação, Orientação e Suporte",
          description:
            "Colocamos o sistema em produção, orientamos sua equipe sobre o uso e disponibilizamos acompanhamento técnico.",
        },
      ],
    },
    differentialsSection: {
      badge: "Diferenciais NEXZ DIGITAL",
      heading: "Tecnologia sob medida sem complexidade desnecessária",
      description:
        "Focamos em criar sistemas diretos ao ponto, fáceis de operar e que geram ganho real de tempo para o seu negócio.",
      items: DIFFERENTIALS,
    },
    faqSection: {
      badge: "Dúvidas Frequentes",
      heading: "Perguntas frequentes sobre Softwares Personalizados",
      description:
        "Entenda como funciona a contratação e o desenvolvimento de um sistema sob medida.",
      faqs: [
        {
          question: "Preciso instalar algum programa nos computadores da empresa?",
          answer:
            "Na maioria dos projetos, desenvolvemos sistemas web em nuvem. Isso significa que você e sua equipe podem acessar o software diretamente pelo navegador (no computador, tablet ou celular), com login e senha seguros, sem complicações de instalação.",
        },
        {
          question: "Qual o valor para desenvolver um software personalizado?",
          answer:
            "O desenvolvimento de softwares personalizados possui condições a partir de R$ 399,70 por parcela, podendo ser parcelado em até 10x no cartão de crédito. O investimento total é dimensionado na proposta comercial de acordo com os módulos necessários.",
        },
        {
          question: "Posso começar com um sistema mais enxuto e adicionar funções depois?",
          answer:
            "Sim! Essa é uma excelente prática. Podemos desenvolver primeiro o núcleo essencial da sua operação e expandir com novos relatórios, integrações ou módulos conforme a sua empresa crescer.",
        },
        {
          question: "Como funciona a manutenção do sistema após a entrega?",
          answer:
            "Oferecemos o plano mensal de sustentação e manutenção para Softwares (a partir de R$ 197,00/mês), garantindo acompanhamento técnico, segurança e suporte contínuo conforme escopo definido em proposta.",
        },
      ],
    },
    finalCta: {
      badge: "Organize e Escale Sua Operação",
      heading: "Vamos conversar sobre o sistema personalizado da sua empresa?",
      description:
        "Explique sua rotina atual pelo WhatsApp e receba uma proposta sob medida da NEXZ DIGITAL, com parcelamento em até 10x no cartão de crédito.",
      ctaLabel: "Solicitar Orçamento de Software",
      whatsappMessage:
        "Olá! Vim pela página de Softwares Personalizados da NEXZ DIGITAL e gostaria de conversar sobre um sistema sob medida para minha empresa.",
    },
  },

  "automacao-empresarial": {
    slug: "automacao-empresarial",
    navLabel: "Automação Empresarial",
    accent: "emerald",
    seo: {
      title: "Automação Empresarial e de Processos | NEXZ DIGITAL",
      description:
        "Soluções de automação empresarial e integração de processos para pequenas empresas e autônomos. Reduza tarefas manuais e ganhe produtividade.",
      keywords: [
        "automação empresarial",
        "automação de processos",
        "automação para pequenas empresas",
        "integração de sistemas e fluxos",
        "automação de atendimento e rotinas",
        "NEXZ DIGITAL",
      ],
    },
    hero: {
      badge: "Eficiência Operacional & Escala",
      h1: "Automação Empresarial para eliminar tarefas repetitivas e",
      h1Highlight: "ganhar tempo produtivo",
      subtitle:
        "Conecte ferramentas, padronize fluxos de atendimento e automatize rotinas operacionais para que sua equipe foque no que realmente gera receita.",
      description:
        "Na NEXZ DIGITAL, desenhamos e implementamos automações sob medida para pequenas empresas e profissionais autônomos. Transformamos processos manuais demorados em fluxos inteligentes, rápidos e livres de esquecimentos.",
      ctaLabel: "Solicitar Orçamento de Automação",
      whatsappMessage:
        "Olá! Vim pela página de Automação Empresarial da NEXZ DIGITAL e tenho interesse em automatizar processos da minha empresa. Gostaria de conhecer as soluções disponíveis.",
      keyDeliverablesTitle: "O que podemos automatizar no seu negócio:",
      keyDeliverables: [
        "Fluxos inteligentes de triagem e direcionamento de atendimento",
        "Integração automática entre formulários, planilhas, CRM e sistemas",
        "Envio programado de notificações, lembretes e alertas operacionais",
        "Padronização de registros comerciais e redução de erros de digitação",
        "Soluções práticas adaptadas às ferramentas que você já utiliza",
      ],
    },
    pricing: getPricingByServiceId("automacoes"),
    problemsSection: {
      badge: "Desperdício de Tempo e Energia",
      heading: "Quanto tempo sua empresa perde com tarefas manuais todos os dias?",
      description:
        "Pequenas tarefas repetitivas somadas ao longo da semana consomem horas preciosas que poderiam ser dedicadas a vendas e atendimento estratégico.",
      problems: [
        {
          title: "Demora no primeiro retorno ao cliente",
          description:
            "Quando o cliente entra em contato e precisa esperar horas por informações básicas ou triagem inicial, aumentam as chances de ele fechar com outro fornecedor.",
        },
        {
          title: "Copiar e colar dados entre diferentes ferramentas",
          description:
            "Transferir manualmente cadastros do WhatsApp ou do site para planilhas e controles internos gera retrabalho constante e erros de preenchimento.",
        },
        {
          title: "Esquecimento de acompanhamentos e retornos (follow-up)",
          description:
            "Na correria do dia a dia, orçamentos enviados, agendamentos ou etapas operacionais acabam esquecidos por falta de alertas e fluxos padronizados.",
        },
        {
          title: "Processos que dependem exclusivamente da memória da equipe",
          description:
            "Sem fluxos automatizados, cada atendimento ou registro é feito de um jeito diferente, dificultando manter o padrão de qualidade do negócio.",
        },
      ],
    },
    solutionsSection: {
      badge: "Fluxos Inteligentes Sob Medida",
      heading: "Como a Automação Empresarial acelera o seu dia a dia",
      description:
        "Analisamos seus gargalos operacionais e criamos conexões eficientes para que a tecnologia trabalhe a favor da sua produtividade.",
      benefits: [
        {
          title: "Agilidade na Triagem e Organização Comercial",
          description:
            "Organize a chegada de novos contatos, colete as informações essenciais do cliente e direcione cada demanda com rapidez.",
          items: [
            "Qualificação inicial estruturada para agilizar a elaboração de orçamentos",
            "Respostas e encaminhamentos rápidos sem perder o toque profissional",
            "Organização automática das solicitações recebidas pelos canais digitais",
          ],
        },
        {
          title: "Integração entre Ferramentas e Registros",
          description:
            "Faça com que as ferramentas do seu negócio conversem entre si sem exigir intervenção manual a cada nova ação.",
          items: [
            "Registro automático de leads, pedidos ou solicitações em painéis e controles",
            "Disparo de alertas internos para a equipe quando uma ação importante ocorre",
            "Redução drástica de falhas humanas e retrabalho operacional",
          ],
        },
        {
          title: "Implantação Acessível e Retorno Rápido",
          description:
            "Você não precisa trocar toda a operação da sua empresa para começar a automatizar. Criamos automações pontuais ou fluxos completos.",
          items: [
            "Soluções desenhadas sob medida para a realidade de pequenas empresas",
            "Baixo custo de implantação inicial com alto impacto na rotina",
            "Fácil manutenção e possibilidade de expandir novos fluxos gradualmente",
          ],
        },
      ],
    },
    processSection: {
      badge: "Passo a Passo",
      heading: "Como implementamos automações na sua empresa",
      description:
        "Foco total em simplicidade e resultado prático desde o primeiro fluxo.",
      steps: [
        {
          step: "01",
          title: "Identificação das Tarefas Repetitivas",
          description:
            "Conversamos para mapear quais atividades manuais mais tomam o seu tempo ou geram falhas no atendimento e na operação.",
        },
        {
          step: "02",
          title: "Desenho do Fluxo e Proposta",
          description:
            "Projetamos a lógica da automação, definimos as ferramentas envolvidas e apresentamos a proposta comercial.",
        },
        {
          step: "03",
          title: "Configuração, Desenvolvimento e Testes",
          description:
            "Implementamos as integrações e regras automatizadas, simulando diferentes cenários para garantir estabilidade.",
        },
        {
          step: "04",
          title: "Ativação e Acompanhamento",
          description:
            "Colocamos a automação em funcionamento na sua rotina e orientamos você sobre todo o fluxo implementado.",
        },
      ],
    },
    differentialsSection: {
      badge: "Diferenciais NEXZ DIGITAL",
      heading: "Automação prática, sem complicação técnica para você",
      description:
        "Cuidamos de toda a configuração e lógica técnica para que você aproveite apenas a economia de tempo e a organização.",
      items: DIFFERENTIALS,
    },
    faqSection: {
      badge: "Dúvidas Frequentes",
      heading: "Perguntas frequentes sobre Automação Empresarial",
      description:
        "Saiba como a automação pode se encaixar na rotina da sua empresa ou atividade profissional.",
      faqs: [
        {
          question: "Automação empresarial serve para pequenas empresas e autônomos?",
          answer:
            "Sim, especialmente para pequenas empresas e autônomos! Quando a equipe é enxuta, economizar tempo em tarefas repetitivas de triagem, cadastro e organização faz toda a diferença para conseguir atender melhor os clientes.",
        },
        {
          question: "Qual o investimento para implementar uma automação?",
          answer:
            "Nossas soluções de automação contam com condições acessíveis a partir de R$ 49,70 por parcela, com possibilidade de parcelamento em até 10x no cartão de crédito. O valor total depende da complexidade do fluxo e é apresentado na proposta comercial.",
        },
        {
          question: "Como sei quais processos da minha empresa podem ser automatizados?",
          answer:
            "Basta nos chamar no WhatsApp e contar quais tarefas manuais mais tomam seu tempo hoje (como organizar contatos, preencher controles ou enviar informações padrão). Nós avaliamos a sua rotina e indicamos as melhores opções.",
        },
        {
          question: "As automações podem ser combinadas com minha landing page ou sistema?",
          answer:
            "Sim! Podemos integrar suas automações diretamente com sua landing page, site institucional ou software personalizado para criar um fluxo comercial completo.",
        },
      ],
    },
    finalCta: {
      badge: "Ganhe Tempo e Eficiência",
      heading: "Vamos automatizar os processos repetitivos do seu negócio?",
      description:
        "Converse com a NEXZ DIGITAL no WhatsApp, conte qual rotina você deseja otimizar e receba uma proposta sob medida com parcelamento em até 10x.",
      ctaLabel: "Quero Automatizar Meus Processos",
      whatsappMessage:
        "Olá! Vim pela página de Automação Empresarial da NEXZ DIGITAL e gostaria de solicitar um orçamento para automatizar processos na minha empresa.",
    },
  },
};

export const SERVICE_PAGES_LIST: ServicePageData[] = [
  SERVICE_PAGES["criacao-landing-pages"],
  SERVICE_PAGES["criacao-de-sites"],
  SERVICE_PAGES["desenvolvimento-de-aplicativos"],
  SERVICE_PAGES["softwares-personalizados"],
  SERVICE_PAGES["automacao-empresarial"],
];

export function getServicePageMetadata(slug: ServicePageSlug): Metadata {
  const page = SERVICE_PAGES[slug];
  const canonicalUrl = `${SITE_URL}/${page.slug}`;

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: canonicalUrl,
      type: "website",
      locale: "pt_BR",
      siteName: "NEXZ DIGITAL",
      images: [
        {
          url: "/nexz-logo-transparent.jpeg",
          width: 1600,
          height: 894,
          type: "image/jpeg",
          alt: `NEXZ DIGITAL - ${page.navLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: ["/nexz-logo-transparent.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getServicePageStructuredData(page: ServicePageData) {
  const pageUrl = `${SITE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: page.navLabel,
        description: page.seo.description,
        url: pageUrl,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.navLabel,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faqSection.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export { COMMERCIAL_PAYMENT_HIGHLIGHT };

