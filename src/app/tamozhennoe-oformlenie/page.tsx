import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";
import { servicePageContent } from "@/lib/site-content";

const content = servicePageContent.customs;

export const metadata: Metadata = {
  title: "Таможенное оформление",
  description:
    "Таможенное оформление от LEXCARGO GROUP: подготовка документов, сопровождение декларирования и снижение риска задержек на границе.",
  alternates: {
    canonical: "/tamozhennoe-oformlenie",
  },
};

export default function CustomsPage() {
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
