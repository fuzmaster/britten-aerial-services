import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Britten Aerial Services",
  description: "Learn more about Britten Aerial Services, an FAA-licensed drone photography and real estate media company based in Peabody, Massachusetts.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-pad grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          {/* TODO: Replace with a real Jacob/operator portrait when available. */}
          <Image
            src="/assets/portfolio/bas-coastal-drone-photography-lighthouse-bridge-01.jpg"
            alt="Britten Aerial Services brand coastal drone photo"
            width={1200}
            height={1500}
            priority
            className="h-full w-full rounded-[2rem] object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-skybrand">About</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">A local media partner for property professionals</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{site.name} is a Massachusetts-based drone photography and real estate media company led by FAA-licensed drone pilot and video editor Jacob Britten.</p>
          <p className="mt-4 text-lg leading-8 text-slate-600">The goal is simple: make every project look sharp, trustworthy, and ready to use online.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['FAA Licensed Drone Pilot','Real Estate Media Experience','Professional Editing Workflow','Massachusetts-Based'].map(x => <div className="card" key={x}>{x}</div>)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
