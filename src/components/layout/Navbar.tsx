import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Colecciones" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="w-full border-b border-zinc-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-[#f2443a] text-center text-sm font-semibold text-white leading-7">
            C
          </span>
          <span className="text-lg font-semibold tracking-wide text-zinc-900">
            Cava <span className="font-normal text-zinc-700">Candles</span>
          </span>
        </Link>

        {/* Menu principal */}
        <nav className="hidden gap-6 text-sm font-medium text-zinc-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#f2443a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Carrito */}
        <button
          type="button"
          className="relative inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f2443a]/5 text-[#f2443a]">
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>Carrito</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d2a3b] text-[10px] font-semibold text-white">
            02
          </span>
        </button>
      </div>
    </header>
  );
}


