import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import PortfolioCard from "@/components/PortfolioCard";
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
          {portfolio.map((item, index) => <PortfolioCard key={item.title} item={item} priority={index === 0} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}

