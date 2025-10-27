import { useState } from 'react';
import { MessageCircle, Camera, Phone } from 'lucide-react';

function TabButton({ label, active, onClick, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 border text-sm transition-colors ${
        active ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}

function InstaPreview() {
  const stories = ['You', 'Alex', 'Sam', 'Mia', 'Liam', 'Zoe'];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Stories</span>
          <button className="text-xs text-slate-600 hover:text-slate-900">See all</button>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto">
          {stories.map((s) => (
            <div key={s} className="flex-shrink-0 w-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-fuchsia-500 to-amber-500 p-0.5">
                <div className="w-full h-full rounded-full bg-white p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-200" />
                </div>
              </div>
              <div className="mt-1 text-center text-xs text-slate-600">{s}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="h-44 bg-slate-100" />
          <div className="p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200" />
              <div>
                <div className="text-sm font-medium">@maria</div>
                <div className="text-xs text-slate-500">2m ago</div>
              </div>
            </div>
            <p className="mt-2 text-sm text-slate-700">Sunset vibes and city lights. #weekend</p>
            <div className="mt-2 flex items-center gap-4 text-sm text-slate-600">
              <button className="hover:text-slate-900">❤ 1.2k</button>
              <button className="hover:text-slate-900">💬 142</button>
              <button className="hover:text-slate-900">↗ Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppPreview() {
  const chats = [
    { name: 'Alex', msg: 'On my way! 🚗', time: '10:24' },
    { name: 'Team Design', msg: 'New file uploaded', time: '09:51' },
    { name: 'Mia', msg: 'Let\'s call later?', time: 'Yesterday' },
    { name: 'Dad', msg: 'Dinner 7pm', time: 'Yesterday' },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden grid md:grid-cols-3">
      <div className="md:col-span-1 border-r border-slate-200">
        <div className="p-3 border-b border-slate-200 text-sm text-slate-500">Chats</div>
        <div className="divide-y divide-slate-200">
          {chats.map((c) => (
            <button key={c.name} className="w-full text-left p-3 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium truncate">{c.name}</span>
                    <span className="text-xs text-slate-500">{c.time}</span>
                  </div>
                  <div className="text-sm text-slate-600 truncate">{c.msg}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col">
        <div className="p-3 border-b border-slate-200 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="font-medium">Alex</div>
        </div>
        <div className="flex-1 p-4 space-y-2 bg-slate-50/60">
          <div className="inline-block bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm">Hey! ETA 10min</div>
          <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-sm self-end">Great, see you soon!</div>
        </div>
        <div className="p-3 border-t border-slate-200 flex items-center gap-2">
          <input placeholder="Type a message" className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <button className="rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Send</button>
        </div>
      </div>
    </div>
  );
}

function ImoPreview() {
  const contacts = [
    { name: 'Zoe', status: 'Online' },
    { name: 'Liam', status: 'Last seen 5m' },
    { name: 'Noah', status: 'Online' },
    { name: 'Emma', status: 'Last seen 1h' },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="p-3 border-b border-slate-200 text-sm text-slate-500">Contacts</div>
      <div className="divide-y divide-slate-200">
        {contacts.map((c) => (
          <div key={c.name} className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200" />
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-slate-500">{c.status}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">Message</button>
              <button className="rounded-lg bg-sky-600 text-white px-3 py-1.5 text-sm">Call</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const [tab, setTab] = useState('instagram');
  return (
    <section id="showcase" className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Pick a mode, any mode</h2>
        <p className="text-slate-600 mt-3">Switch between Instagram-like stories, WhatsApp-style chats, and imo-inspired calling in a snap.</p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-6">
        <TabButton label="Instagram" icon={Camera} active={tab === 'instagram'} onClick={() => setTab('instagram')} />
        <TabButton label="WhatsApp" icon={MessageCircle} active={tab === 'whatsapp'} onClick={() => setTab('whatsapp')} />
        <TabButton label="imo" icon={Phone} active={tab === 'imo'} onClick={() => setTab('imo')} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {tab === 'instagram' && (
          <>
            <InstaPreview />
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-fuchsia-50 to-amber-50 p-6">
              <h3 className="font-semibold text-lg">Create and share</h3>
              <p className="text-slate-600 mt-2 text-sm">Post photos and short videos. View friends\' stories, add reactions, and explore trends—without leaving the app.</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Tap-to-skip stories</li>
                <li>Reels-like short videos</li>
                <li>Likes, comments, and shares</li>
              </ul>
            </div>
          </>
        )}
        {tab === 'whatsapp' && (
          <>
            <WhatsAppPreview />
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-green-50 p-6">
              <h3 className="font-semibold text-lg">Chat faster</h3>
              <p className="text-slate-600 mt-2 text-sm">Super responsive, E2E-style messaging with read receipts, media previews, and quick replies.</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Typing indicators</li>
                <li>Media attachments</li>
                <li>Message reactions</li>
              </ul>
            </div>
          </>
        )}
        {tab === 'imo' && (
          <>
            <ImoPreview />
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-cyan-50 p-6">
              <h3 className="font-semibold text-lg">Call clearly</h3>
              <p className="text-slate-600 mt-2 text-sm">One-tap voice and video calls with bandwidth-friendly quality and smart reconnection.</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>HD video</li>
                <li>Low-latency voice</li>
                <li>Favorite contacts</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
