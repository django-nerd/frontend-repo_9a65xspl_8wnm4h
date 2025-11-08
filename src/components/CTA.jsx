export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-gray-900 to-black p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Start drafting your next email in minutes</h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">No credit card required. Create 3 campaigns free, then upgrade anytime.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-900 font-medium shadow hover:bg-gray-100">Get started</a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/20 hover:bg-white/5">Book a demo</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">By continuing you agree to the Terms and Privacy Policy.</p>
      </div>
    </section>
  );
}
