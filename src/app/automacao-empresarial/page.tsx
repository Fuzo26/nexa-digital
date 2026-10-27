import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  getServicePageMetadata,
  SERVICE_PAGES,
} from "@/config/services-pages";

export const metadata: Metadata = getServicePageMetadata(
  "automacao-empresarial"
);

export default function AutomacaoEmpresarialPage() {
  return <ServicePageTemplate page={SERVICE_PAGES["automacao-empresarial"]} />;
}

