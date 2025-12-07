"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    id: 0,
    primaryColor: "bg-[#f2443a]",
    secondaryColor: "bg-[#1d2a3b]",
  },
  {
    id: 1,
    primaryColor: "bg-amber-400",
    secondaryColor: "bg-zinc-900",
  },
  {
    id: 2,
    primaryColor: "bg-emerald-500",
    secondaryColor: "bg-slate-900",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5f7]">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:items-center">
        {/* Columna izquierda: texto */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Velas artesanales · Cava Candles
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            <span className="text-[#f2443a]">Luz</span> que acompaña
            <br />
            cada uno de tus <span className="text-zinc-800">rituales.</span>
          </h1>
          <p className="mx-auto max-w-xl text-sm text-zinc-600 md:mx-0 md:text-base">
            Velas hechas a mano, aromas cálidos y diseños minimalistas para
            transformar tu espacio en un lugar más íntimo, pausado y tuyo.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <button className="h-11 rounded-full bg-[#f2443a] px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e03a31]">
              Ver velas destacadas
            </button>
            <button className="h-11 rounded-full border border-zinc-300 bg-white px-7 text-sm font-medium text-zinc-800 transition hover:border-zinc-500">
              Explorar colección completa
            </button>
          </div>
        </div>

        {/* Columna derecha: mockup de productos en carrusel */}
        <div className="flex-1">
          <div className="relative mx-auto h-[340px] w-full max-w-lg">
            {/* Halo de luz */}
            <div className="pointer-events-none absolute inset-0 -z-10 translate-y-6">
              <div className="mx-auto h-56 w-56 rounded-full bg-[#f2443a]/12 blur-3xl" />
            </div>

            {heroSlides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Tarjeta posterior (izquierda) */}
                  <div
                    className={`absolute top-1/2 left-[35%] h-80 w-60 -translate-x-1/2 -translate-y-1/2 origin-center rounded-3xl shadow-[0_30px_70px_rgba(15,23,42,0.75)] -rotate-12 ${slide.secondaryColor}`}
                  />

                  {/* Tarjeta frontal (derecha) */}
                  <div
                    className={`absolute top-1/2 left-[65%] h-80 w-60 -translate-x-1/2 -translate-y-1/2 origin-center rounded-3xl shadow-[0_32px_80px_rgba(15,23,42,0.85)] rotate-12 ${slide.primaryColor}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


