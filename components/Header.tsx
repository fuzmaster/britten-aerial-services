import Link from "next/link";
import { nav, site } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-pad flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="max-w-[12rem] text-sm font-bold leading-tight tracking-tight text-slate-950 sm:max-w-none sm:text-base">{site.name}</Link>
        <nav aria-label="Primary" className="flex w-full flex-wrap items-center gap-2 text-sm font-medium text-slate-700 md:w-auto md:justify-end md:gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.label === "Book a Shoot" ? "rounded-full bg-slate-950 px-4 py-2 text-white" : "rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
