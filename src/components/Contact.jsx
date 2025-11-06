import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    // Mock submit
    await new Promise((r) => setTimeout(r, 800));
    setStatus('done');
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Ready to elevate your listings?
            </h2>
            <p className="mt-3 text-gray-600">
              Send us a message and we’ll get back within one business day. Attach sample photos and we’ll process a free preview.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• 12–24h average turnaround</li>
              <li>• Bulk and team pricing</li>
              <li>• Secure delivery links</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required type="text" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Tell us about your project" />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : status === 'done' ? 'Sent! We will be in touch' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
