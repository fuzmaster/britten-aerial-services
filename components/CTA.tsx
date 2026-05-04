import Link from "next/link";

export default function CTA() {
  return (
    <section className="container-pad py-16">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_.6fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">Ready to book?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Need listing photos, drone footage, or inspection images?</h2>
            <p className="mt-4 max-w-2xl text-slate-300">Send the property address, preferred shoot date, and services needed. Keep the first step simple.</p>
          </div>
          <Link href="/contact" className="btn-primary justify-self-start md:justify-self-end">Book a Shoot</Link>
        </div>
      </div>
    </section>
  );
}
