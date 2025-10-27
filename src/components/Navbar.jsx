import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500 via-emerald-500 to-sky-500 text-white">
            <Rocket size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">SocialMix</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
          <a href="#showcase" className="text-slate-600 hover:text-slate-900">Showcase</a>
          <a href="#download" className="text-slate-600 hover:text-slate-900">Download</a>
          <a href="#login" className="px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Sign in</a>
        </nav>
        <button aria-label="Menu" className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200/60 px-4 py-3 space-y-2">
          <a href="#features" className="block text-slate-700">Features</a>
          <a href="#showcase" className="block text-slate-700">Showcase</a>
          <a href="#download" className="block text-slate-700">Download</a>
          <a href="#login" className="inline-flex px-3 py-1.5 rounded-lg bg-slate-900 text-white">Sign in</a>
        </div>
      )}
    </header>
  );
}
