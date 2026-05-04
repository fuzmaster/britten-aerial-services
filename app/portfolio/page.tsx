import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import Showreel from "@/components/Showreel";
import { portfolio } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio | Britten Aerial Services",
  description: "Browse selected aerial, real estate, inspection, and property media work from Britten Aerial Services in Massachusetts.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="container-pad py-20">
        <SectionHeader eyebrow="Portfolio" title="Selected work" text="Keep this page ruthless. Six strong projects are better than fifty repetitive drone frames." />
      </section>
      <Showreel
        eyebrow="Featured Video"
        title="BAS Showreel 2024"
        description="A selected reel of aerial, property, and visual media work."
        withControls={true}
      />
      <section className="container-pad pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.map((item, index) => <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="bg-slate-100"><Image src={item.image} alt={item.title} width={1600} height={900} sizes="(min-width: 768px) 50vw, 100vw" priority={index === 0} className="aspect-video w-full object-cover" /></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-skybrand">{item.category}</p><h2 className="mt-2 text-2xl font-bold text-slate-950">{item.title}</h2><p className="mt-3 text-slate-600">{item.description}</p></div></article>)}
        </div>
      </section>
      <CTA />
    </>
  );
}

