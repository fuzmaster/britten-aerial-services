import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import SocialProof from "@/components/SocialProof";
import Showreel from "@/components/Showreel";
import SectionHeader from "@/components/SectionHeader";
import { media, packages, portfolio, services, site } from "@/lib/site-data";

export default function HomePage() {
	return (
		<>
			<section className="hero-gradient text-white">
				<div className="container-pad grid gap-10 py-16 sm:py-20 md:min-h-[76vh] md:grid-cols-[1.1fr_.9fr] md:items-center">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">FAA Licensed • Massachusetts Based</p>
						<h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Make your listing look ready to sell</h1>
						<p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">{site.name} helps real estate agents, homeowners, and businesses capture clean aerial photos, listing media, inspection photos, and marketing videos with fast turnaround.</p>
						<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
							<Link href="/contact" className="btn-primary w-full sm:w-auto">Book a Shoot</Link>
							<Link href="/services" className="btn-secondary w-full sm:w-auto">View Services</Link>
						</div>
					</div>
					<div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
						<div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
							<Image
								src={media.hero}
								alt="Aerial real estate drone view in Peabody Massachusetts"
								width={1600}
								height={1200}
								sizes="(min-width: 768px) 40vw, 100vw"
								className="h-full w-full rounded-[1.5rem] object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="container-pad py-8">
				<div className="grid gap-4 rounded-3xl bg-white p-5 text-center text-sm font-semibold text-slate-700 shadow-sm md:grid-cols-4">
					<p>FAA Licensed</p><p>Real Estate Media</p><p>Fast Digital Delivery</p><p>North Shore MA</p>
				</div>
			</section>
			<Showreel
				eyebrow="Showreel"
				title="See the work in motion"
				description="A quick look at Britten Aerial Services drone, real estate, inspection, and property media work across Massachusetts."
				withControls={false}
			/>
			<section className="container-pad py-16">
				<SectionHeader eyebrow="Services" title="Property media that helps people decide faster" text="Lead with the services that make clients book: real estate photography, drone media, inspections, and package add-ons." />
				<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{services.map((service, index) => <ServiceCard key={service.title} service={service} priority={index === 0} />)}
				</div>
			</section>
			<section className="container-pad py-16">
				<SectionHeader eyebrow="Packages" title="Choose the package that fits the listing" text="Simple package options that reduce decision friction and get your property media moving." />
				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{packages.map((p) => <article className={p.recommended ? "rounded-3xl border-2 border-skybrand bg-white p-6 shadow-md" : "card"} key={p.name}><div className="flex items-center justify-between gap-3"><h3 className="text-xl font-bold text-slate-950">{p.name}</h3>{p.recommended ? <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-800">Recommended</span> : null}</div><p className="mt-2 text-slate-600"><span className="font-semibold text-slate-900">Best for:</span> {p.bestFor}</p><ul className="mt-4 space-y-2 text-sm text-slate-700">{p.items.map(i => <li key={i}>- {i}</li>)}</ul><Link href="/contact" className="btn-primary mt-6 w-full">{p.ctaLabel}</Link></article>)}
				</div>
			</section>
			<SocialProof />
			<section className="container-pad py-16">
				<SectionHeader eyebrow="Portfolio" title="Recent property media work" text="Real local property visuals across drone, interiors, detail photography, and listing-ready assets." />
				<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{/* Keep only portfolio items with confirmed production image paths to avoid blank cards. */}
					{portfolio.filter((item) => item.image.startsWith("/assets/")).map((item, index) => <PortfolioCard key={item.title} item={item} priority={index === 0} />)}
				</div>
			</section>
			<CTA />
		</>
	);
}
