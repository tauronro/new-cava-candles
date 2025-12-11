/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative -mt-24 min-h-screen pt-24 bg-zinc-950 text-white">
      {/* Fondo con imagen de producto */}
      <div className="absolute inset-0">
        <Image
          src="/img/DSC05664.jpg"
          alt="Colección de velas escultóricas de Cava Candles sobre mesa de madera"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay para asegurar contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/80 to-zinc-950/92" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-300">
          Velas artesanales · Cava Candles
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Hogares que se iluminan,
          <br />
          rituales que perduran.
        </h1>

        <p className="mb-8 max-w-2xl text-sm text-zinc-200 md:text-base">
          Velas escultóricas hechas a mano, con formas únicas y acabados suaves,
          pensadas para transformar tu espacio en un refugio cálido, íntimo y
          lleno de intención.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button className="h-11 rounded-full bg-[#f2443a] px-8 text-sm font-semibold text-white shadow-lg shadow-[#f2443a]/30 transition hover:bg-[#e03a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2443a] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
            Ver velas destacadas
          </button>
          <button className="text-sm font-medium text-zinc-100 underline-offset-4 hover:underline">
            Explorar colección completa
          </button>
        </div>
      </div>
    </section>
  );
}