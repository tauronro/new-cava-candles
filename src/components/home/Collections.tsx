export function Collections() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:items-center">
        {/* Columna izquierda: imagen / mockup */}
        <div className="relative flex-1">
          {/* Bloque de color detrás, similar al recuadro celeste */}
          <div className="pointer-events-none absolute -left-10 -top-10 hidden h-[85%] w-[85%] rounded-3xl bg-cyan-50 md:block" />

          {/* Contenedor principal de imagen */}
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-zinc-100 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-zinc-200 via-white to-amber-100" />
            {/* Más adelante puedes reemplazar esto con una imagen real:
            <Image src="/tu-imagen.jpg" alt="Colección Cava Candles" width={800} height={600} className="h-full w-full object-cover" />
            */}
          </div>
        </div>

        {/* Columna derecha: texto y CTA */}
        <div className="flex-1 max-w-md space-y-4 text-left md:pl-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            Colección verificada
          </p>
          <p className="text-xs text-zinc-500">
            Velas seleccionadas por su calidad de cera, fragancias equilibradas
            y quemado limpio, pensadas para acompañarte todos los días.
          </p>

          <h2 className="pt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            Ritual de verano
            <br />
            <span className="text-zinc-900">
              hasta <span className="text-[#f2443a]">30% OFF</span>
            </span>
          </h2>

          <p className="pt-2 text-sm text-zinc-600">
            Combina tus velas favoritas en sets de temporada y recibe un
            descuento especial en aromas frescos, cítricos y florales.
          </p>

          <button className="mt-5 inline-flex items-center justify-center rounded-full border border-zinc-800 px-7 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white">
            Comprar ahora
          </button>
        </div>
      </div>
    </section>
  );
}


