import { CtaSection } from "@/components/CtaSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#040812] text-slate-50">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-emerald-500 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <ServicesSection />
        <DifferentialsSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
