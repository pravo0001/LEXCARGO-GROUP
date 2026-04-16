import Link from "next/link";

import { companyPhone } from "@/lib/site-content";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  benefits: string[];
};

export function ServicePage({
  eyebrow,
  title,
  description,
  highlights,
  benefits,
}: ServicePageProps) {
  return (
    <main className="relative overflow-hidden">
      <section className="section-shell pb-12">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(175,143,86,0.2),_transparent_60%)]" />
        <div className="container-wide relative">
          <div className="max-w-4xl pt-16 md:pt-24">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="button-primary" href={`tel:${companyPhone.replace(/[^\d+]/g, "")}`}>
                Получить расчет
              </a>
              <Link className="button-secondary" href="/#contact">
                Связаться с менеджером
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="premium-panel p-8">
              <h2 className="text-2xl font-semibold text-white">Что входит в услугу</h2>
              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/4 p-4 text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-panel p-8">
              <h2 className="text-2xl font-semibold text-white">Почему это удобно бизнесу</h2>
              <div className="mt-6 space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#af8f56]/15 bg-black/30 p-4 text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 premium-panel flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">LEXCARGO GROUP</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Логистика, которая усиливает ваш бизнес</h2>
              <p className="mt-4 max-w-2xl text-zinc-300">
                Если важны сроки, контроль и управляемый сервис, мы подключаем транспорт, документы и коммуникацию в
                одну систему.
              </p>
            </div>
            <Link className="button-primary" href="/#calculator">
              Открыть калькулятор
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
