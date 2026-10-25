"use client";

import { useState } from "react";
import { INSTAGRAM_CONFIG } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

const INTEREST_OPTIONS = [
  {
    id: "landing-page",
    label: "Landing Page",
    message:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em criar uma landing page profissional para minha empresa. Gostaria de conhecer as opções e solicitar um orçamento.",
  },
  {
    id: "aplicativo",
    label: "Aplicativo",
    message:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em desenvolver um aplicativo. Gostaria de apresentar minha ideia e solicitar um orçamento.",
  },
  {
    id: "software",
    label: "Software Personalizado",
    message:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em desenvolver um software personalizado para meu negócio. Gostaria de conversar sobre meu projeto.",
  },
  {
    id: "automacao",
    label: "Automações",
    message:
      "Olá! Vim pela landing page da NEXA DIGITAL e tenho interesse em automatizar processos da minha empresa. Gostaria de conhecer as soluções disponíveis.",
  },
  {
    id: "geral",
    label: "Outro / Dúvida Geral",
    message:
      "Olá! Vim pelo site da NEXA DIGITAL e gostaria de conversar com um especialista sobre uma solução digital.",
  },
];

export function CtaSection() {
  const [selectedId, setSelectedId] = useState<string>("landing-page");

  const activeOption =
    INTEREST_OPTIONS.find((opt) => opt.id === selectedId) ?? INTEREST_OPTIONS[0];

  return (
    <section
      id="contato"
      aria-labelledby="cta-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 border-t border-white/10 bg-[#050a16]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-[#0b1736] via-[#081226] to-[#061e24] p-8 sm:p-12 lg:p-16 shadow-[0_25px_70px_-20px_rgba(21,101,216,0.35)]">
          {/* Efeitos luminosos decorativos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-600/25 blur-[90px]"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Texto Comercial */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                Pronto para dar o próximo passo?
              </span>
              <h2
                id="cta-heading"
                className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Vamos construir a solução ideal para o seu negócio
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                Conte para a <strong className="text-white">NEXA DIGITAL</strong>{" "}
                qual é a sua necessidade atual. Nosso atendimento é direto,
                consultivo e focado em encontrar o melhor caminho tecnológico
                para sua empresa ou atividade profissional.
              </p>

              {/* Seletor rápido de interesse para personalizar o atendimento */}
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Selecione o que você procura para personalizar a mensagem:
                </p>
                <div
                  role="group"
                  aria-label="Selecione o tipo de solução desejada"
                  className="mt-3 flex flex-wrap gap-2"
                >
                  {INTEREST_OPTIONS.map((option) => {
                    const isSelected = option.id === selectedId;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setSelectedId(option.id)}
                        aria-pressed={isSelected}
                        className={`rounded-xl border px-3.5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-emerald-400 ${
                          isSelected
                            ? "border-emerald-400 bg-emerald-500/20 text-white shadow-[0_0_20px_-5px_rgba(16,208,120,0.5)]"
                            : "border-white/15 bg-white/[0.04] text-slate-300 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Card de Ação Direta */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-[#050914]/85 p-6 sm:p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Atendimento Comercial
                    </h3>
                    <p className="text-xs text-slate-400">
                      Canal direto via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    Mensagem pré-configurada:
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm italic text-slate-300">
                    &ldquo;{activeOption.message}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <WhatsAppButton
                    label="Iniciar Conversa no WhatsApp"
                    customMessage={activeOption.message}
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>Instagram Oficial</span>
                  </a>
                </div>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Atendimento sem compromisso para entender seu projeto e
                  apresentar a melhor proposta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

