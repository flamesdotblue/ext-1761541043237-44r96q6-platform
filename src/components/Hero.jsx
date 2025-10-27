import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-10 lg:pt-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <Star size={14} className="text-amber-500" />
            A vibrant mix of Instagram, WhatsApp, and imo
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            One social hub for chats, stories, reels and calls
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            SocialMix blends the best of your favorite social apps into a single, playful experience. Message friends, post stories, share reels, and jump on crystal-clear voice or video calls.
          </p>
          <div className="flex items-center gap-3" id="download">
            <a className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800" href="#">
              Get the Web App
            </a>
            <a className="px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50" href="#features">
              Explore features
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-[420px] md:h-[520px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-slate-200 bg-white">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
