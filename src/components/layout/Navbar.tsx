 "use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Colecciones" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 40);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-zinc-200 bg-white/95 backdrop-blur shadow-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-[#f2443a] text-center text-sm font-semibold leading-7 text-white">
            C
          </span>
          <span
            className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-zinc-900" : "text-zinc-50"
            }`}
          >
            Cava{" "}
            <span
              className={`font-normal transition-colors duration-300 ${
                isScrolled ? "text-zinc-700" : "text-zinc-200"
              }`}
            >
              Candles
            </span>
          </span>
        </Link>

        {/* Menu principal */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-zinc-700 hover:text-[#f2443a]"
                  : "text-zinc-100 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Carrito */}
        <button
          type="button"
          className={`relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium shadow-sm transition-all duration-300 ${
            isScrolled
              ? "border border-zinc-200 bg-white text-zinc-800"
              : "border border-white/40 bg-white/5 text-white backdrop-blur-sm"
          }`}
        >
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[#f2443a] ${
              isScrolled ? "bg-[#f2443a]/5" : "bg-white/15"
            }`}
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>Carrito</span>
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-white ${
              isScrolled ? "bg-[#1d2a3b]" : "bg-white/90 text-[#1d2a3b]"
            }`}
          >
            02
          </span>
        </button>
      </div>
    </header>
  );
}


