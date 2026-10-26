import {
  DIFFERENTIALS,
  PROCESS_STEPS,
  type DifferentialItem,
} from "@/config/site";

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

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="differentials-heading"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28 border-t border-white/10 bg-[#040812]"
    >
      {/* Brilho sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/10 to-emerald-500/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho dos Diferenciais */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Por Que Escolher a NEXA DIGITAL
          </span>
          <h2
            id="differentials-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Compromisso com qualidade,{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              clareza e eficiência
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Unimos design sofisticado, engenharia de software moderna e visão
            prática de negócios para entregar soluções que realmente funcionam no
            seu dia a dia.
          </p>
        </div>

        {/* Grade de Diferenciais */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item) => (
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

        {/* Subseção: Como Funciona (Metodologia de Trabalho) */}
        <div
          id="como-funciona"
          role="region"
          aria-labelledby="process-heading"
          className="mt-24 scroll-mt-24 rounded-3xl border border-white/10 bg-gradient-to-b from-[#091226] to-[#060c1a] p-6 sm:p-10 lg:p-12"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Nosso Processo
            </span>
            <h3
              id="process-heading"
              className="mt-2 text-2xl font-bold text-white sm:text-3xl"
            >
              Como transformamos sua ideia em uma solução digital pronta para operar
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Um fluxo estruturado e sem burocracia para você acompanhar cada
              avanço com tranquilidade.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/35"
              >
                <span className="inline-block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text font-mono text-2xl font-extrabold text-transparent">
                  {item.step}
                </span>
                <h4 className="mt-3 text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

