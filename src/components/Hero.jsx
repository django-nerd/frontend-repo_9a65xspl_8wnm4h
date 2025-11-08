import { ArrowRight, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8v2z1p8g8Cj8d5wR/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs text-gray-600 shadow-sm backdrop-blur">
              <Rocket className="h-3.5 w-3.5" />
              <span>Write delightful emails with AI</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Turn ideas into beautiful emails
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Tegami helps you craft on-brand, high-converting emails in minutes. Draft, iterate, and send with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium shadow hover:bg-black">
                Try it free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-900 font-medium shadow border border-black/10">
                See features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
