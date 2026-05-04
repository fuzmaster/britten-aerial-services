import Link from "next/link";
import { site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-pad grid gap-8 py-10 md:grid-cols-4">
        <div>
          <p className="font-bold text-slate-950">{site.name}</p>
          <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold uppercase tracking-wide text-slate-900">Pages</p>
          <div className="mt-2 flex flex-col gap-1">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <Link href="/services" className="hover:text-slate-900">Services</Link>
            <Link href="/portfolio" className="hover:text-slate-900">Portfolio</Link>
            <Link href="/about" className="hover:text-slate-900">About</Link>
            <Link href="/faq" className="hover:text-slate-900">FAQ</Link>
          </div>
        </div>
        <div className="text-sm text-slate-600">
          <p>{site.location}</p>
          <p>{site.serviceArea}</p>
        </div>
        <div className="text-sm text-slate-600 md:text-right">
          <p className="text-base font-semibold text-slate-900">{site.email}</p>
          <p className="text-base font-semibold text-slate-900">{site.phone}</p>
          <Link href="/contact" className="btn-primary mt-4 w-full md:w-auto">Book a Shoot</Link>
        </div>
      </div>
    </footer>
  );
}
