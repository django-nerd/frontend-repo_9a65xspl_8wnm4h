import { Pencil, Layout, Eye } from 'lucide-react';

const steps = [
  {
    icon: Pencil,
    title: 'Draft',
    desc: 'Describe your campaign goal and audience. Get a tailored first draft instantly.'
  },
  {
    icon: Layout,
    title: 'Design',
    desc: 'Pick a template and refine layout, images, and colors with live preview.'
  },
  {
    icon: Eye,
    title: 'Review & Export',
    desc: 'Share for feedback, then export to your ESP or copy clean HTML.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">A simple, guided flow that keeps you moving.</p>
        </div>
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold">{i + 1}</div>
              <Icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
