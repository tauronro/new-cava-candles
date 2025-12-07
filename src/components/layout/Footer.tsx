import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Marca */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-[#f2443a] text-center text-sm font-semibold text-white leading-7">
                C
              </span>
              <span className="text-lg font-semibold tracking-wide text-zinc-900">
                Cava <span className="font-normal text-zinc-700">Candles</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-zinc-500">
              Velas artesanales hechas en pequeños lotes para iluminar rituales
              cotidianos, espacios íntimos y momentos que quieres recordar.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-1 flex-wrap gap-10 md:justify-end">
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-zinc-900">Tienda</p>
              <ul className="space-y-2 text-zinc-600">
                <li>
                  <Link href="/shop" className="hover:text-zinc-900">
                    Todas las velas
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-zinc-900">
                    Colecciones
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-zinc-900">
                    Sobre nosotros
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-sm">
              <p className="font-semibold text-zinc-900">Ayuda</p>
              <ul className="space-y-2 text-zinc-600">
                <li>
                  <Link href="/faq" className="hover:text-zinc-900">
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-zinc-900">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-zinc-900">
                    Envíos y devoluciones
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-sm">
              <p className="font-semibold text-zinc-900">Conecta</p>
              <div className="flex items-center gap-3 text-zinc-600">
                <a href="#" aria-label="Instagram" className="hover:text-zinc-900">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-zinc-900">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="mailto:hola@cavacandles.com" aria-label="Email" className="hover:text-zinc-900">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-xs text-zinc-500">
                hola@cavacandles.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-6 text-xs text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Cava Candles. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-800">
              Política de privacidad
            </Link>
            <Link href="/terms" className="hover:text-zinc-800">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


