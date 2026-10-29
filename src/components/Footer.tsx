import Link from "next/link";
import {
  FOOTER_SERVICE_LINKS,
  INSTAGRAM_CONFIG,
  NAV_ITEMS,
} from "@/config/site";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer
      aria-label="Rodapé institucional"
      className="border-t border-white/10 bg-[#03060e] text-slate-400"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Coluna 1: Marca e Posicionamento */}
          <div className="lg:col-span-5">
            <BrandLogo variant="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A <strong className="font-semibold text-slate-200">NEXZ DIGITAL</strong>{" "}
              é uma marca de tecnologia especializada no desenvolvimento de
              landing pages, aplicativos, softwares personalizados e automações
              para pequenas empresas e profissionais autônomos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                label="Falar pelo WhatsApp"
                variant="secondary"
              />
              <a
                href={INSTAGRAM_CONFIG.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar o Instagram oficial da NEXZ DIGITAL (${INSTAGRAM_CONFIG.handle})`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
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
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Soluções Digitais
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha divisória e direitos autorais */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; NEXZ DIGITAL. Todos os direitos reservados.
          </p>
          <p className="text-slate-500">
            Tecnologia, design e performance para impulsionar negócios.
          </p>
        </div>
      </div>
    </footer>
  );
}
