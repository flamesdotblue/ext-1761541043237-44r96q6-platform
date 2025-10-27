import { MessageCircle, Camera, Video, Phone, Shield, Heart } from 'lucide-react';

const features = [
  {
    title: 'Unified Chats',
    desc: 'Fast, reliable messaging inspired by WhatsApp with read receipts and typing indicators.',
    icon: MessageCircle,
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Stories & Reels',
    desc: 'Share moments and short videos with an Instagram-style, swipeable experience.',
    icon: Camera,
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    title: 'HD Video & Voice',
    desc: 'Crystal-clear video and voice calls, tuned for low latency like imo.',
    icon: Video,
    color: 'from-sky-500 to-cyan-600',
  },
  {
    title: 'Smart Dialer',
    desc: 'Quickly start calls with a handy dialer and favorite contacts.',
    icon: Phone,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Privacy First',
    desc: 'End-to-end encryption, lock screen protection, and secure backups.',
    icon: Shield,
    color: 'from-slate-700 to-slate-900',
  },
  {
    title: 'Reactions & Likes',
    desc: 'React instantly in chats or double-tap to like posts and reels.',
    icon: Heart,
    color: 'from-amber-500 to-orange-600',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Everything you love, in one place</h2>
        <p className="text-slate-600 mt-3">A playful blend of Instagram, WhatsApp, and imo in a single, streamlined web app.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-shadow">
            <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white w-12 h-12 shadow-sm`}> 
              <f.icon size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
            <p className="text-slate-600 mt-1.5">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
