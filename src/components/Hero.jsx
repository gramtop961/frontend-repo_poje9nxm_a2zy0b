import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/GKnQb-5S6Lk0F2qS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
          Smart photo enhancement for real estate
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
          Showcase properties with studio-quality visuals
        </h1>
        <p className="mt-5 text-gray-600 text-lg">
          Transform ordinary room photos into polished, bright, and welcoming spaces. Built for real estate agents, photographers and property managers.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Try it now
          </a>
          <a href="#features" className="inline-flex items-center px-5 py-3 rounded-md border border-black/10 bg-white hover:bg-gray-50 transition-colors">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
