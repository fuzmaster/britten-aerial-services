import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
  showDetails?: boolean;
  priority?: boolean;
};

export default function ServiceCard({ service, showDetails = false, priority = false }: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          width={1600}
          height={900}
          priority={priority}
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
        <p className="text-slate-600">{service.description}</p>
        {showDetails ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-900">Best for</p>
            <p className="text-sm text-slate-700">
              {service.bestFor}
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-900">Includes</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {service.includes.slice(0, 4).map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Book this service
            </Link>
          </>
        ) : (
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/services" className="inline-flex items-center text-sm font-semibold text-skybrand hover:text-sky-700">
              Learn more
            </Link>
            <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-sky-700">
              Book this service
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}