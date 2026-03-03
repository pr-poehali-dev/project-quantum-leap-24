const cars = [
  {
    flag: "🇨🇳",
    model: "BYD Seal",
    year: "2024",
    price: "от 3 200 000 ₽",
    delivery: "45–60 дней",
    tag: "Электро",
  },
  {
    flag: "🇯🇵",
    model: "Toyota Alphard",
    year: "2023",
    price: "от 8 500 000 ₽",
    delivery: "30–45 дней",
    tag: "Минивэн",
  },
  {
    flag: "🇰🇷",
    model: "Genesis GV80",
    year: "2024",
    price: "от 6 800 000 ₽",
    delivery: "35–50 дней",
    tag: "Премиум SUV",
  },
  {
    flag: "🇨🇳",
    model: "Li Auto L9",
    year: "2024",
    price: "от 5 100 000 ₽",
    delivery: "45–60 дней",
    tag: "Гибрид",
  },
  {
    flag: "🇯🇵",
    model: "Lexus LX 600",
    year: "2023",
    price: "от 12 000 000 ₽",
    delivery: "30–45 дней",
    tag: "Люкс",
  },
  {
    flag: "🇰🇷",
    model: "Kia EV6 GT",
    year: "2024",
    price: "от 4 500 000 ₽",
    delivery: "35–50 дней",
    tag: "Электро",
  },
];

export function Cars() {
  return (
    <section id="cars" className="py-24 bg-black">
      <div className="container max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Примеры авто</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">
          Уже привезли <i className="font-light">клиентам</i>
        </h2>
        <p className="text-foreground/50 font-mono text-sm mb-12">
          Реальные примеры — цена под ключ в России включая таможню
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.model}
              className="card-dark rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 border"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                <span className="text-7xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-110 transform transition-transform">
                  🚗
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 text-2xl">{car.flag}</span>
                <span className="absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded-full border border-primary/40 text-primary">
                  {car.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{car.model}</h3>
                <p className="font-mono text-xs text-foreground/40 mb-4">{car.year} год</p>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-xs text-foreground/40 mb-1">Цена в РФ</p>
                    <p className="text-lg font-semibold text-primary">{car.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-foreground/40 mb-1">Срок доставки</p>
                    <p className="font-mono text-sm text-foreground/70">{car.delivery}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
