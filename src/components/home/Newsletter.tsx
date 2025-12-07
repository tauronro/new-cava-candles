"use client";

export function Newsletter() {
  return (
    <section className="border-t border-zinc-200 bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-700">
              Newsletter
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
              Enciende la bandeja de entrada, no el spam.
            </h2>
            <p className="max-w-md text-sm text-zinc-600">
              Inspiración para tus rituales, lanzamientos y ediciones limitadas.
              Sin ruido, solo luz.
            </p>
          </div>

          <form
            className="flex w-full flex-col gap-3 md:max-w-md md:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Tu correo"
              className="h-11 flex-1 rounded-full border border-zinc-300 bg-white px-4 text-sm outline-none ring-0 transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
            <button className="h-11 rounded-full bg-amber-300 px-5 text-sm font-medium text-black transition hover:bg-amber-200">
              Unirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


