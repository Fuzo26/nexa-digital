export const WHATSAPP_CONFIG = {
  /**
   * Insira apenas números com DDI + DDD + Número (ex: "5511999999999")
   * Quando preenchido, todos os botões comerciais abrirão diretamente a conversa no WhatsApp.
   * Enquanto estiver vazio, os botões direcionam para a seção de contato (#contato) ou exibem o link preparado.
   */
  phoneNumber: "",
  defaultMessage:
    "Olá! Vim pelo site da NEXA DIGITAL e gostaria de conversar sobre uma solução para o meu negócio.",
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
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  whatsappMessage: string;
  accent: "blue" | "cyan" | "teal" | "emerald";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "landing-pages",
    badge: "Presença & Conversão",
    title: "Landing Pages",
    subtitle: "Páginas estratégicas projetadas para apresentar seu negócio e gerar oportunidades.",
    description:
      "Desenvolvemos páginas institucionais e de vendas com visual sofisticado, carregamento rápido e estrutura persuasiva. Ideal para profissionais autônomos e empresas que desejam transmitir credibilidade imediata e facilitar o contato de novos clientes.",
    highlights: [
      "Design exclusivo alinhado à identidade da sua marca",
      "Estrutura pensada para conversão e captação de contatos",
      "Totalmente responsiva para celulares, tablets e computadores",
      "Otimização técnica de velocidade e SEO estrutural",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da NEXA DIGITAL e tenho interesse na criação de uma Landing Page.",
    accent: "blue",
  },
  {
    id: "aplicativos",
    badge: "Mobilidade & Experiência",
    title: "Aplicativos",
    subtitle: "Experiências digitais intuitivas na palma da mão do seu cliente ou equipe.",
    description:
      "Criamos aplicativos modernos e funcionais, desenhados com foco em usabilidade, fluidez e estabilidade. Seja para oferecer um novo canal de atendimento e serviços aos seus clientes ou para apoiar operações em campo.",
    highlights: [
      "Interface moderna, intuitiva e fácil de navegar",
      "Desenvolvimento focado em desempenho e estabilidade",
      "Arquitetura preparada para evoluir junto com o seu negócio",
      "Integração com sistemas, bancos de dados e APIs externas",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da NEXA DIGITAL e gostaria de conversar sobre o desenvolvimento de um Aplicativo.",
    accent: "cyan",
  },
  {
    id: "softwares",
    badge: "Gestão & Controle",
    title: "Softwares Personalizados",
    subtitle: "Sistemas sob medida que se adaptam à rotina da sua empresa, e não o contrário.",
    description:
      "Substitua controles manuais e planilhas desconectadas por um sistema web desenvolvido especificamente para as regras do seu negócio. Centralize informações, organize fluxos de trabalho e tenha visão clara da sua operação.",
    highlights: [
      "Mapeamento completo das necessidades da sua operação",
      "Painéis administrativos claros e controle de acessos",
      "Segurança de dados e código estruturado com boas práticas",
      "Flexibilidade para adicionar novas funcionalidades no futuro",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da NEXA DIGITAL e procuro um Software Personalizado para minha empresa.",
    accent: "teal",
  },
  {
    id: "automacoes",
    badge: "Eficiência & Escala",
    title: "Automações",
    subtitle: "Processos inteligentes para reduzir tarefas manuais e ganhar tempo produtivo.",
    description:
      "Conectamos ferramentas, organizamos fluxos de atendimento e automatizamos rotinas operacionais repetitivas. Assim, você e sua equipe dedicam energia ao que realmente importa: atender clientes e expandir o negócio.",
    highlights: [
      "Integração entre canais de comunicação e ferramentas digitais",
      "Padronização de processos e redução de falhas operacionais",
      "Fluxos automatizados de triagem, notificações e registros",
      "Soluções práticas desenhadas para a realidade do seu dia a dia",
    ],
    whatsappMessage:
      "Olá! Vim pelo site da NEXA DIGITAL e quero saber mais sobre Automações para o meu negócio.",
    accent: "emerald",
  },
];

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

