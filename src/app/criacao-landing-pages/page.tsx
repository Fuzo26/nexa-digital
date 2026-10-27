import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  getServicePageMetadata,
  SERVICE_PAGES,
} from "@/config/services-pages";

export const metadata: Metadata = getServicePageMetadata(
  "criacao-landing-pages"
);

export default function CriacaoLandingPagesPage() {
  return <ServicePageTemplate page={SERVICE_PAGES["criacao-landing-pages"]} />;
}

