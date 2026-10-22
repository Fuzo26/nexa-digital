import { NAV_ITEMS, SERVICES } from "@/config/site";
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
              A <strong className="font-semibold text-slate-200">NEXA DIGITAL</strong>{" "}
              é uma marca de tecnologia especializada no desenvolvimento de
              landing pages, aplicativos, softwares personalizados e automações
              para pequenas empresas e profissionais autônomos.
            </p>
            <div className="mt-6">
              <WhatsAppButton
                label="Falar pelo WhatsApp"
                variant="secondary"
              />
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
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicos"
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha divisória e direitos autorais */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; NEXA DIGITAL. Todos os direitos reservados.
          </p>
          <p className="text-slate-500">
            Tecnologia, design e performance para impulsionar negócios.
          </p>
        </div>
      </div>
    </footer>
  );
}
