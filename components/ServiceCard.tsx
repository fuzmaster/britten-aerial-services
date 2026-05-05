"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
  showDetails?: boolean;
  priority?: boolean;
};

const DEFAULT_SERVICE_IMAGE = "/assets/homepage/bas-real-estate-drone-photography-peabody-ma-hero.jpg";

export default function ServiceCard({ service, showDetails = false, priority = false }: ServiceCardProps) {
  // TODO: Replace fallback with service-specific final asset before launch.
  const initialSrc = service.image?.trim() ? service.image : DEFAULT_SERVICE_IMAGE;
  const [imageSrc, setImageSrc] = useState(initialSrc);
  const loading = priority ? undefined : showDetails ? "eager" : "lazy";

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-100">
        <Image
          src={imageSrc}
          alt={service.title}
          width={1600}
          height={900}
          priority={priority}
          loading={loading}
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          onError={() => setImageSrc(DEFAULT_SERVICE_IMAGE)}
          className="aspect-video w-full object-cover"
        />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-bold text-slate-950 sm:text-xl">{service.title}</h3>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">{service.description}</p>
        {showDetails ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-900">Best for</p>
            <p className="text-sm leading-6 text-slate-700">
              {service.bestFor}
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-900">Includes</p>
              <ul className="mt-2 grid gap-1 text-sm text-slate-700 sm:grid-cols-2">
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