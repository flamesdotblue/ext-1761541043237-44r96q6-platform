import { Phone, Video } from 'lucide-react';

export default function Contacts({ contacts }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contacts.map((c) => (
        <div key={c.id} className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center gap-3">
          <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
          <div className="flex-1">
            <p className="font-medium">{c.name}</p>
            <p className="text-xs text-slate-500">{c.status}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-100" aria-label="Voice call"><Phone size={18} /></button>
            <button className="p-2 rounded-lg hover:bg-slate-100" aria-label="Video call"><Video size={18} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
