import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  getServicePageMetadata,
  SERVICE_PAGES,
} from "@/config/services-pages";

export const metadata: Metadata = getServicePageMetadata("criacao-de-sites");

export default function CriacaoDeSitesPage() {
  return <ServicePageTemplate page={SERVICE_PAGES["criacao-de-sites"]} />;
}

