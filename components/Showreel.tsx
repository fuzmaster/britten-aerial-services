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
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_40%),linear-gradient(140deg,#020617,#0f172a)] text-white shadow-2xl shadow-slate-950/30">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
            <p className="mt-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200">
              Watch the reel
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-2 shadow-xl sm:p-3">
            <div className="overflow-hidden rounded-[1.25rem] bg-slate-900">
              {/* Use compressed 1080p H.264 web MP4 before production. */}
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
                className="aspect-video h-full w-full object-cover"
              >
                Your browser does not support the BAS showreel video. Use the contact page to request a direct link.
              </video>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">Drone, photo, inspection, and listing media across Massachusetts.</p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                  View Portfolio
                </Link>
                <Link href="/contact" className="btn-primary w-full sm:w-auto">
                  Book a Shoot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}