import { SERVICES, type ServiceItem } from "@/config/site";
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
  }
> = {
  blue: {
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    iconBox:
      "border-blue-500/30 bg-gradient-to-br from-blue-600/25 to-blue-400/10 text-blue-400",
    borderHover: "hover:border-blue-500/45",
    checkColor: "text-blue-400",
  },
  cyan: {
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    iconBox:
      "border-cyan-500/30 bg-gradient-to-br from-cyan-600/25 to-cyan-400/10 text-cyan-300",
    borderHover: "hover:border-cyan-400/45",
    checkColor: "text-cyan-300",
  },
  teal: {
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    iconBox:
      "border-teal-500/30 bg-gradient-to-br from-teal-600/25 to-teal-400/10 text-teal-300",
    borderHover: "hover:border-teal-400/45",
    checkColor: "text-teal-300",
  },
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    iconBox:
      "border-emerald-500/30 bg-gradient-to-br from-emerald-600/25 to-emerald-400/10 text-emerald-400",
    borderHover: "hover:border-emerald-400/45",
    checkColor: "text-emerald-400",
  },
};

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 border-t border-white/10 bg-[#060b18]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
            Nossas Soluções
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

        {/* Grade de Cards de Serviços */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {SERVICES.map((service) => {
            const styles = ACCENT_STYLES[service.accent];
            return (
              <article
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(16,208,120,0.2)] ${styles.borderHover}`}
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
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-slate-200">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
                    {service.description}
                  </p>

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

                {/* Botão de Ação Específico do Serviço */}
                <div className="mt-8 pt-4">
                  <WhatsAppButton
                    label={`Quero conversar sobre ${service.title}`}
                    customMessage={service.whatsappMessage}
                    variant="outline"
                    className="w-full"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

