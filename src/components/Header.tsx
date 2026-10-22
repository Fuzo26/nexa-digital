"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/config/site";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      translate="no"
      className="notranslate sticky top-0 z-50 w-full border-b border-blue-500/15 bg-[#030816]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo variant="header" />

        {/* Navegação Desktop Compacta */}
        <nav
          aria-label="Navegação principal"
          translate="no"
          className="notranslate hidden md:flex items-center gap-1 lg:gap-1.5"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              translate="no"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/[0.06] hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão de Contato Compacto Desktop */}
        <div className="hidden md:flex items-center">
          <WhatsAppButton
            label="Falar com Especialista"
            variant="compact"
          />
        </div>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            mobileMenuOpen
              ? "Fechar menu de navegação"
              : "Abrir menu de navegação"
          }
          className="inline-flex md:hidden items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] p-2 text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400"
        >
          {mobileMenuOpen ? (
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
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
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          translate="no"
          className="notranslate border-t border-white/10 bg-[#040a1a]/95 px-4 pt-3 pb-5 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  translate="no"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-emerald-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-white/10">
            <WhatsAppButton
              label="Solicitar Atendimento no WhatsApp"
              variant="primary"
              className="w-full"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
