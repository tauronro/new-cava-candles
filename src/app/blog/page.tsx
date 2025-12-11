"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { ReactNode, useEffect, useState, useRef } from "react";
import { Modal } from "@/components/ui/Modal";

const blogPosts = [
  {
    id: 1,
    title: "Cómo crear un rincón de calma con velas escultóricas",
    category: "Decoración",
    date: "30 diciembre, 2024",
    author: "Equipo Cava",
    readingTime: "6 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Transforma un rincón de tu casa en un refugio íntimo usando velas escultóricas, texturas suaves y una paleta de colores cálidos.",
    content: [
      "Las velas escultóricas no son solo una fuente de luz: también son piezas decorativas que aportan volumen, textura y carácter a cualquier espacio.",
      "Empieza eligiendo una superficie limpia y simple: una repisa, una mesa auxiliar o una consola. Combina velas de diferentes alturas y formas para crear ritmo visual, pero mantén una paleta coherente.",
      "Acompaña tus velas con elementos naturales como madera, cerámica o lino. La clave está en que el conjunto se sienta equilibrado, respirable y coherente con el resto de tu decoración.",
    ],
  },
  {
    id: 2,
    title: "Rituales nocturnos para bajar el ritmo del día",
    category: "Rituales",
    date: "18 diciembre, 2024",
    author: "Equipo Cava",
    readingTime: "5 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Un pequeño ritual con velas antes de dormir puede ayudarte a marcar un límite claro entre el día y la noche.",
    content: [
      "Cuando encendemos una vela al final del día, nuestro cerebro recibe una señal clara: es momento de bajar la velocidad.",
      "Elige una fragancia suave, como vainilla, algodón limpio o notas amaderadas ligeras. Evita aromas muy intensos si eres sensible.",
      "Dedica al menos 10 minutos a leer, escribir o respirar profundamente con la vela encendida. No se trata de hacer más, sino de hacer menos, pero con intención.",
    ],
  },
  {
    id: 3,
    title: "Cuidado y mantenimiento de tus velas Cava Candles",
    category: "Cuidado",
    date: "05 diciembre, 2024",
    author: "Equipo Cava",
    readingTime: "4 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Algunos hábitos sencillos pueden alargar la vida de tus velas y ayudarte a que se consuman de forma más uniforme.",
    content: [
      "Antes de cada encendido, recorta la mecha a unos 5 mm para evitar humo excesivo y una llama inestable.",
      "Deja que la vela se derrita de borde a borde en los primeros usos para evitar el efecto túnel.",
      "Apaga siempre la vela soplando suavemente o usando un apagavelas, nunca con agua. Y recuerda mantenerla fuera del alcance de niños y mascotas.",
    ],
  },
  {
    id: 4,
    title: "Combinar velas escultóricas con flores secas",
    category: "Decoración",
    date: "22 noviembre, 2024",
    author: "Equipo Cava",
    readingTime: "5 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Las flores secas y las velas escultóricas se complementan perfecto para centros de mesa cálidos y atemporales.",
    content: [
      "Cuando combinas flores secas con velas escultóricas, creas composiciones que se mantienen en el tiempo sin apenas mantenimiento.",
      "Elige tonos que dialoguen entre sí: cremas, beige y toques amaderados suelen funcionar muy bien.",
      "Evita colocar flores demasiado cerca de la llama; piensa siempre primero en la seguridad y deja espacio suficiente entre los elementos.",
    ],
  },
  {
    id: 5,
    title: "Ideas de regalo con velas Cava Candles",
    category: "Regalos",
    date: "10 noviembre, 2024",
    author: "Equipo Cava",
    readingTime: "7 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Guía rápida para armar kits de regalo con velas, cerámica y notas personalizadas que realmente emocionan.",
    content: [
      "Un buen regalo no tiene que ser complicado: basta con elegir pocos elementos bien pensados.",
      "Combina una vela escultórica protagonista con una base de cerámica y una tarjeta escrita a mano.",
      "Piensa en la experiencia completa: cómo se ve el conjunto, cómo huele el espacio y qué mensaje quieres dejar a la persona que lo recibe.",
    ],
  },
  {
    id: 6,
    title: "Cómo limpiar la cera derramada sin dañar tus superficies",
    category: "Cuidado",
    date: "28 octubre, 2024",
    author: "Equipo Cava",
    readingTime: "4 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Pequeñas técnicas para retirar cera de madera, vidrio y textiles de forma segura y sencilla.",
    content: [
      "En superficies duras como vidrio o cerámica, deja que la cera se enfríe por completo antes de retirarla con cuidado.",
      "En madera, usa siempre herramientas suaves para no rayarla y limpia después con un paño ligeramente humedecido.",
      "En textiles, deja endurecer la cera, retira el exceso y aplica papel absorbente con calor suave para levantar los restos.",
    ],
  },
  {
    id: 7,
    title: "Velas y aromaterapia: elegir fragancias según tu estado de ánimo",
    category: "Rituales",
    date: "15 octubre, 2024",
    author: "Equipo Cava",
    readingTime: "6 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Cada aroma puede acompañar un momento distinto: concentración, calma, celebración o recogimiento.",
    content: [
      "Las notas cítricas suelen aportar energía y foco, ideales para la mañana o para trabajar.",
      "Las fragancias amaderadas y avainilladas acompañan muy bien momentos de descanso y lectura.",
      "No se trata de tener muchas velas distintas, sino de elegir unas pocas que realmente conecten contigo.",
    ],
  },
  {
    id: 8,
    title: "Guía para mezclar alturas y formas en una misma composición",
    category: "Decoración",
    date: "01 octubre, 2024",
    author: "Equipo Cava",
    readingTime: "5 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Aprende a jugar con alturas, volúmenes y ritmos visuales para que tus velas se vean siempre interesantes.",
    content: [
      "Piensa tus composiciones como pequeños paisajes: necesita puntos altos, medios y bajos.",
      "Agrupa las velas en grupos impares (3, 5) para que se vean más naturales y menos rígidas.",
      "Deja siempre zonas de respiro, no hace falta llenar toda la superficie para que se vea especial.",
    ],
  },
  {
    id: 9,
    title: "Cómo integrar velas en tu rutina de meditación",
    category: "Rituales",
    date: "20 septiembre, 2024",
    author: "Equipo Cava",
    readingTime: "5 min",
    image: "/img/DSC05664.jpg",
    excerpt:
      "Una vela puede convertirse en un ancla visual y olfativa para profundizar tu práctica de meditación.",
    content: [
      "Antes de empezar, enciende tu vela con calma, sin prisas, y toma unos segundos para observar la llama.",
      "Si tu mente se dispersa, vuelve a la respiración y al movimiento suave de la luz.",
      "Al terminar, apaga la vela con intención, como un pequeño cierre simbólico de tu práctica.",
    ],
  },
];

const POSTS_PER_PAGE = 6;

function FadeInOnScroll({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`h-full transform-gpu transition-all duration-700 ease-out ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function BlogPage() {
  const [activePostId, setActivePostId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const activePost = blogPosts.find((post) => post.id === activePostId) ?? null;

  const handleOpen = (id: number) => setActivePostId(id);
  const handleClose = () => setActivePostId(null);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    const list = document.getElementById("blog-list");
    if (list) {
      list.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <div className="bg-zinc-50">
      {/* Banner superior del blog, reutilizando la imagen del hero */}
      <section className="relative -mt-24 h-[360px] bg-zinc-950 pt-24 text-white">
        {/* Fondo con imagen */}
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

        {/* Contenido del banner */}
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-center px-6">
          <nav className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <span className="mx-2 text-zinc-500">/</span>
            <span className="text-zinc-200">Blog</span>
          </nav>

          <h1 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Blog de Cava Candles
          </h1>
          <p className="max-w-2xl text-sm text-zinc-200 md:text-base">
            Ideas para ambientar tu hogar, rituales con velas, inspiración para
            regalos y consejos de cuidado, todo en un solo lugar.
          </p>
        </div>
      </section>

      {/* Contenido del blog */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">
            Últimos artículos
          </h2>
          <p className="text-xs text-zinc-500">
            Descubre ideas, rituales y tips para disfrutar más tus velas.
          </p>
        </div>

        <section
          id="blog-list"
          className="grid items-stretch gap-8 md:grid-cols-3"
        >
          {visiblePosts.map((post, index) => (
            <FadeInOnScroll key={post.id} delay={index * 80}>
              <article
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                onClick={() => handleOpen(post.id)}
              >
                {/* Imagen */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col px-4 py-4">
                  {/* Meta */}
                  <div className="mb-3 flex items-center justify-between text-[11px] text-zinc-500">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </span>
                    </div>
                    <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Título y resumen */}
                  <h3 className="mb-2 text-sm font-semibold text-zinc-900">
                    {post.title}
                  </h3>
                  <p className="mb-3 line-clamp-3 text-xs text-zinc-600">
                    {post.excerpt}
                  </p>

                  <span className="mt-auto text-xs font-semibold text-[#f2443a]">
                    Leer artículo
                  </span>
                </div>
              </article>
            </FadeInOnScroll>
          ))}
        </section>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) => Math.max(1, prev - 1))
              }
              disabled={currentPage === 1}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`h-8 w-8 rounded-full text-xs font-semibold transition ${
                    page === currentPage
                      ? "bg-[#f2443a] text-white shadow"
                      : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  {page}
                </button>
              )
            )}
            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        )}
      </main>

      {/* Modal reutilizable para detalle del blog */}
      <Modal
        isOpen={!!activePost}
        onClose={handleClose}
        title={activePost?.title}
        size="xl"
      >
        {activePost && (
          <div className="space-y-6">
            {/* Imagen grande arriba */}
            <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-zinc-100 md:h-80">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Meta + contenido */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] text-zinc-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  <span>{activePost.date}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3 w-3" />
                  <span>{activePost.author}</span>
                </span>
                <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {activePost.category}
                </span>
                <span className="text-[10px] uppercase tracking-wide text-zinc-400">
                  {activePost.readingTime} de lectura
                </span>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-zinc-700 md:text-base">
                {activePost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
