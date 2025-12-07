import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura",
    role: "Clienta habitual de Cava",
    text: "Encender Cava Nocturna se volvió parte de mi ritual de cierre del día. El aroma permanece, pero sin ser invasivo.",
  },
  {
    name: "Andrés",
    role: "Compró para regalo",
    text: "Las compré para regalo y terminé quedándome una. El empaque, el aroma, todo se siente muy cuidado.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 text-white">
      {/* Fondo tipo fotografía + overlay oscuro */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-800" />
        {/* Más adelante puedes reemplazar este fondo por una imagen real, por ejemplo:
        <div className="absolute inset-0 -z-10 bg-[url('/images/testimonials/bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-zinc-900/80" />
        */}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <header className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Testimonios
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 md:text-5xl">
            Lo que dicen quienes encienden
            <br />
            las velas de Cava.
          </h2>
        </header>

        {/* Tarjetas de testimonial */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-[32px] border border-white/5 bg-black/70 p-8 text-sm shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="space-y-6">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      className="h-4 w-4 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-zinc-100 md:text-lg">
                  “{testimonial.text}”
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="h-12 w-12 rounded-full bg-zinc-700/80" />
                  <div className="text-sm">
                    <figcaption className="font-semibold text-zinc-50">
                      {testimonial.name}
                    </figcaption>
                    <p className="mt-1 text-xs text-zinc-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <Quote className="h-10 w-10 text-amber-500/60" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
