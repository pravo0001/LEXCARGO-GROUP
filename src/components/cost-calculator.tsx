"use client";

import { useMemo, useState } from "react";

import { calculatorCargoTypes } from "@/lib/site-content";

const baseRates: Record<string, number> = {
  "Генеральный груз": 1.15,
  "Сборный груз": 0.9,
  "Паллетированный груз": 1.05,
  "Хрупкий груз": 1.35,
  "Температурный режим": 1.55,
  "Опасный груз": 1.85,
};

export function CostCalculator() {
  const [weight, setWeight] = useState(450);
  const [volume, setVolume] = useState(6);
  const [from, setFrom] = useState("Киев");
  const [to, setTo] = useState("Варшава");
  const [cargoType, setCargoType] = useState(calculatorCargoTypes[0]);

  const estimate = useMemo(() => {
    const distanceFactor = from.toLowerCase() === to.toLowerCase() ? 1 : 1.4;
    const densityFactor = weight / Math.max(volume, 1);
    const typeRate = baseRates[cargoType] ?? 1;
    const total = Math.round((weight * 0.18 + volume * 42 + densityFactor * 0.11) * distanceFactor * typeRate);

    return new Intl.NumberFormat("ru-RU").format(total);
  }, [cargoType, from, to, volume, weight]);

  return (
    <div className="premium-panel p-6 md:p-8" id="calculator">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Калькулятор стоимости</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Предварительный расчет за 5 минут</h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          B2B / B2C
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-zinc-300">
          Вес, кг
          <input
            className="input-dark"
            min={1}
            type="number"
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value))}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-zinc-300">
          Объем, м3
          <input
            className="input-dark"
            min={1}
            type="number"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-zinc-300">
          Откуда
          <input className="input-dark" value={from} onChange={(event) => setFrom(event.target.value)} />
        </label>
        <label className="flex flex-col gap-2 text-sm text-zinc-300">
          Куда
          <input className="input-dark" value={to} onChange={(event) => setTo(event.target.value)} />
        </label>
        <label className="md:col-span-2 flex flex-col gap-2 text-sm text-zinc-300">
          Тип груза
          <select className="input-dark" value={cargoType} onChange={(event) => setCargoType(event.target.value)}>
            {calculatorCargoTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-4 rounded-3xl border border-[#af8f56]/20 bg-black/40 p-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#af8f56]">Предварительная ставка</p>
          <p className="mt-2 text-3xl font-semibold text-white">от {estimate} грн</p>
          <p className="mt-2 text-sm text-zinc-400">
            Итоговая цена зависит от маршрута, срочности, типа кузова, условий таможни и страхования.
          </p>
        </div>
        <a className="button-primary whitespace-nowrap" href="#contact">
          Связаться с менеджером
        </a>
      </div>
    </div>
  );
}
