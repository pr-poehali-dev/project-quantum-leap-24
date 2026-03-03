import { useState } from "react";

const countries = [
  {
    flag: "🇨🇳",
    name: "Китай",
    brands: ["BYD", "Geely", "Li Auto", "Chery", "Haval"],
    perks: ["Электромобили", "Новые технологии", "Лучшее соотношение цена/качество", "Гарантия от завода"],
    accent: "from-red-600/20 to-transparent",
    border: "border-red-600/30 hover:border-red-500/60",
  },
  {
    flag: "🇰🇷",
    name: "Корея",
    brands: ["Hyundai", "Kia", "Genesis", "SsangYong"],
    perks: ["Премиум сборка", "Богатая комплектация", "Отличный сервис", "Надёжность"],
    accent: "from-blue-600/20 to-transparent",
    border: "border-blue-600/30 hover:border-blue-500/60",
  },
  {
    flag: "🇯🇵",
    name: "Япония",
    brands: ["Toyota", "Honda", "Nissan", "Lexus", "Mazda"],
    perks: ["Легендарная надёжность", "Правый руль", "Экономичность", "Долгий ресурс"],
    accent: "from-white/10 to-transparent",
    border: "border-white/20 hover:border-white/40",
  },
];

export function Countries() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="py-24 section-dark">
      <div className="container max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Страны импорта</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-16">
          Из каких стран <i className="font-light">возим</i>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {countries.map((c, i) => (
            <div
              key={c.name}
              className={`card-dark rounded-2xl p-8 cursor-pointer transition-all duration-300 bg-gradient-to-b ${c.accent} ${c.border} border`}
              onMouseEnter={() => setActive(i)}
            >
              <div className="text-5xl mb-6">{c.flag}</div>
              <h3 className="text-2xl font-sentient mb-2">{c.name}</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {c.brands.map((b) => (
                  <span
                    key={b}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-white/20 text-foreground/70"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {c.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
