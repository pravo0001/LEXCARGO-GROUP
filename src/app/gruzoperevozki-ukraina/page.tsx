import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";
import { servicePageContent } from "@/lib/site-content";

const content = servicePageContent.ukraine;

export const metadata: Metadata = {
  title: "Грузоперевозки Украина",
  description:
    "Грузоперевозки по Украине для B2B и B2C: регулярные рейсы, срочные доставки, контрактная логистика и контроль сроков.",
  alternates: {
    canonical: "/gruzoperevozki-ukraina",
  },
};

export default function UkraineTransportPage() {
  return (
    <ServicePage
      benefits={content.benefits}
      description={content.description}
      eyebrow="SEO landing"
      highlights={content.highlights}
      title={content.title}
    />
  );
}
