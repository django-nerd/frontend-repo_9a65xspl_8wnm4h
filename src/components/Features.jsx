import { Sparkles, Wand2, Palette, Send } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Copy Assistant',
    desc: 'Generate clear, on-brand copy for subject lines, body, and CTAs in seconds.'
  },
  {
    icon: Palette,
    title: 'Beautiful Templates',
    desc: 'Start from polished templates designed for newsletters, launches, and promos.'
  },
  {
    icon: Sparkles,
    title: 'Smart Personalization',
    desc: 'Auto-insert names and segments to boost opens and clicks without manual work.'
  },
  {
    icon: Send,
    title: '1-click Export',
    desc: 'Export to HTML or your ESP with clean, responsive markup.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to ship great emails</h2>
          <p className="mt-3 text-gray-600">From first draft to final send — in one focused flow.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
