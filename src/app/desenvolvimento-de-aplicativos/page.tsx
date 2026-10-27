import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  getServicePageMetadata,
  SERVICE_PAGES,
} from "@/config/services-pages";

export const metadata: Metadata = getServicePageMetadata(
  "desenvolvimento-de-aplicativos"
);

export default function DesenvolvimentoDeAplicativosPage() {
  return (
    <ServicePageTemplate
      page={SERVICE_PAGES["desenvolvimento-de-aplicativos"]}
    />
  );
}

