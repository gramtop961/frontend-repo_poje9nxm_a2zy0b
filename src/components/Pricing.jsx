export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-gray-600">Pay as you go or save with bundles. No contracts.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium">Starter</h3>
            <p className="mt-1 text-sm text-gray-600">Best for single listings</p>
            <p className="mt-6 text-4xl font-semibold">$9<span className="text-base font-normal">/set</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• 10 enhanced photos</li>
              <li>• Basic retouching</li>
              <li>• 24h turnaround</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">Get Starter</a>
          </div>

          <div className="rounded-xl border border-black/10 bg-gray-900 text-white p-6 shadow-lg ring-1 ring-black/5">
            <div className="inline-flex items-center text-xs font-medium rounded-full px-2 py-1 bg-white/10">Most Popular</div>
            <h3 className="mt-2 text-lg font-medium">Professional</h3>
            <p className="mt-1 text-sm text-white/80">For busy agents and photographers</p>
            <p className="mt-6 text-4xl font-semibold">$29<span className="text-base font-normal text-white/80">/set</span></p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• 30 enhanced photos</li>
              <li>• Advanced retouching + sky</li>
              <li>• 12h priority turnaround</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md bg-white text-gray-900 hover:bg-gray-100">Choose Professional</a>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium">Business</h3>
            <p className="mt-1 text-sm text-gray-600">Teams and property managers</p>
            <p className="mt-6 text-4xl font-semibold">Custom</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Unlimited listings</li>
              <li>• Virtual staging</li>
              <li>• Dedicated support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md border border-black/10 hover:bg-gray-50">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
