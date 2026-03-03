import { useState } from "react";
import { Button } from "@/components/ui/button";

const countries = ["Китай", "Япония", "Корея"];
const carTypes = ["Седан", "Кроссовер / SUV", "Минивэн", "Пикап", "Хэтчбэк", "Спорткар"];
const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018 и старше"];
const budgets = ["До 1 млн ₽", "1–2 млн ₽", "2–3 млн ₽", "3–5 млн ₽", "5–10 млн ₽", "Свыше 10 млн ₽"];
const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Другой город"];

export function Calculator() {
  const [form, setForm] = useState({
    country: "",
    type: "",
    year: "",
    budget: "",
    city: "",
    name: "",
    phone: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="calc" className="py-24 section-dark">
      <div className="container max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Калькулятор</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">
          Рассчитайте <i className="font-light">стоимость</i>
        </h2>
        <p className="text-foreground/50 font-mono text-sm mb-12">
          Заполните форму — пришлём точный расчёт в течение 30 минут
        </p>

        {sent ? (
          <div className="card-dark rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-2xl font-sentient mb-3">Заявка отправлена!</h3>
            <p className="text-foreground/60 font-mono text-sm">Наш менеджер свяжется с вами в ближайшие 30 минут</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-dark rounded-2xl p-8 md:p-12 space-y-8">
            <div className="grid md:grid-cols-3 gap-4">
              {countries.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => set("country", c)}
                  className={`py-3 px-4 rounded-xl border font-mono text-sm transition-all duration-200 ${
                    form.country === c
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-white/10 text-foreground/50 hover:border-white/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div>
              <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">Тип кузова</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {carTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("type", t)}
                    className={`py-2.5 px-4 rounded-xl border font-mono text-sm transition-all duration-200 ${
                      form.type === t
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-white/10 text-foreground/50 hover:border-white/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">Год выпуска</p>
                <select
                  value={form.year}
                  onChange={(e) => set("year", e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/60"
                >
                  <option value="">Выберите год</option>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">Бюджет</p>
                <select
                  value={form.budget}
                  onChange={(e) => set("budget", e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/60"
                >
                  <option value="">Укажите бюджет</option>
                  {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">Доставка до города</p>
              <select
                value={form.city}
                onChange={(e) => set("city", e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/60"
              >
                <option value="">Выберите город</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60"
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60"
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base py-6">
              [Получить расчёт стоимости]
            </Button>

            <p className="text-center font-mono text-xs text-foreground/30">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
