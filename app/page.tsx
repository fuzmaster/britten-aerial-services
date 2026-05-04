import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";
import Showreel from "@/components/Showreel";
import SectionHeader from "@/components/SectionHeader";
import { packages, portfolio, services, site } from "@/lib/site-data";

export default function HomePage() {
	return (
		<>
			<section className="hero-gradient text-white">
				<div className="container-pad grid gap-10 py-16 sm:py-20 md:min-h-[76vh] md:grid-cols-[1.1fr_.9fr] md:items-center">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">FAA Licensed • Massachusetts Based</p>
						<h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Professional Drone & Real Estate Media in Massachusetts</h1>
						<p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">{site.name} helps real estate agents, homeowners, and businesses capture clean aerial photos, listing media, inspection photos, and marketing videos with fast turnaround.</p>
						<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
							<Link href="/contact" className="btn-primary w-full sm:w-auto">Book a Shoot</Link>
							<Link href="/services" className="btn-secondary w-full sm:w-auto">View Services</Link>
						</div>
					</div>
					<div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
						<div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
							<Image
								src="/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg"
								alt="Aerial real estate drone view in Peabody Massachusetts"
								width={1600}
								height={1200}
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
					{services.map((s) => <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" key={s.title}><div className="bg-slate-100"><Image src={s.image} alt={s.title} width={1600} height={900} className="aspect-[4/3] w-full object-cover" /></div><div className="p-6"><h3 className="text-xl font-bold text-slate-950">{s.title}</h3><p className="mt-3 text-slate-600">{s.description}</p></div></article>)}
				</div>
			</section>
			<section className="container-pad py-16">
				<SectionHeader eyebrow="Packages" title="Simple real estate media packages" text="Agents want clarity. Keep the package choices simple and push custom details into the contact form." />
				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{packages.map((p) => <div className="card" key={p.name}><h3 className="text-xl font-bold text-slate-950">{p.name}</h3><p className="mt-2 text-slate-600">{p.bestFor}</p><ul className="mt-4 space-y-2 text-sm text-slate-700">{p.items.map(i => <li key={i}>• {i}</li>)}</ul></div>)}
				</div>
			</section>
			<section className="container-pad py-16">
				<SectionHeader eyebrow="Portfolio" title="Proof beats promises" text="Start with only the strongest 6 portfolio cards. Do not turn the website into a file archive." />
				<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{portfolio.map((item, index) => <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" key={item.title}><div className="bg-slate-100"><Image src={item.image} alt={item.title} width={1200} height={900} sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw" priority={index === 0} className="aspect-[4/3] w-full object-cover" /></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-skybrand">{item.category}</p><h3 className="mt-2 font-bold text-slate-950">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.description}</p></div></article>)}
				</div>
			</section>
			<CTA />
		</>
	);
}
