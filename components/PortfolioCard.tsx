import Image from "next/image";
import type { PortfolioItem } from "@/lib/site-data";

type PortfolioCardProps = {
  item: PortfolioItem;
  priority?: boolean;
  eager?: boolean;
};

export default function PortfolioCard({ item, priority = false, eager = false }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-100">
        <Image
          src={item.image}
          alt={item.title}
          width={1600}
          height={1200}
          priority={priority}
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="space-y-2 p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-skybrand">{item.category}</p>
        <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
        <p className="text-sm text-slate-600">{item.description}</p>
      </div>
    </article>
  );
}