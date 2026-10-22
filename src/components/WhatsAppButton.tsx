import { getWhatsAppUrl, WHATSAPP_CONFIG } from "@/config/site";

interface WhatsAppButtonProps {
  label: string;
  customMessage?: string;
  variant?: "primary" | "secondary" | "outline" | "compact";
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  label,
  customMessage,
  variant = "primary",
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(customMessage);
  const hasConfiguredNumber =
    WHATSAPP_CONFIG.phoneNumber.replace(/\D/g, "").length > 0;

  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 active:scale-[0.99]";

  const variantStyles = {
    primary:
      "rounded-xl bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 px-6 py-3.5 text-sm sm:text-base text-white shadow-[0_10px_30px_-10px_rgba(16,208,120,0.55)] hover:shadow-[0_14px_36px_-8px_rgba(16,208,120,0.75)] hover:brightness-110",
    secondary:
      "rounded-xl border border-emerald-400/35 bg-emerald-500/10 px-6 py-3.5 text-sm sm:text-base text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/60",
    outline:
      "rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-slate-200 hover:border-emerald-400/50 hover:bg-white/[0.07] hover:text-white",
    compact:
      "rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2.5 text-xs sm:text-sm text-white shadow-[0_6px_20px_-6px_rgba(16,208,120,0.5)] hover:brightness-110",
  };

  return (
    <a
      href={href}
      target={hasConfiguredNumber ? "_blank" : undefined}
      rel={hasConfiguredNumber ? "noopener noreferrer" : undefined}
      data-whatsapp-ready={hasConfiguredNumber ? "configured" : "pending-number"}
      aria-label={`${label} via WhatsApp`}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {showIcon && (
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      )}
      <span>{label}</span>
    </a>
  );
}

