import Icon from "@/components/ui/icon";

const reasons = [
  {
    icon: "FileSignature",
    title: "Работа по договору",
    desc: "Фиксируем все условия юридически. Ваши деньги защищены на каждом этапе.",
  },
  {
    icon: "Video",
    title: "Фото и видео отчёт",
    desc: "Присылаем отчёт с аукциона до покупки — видите авто ещё до оплаты.",
  },
  {
    icon: "History",
    title: "Проверка истории",
    desc: "Пробиваем ДТП, пробег, реальных владельцев и сервисную историю.",
  },
  {
    icon: "BadgePercent",
    title: "Фиксированная комиссия",
    desc: "Наше вознаграждение прописано в договоре. Никаких скрытых платежей.",
  },
  {
    icon: "Route",
    title: "Прозрачная логистика",
    desc: "Отслеживаете груз онлайн. Все расходы по доставке и таможне заранее.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Менеджер на связи в Telegram и WhatsApp — отвечаем быстро в любое время.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 section-dark">
      <div className="container max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Наши преимущества</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-16">
          Почему <i className="font-light">выбирают нас</i>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="card-dark rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300 border"
            >
              <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={r.icon} size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{r.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
