import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "header" | "footer" | "showcase";
  className?: string;
}

export function BrandLogo({
  variant = "header",
  className = "",
}: BrandLogoProps) {
  if (variant === "showcase") {
    return (
      <div
        className={`relative aspect-[266/226] w-full overflow-hidden rounded-2xl p-2 ${className}`}
      >
        <Image
          src="/nexz-logo-transparent.png"
          alt="Logo oficial da NEXZ DIGITAL"
          width={266}
          height={226}
          sizes="(max-width: 1024px) 100vw, 320px"
          style={{ objectFit: "contain" }}
          className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(0,229,255,0.3)]"
          priority
        />
      </div>
    );
  }

  return (
    <Link
      href="/"
      translate="no"
      aria-label="NEXZ DIGITAL - Ir para o início"
      className={`notranslate group inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 ${className}`}
    >
      {/* Símbolo oficial com fundo transparente integrado diretamente ao cabeçalho escuro */}
      <div
        className={`relative shrink-0 aspect-[266/226] transition-transform duration-300 group-hover:scale-105 ${
          variant === "header"
            ? "h-10 w-[47px] sm:h-11 sm:w-[52px]"
            : "h-12 w-[56px]"
        }`}
      >
        <Image
          src="/nexz-logo-transparent.png"
          alt="Logo oficial da NEXZ DIGITAL"
          width={266}
          height={226}
          sizes="112px"
          style={{ objectFit: "contain" }}
          className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(16,208,120,0.35)]"
          priority={variant === "header"}
        />
      </div>

      <div className="flex flex-col justify-center" translate="no">
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base lg:text-lg font-extrabold tracking-[0.14em] text-white leading-none">
            NEXZ DIGITAL
          </span>
          <span
            className="inline-block h-2 w-2 shrink-0 rotate-45 bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_10px_rgba(34,211,238,0.75)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
