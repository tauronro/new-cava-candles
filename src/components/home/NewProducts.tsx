 "use client";

import { useState } from "react";

export function NewProducts() {
  const items = [
    {
      name: "Colección Bruma",
      tag: "Nuevo · Velas de mañana",
    },
    {
      name: "Cava Nocturna",
      tag: "Edición especial",
    },
    {
      name: "Ritual de Luna",
      tag: "Serie limitada",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section className="bg-[#050506] py-20 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Nuevos productos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            Últimos rituales que llegaron a la cava.
          </h2>
        </header>

        <div className="flex flex-col gap-6 md:h-[460px] md:flex-row">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const isDimmed = activeIndex !== null && !isActive;

            return (
              <article
                key={item.name}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative h-[360px] overflow-hidden rounded-3xl bg-black/80 shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-all duration-500 md:h-full ${
                  isActive ? "md:flex-[2] md:scale-100" : "md:flex-[1]"
                } ${isDimmed ? "md:scale-95" : ""}`}
              >
                <div className="absolute inset-0">
                  <div
                    className={`h-full w-full transform bg-gradient-to-br transition-transform duration-700 ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    } ${
                      index === 0
                        ? "from-emerald-900 via-zinc-900 to-black"
                        : index === 1
                        ? "from-orange-900 via-zinc-900 to-black"
                        : "from-zinc-900 via-zinc-900 to-black"
                    }`}
                  />
                </div>

                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-black/40" : "bg-black/10"
                  }`}
                />

                <div className="absolute left-6 bottom-6">
                  <div className="inline-flex flex-col rounded-2xl bg-black/80 px-5 py-3 shadow-lg backdrop-blur-sm">
                    <span className="text-sm font-semibold text-zinc-50">
                      {item.name}
                    </span>
                    <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-amber-400">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

