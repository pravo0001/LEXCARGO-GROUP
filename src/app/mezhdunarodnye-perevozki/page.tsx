import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";
import { servicePageContent } from "@/lib/site-content";

const content = servicePageContent.international;

export const metadata: Metadata = {
  title: "Международные перевозки",
  description:
    "Международные перевозки по Украине и Европе от LEXCARGO GROUP: импорт, экспорт, сборные и выделенные рейсы с полным сопровождением.",
  alternates: {
    canonical: "/mezhdunarodnye-perevozki",
  },
};

export default function InternationalTransportPage() {
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
