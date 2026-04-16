import { companyTelegram, companyWhatsApp } from "@/lib/site-content";

export function FloatingChat() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        className="flex items-center justify-center rounded-full border border-white/10 bg-[#111724]/90 px-4 py-3 text-sm font-medium text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur"
        href={companyWhatsApp}
        rel="noreferrer"
        target="_blank"
      >
        Онлайн-чат WhatsApp
      </a>
      <a
        className="flex items-center justify-center rounded-full border border-[#af8f56]/30 bg-[#af8f56] px-4 py-3 text-sm font-semibold text-[#09111f] shadow-[0_20px_50px_rgba(175,143,86,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
        href={companyTelegram}
        rel="noreferrer"
        target="_blank"
      >
        Telegram менеджер
      </a>
    </div>
  );
}
