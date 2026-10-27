import Link from "next/link";
import {
  COMMERCIAL_PAYMENT_HIGHLIGHT,
  INSTAGRAM_CONFIG,
  SHOW_SERVICE_PRICING,
  type DifferentialItem,
  type ServiceItem,
} from "@/config/site";
import {
  getServicePageStructuredData,
  SERVICE_PAGES_LIST,
  type ServicePageData,
} from "@/config/services-pages";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

const ACCENT_STYLES: Record<
  ServiceItem["accent"],
  {
    badge: string;
    iconBox: string;
    borderHover: string;
    checkColor: string;
    priceBox: string;
    gradientText: string;
  }
> = {
  blue: {
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    iconBox:
      "border-blue-500/30 bg-gradient-to-br from-blue-600/25 to-blue-400/10 text-blue-400",
    borderHover: "hover:border-blue-500/45",
    checkColor: "text-blue-400",
    priceBox: "border-blue-500/25 bg-blue-500/[0.06]",
    gradientText: "from-blue-400 via-cyan-300 to-emerald-400",
  },
  cyan: {
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    iconBox:
      "border-cyan-500/30 bg-gradient-to-br from-cyan-600/25 to-cyan-400/10 text-cyan-300",
    borderHover: "hover:border-cyan-400/45",
    checkColor: "text-cyan-300",
    priceBox: "border-cyan-500/25 bg-cyan-500/[0.06]",
    gradientText: "from-cyan-300 via-teal-300 to-emerald-400",
  },
  teal: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    iconBox:
      "border-teal-500/30 bg-gradient-to-br from-teal-600/25 to-teal-400/10 text-teal-300",
    borderHover: "hover:border-teal-400/45",
    checkColor: "text-teal-300",
    priceBox: "border-teal-500/25 bg-teal-500/[0.06]",
    gradientText: "from-teal-300 via-cyan-300 to-emerald-400",
  },
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    iconBox:
      "border-emerald-500/30 bg-gradient-to-br from-emerald-600/25 to-emerald-400/10 text-emerald-400",
    borderHover: "hover:border-emerald-400/45",
    checkColor: "text-emerald-400",
    priceBox: "border-emerald-500/25 bg-emerald-500/[0.06]",
    gradientText: "from-emerald-400 via-teal-300 to-cyan-300",
  },
};

function DifferentialIcon({ name }: { name: DifferentialItem["iconName"] }) {
  switch (name) {
    case "users":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "target":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "code":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "layers":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "zap":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export function ServicePageTemplate({ page }: { page: ServicePageData }) {
  const styles = ACCENT_STYLES[page.accent];
  const structuredData = getServicePageStructuredData(page);
  const otherServices = SERVICE_PAGES_LIST.filter((s) => s.slug !== page.slug);

  return (
    <div className="flex min-h-screen flex-col bg-[#040812] text-slate-50">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-emerald-500 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Pular para o conteúdo principal
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main id="conteudo-principal" className="flex-1">
        {/* 1. HERO DO SERVIÇO */}
        <section
          aria-labelledby="service-hero-heading"
          className="relative overflow-hidden bg-[#030816] pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-36 -left-24 h-[440px] w-[440px] rounded-full bg-blue-600/15 blur-[150px]" />
            <div className="absolute top-1/4 right-[5%] h-[480px] w-[480px] rounded-full bg-cyan-500/12 blur-[160px]" />
            <div className="absolute bottom-0 right-[15%] h-[380px] w-[380px] rounded-full bg-emerald-500/12 blur-[150px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Semântico */}
            <nav
              aria-label="Localização na estrutura do site"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400"
            >
              <Link
                href="/"
                className="transition-colors hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-emerald-400"
              >
                Início
              </Link>
              <span aria-hidden="true" className="text-slate-600">
                /
              </span>
              <Link
                href="/#servicos"
                className="transition-colors hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-emerald-400"
              >
                Soluções
              </Link>
              <span aria-hidden="true" className="text-slate-600">
                /
              </span>
              <span className="font-medium text-slate-200" aria-current="page">
                {page.navLabel}
              </span>
            </nav>

            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Coluna Esquerda: Título H1, Descrição, Condição Comercial e CTAs */}
              <div className="lg:col-span-7">
                <div
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${styles.badge}`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span>{page.hero.badge}</span>
                </div>

                <h1
                  id="service-hero-heading"
                  className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  {page.hero.h1}{" "}
                  <span
                    className={`bg-gradient-to-r ${styles.gradientText} bg-clip-text text-transparent`}
                  >
                    {page.hero.h1Highlight}
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg font-medium leading-relaxed text-slate-200">
                  {page.hero.subtitle}
                </p>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  {page.hero.description}
                </p>

                {/* Box de Preço Oficial por Parcela (quando aplicável) ou Chamada de Orçamento Personalizado */}
                {SHOW_SERVICE_PRICING && page.pricing?.enabled ? (
                  <div
                    className={`mt-7 rounded-2xl border p-5 sm:p-6 ${styles.priceBox}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                          {page.pricing.prefix}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                          {page.pricing.installmentValue}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-300">
                          {page.pricing.installmentSuffix}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-3.5 py-1 text-xs font-bold text-emerald-300">
                        {COMMERCIAL_PAYMENT_HIGHLIGHT.highlight}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      * {page.pricing.proposalNote}
                    </p>
                  </div>
                ) : page.hero.customQuoteCallout ? (
                  <div
                    className={`mt-7 rounded-2xl border p-5 sm:p-6 ${styles.priceBox}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                        {page.hero.customQuoteCallout.badge}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-3.5 py-1 text-xs font-bold text-emerald-300">
                        {COMMERCIAL_PAYMENT_HIGHLIGHT.highlight}
                      </span>
                    </div>
                    <p className="mt-2 text-base sm:text-lg font-bold text-white">
                      {page.hero.customQuoteCallout.title}
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {page.hero.customQuoteCallout.description}
                    </p>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <WhatsAppButton
                    label={page.hero.ctaLabel}
                    customMessage={page.hero.whatsappMessage}
                    variant="primary"
                    className="w-full sm:w-auto"
                  />

                  <a
                    href="#como-funciona-servico"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <span>Como Funciona</span>
                    <svg
                      className="h-4 w-4 text-cyan-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Coluna Direita: Card de Entregáveis e Destaques da Solução */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#09152b] to-[#050b18] p-6 sm:p-8 shadow-[0_25px_70px_-20px_rgba(16,208,120,0.22)]">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        NEXA DIGITAL
                      </span>
                      <h2 className="mt-1 text-lg sm:text-xl font-bold text-white">
                        {page.hero.keyDeliverablesTitle}
                      </h2>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {page.hero.keyDeliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-200"
                      >
                        <svg
                          className={`mt-1 h-4 w-4 shrink-0 ${styles.checkColor}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      Atendimento Direto e Consultivo
                    </p>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
                      Analisamos o momento da sua empresa e preparamos uma
                      proposta clara, sem compromisso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEMAS QUE O SERVIÇO AJUDA A RESOLVER */}
        <section
          aria-labelledby="problems-heading"
          className="relative py-20 sm:py-24 border-t border-white/10 bg-[#050a16]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
                {page.problemsSection.badge}
              </span>
              <h2
                id="problems-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {page.problemsSection.heading}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300">
                {page.problemsSection.description}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {page.problemsSection.problems.map((problem) => (
                <article
                  key={problem.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 transition-all duration-300 hover:border-blue-400/35 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-amber-300">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {problem.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-400">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SOLUÇÕES E BENEFÍCIOS */}
        <section
          aria-labelledby="solutions-heading"
          className="relative py-20 sm:py-24 border-t border-white/10 bg-[#060b18]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-widest ${styles.badge}`}
              >
                {page.solutionsSection.badge}
              </span>
              <h2
                id="solutions-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {page.solutionsSection.heading}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300">
                {page.solutionsSection.description}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {page.solutionsSection.benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className={`flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${styles.borderHover}`}
                >
                  <div>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${styles.iconBox}`}
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {benefit.description}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {benefit.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${styles.checkColor}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMO FUNCIONA O PROCESSO DE CONTRATAÇÃO */}
        <section
          id="como-funciona-servico"
          aria-labelledby="service-process-heading"
          className="relative scroll-mt-20 py-20 sm:py-24 border-t border-white/10 bg-[#040812]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#091226] to-[#060c1a] p-6 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  {page.processSection.badge}
                </span>
                <h2
                  id="service-process-heading"
                  className="mt-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
                >
                  {page.processSection.heading}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300">
                  {page.processSection.description}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {page.processSection.steps.map((item) => (
                  <div
                    key={item.step}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/35"
                  >
                    <span className="inline-block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text font-mono text-2xl font-extrabold text-transparent">
                      {item.step}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. DIFERENCIAIS DA NEXA DIGITAL + CONDIÇÕES EM ATÉ 10X */}
        <section
          aria-labelledby="service-differentials-heading"
          className="relative py-20 sm:py-24 border-t border-white/10 bg-[#050a16]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                {page.differentialsSection.badge}
              </span>
              <h2
                id="service-differentials-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {page.differentialsSection.heading}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300">
                {page.differentialsSection.description}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.differentialsSection.items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 transition-all duration-300 hover:border-emerald-400/35 hover:bg-white/[0.045]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-gradient-to-br from-blue-600/20 to-emerald-500/20 text-emerald-300 transition-transform duration-300 group-hover:scale-105">
                    <DifferentialIcon name={item.iconName} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Banner Comercial de Parcelamento em até 10x */}
            <div className="relative mt-14 overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-[#091834] via-[#071226] to-[#061d24] p-7 sm:p-10 shadow-[0_25px_70px_-20px_rgba(16,208,120,0.22)]">
              <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-4 py-1 text-xs font-bold text-emerald-300">
                    <span>{COMMERCIAL_PAYMENT_HIGHLIGHT.highlight}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">
                    {COMMERCIAL_PAYMENT_HIGHLIGHT.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300">
                    {COMMERCIAL_PAYMENT_HIGHLIGHT.description}{" "}
                    {COMMERCIAL_PAYMENT_HIGHLIGHT.complementaryText}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    * {COMMERCIAL_PAYMENT_HIGHLIGHT.proposalConditionNote}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <WhatsAppButton
                    label={page.hero.ctaLabel}
                    customMessage={page.hero.whatsappMessage}
                    variant="primary"
                    className="w-full lg:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PERGUNTAS FREQUENTES (FAQ) */}
        <section
          aria-labelledby="service-faq-heading"
          className="relative py-20 sm:py-24 border-t border-white/10 bg-[#060b18]"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                {page.faqSection.badge}
              </span>
              <h2
                id="service-faq-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {page.faqSection.heading}
              </h2>
              <p className="mt-3 text-base text-slate-300">
                {page.faqSection.description}
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {page.faqSection.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-200 open:border-emerald-400/35 open:bg-white/[0.04]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-emerald-400 transition-transform duration-200 group-open:rotate-180">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CHAMADA FINAL PARA ORÇAMENTO + NAVEGAÇÃO INTERNA PARA OUTRAS SOLUÇÕES */}
        <section
          aria-labelledby="service-final-cta-heading"
          className="relative py-20 sm:py-28 border-t border-white/10 bg-[#050a16]"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-[#0b1736] via-[#081226] to-[#061e24] p-8 sm:p-12 lg:p-14 shadow-[0_25px_70px_-20px_rgba(21,101,216,0.35)]">
              <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                    {page.finalCta.badge}
                  </span>
                  <h2
                    id="service-final-cta-heading"
                    className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
                  >
                    {page.finalCta.heading}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                    {page.finalCta.description}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-white/15 bg-[#050914]/85 p-6 backdrop-blur-xl">
                    <div className="flex flex-col gap-3">
                      <WhatsAppButton
                        label={page.finalCta.ctaLabel}
                        customMessage={page.finalCta.whatsappMessage}
                        variant="primary"
                        className="w-full"
                      />

                      <a
                        href={INSTAGRAM_CONFIG.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Siga a NEXA DIGITAL no Instagram (${INSTAGRAM_CONFIG.handle})`}
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                      >
                        <svg
                          className="h-5 w-5 shrink-0 text-cyan-300"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <span>Instagram Oficial</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Internos para Outras Soluções da NEXA DIGITAL */}
            <div className="mt-16">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Conheça também nossas outras soluções digitais
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Explore todas as especialidades da NEXA DIGITAL para o seu
                    negócio:
                  </p>
                </div>
                <Link
                  href="/"
                  className="text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  ← Voltar para a Página Inicial
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/${other.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.05]"
                  >
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                        {other.hero.badge}
                      </span>
                      <h3 className="mt-1.5 text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {other.navLabel}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
                        {other.hero.subtitle}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <span>Acessar página</span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

