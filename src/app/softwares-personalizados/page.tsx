import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  getServicePageMetadata,
  SERVICE_PAGES,
} from "@/config/services-pages";

export const metadata: Metadata = getServicePageMetadata(
  "softwares-personalizados"
);

export default function SoftwaresPersonalizadosPage() {
  return (
    <ServicePageTemplate page={SERVICE_PAGES["softwares-personalizados"]} />
  );
}

