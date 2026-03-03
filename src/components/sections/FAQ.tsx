import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Сколько занимает доставка?",
    a: "Из Китая — 45–60 дней, из Кореи — 35–50 дней, из Японии — 30–45 дней. Сроки включают транспортировку, таможню и оформление документов.",
  },
  {
    q: "Есть ли гарантия на автомобиль?",
    a: "Новые авто из Китая идут с заводской гарантией. На японские и корейские автомобили мы предоставляем гарантию на соответствие заявленному состоянию.",
  },
  {
    q: "Какие документы я получу?",
    a: "Полный пакет: ПТС (ЭПТС), СТС, договор купли-продажи, таможенная декларация. Авто полностью готово к постановке на учёт в ГИБДД.",
  },
  {
    q: "Можно ли купить авто в кредит?",
    a: "Да, работаем с партнёрскими банками. Можем оформить автокредит или рассрочку. Уточните детали у менеджера.",
  },
  {
    q: "Как я могу следить за процессом?",
    a: "Предоставляем трекинг груза, присылаем фото и видео на каждом этапе — от аукциона до таможни.",
  },
  {
    q: "Вы работаете по всей России?",
    a: "Да, доставляем в любой город России. Цена доставки от порта до вашего города рассчитывается индивидуально.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-12">
          Частые <i className="font-light">вопросы</i>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card-dark rounded-xl border transition-all duration-300 ${
                open === i ? "border-primary/30" : "border-white/5"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold pr-4">{faq.q}</span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={18}
                  className={`flex-shrink-0 transition-colors ${open === i ? "text-primary" : "text-foreground/40"}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-foreground/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
