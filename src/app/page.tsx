import Link from "next/link";

import { CostCalculator } from "@/components/cost-calculator";
import { FloatingChat } from "@/components/floating-chat";
import { LeadForm } from "@/components/lead-form";
import { ShareActions } from "@/components/share-actions";
import {
  advantages,
  caseStudies,
  companyAddress,
  companyEmail,
  companyName,
  companyPhone,
  companyTelegram,
  companyWhatsApp,
  coreMetrics,
  industries,
  services,
  slogans,
  socialCards,
  testimonials,
} from "@/lib/site-content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: companyName,
    description:
      "Грузоперевозки по Украине и Европе, международная логистика, таможенное оформление, складская логистика и экспресс-доставка.",
    areaServed: ["Украина", "Европа"],
    telephone: companyPhone,
    email: companyEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Киев",
      addressCountry: "UA",
    },
    serviceType: ["Международные перевозки", "Грузоперевозки по Украине", "Таможенное оформление"],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <main className="overflow-hidden">
        <section className="section-shell pb-10 md:pb-16">
          <div className="container-wide">
            <header className="premium-panel flex items-center justify-between px-5 py-4 md:px-7">
              <div>
                <p className="font-heading text-lg font-semibold tracking-[0.18em] text-white">{companyName}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-zinc-400">
                  Premium cargo logistics
                </p>
              </div>
              <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
                <a href="#about">О компании</a>
                <a href="#services">Услуги</a>
                <a href="#advantages">Преимущества</a>
                <a href="#cases">Кейсы</a>
                <a href="#contact">Контакты</a>
              </nav>
            </header>

            <div className="hero-grid relative pt-8 md:pt-12">
              <div className="relative">
                <div className="orb left-0 top-10 h-28 w-28 bg-[#af8f56]/20" />
                <div className="orb right-10 top-32 h-20 w-20 bg-sky-400/10 [animation-delay:1.6s]" />

                <p className="eyebrow">Надежные грузоперевозки по Украине и Европе</p>
                <h1 className="font-heading mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                  Логистика высокого уровня для компаний, которым важны сроки, контроль и репутация.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                  {companyName} берет на себя маршруты, документооборот, таможню, склад и коммуникацию с клиентом так,
                  чтобы каждая поставка выглядела как часть сильной системы, а не как цепочка случайных подрядчиков.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a className="button-primary" href="#calculator">
                    Рассчитать стоимость
                  </a>
                  <a className="button-secondary" href="#contact">
                    Получить расчет за 5 минут
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {slogans.map((slogan) => (
                    <div
                      key={slogan}
                      className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-zinc-300"
                    >
                      {slogan}
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-panel relative p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(175,143,86,0.18),_transparent_45%)]" />
                <div className="route-line" />
                <div className="relative grid gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-white/8 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Маршруты</p>
                      <p className="mt-3 text-2xl font-semibold text-white">UA {"->"} EU</p>
                    </div>
                    <div className="rounded-3xl border border-[#af8f56]/15 bg-black/35 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Контроль</p>
                      <p className="mt-3 text-2xl font-semibold text-white">24/7</p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/8 bg-[#0a1220]/90 p-6">
                    <p className="eyebrow">LEXCARGO GROUP</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">Сервис уровня международной корпорации</h2>
                    <p className="mt-4 text-zinc-300">
                      Автотранспорт, склад, порт, авиа-решения и таможня объединены в одну понятную точку управления.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {coreMetrics.map((metric) => (
                      <div key={metric.label} className="rounded-3xl border border-white/8 bg-white/4 p-5">
                        <p className="text-3xl font-semibold text-white">{metric.value}</p>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0" id="about">
          <div className="container-wide grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="premium-panel p-8 md:p-10">
              <p className="eyebrow">О компании</p>
              <h2 className="font-heading mt-3 text-4xl font-semibold text-white">LEXCARGO GROUP строит логистику как актив бизнеса</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Мы работаем на стыке операционной точности и премиального клиентского сервиса. Для нас логистика не
                заканчивается подачей транспорта: мы отвечаем за прогнозируемый результат, репутацию перед вашим
                клиентом и спокойствие вашей команды.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">История</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Масштабируем решения от регулярных рейсов по Украине до международных цепочек поставок.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">Миссия</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Делать доставку предсказуемой, прозрачной и достойной уровня сильного бренда.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">Доверие</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Нас выбирают за дисциплину процессов, аккуратность в документах и ответственность за результат.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-panel p-8 md:p-10">
              <p className="eyebrow">Для кого мы работаем</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">B2B и B2C логистика с единым стандартом сервиса</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm text-zinc-200"
                  >
                    {industry}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.75rem] border border-[#af8f56]/20 bg-[#af8f56]/8 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-[#c6a46b]">УТП</p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Один подрядчик закрывает груз, маршрут, документы, контроль статуса и коммуникацию с получателем.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell" id="services">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="eyebrow">Услуги</p>
              <h2 className="font-heading mt-3 text-4xl font-semibold text-white">Логистические решения под задачи разного масштаба</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-300">
                От точечной доставки до комплексного управления цепочкой поставок: формируем сервис вокруг результата,
                а не вокруг одного вида транспорта.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="premium-panel group p-7">
                  <p className="eyebrow">Service</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{service.short}</p>
                  <Link
                    className="mt-8 inline-flex text-sm font-semibold text-[#c9aa72] group-hover:translate-x-1"
                    href={service.slug}
                  >
                    Подробнее {"->"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0" id="advantages">
          <div className="container-wide grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="premium-panel p-8 md:p-10">
              <p className="eyebrow">Преимущества</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Почему нам доверяют дорогие и чувствительные грузы</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                В премиальной логистике важно не только доставить, но и не создать лишний шум для бизнеса. Поэтому мы
                строим дисциплину, контроль и коммуникацию на каждом этапе.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {advantages.map((item) => (
                <div key={item.title} className="premium-panel p-7">
                  <div className="mb-5 h-12 w-12 rounded-2xl border border-[#af8f56]/20 bg-[#af8f56]/10" />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="calculator">
          <div className="container-wide">
            <CostCalculator />
          </div>
        </section>

        <section className="section-shell pt-0" id="cases">
          <div className="container-wide grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="premium-panel p-8 md:p-10">
              <p className="eyebrow">Отзывы и кейсы</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Результат, за который нас рекомендуют</h2>
              <div className="mt-8 space-y-4">
                {testimonials.map((item) => (
                  <div key={item.company} className="rounded-3xl border border-white/8 bg-white/4 p-5">
                    <p className="text-base leading-7 text-zinc-200">{item.text}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#af8f56]">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-panel p-8 md:p-10">
              <p className="eyebrow">Кейсы</p>
              <div className="mt-6 space-y-4">
                {caseStudies.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/8 bg-black/20 p-6">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{item.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="container-wide">
            <div className="premium-panel p-8 md:p-10">
              <p className="eyebrow">Контент для соцсетей</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Блоки, которые легко превращаются в Facebook и Instagram контент</h2>
              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {socialCards.map((card) => (
                  <div key={card.title} className="rounded-[1.75rem] border border-white/8 bg-white/4 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">{card.title}</p>
                    <p className="mt-4 text-base leading-7 text-zinc-200">{card.caption}</p>
                    <ShareActions caption={card.caption} title={card.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0" id="contact">
          <div className="container-wide grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="premium-panel p-8 md:p-10">
              <p className="eyebrow">Контакты</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Обсудим маршрут, сроки и формат перевозки</h2>
              <div className="mt-8 space-y-5 text-zinc-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">Телефон</p>
                  <a className="mt-2 block text-xl text-white" href={`tel:${companyPhone.replace(/[^\d+]/g, "")}`}>
                    {companyPhone}
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">Telegram / WhatsApp</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a className="button-secondary" href={companyTelegram} rel="noreferrer" target="_blank">
                      Telegram
                    </a>
                    <a className="button-secondary" href={companyWhatsApp} rel="noreferrer" target="_blank">
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">Email</p>
                  <a className="mt-2 block text-white" href={`mailto:${companyEmail}`}>
                    {companyEmail}
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#af8f56]">Карта и география</p>
                  <p className="mt-2 leading-7">{companyAddress}</p>
                  <div className="mt-4 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(175,143,86,0.08))] p-6">
                    <p className="text-sm leading-7 text-zinc-200">
                      Основной хаб: Киев. Работаем по Украине, Польше, Германии, Чехии, странам Балтии и другим
                      европейским направлениям.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </section>
      </main>

      <FloatingChat />
    </>
  );
}
