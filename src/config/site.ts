export const WHATSAPP_CONFIG = {
  /**
   * Insira apenas números com DDI + DDD + Número (ex: "5511999999999")
   * Quando preenchido, todos os botões comerciais abrirão diretamente a conversa no WhatsApp.
   * Enquanto estiver vazio, os botões direcionam para a seção de contato (#contato) ou exibem o link preparado.
   */
  phoneNumber: "5513988736485",
  defaultMessage:
    "Olá! Vim pelo site da NEXA DIGITAL e gostaria de conversar sobre uma solução para o meu negócio.",
};

export const INSTAGRAM_CONFIG = {
  handle: "@nexa_digital33",
  url: "https://www.instagram.com/nexa_digital33/",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || WHATSAPP_CONFIG.defaultMessage
  );
  const cleanPhone = WHATSAPP_CONFIG.phoneNumber.replace(/\D/g, "");

  if (cleanPhone.length > 0) {
    return `https://wa.me/${cleanPhone}?text=${message}`;
  }

  // Enquanto o número comercial estiver pendente, mantém navegação interna segura para #contato sem link quebrado
  return "#contato";
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos Mensais", href: "#planos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

/**
 * Flag para ativação da exibição dos valores de referência por parcela nos cards de serviços.
 */
export const SHOW_SERVICE_PRICING = true;

export interface ServicePricing {
  enabled: boolean;
  prefix: string;
  installmentValue: string;
  installmentSuffix: string;
  proposalNote: string;
}

export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  pricing: ServicePricing;
  highlights: string[];
  whatsappMessage: string;
  accent: "blue" | "cyan" | "teal" | "emerald";
}

export const COMMERCIAL_PAYMENT_HIGHLIGHT = {
  title: "Seu próximo projeto digital cabe no seu planejamento.",
  description:
    "Desenvolva seu site, aplicativo, software ou automação com condições facilitadas de pagamento.",
  highlight: "Parcele em até 10x no cartão de crédito.",
  complementaryText:
    "Transforme suas ideias em soluções digitais com uma proposta personalizada para as necessidades do seu negócio.",
  ctaLabel: "QUERO SOLICITAR MEU ORÇAMENTO",
  whatsappMessage:
    "Olá! Vim pelo site da NEXA DIGITAL e quero solicitar meu orçamento personalizado.",
  proposalConditionNote:
    "As condições específicas de pagamento e parcelamento serão apresentadas na proposta comercial.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "landing-pages",
    badge: "Presença & Conversão",
    title: "Landing Pages",
    subtitle: "Páginas estratégicas projetadas para apresentar seu negócio e gerar oportunidades.",
    description:
      "Desenvolvemos páginas institucionais e de vendas com visual sofisticado, carregamento rápido e estrutura persuasiva. Ideal para profissionais autônomos e empresas que desejam transmitir credibilidade imediata e facilitar o contato de novos clientes.",
    pricing: {
      enabled: true,
      prefix: "A partir de",
      installmentValue: "R$ 99,70",
      installmentSuffix: "por parcela",
      proposalNote:
        "O valor total e as condições específicas de pagamento serão apresentados na proposta comercial.",
    },
    highlights: [
      "Design exclusivo alinhado à identidade da sua marca",
      "Estrutura pensada para conversão e captação de contatos",
      "Totalmente responsiva para celulares, tablets e computadores",
      "Otimização técnica de velocidade e SEO estrutural",
    ],
    whatsappMessage:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em criar uma landing page profissional para minha empresa. Gostaria de conhecer as opções e solicitar um orçamento.",
    accent: "blue",
  },
  {
    id: "aplicativos",
    badge: "Mobilidade & Experiência",
    title: "Aplicativos",
    subtitle: "Experiências digitais intuitivas na palma da mão do seu cliente ou equipe.",
    description:
      "Criamos aplicativos modernos e funcionais, desenhados com foco em usabilidade, fluidez e estabilidade. Seja para oferecer um novo canal de atendimento e serviços aos seus clientes ou para apoiar operações em campo.",
    pricing: {
      enabled: true,
      prefix: "A partir de",
      installmentValue: "R$ 299,70",
      installmentSuffix: "por parcela",
      proposalNote:
        "O valor total e as condições específicas de pagamento serão apresentados na proposta comercial.",
    },
    highlights: [
      "Interface moderna, intuitiva e fácil de navegar",
      "Desenvolvimento focado em desempenho e estabilidade",
      "Arquitetura preparada para evoluir junto com o seu negócio",
      "Integração com sistemas, bancos de dados e APIs externas",
    ],
    whatsappMessage:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em desenvolver um aplicativo. Gostaria de apresentar minha ideia e solicitar um orçamento.",
    accent: "cyan",
  },
  {
    id: "softwares",
    badge: "Gestão & Controle",
    title: "Softwares Personalizados",
    subtitle: "Sistemas sob medida que se adaptam à rotina da sua empresa, e não o contrário.",
    description:
      "Substitua controles manuais e planilhas desconectadas por um sistema web desenvolvido especificamente para as regras do seu negócio. Centralize informações, organize fluxos de trabalho e tenha visão clara da sua operação.",
    pricing: {
      enabled: true,
      prefix: "A partir de",
      installmentValue: "R$ 399,70",
      installmentSuffix: "por parcela",
      proposalNote:
        "O valor total e as condições específicas de pagamento serão apresentados na proposta comercial.",
    },
    highlights: [
      "Mapeamento completo das necessidades da sua operação",
      "Painéis administrativos claros e controle de acessos",
      "Segurança de dados e código estruturado com boas práticas",
      "Flexibilidade para adicionar novas funcionalidades no futuro",
    ],
    whatsappMessage:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em desenvolver um software personalizado para meu negócio. Gostaria de conversar sobre meu projeto.",
    accent: "teal",
  },
  {
    id: "automacoes",
    badge: "Eficiência & Escala",
    title: "Automações",
    subtitle: "Processos inteligentes para reduzir tarefas manuais e ganhar tempo produtivo.",
    description:
      "Conectamos ferramentas, organizamos fluxos de atendimento e automatizamos rotinas operacionais repetitivas. Assim, você e sua equipe dedicam energia ao que realmente importa: atender clientes e expandir o negócio.",
    pricing: {
      enabled: true,
      prefix: "A partir de",
      installmentValue: "R$ 49,70",
      installmentSuffix: "por parcela",
      proposalNote:
        "O valor total e as condições específicas de pagamento serão apresentados na proposta comercial.",
    },
    highlights: [
      "Integração entre canais de comunicação e ferramentas digitais",
      "Padronização de processos e redução de falhas operacionais",
      "Fluxos automatizados de triagem, notificações e registros",
      "Soluções práticas desenhadas para a realidade do seu dia a dia",
    ],
    whatsappMessage:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em automatizar processos da minha empresa. Gostaria de conhecer as soluções disponíveis.",
    accent: "emerald",
  },
];

export interface MaintenancePlanItem {
  id: string;
  badge: string;
  title: string;
  pricePrefix: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  whatsappMessage: string;
  accent: "blue" | "cyan" | "emerald";
}

export const MAINTENANCE_PLANS: MaintenancePlanItem[] = [
  {
    id: "manutencao-essencial",
    badge: "Sites & Landing Pages",
    title: "Manutenção Essencial",
    pricePrefix: "A partir de",
    price: "R$ 97,00",
    period: "/mês",
    description:
      "Acompanhamento contínuo para manter sua página institucional ou landing page sempre ativa, atualizada e segura.",
    features: [
      "Monitoramento de disponibilidade e desempenho",
      "Atualizações pontuais de textos, imagens e links",
      "Verificações preventivas de segurança e funcionamento",
      "Suporte técnico conforme escopo definido em proposta",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da NEXA DIGITAL e gostaria de saber mais sobre o plano mensal de Manutenção Essencial (a partir de R$ 97,00/mês).",
    accent: "blue",
  },
  {
    id: "manutencao-aplicativos",
    badge: "Mobile & Web Apps",
    title: "Aplicativos",
    pricePrefix: "A partir de",
    price: "R$ 147,00",
    period: "/mês",
    description:
      "Suporte técnico e manutenção recorrente para garantir fluidez, estabilidade e operação contínua do seu aplicativo.",
    features: [
      "Manutenção preventiva e corretiva da aplicação",
      "Monitoramento de APIs e serviços integrados",
      "Ajustes técnicos de compatibilidade e estabilidade",
      "Atendimento técnico conforme limites da proposta comercial",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da NEXA DIGITAL e gostaria de saber mais sobre o plano mensal de manutenção para Aplicativos (a partir de R$ 147,00/mês).",
    accent: "cyan",
  },
  {
    id: "manutencao-softwares",
    badge: "Sistemas Sob Medida",
    title: "Softwares",
    pricePrefix: "A partir de",
    price: "R$ 197,00",
    period: "/mês",
    description:
      "Sustentação dedicada para softwares personalizados, assegurando continuidade operacional e apoio técnico ao seu negócio.",
    features: [
      "Acompanhamento técnico de rotinas e módulos do sistema",
      "Correções operacionais e otimizações de desempenho",
      "Verificação de integridade e rotinas de segurança",
      "Suporte especializado conforme escopo definido em proposta",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da NEXA DIGITAL e gostaria de saber mais sobre o plano mensal de manutenção para Softwares (a partir de R$ 197,00/mês).",
    accent: "emerald",
  },
];

export const MAINTENANCE_DISCLAIMER =
  "Os valores apresentados são iniciais. O escopo detalhado, os limites de suporte, a hospedagem e os serviços de terceiros devem ser definidos na proposta comercial.";

export interface DifferentialItem {
  title: string;
  description: string;
  iconName: "target" | "layers" | "zap" | "shield" | "users" | "code";
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: "Foco em Pequenas Empresas e Autônomos",
    description:
      "Entendemos os desafios reais de quem precisa de soluções ágeis, diretas ao ponto e com excelente relação entre investimento e valor entregue.",
    iconName: "users",
  },
  {
    title: "Visão Comercial e Estratégica",
    description:
      "Não entregamos apenas código: projetamos cada tela e funcionalidade pensando em fortalecer sua imagem profissional e facilitar seus negócios.",
    iconName: "target",
  },
  {
    title: "Tecnologia Moderna e Confiável",
    description:
      "Utilizamos ferramentas atuais do mercado para garantir páginas rápidas, sistemas estáveis, seguros e preparados para o crescimento.",
    iconName: "code",
  },
  {
    title: "Soluções 100% Sob Medida",
    description:
      "Cada negócio é único. Analisamos sua necessidade específica para construir a solução exata, sem complexidades desnecessárias.",
    iconName: "layers",
  },
  {
    title: "Desempenho e Responsividade",
    description:
      "Experiência impecável em qualquer tamanho de tela, com transições fluidas, leitura clara e carregamento otimizado.",
    iconName: "zap",
  },
  {
    title: "Atendimento Próximo e Transparente",
    description:
      "Comunicação clara em todas as etapas do projeto, do alinhamento inicial à entrega final, sem jargões técnicos complicados.",
    iconName: "shield",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico e Alinhamento",
    description:
      "Conversamos para compreender o momento do seu negócio, seus objetivos comerciais e o problema que precisamos resolver.",
  },
  {
    step: "02",
    title: "Proposta e Planejamento",
    description:
      "Definimos a arquitetura da solução, a estrutura visual e o escopo detalhado do projeto com total clareza.",
  },
  {
    step: "03",
    title: "Desenvolvimento e Testes",
    description:
      "Construímos sua landing page, aplicativo, software ou automação com rigor técnico, design refinado e validações de qualidade.",
  },
  {
    step: "04",
    title: "Entrega e Acompanhamento",
    description:
      "Realizamos a implantação final e orientamos você sobre o uso da solução para que aproveite todo o potencial tecnológico.",
  },
];
