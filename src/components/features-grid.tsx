"use client";

import { ShieldCheck, CreditCard, Headphones, Percent } from "lucide-react";
import { Section } from "./layout/section";
import { Container } from "./layout/container";

const features = [
  {
    icon: ShieldCheck,
    title: "Hassle-Free Returns",
    description: "7-day return policy",
    bg: "from-emerald-400/70 to-emerald-600/70",
    color: "bg-emerald-400/30",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Bank-grade encryption",
    bg: "from-sky-400/70 to-sky-600/70",
    color: "bg-sky-400/30",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer care",
    bg: "from-purple-400/70 to-purple-600/70",
    color: "bg-purple-400/30",
  },
  {
    icon: Percent,
    title: "Exclusive Offers",
    description: "Save up to 30%",
    bg: "from-rose-400/70 to-rose-600/70",
    color: "bg-rose-400/30",
  },
];

export default function FeaturesGrid() {
  return (
    <Section>
      <Container>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
              rounded-2xl px-8 py-10  text-white shadow-md transition
              bg-gradient-to-br ${feature.color}
              hover:scale-[1.03] hover:shadow-lg
              ml-9 flex flex-col justify-center items-center
              relative
            `}
            >
              <span
                className={`${feature.bg} inline-block p-2 bg-gradient-to-tr rounded-xl left-0 absolute -translate-x-1/2`}
              >
                <feature.icon className={`size-18`} />
              </span>
              <div className="relative">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
