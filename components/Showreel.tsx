import Link from "next/link";
import { media } from "@/lib/site-data";

type ShowreelProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  withControls?: boolean;
};

export default function Showreel({
  title = "See the work in motion",
  eyebrow = "Showreel",
  description = "A quick look at Britten Aerial Services drone, real estate, inspection, and property media work across Massachusetts.",
  withControls = false,
}: ShowreelProps) {
  return (
    <section className="container-pad py-16">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 text-white shadow-2xl shadow-slate-950/20">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Book a Shoot
              </Link>
              <p className="text-sm text-slate-400">Muted preview for fast browsing. Compress the MP4 before production deployment.</p>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-3 shadow-xl">
            <div className="overflow-hidden rounded-[1.25rem] bg-slate-900">
              {/* Large MP4 files should be compressed before deployment to protect page speed. */}
              <video
                src={media.showreel}
                poster={media.showreelPoster}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                controls={withControls}
                aria-label="Britten Aerial Services showreel video"
                className="h-full w-full object-cover"
              >
                Your browser does not support the BAS showreel video. Use the contact page to request a direct link.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}