import Link from "next/link";

export function TopBar() {
  return (
    <div className="w-full bg-[#f2443a] text-xs text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <p className="truncate">
          Contacto:{" "}
          <span className="font-medium">+57 000 000 0000</span> ·{" "}
          <span className="font-medium">hola@cavacandles.com</span>
        </p>
        <div className="hidden items-center gap-4 sm:flex">
          <Link href="#" className="hover:underline">
            Login
          </Link>
          <span className="h-3 w-px bg-white/40" />
          <Link href="#" className="hover:underline">
            Registro
          </Link>
          <span className="h-3 w-px bg-white/40" />
          <Link href="#" className="hover:underline">
            Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
}




