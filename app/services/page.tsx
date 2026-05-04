import type { Metadata } from "next";
import CTA from "@/components/CTA";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
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
          {services.map((service, index) => <ServiceCard key={service.title} service={service} showDetails={true} priority={index === 0} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}

