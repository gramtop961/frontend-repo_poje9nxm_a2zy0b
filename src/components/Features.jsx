import { Sparkles, Sun, Crop, Building2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Retouching',
    desc: 'Automatically enhance lighting, colors, and sharpness for clean, vibrant images.'
  },
  {
    icon: Sun,
    title: 'Sky Replacement',
    desc: 'Swap dull skies with realistic blue skies to boost exterior appeal in seconds.'
  },
  {
    icon: Crop,
    title: 'Perspective Fix',
    desc: 'Correct lens distortion and vertical lines for crisp architectural shots.'
  },
  {
    icon: Building2,
    title: 'Room Staging',
    desc: 'Add tasteful virtual furnishings that elevate empty rooms and listings.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Everything you need to make listings pop
          </h2>
          <p className="mt-3 text-gray-600">
            Purpose-built tools for property photos so you close faster and impress clients.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500/10 to-indigo-600/10 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
