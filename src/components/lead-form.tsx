"use client";

import { FormEvent, useState } from "react";

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="premium-panel p-6 md:p-8">
      <p className="eyebrow">Быстрая заявка</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">Получить расчет за 5 минут</h3>
      <p className="mt-3 max-w-xl text-sm text-zinc-300">
        Оставьте маршрут и параметры груза. Менеджер уточнит детали, предложит формат перевозки и подготовит ставку.
      </p>

      <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <input className="input-dark" type="text" placeholder="Ваше имя / компания" required />
        <input className="input-dark" type="tel" placeholder="Телефон / WhatsApp" required />
        <input className="input-dark md:col-span-2" type="text" placeholder="Маршрут: откуда -> куда" required />
        <textarea
          className="input-dark md:col-span-2 min-h-32 resize-none"
          placeholder="Вес, объем, тип груза, желаемая дата отправки"
          required
        />
        <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-400">
            Опционально: можно подключить отправку лидов в CRM через webhook, email или Telegram.
          </p>
          <button className="button-primary" type="submit">
            Отправить запрос
          </button>
        </div>
      </form>

      {isSubmitted ? (
        <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
          Заявка принята в демо-режиме. Для реальной отправки достаточно подключить CRM, почту или форму-обработчик.
        </div>
      ) : null}
    </div>
  );
}
