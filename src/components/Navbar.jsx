import { Mail, Github, Twitter } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
          <span className="text-lg font-semibold tracking-tight">Tegami</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#cta" className="hover:text-gray-900">Get started</a>
        </div>
        <div className="flex items-center gap-2">
          <a aria-label="Email" href="mailto:hello@tegami.site" className="p-2 rounded-md hover:bg-gray-100">
            <Mail className="h-5 w-5" />
          </a>
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
