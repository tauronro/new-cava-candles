"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-zinc-50">
      {/* Banner superior, reutilizando la imagen del hero */}
      <section className="relative -mt-24 h-[320px] bg-zinc-950 pt-24 text-white md:h-[360px]">
        <div className="absolute inset-0">
          <Image
            src="/img/DSC05664.jpg"
            alt="Colección de velas escultóricas de Cava Candles sobre mesa de madera"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/75 to-zinc-950/90" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-center px-6">
          <nav className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <span className="mx-2 text-zinc-500">/</span>
            <span className="text-zinc-200">Contacto</span>
          </nav>

          <h1 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Hablemos de tu próximo ritual con velas
          </h1>
          <p className="max-w-2xl text-sm text-zinc-200 md:text-base">
            Si tienes dudas sobre pedidos, colecciones personalizadas o deseas
            colaborar con Cava Candles, déjanos un mensaje y te responderemos
            pronto.
          </p>
        </div>
      </section>

      {/* Contenido de contacto */}
      <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Cards de información */}
        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {/* Mail */}
          <div className="group flex items-start gap-4 rounded-[18px] border border-[#ffe0b3]/70 bg-[#fff7e6] px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffc766] hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffe9c7] text-[#f2443a] transition group-hover:bg-[#f2443a] group-hover:text-white">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                Mail Address
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-800 transition group-hover:text-[#f2443a]">
                hola@cavacandles.com
              </p>
              <p className="text-sm text-amber-900/80">tienda@cavacandles.com</p>
            </div>
          </div>

          {/* Office */}
          <div className="group flex items-start gap-4 rounded-[18px] border border-[#ffe0b3]/70 bg-[#fff7e6] px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffc766] hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffe9c7] text-[#f2443a] transition group-hover:bg-[#f2443a] group-hover:text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                Office Location
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-800 transition group-hover:text-[#f2443a]">
                Bogotá, Colombia
              </p>
              <p className="text-sm text-amber-900/80">
                Cava Candles · Showroom por cita previa
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="group flex items-start gap-4 rounded-[18px] border border-[#ffe0b3]/70 bg-[#fff7e6] px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffc766] hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffe9c7] text-[#f2443a] transition group-hover:bg-[#f2443a] group-hover:text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                Phone Number
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-800 transition group-hover:text-[#f2443a]">
                +57 000 000 0000
              </p>
              <p className="text-sm text-amber-900/80">
                Lun a vie · 9:00 a.m. – 6:00 p.m.
              </p>
            </div>
          </div>
        </section>

        {/* Formulario de contacto */}
        <section className="rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-sm md:px-10 md:py-10">
          <header className="mb-8">
            <h2 className="mb-1 text-2xl font-semibold text-zinc-900 md:text-3xl">
              Drop us a line
            </h2>
            <p className="text-sm text-zinc-600">
              Nos encantará saber de ti. Completa el formulario y te
              contactaremos muy pronto.
            </p>
          </header>

          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="fullName"
                  className="text-xs font-medium text-zinc-700"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Ingrese su nombre completo"
                  className="h-11 rounded-lg border border-zinc-200 px-3 text-sm text-zinc-900 outline-none ring-[#f2443a]/20 placeholder:text-zinc-400 focus:border-[#f2443a] focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-zinc-700"
                >
                  Email Address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="h-11 rounded-lg border border-zinc-200 px-3 text-sm text-zinc-900 outline-none ring-[#f2443a]/20 placeholder:text-zinc-400 focus:border-[#f2443a] focus:ring-2"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-zinc-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Escribe el asunto de tu mensaje"
                  className="h-11 rounded-lg border border-zinc-200 px-3 text-sm text-zinc-900 outline-none ring-[#f2443a]/20 placeholder:text-zinc-400 focus:border-[#f2443a] focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-sm">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium text-zinc-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Incluye tu número de contacto"
                  className="h-11 rounded-lg border border-zinc-200 px-3 text-sm text-zinc-900 outline-none ring-[#f2443a]/20 placeholder:text-zinc-400 focus:border-[#f2443a] focus:ring-2"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-sm">
              <label
                htmlFor="message"
                className="text-xs font-medium text-zinc-700"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Escribe tu mensaje aquí"
                className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none ring-[#f2443a]/20 placeholder:text-zinc-400 focus:border-[#f2443a] focus:ring-2"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="h-11 rounded-full bg-[#f2443a] px-8 text-sm font-semibold text-white shadow-lg shadow-[#f2443a]/30 transition hover:bg-[#e03a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2443a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}


