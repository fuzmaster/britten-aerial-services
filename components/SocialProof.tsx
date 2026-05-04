export default function SocialProof() {
  const proof = [
    "FAA Licensed Drone Pilot",
    "Real Estate Media Workflow",
    "North Shore Massachusetts",
    "Fast Digital Delivery",
    "Drone, Photo, Video, and Floor Plan Add-ons",
  ];

  return (
    <section className="container-pad py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-skybrand">Proof</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Trusted visual support for local property marketing</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {proof.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">Real testimonials and client quotes should be added here before launch.</p>
      </div>
    </section>
  );
}