import Link from "next/link";
import {
  COMMERCIAL_PAYMENT_HIGHLIGHT,
  FOOTER_SERVICE_LINKS,
  MAINTENANCE_DISCLAIMER,
  MAINTENANCE_PLANS,
  SERVICES,
  SHOW_SERVICE_PRICING,
  type ServiceItem,
} from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "landing-pages":
      return (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );
    case "aplicativos":
      return (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "softwares":
      return (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    default:
      return (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
  }
}

const ACCENT_STYLES: Record<
  ServiceItem["accent"],
  {
    badge: string;
    iconBox: string;
    borderHover: string;
    checkColor: string;
    priceBox: string;
    installmentPill: string;
  }
> = {
  blue: {
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    iconBox:
      "border-blue-500/30 bg-gradient-to-br from-blue-600/25 to-blue-400/10 text-blue-400",
    borderHover: "hover:border-blue-500/45",
    checkColor: "text-blue-400",
    priceBox: "border-blue-500/25 bg-blue-500/[0.06]",
    installmentPill: "border-cyan-400/30 bg-cyan-500/15 text-cyan-200",
  },
  cyan: {
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    iconBox:
      "border-cyan-500/30 bg-gradient-to-br from-cyan-600/25 to-cyan-400/10 text-cyan-300",
    borderHover: "hover:border-cyan-400/45",
    checkColor: "text-cyan-300",
    priceBox: "border-cyan-500/25 bg-cyan-500/[0.06]",
    installmentPill: "border-cyan-400/30 bg-cyan-500/15 text-cyan-200",
  },
  teal: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    iconBox:
      "border-teal-500/30 bg-gradient-to-br from-teal-600/25 to-teal-400/10 text-teal-300",
    borderHover: "hover:border-teal-400/45",
    checkColor: "text-teal-300",
    priceBox: "border-teal-500/25 bg-teal-500/[0.06]",
    installmentPill: "border-teal-400/30 bg-teal-500/15 text-teal-200",
  },
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    iconBox:
      "border-emerald-500/30 bg-gradient-to-br from-emerald-600/25 to-emerald-400/10 text-emerald-400",
    borderHover: "hover:border-emerald-400/45",
    checkColor: "text-emerald-400",
    priceBox: "border-emerald-500/25 bg-emerald-500/[0.06]",
    installmentPill: "border-emerald-400/30 bg-emerald-500/15 text-emerald-200",
  },
};

export function ServicesSection() {
  return (
    <>
      <section
        id="servicos"
        aria-labelledby="services-heading"
        className="relative scroll-mt-20 py-20 sm:py-28 border-t border-white/10 bg-[#060b18]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da Seção */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
              Nossas Soluções & Investimento
            </span>
            <h2
              id="services-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Tecnologia completa para{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                impulsionar o seu negócio
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Desenvolvemos ferramentas digitais sob medida para profissionais
              autônomos e pequenas empresas que buscam fortalecer sua marca,
              organizar processos e conquistar novos clientes.
            </p>
          </div>

          {/* Grade de Cards de Serviços com Preços (Parcelas em Destaque + Valor Total Abaixo) */}
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SERVICES.map((service) => {
              const styles = ACCENT_STYLES[service.accent];
              return (
                <article
                  id={service.id}
                  key={service.id}
                  className={`group relative scroll-mt-24 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(16,208,120,0.2)] ${styles.borderHover}`}
                >
                  <div>
                    {/* Topo do Card */}
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className={`flex h-13 w-13 items-center justify-center rounded-2xl border ${styles.iconBox}`}
                      >
                        <ServiceIcon id={service.id} />
                      </div>
                      <span
                        className={`rounded-full border px-3.5 py-1 text-xs font-medium ${styles.badge}`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    {/* Título e Descrição */}
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      <Link
                        href={service.href}
                        className="transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-emerald-400"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-medium text-slate-200">
                      {service.subtitle}
                    </p>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
                      {service.description}
                    </p>

                    {/* Estrutura preparada para futura ativação dos preços de referência por parcela nos cards */}
                    {SHOW_SERVICE_PRICING && service.pricing.enabled && (
                      <div
                        className={`mt-6 rounded-2xl border p-4 sm:p-5 ${styles.priceBox}`}
                      >
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                            {service.pricing.prefix}
                          </span>
                          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                            {service.pricing.installmentValue}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-slate-300">
                            {service.pricing.installmentSuffix}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                          * {service.pricing.proposalNote}
                        </p>
                      </div>
                    )}

                    {/* Lista de Entregáveis / Destaques */}
                    <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-slate-300"
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
                  </div>

                  {/* Botão de Ação Específico do Serviço + Link para Página Dedicada */}
                  <div className="mt-8 pt-4 space-y-3">
                    <WhatsAppButton
                      label={`Quero conversar sobre ${service.title}`}
                      customMessage={service.whatsappMessage}
                      variant="outline"
                      className="w-full"
                    />
                    <div className="text-center">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-300 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-emerald-400"
                      >
                        <span>Saiba mais sobre {service.title}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Acesso Rápido às Páginas Especializadas de Serviços (incluindo Criação de Sites Profissionais) */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Páginas Especializadas
                </p>
                <p className="mt-1 text-sm sm:text-base text-slate-300">
                  Confira em detalhes como cada solução funciona para o seu negócio:
                </p>
              </div>
              <nav
                aria-label="Páginas dedicadas de cada serviço"
                className="flex flex-wrap gap-2"
              >
                {FOOTER_SERVICE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-emerald-400">
                      →
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Seção Comercial de Destaque — Condições Facilitadas em até 10x */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-[#091834] via-[#071226] to-[#061d24] p-7 sm:p-10 lg:p-12 shadow-[0_25px_70px_-20px_rgba(16,208,120,0.22)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]"
            />

            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-300 shadow-[0_0_25px_-5px_rgba(16,208,120,0.4)]">
                  <svg
                    className="h-4 w-4 shrink-0 text-emerald-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <span>{COMMERCIAL_PAYMENT_HIGHLIGHT.highlight}</span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {COMMERCIAL_PAYMENT_HIGHLIGHT.title}
                </h3>

                <p className="mt-3 text-base sm:text-lg font-medium text-slate-200">
                  {COMMERCIAL_PAYMENT_HIGHLIGHT.description}
                </p>

                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-300">
                  {COMMERCIAL_PAYMENT_HIGHLIGHT.complementaryText}
                </p>
              </div>

              <div className="flex flex-col items-stretch lg:col-span-5 lg:items-end">
                <div className="w-full rounded-2xl border border-white/15 bg-[#050b18]/80 p-6 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Condições Facilitadas
                  </p>
                  <p className="mt-1.5 text-xl sm:text-2xl font-extrabold text-white">
                    {COMMERCIAL_PAYMENT_HIGHLIGHT.highlight}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    * {COMMERCIAL_PAYMENT_HIGHLIGHT.proposalConditionNote}
                  </p>

                  <div className="mt-5">
                    <WhatsAppButton
                      label={COMMERCIAL_PAYMENT_HIGHLIGHT.ctaLabel}
                      customMessage={COMMERCIAL_PAYMENT_HIGHLIGHT.whatsappMessage}
                      variant="primary"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Separada de Planos Mensais de Manutenção */}
      <section
        id="planos"
        aria-labelledby="maintenance-plans-heading"
        className="relative scroll-mt-20 py-20 sm:py-28 border-t border-white/10 bg-[#050a16]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#081226] to-[#050b18] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-20px_rgba(21,101,216,0.25)]">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                Suporte & Evolução Contínua
              </span>
              <h2
                id="maintenance-plans-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                Planos Mensais de{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Manutenção
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Mantenha sua solução digital atualizada, monitorada e com
                suporte técnico recorrente para operar com tranquilidade.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {MAINTENANCE_PLANS.map((plan) => {
                const styles = ACCENT_STYLES[plan.accent];
                return (
                  <div
                    key={plan.id}
                    className={`flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${styles.borderHover}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${styles.badge}`}
                        >
                          {plan.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-white">
                        {plan.title}
                      </h3>

                      <div className="mt-4 rounded-xl border border-white/10 bg-[#040915]/80 p-4">
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {plan.pricePrefix}
                        </span>
                        <div className="mt-1 flex items-baseline gap-1">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white">
                            {plan.price}
                          </span>
                          <span className="text-sm font-medium text-slate-400">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-300">
                        {plan.description}
                      </p>

                      <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
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
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 pt-2">
                      <WhatsAppButton
                        label={`Consultar Plano ${plan.title}`}
                        customMessage={plan.whatsappMessage}
                        variant="outline"
                        className="w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nota Comercial Obrigatória sobre Escopo e Condições */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-center">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                <strong className="font-semibold text-slate-200">
                  Informação importante:
                </strong>{" "}
                {MAINTENANCE_DISCLAIMER}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
