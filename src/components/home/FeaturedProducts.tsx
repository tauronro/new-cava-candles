"use client";

import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const popularCandles = [
  {
    name: "Cava Nocturna",
    description: "Ámbar · Sándalo · Vainilla",
    price: "$22.000",
    imageSrc: "/images/candles/cava-nocturna.png",
  },
  {
    name: "Bruma de Amanecer",
    description: "Cítricos suaves · Té blanco",
    price: "$21.000",
    imageSrc: "/images/candles/bruma-amanecer.png",
  },
  {
    name: "Casa en Calma",
    description: "Lavanda · Cedro · Musk",
    price: "$23.000",
    imageSrc: "/images/candles/casa-en-calma.png",
  },
  {
    name: "Ritual de Luna",
    description: "Ylang ylang · Jazmín nocturno",
    price: "$24.000",
    imageSrc: "/images/candles/ritual-luna.png",
  },
  {
    name: "Cava Citrus",
    description: "Naranja dulce · Bergamota",
    price: "$20.000",
    imageSrc: "/images/candles/cava-citrus.png",
  },
];

export function FeaturedProducts() {
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "prev" | "next") => {
    if (!listRef.current) return;
    const container = listRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const delta = direction === "next" ? scrollAmount : -scrollAmount;

    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            Velas populares
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Nuestras velas más queridas por la comunidad.
          </h2>
          <p className="mt-3 text-sm text-zinc-500 md:text-base">
            Piezas que se repiten en pedidos, se recomiendan y se regalan.
            Perfectas para empezar tu ritual con Cava Candles.
          </p>
        </header>

        <div className="mt-10">
          {/* Carrusel de tarjetas */}
          <div
            ref={listRef}
            className="scrollbar-none flex gap-6 overflow-x-auto scroll-smooth px-1"
          >
            {popularCandles.map((product) => (
              <article
                key={product.name}
                className="group relative flex min-w-[220px] max-w-[260px] flex-col rounded-3xl bg-zinc-50 pb-7 pt-8 shadow-sm ring-1 ring-transparent transition hover:-translate-y-2 hover:bg-white hover:ring-amber-200 sm:min-w-[260px] lg:min-w-[280px]"
              >
                <div className="mx-auto flex h-48 w-full max-w-[210px] items-center justify-center rounded-2xl bg-white">
                  <div className="h-40 w-32 rounded-2xl bg-gradient-to-tr from-amber-200 via-amber-50 to-white" />
                  {/* Aquí luego puedes reemplazar con una imagen real */}
                  {/* <Image src={product.imageSrc} alt={product.name} fill className="object-contain" /> */}
                </div>

                <div className="mt-6 flex flex-col items-center text-center">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    {product.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-zinc-900">
                    {product.price}
                  </p>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white shadow-md transition hover:bg-zinc-800"
                    >
                      <Heart className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white shadow-md transition hover:bg-zinc-800"
                    >
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white shadow-md transition hover:bg-zinc-800"
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controles inferiores del carrusel */}
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Ver productos anteriores"
              onClick={() => handleScroll("prev")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 shadow-sm transition hover:border-zinc-500 hover:text-zinc-900"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Ver más productos"
              onClick={() => handleScroll("next")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 shadow-sm transition hover:border-zinc-500 hover:text-zinc-900"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

