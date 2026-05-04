import { site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-pad grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="font-bold text-slate-950">{site.name}</p>
          <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
        </div>
        <div className="text-sm text-slate-600">
          <p>{site.location}</p>
          <p>{site.serviceArea}</p>
        </div>
        <div className="text-sm text-slate-600 md:text-right">
          <p>{site.email}</p>
          <p>{site.phone}</p>
        </div>
      </div>
    </footer>
  );
}
