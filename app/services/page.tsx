import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Britten Aerial Services",
  description: "Drone photography, real estate photography, roof inspection photos, property videos, floor plans, and marketing media services in Massachusetts.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-pad py-20">
        <SectionHeader eyebrow="Services" title="Drone, real estate, inspection, and marketing media" text="Build this page around client outcomes, not equipment. Each service should explain what it is, who it helps, and why it matters." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, index) => <article key={s.title} className="card"><Image src={s.image} alt={s.title} width={1600} height={900} priority={index === 0} className="mb-5 aspect-video w-full rounded-2xl object-cover" /><h2 className="text-2xl font-bold text-slate-950">{s.title}</h2><p className="mt-3 text-slate-600">{s.description}</p></article>)}
        </div>
      </section>
      <CTA />
    </>
  );
}

