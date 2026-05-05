import Image from "next/image";
import Link from "next/link";
import { media, site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]">
      <div className="container-pad py-10 sm:py-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Link href="/" className="inline-flex items-start text-slate-950">
                <Image
                  src={media.logoFull}
                  alt="Britten Aerial Services full logo lockup"
                  width={220}
                  height={84}
                  className="h-auto w-[11rem] object-contain sm:w-[12.5rem]"
                />
              </Link>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                FAA-licensed drone photography, real estate media, inspections, and listing visuals built for property marketing across Massachusetts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 md:max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Book a Shoot</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Send the property address, preferred date, and services needed to get the conversation moving.</p>
              <Link href="/contact" className="btn-primary mt-4 w-full sm:w-auto">Book a Shoot</Link>
            </div>
          </div>

          <div className="grid gap-8 pt-6 text-sm text-slate-600 md:grid-cols-[.85fr_.95fr_1.2fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Pages</p>
              <div className="mt-3 grid gap-2 text-[15px] leading-6 text-slate-700">
                <Link href="/" className="hover:text-slate-900">Home</Link>
                <Link href="/services" className="hover:text-slate-900">Services</Link>
                <Link href="/portfolio" className="hover:text-slate-900">Portfolio</Link>
                <Link href="/about" className="hover:text-slate-900">About</Link>
                <Link href="/faq" className="hover:text-slate-900">FAQ</Link>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Service Area</p>
              <p className="mt-3 text-base font-semibold text-slate-900">{site.location}</p>
              <p className="mt-1 text-[15px] leading-6 text-slate-700">{site.serviceArea}</p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
              <div className="mt-3 grid gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
                  <p className="mt-1 text-base font-semibold text-slate-900 break-all">{site.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
