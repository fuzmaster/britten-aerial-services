import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import { media, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Britten Aerial Services",
  description: "Learn more about Britten Aerial Services, an FAA-licensed drone photography and real estate media company based in Peabody, Massachusetts.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-pad grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          {/* TODO: Replace media.aboutFallback with a real Jacob/operator portrait before launch. */}
          <Image
            src={media.aboutFallback}
            alt="Britten Aerial Services brand coastal drone photo"
            width={1200}
            height={1500}
            sizes="(min-width: 768px) 35vw, 100vw"
            className="h-full w-full rounded-[2rem] object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-skybrand">About</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">A local media partner for property professionals</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{site.name} is a Massachusetts-based drone photography and real estate media company led by FAA-licensed drone pilot and video editor Jacob Britten.</p>
          <p className="mt-4 text-lg leading-8 text-slate-600">You work directly with a local FAA-licensed drone operator and editor from shoot planning through final delivery.</p>
          <p className="mt-4 text-lg leading-8 text-slate-600">The goal is simple: make every project look sharp, trustworthy, and ready to use online.</p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-skybrand">Meet Jacob</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">The person handling the shoot is the person delivering the final media</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Jacob handles planning, shooting, editing, and delivery with a workflow built around real estate listings, property documentation, and fast turnarounds for local clients.</p>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li>- Local FAA-licensed drone operator</li>
              <li>- Real estate-focused workflow</li>
              <li>- Planning, shooting, editing, and delivery</li>
              <li>- Based in {site.location}, serving {site.serviceArea}</li>
            </ul>
          </div>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Why clients hire us</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li>- FAA-compliant drone operation</li>
              <li>- MLS/social-ready media</li>
              <li>- Fast digital delivery</li>
              <li>- Real estate-focused workflow</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
