const proofCards = [
  "FAA-licensed drone operation",
  "MLS and social-ready delivery",
  "Roof and property documentation",
  "Real estate photo, video, drone, and floor plan add-ons",
  "Based in Peabody, serving the North Shore",
];

export default function TrustProof() {
  return (
    <section className="container-pad py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-skybrand">Trust Proof</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Real media for real property decisions</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Clear deliverables, compliant drone work, and listing-ready assets matter more than vague marketing claims.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {proofCards.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-600">
          Add real client testimonials here before launch.
        </div>
      </div>
    </section>
  );
}