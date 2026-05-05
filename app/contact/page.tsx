import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { media, site } from "@/lib/site-data";

const formAction = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mnjwdpkd";

export const metadata: Metadata = {
  title: "Contact | Britten Aerial Services",
  description: "Book a shoot with Britten Aerial Services for drone photography, real estate media, roof inspection photos, and property marketing visuals in Massachusetts.",
};

export default function ContactPage() {
  return (
    <section className="container-pad grid gap-10 py-16 md:grid-cols-[.9fr_1.1fr] md:py-20">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-skybrand">Book a Shoot</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Tell us what you need</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">For faster scheduling, include the property address, preferred date, and services needed.</p>
        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200">
          <Image
            src={media.contact}
            alt="Britten Aerial Services contact page property drone view"
            width={1600}
            height={1200}
            sizes="(min-width: 768px) 35vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-8 space-y-2 text-slate-700"><p>{site.email}</p><p>{site.location}</p></div>
        <div className="mt-6 grid gap-3">
          <Link href={`mailto:${site.email}`} className="btn-secondary w-full sm:w-auto">Email Us</Link>
        </div>
      </div>
      <form className="card space-y-4" action={formAction} method="POST" aria-describedby="contact-form-help">
        {/* TODO: Move this endpoint to NEXT_PUBLIC_FORMSPREE_ENDPOINT for environment-specific configs. */}
        <input type="hidden" name="_subject" value="New Britten Aerial Services inquiry" />
        <p id="contact-form-help" className="text-sm text-slate-600">This form is wired for Formspree. If you prefer, you can also email directly.</p>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Name</span><input name="name" type="text" autoComplete="name" required className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3" /></label>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Email</span><input name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3" /></label>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Phone</span><input name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3" /></label>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Property address</span><input name="address" type="text" autoComplete="street-address" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3" /></label>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Preferred shoot date</span><input name="preferredDate" type="date" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3" /></label>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Service needed</span><select name="serviceNeeded" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3"><option>Real Estate Photography</option><option>Drone Photography</option><option>Drone Video</option><option>Roof Inspection Photos</option><option>Floor Plans & Tours</option><option>Marketing Video Production</option><option>Other / Not sure yet</option></select></label>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Message / notes</span><textarea name="message" required className="mt-2 min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3" /></label>
        <button type="submit" className="btn-primary w-full">Send Inquiry</button>
        <p className="text-xs text-slate-500">Primary path: Formspree-ready contact form. Backup path: email <Link href={`mailto:${site.email}`} className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4">{site.email}</Link>.</p>
      </form>
    </section>
  );
}
