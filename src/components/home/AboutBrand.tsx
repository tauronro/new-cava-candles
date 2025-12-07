export function AboutBrand() {
  return (
    <section className="bg-[#050506] py-20 text-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-stretch">
        {/* Columna izquierda: texto grande */}
        <div className="flex-1 space-y-8 md:pr-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Sobre Cava Candles
            </p>
            <p className="text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
              Creamos velas
              <br />
              para encender
              <br />
              tus rituales diarios.
            </p>
          </div>

          <p className="max-w-xl text-sm text-zinc-300 md:text-base">
            Hemos trabajado en colecciones pensadas para acompañarte en distintos
            momentos: mañana, tarde y noche. Diseñamos aromas que se sienten
            cercanos, cálidos y memorables, sin saturar tus espacios.
          </p>

          <p className="max-w-xl text-sm text-zinc-400 md:text-base">
            Cuidamos cada detalle: la cera, las mechas, el contenedor y el
            empaque. Queremos que cada vez que enciendas una vela Cava sientas
            que te estás regalando un pequeño momento de pausa.
          </p>
        </div>

        {/* Columna derecha: imagen en blanco y negro + bloque de color */}
        <div className="relative flex-1">
          <div className="h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-b from-zinc-900 via-zinc-800 to-black shadow-[0_40px_80px_rgba(0,0,0,0.65)]">
            {/* Aquí más adelante puedes colocar una imagen real en blanco y negro */}
            {/* <Image src="/images/about-cava.jpg" alt="Equipo Cava Candles" fill className="object-cover" /> */}
            <div className="flex h-full items-center justify-center">
              <div className="mx-auto max-w-xs text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
                Luz, aroma y atmósfera en una sola pieza.
              </div>
            </div>
          </div>

          {/* Bloque inferior de color, similar al recuadro naranja */}
          <div className="pointer-events-none absolute bottom-10 left-1/2 h-36 w-64 -translate-x-1/2 rounded-2xl bg-[#f97316] shadow-[0_25px_40px_rgba(0,0,0,0.6)]" />
        </div>
      </div>
    </section>
  );
}


