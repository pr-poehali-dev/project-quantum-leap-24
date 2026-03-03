import { Hero } from "@/components/Hero";
import { Countries } from "@/components/sections/Countries";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Calculator } from "@/components/sections/Calculator";
import { Cars } from "@/components/sections/Cars";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { Contacts } from "@/components/sections/Contacts";

export default function Index() {
  return (
    <>
      <Hero />
      <Countries />
      <HowItWorks />
      <Cars />
      <Calculator />
      <WhyUs />
      <FAQ />
      <Contacts />

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 bg-black">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/30">© 2024 Asia Auto Import. Все права защищены.</p>
          <p className="font-mono text-xs text-foreground/20">
            Китай · Япония · Корея — доставка по всей России
          </p>
        </div>
      </footer>
    </>
  );
}
