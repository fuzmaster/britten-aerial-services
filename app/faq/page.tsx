import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import SectionHeader from "@/components/SectionHeader";
import { faqs, media } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | Britten Aerial Services",
  description: "Get answers about FAA licensing, delivery timing, weather, service areas, and what to expect when booking Britten Aerial Services.",
};

export default function FAQPage() {
  return (
    <>
      <section className="container-pad py-20">
        <SectionHeader eyebrow="FAQ" title="Questions before booking" text="Use this page to remove fear around licensing, weather, delivery, and what clients need to provide." />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200">
          <Image
            src={media.faq}
            alt="Coastal aerial background for FAQ section"
            width={1920}
            height={800}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((f) => <details key={f.q} className="group card"><summary className="flex cursor-pointer items-center justify-between gap-4 pr-2 text-lg font-bold text-slate-950"><span>{f.q}</span><span className="text-skybrand transition group-open:rotate-45">+</span></summary><p className="mt-3 text-slate-600">{f.a}</p></details>)}
        </div>
      </section>
      <CTA />
    </>
  );
}
