import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";
import Icon from "./ui/icon";

const perks = [
  { icon: "ShieldCheck", label: "Работа по договору" },
  { icon: "Clock", label: "45–60 дней под ключ" },
  { icon: "BadgePercent", label: "Фиксированная комиссия" },
  { icon: "Globe", label: "3 страны импорта" },
];

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">КИТАЙ · ЯПОНИЯ · КОРЕЯ</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient leading-tight">
          Привезём авто из Азии <br />
          <i className="font-light">под ключ</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-6 max-w-[480px] mx-auto">
          Подбираем, проверяем, доставляем и растамаживаем — вы получаете готовый автомобиль
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <a href="#calc">
            <Button
              size="lg"
              className="text-sm"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Рассчитать стоимость]
            </Button>
          </a>
          <a href="#cars">
            <Button
              size="lg"
              variant="outline"
              className="text-sm border-white/20 hover:border-white/40 bg-transparent text-white hover:bg-white/5"
            >
              Подобрать авто →
            </Button>
          </a>
        </div>

        {/* Perks bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 px-4">
          {perks.map((p) => (
            <div key={p.label} className="flex items-center gap-2 text-foreground/50">
              <Icon name={p.icon} size={14} className="text-primary" />
              <span className="font-mono text-xs">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
