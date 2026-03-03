import Icon from "@/components/ui/icon";

const steps = [
  { icon: "FileText", num: "01", title: "Заявка", desc: "Оставляете заявку — рассказываете о желаемом авто, бюджете и сроках" },
  { icon: "Search", num: "02", title: "Подбор вариантов", desc: "Находим 3–5 подходящих автомобилей на аукционах и у дилеров" },
  { icon: "ShieldCheck", num: "03", title: "Проверка", desc: "Проводим полную диагностику: история, пробег, состояние кузова" },
  { icon: "CreditCard", num: "04", title: "Покупка", desc: "Оформляем сделку, вы переводите оплату — фиксируем всё договором" },
  { icon: "Ship", num: "05", title: "Доставка", desc: "Транспортируем авто морем или ж/д до порта в России" },
  { icon: "FileCheck", num: "06", title: "Растаможка", desc: "Берём на себя все таможенные процедуры и оформление ЭПТС" },
  { icon: "Car", num: "07", title: "Передача", desc: "Выдаём готовый автомобиль с документами в вашем городе" },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-black">
      <div className="container max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Процесс</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-16">
          Как мы <i className="font-light">работаем</i>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex items-start gap-8 md:gap-0 group ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[18px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-black group-hover:bg-primary transition-colors duration-300 z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="card-dark rounded-xl p-6 group-hover:border-primary/40 transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg gradient-red flex items-center justify-center flex-shrink-0">
                        <Icon name={step.icon} size={18} className="text-white" />
                      </div>
                      <span className="font-mono text-xs text-foreground/30">{step.num}</span>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Empty side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}