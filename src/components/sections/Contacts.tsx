import Icon from "@/components/ui/icon";

export function Contacts() {
  return (
    <section id="contact" className="py-24 section-dark">
      <div className="container max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Контакты</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-16">
          Свяжитесь <i className="font-light">с нами</i>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <a
              href="tel:+78001234567"
              className="flex items-center gap-5 card-dark rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 gradient-red rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name="Phone" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-mono text-xs text-foreground/40 mb-1">Телефон</p>
                <p className="text-lg font-semibold">+7 (800) 123-45-67</p>
              </div>
            </a>

            <a
              href="https://t.me/asiaautoimport"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 card-dark rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 gradient-red rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name="Send" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-mono text-xs text-foreground/40 mb-1">Telegram</p>
                <p className="text-lg font-semibold">@asiaautoimport</p>
              </div>
            </a>

            <a
              href="https://wa.me/78001234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 card-dark rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 gradient-red rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-mono text-xs text-foreground/40 mb-1">WhatsApp</p>
                <p className="text-lg font-semibold">+7 (800) 123-45-67</p>
              </div>
            </a>

            <div className="flex items-center gap-5 card-dark rounded-xl p-6 border border-white/5">
              <div className="w-12 h-12 gradient-red rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-mono text-xs text-foreground/40 mb-1">Режим работы</p>
                <p className="text-lg font-semibold">Пн–Вс, 9:00 – 21:00</p>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="card-dark rounded-2xl p-10 border border-white/5 flex flex-col justify-center">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-sentient mb-4">
              Готовы подобрать<br />
              <i className="font-light">ваш автомобиль?</i>
            </h3>
            <p className="text-foreground/60 text-sm mb-8 leading-relaxed">
              Оставьте заявку — менеджер свяжется в течение 30 минут, 
              проконсультирует и подберёт варианты под ваш бюджет.
            </p>

            <div className="space-y-3">
              <a
                href="https://t.me/asiaautoimport"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl gradient-red text-white font-mono text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <Icon name="Send" size={16} />
                Написать в Telegram
              </a>
              <a
                href="#calc"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/20 text-foreground font-mono text-sm uppercase tracking-wider hover:border-white/40 transition-colors"
              >
                <Icon name="Calculator" size={16} />
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
