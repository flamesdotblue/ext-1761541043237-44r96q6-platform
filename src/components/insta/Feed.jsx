import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export default function Feed({ posts }) {
  return (
    <div className="space-y-6">
      {posts.map((p) => (
        <article key={p.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <header className="flex items-center gap-3 p-4">
            <img src={p.user.avatar} alt={p.user.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium">{p.user.name}</p>
              <p className="text-xs text-slate-500">{p.location}</p>
            </div>
          </header>
          <img src={p.image} alt={p.caption} className="w-full max-h-[520px] object-cover" />
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-slate-100 rounded-lg" aria-label="Like"><Heart size={20} /></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg" aria-label="Comment"><MessageCircle size={20} /></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg" aria-label="Share"><Send size={20} /></button>
              </div>
              <button className="p-2 hover:bg-slate-100 rounded-lg" aria-label="Save"><Bookmark size={20} /></button>
            </div>
            <p className="text-sm"><span className="font-semibold">{p.user.name}</span> {p.caption}</p>
            <p className="text-xs text-slate-500">{p.likes.toLocaleString()} likes • {p.time}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
