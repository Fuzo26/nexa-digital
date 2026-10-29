import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-16 overflow-hidden bg-[#030816] pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      {/* Iluminação ambiente discreta integrada ao fundo azul-marinho */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-36 -left-24 h-[440px] w-[440px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute top-1/4 right-[5%] h-[480px] w-[480px] rounded-full bg-cyan-500/12 blur-[160px]" />
        <div className="absolute bottom-0 right-[15%] h-[380px] w-[380px] rounded-full bg-emerald-500/12 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Coluna Esquerda: Etiqueta, Novo Título Compacto, Texto de Apoio e CTAs */}
          <div className="lg:col-span-5">
            {/* Etiqueta discreta acima do título */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span>SOLUÇÕES DIGITAIS SOB MEDIDA</span>
            </div>

            {/* Novo Título Principal: curto, comercial e equilibrado em 2 a 3 linhas */}
            <h1
              id="hero-heading"
              className="mt-5 max-w-lg text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-[3.1rem] leading-[1.15]"
            >
              Sua próxima{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                grande ideia
              </span>{" "}
              começa aqui.
            </h1>

            {/* Texto de Apoio sobre Tecnologia */}
            <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-300">
              Tecnologia completa para impulsionar o seu negócio. Criamos sites,
              aplicativos, softwares e automações para fortalecer sua marca,
              otimizar processos e gerar novas oportunidades.
            </p>

            {/* Botões Comerciais Preservados */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsAppButton
                label="Solicitar Orçamento no WhatsApp"
                variant="primary"
              />
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/25 bg-white/[0.04] px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <span>Conhecer Soluções</span>
                <svg
                  className="h-4 w-4 text-emerald-400"
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

          {/* Coluna Direita: Notebook exibindo o site institucional claro da própria NEXZ DIGITAL */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              {/* Iluminação sutil traseira em azul, ciano e verde */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/25 via-cyan-500/15 to-emerald-500/20 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#030816] shadow-[0_25px_70px_-15px_rgba(6,182,212,0.32)]">
                <Image
                  src="/hero-laptop-nexa-light.jpg"
                  alt="Notebook moderno aberto exibindo na tela clara o site institucional da NEXZ DIGITAL com a logo oficial, cabeçalho, apresentação e serviços de Landing Pages, Aplicativos, Softwares e Automações"
                  width={1376}
                  height={768}
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 672px, 720px"
                  style={{ objectFit: "contain" }}
                  className="h-auto w-full object-contain"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
