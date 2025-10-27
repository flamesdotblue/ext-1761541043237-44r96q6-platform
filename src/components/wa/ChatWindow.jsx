export default function ChatWindow({ chat, messages }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white flex flex-col h-[640px]">
      <header className="flex items-center gap-3 px-4 py-3 border-b border-slate-200">
        <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="leading-tight">
          <p className="font-medium">{chat.name}</p>
          <p className="text-xs text-slate-500">{chat.status}</p>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 bg-slate-50">
        {messages.map((m) => (
          <div key={m.id} className={m.fromMe ? 'flex justify-end' : 'flex justify-start'}>
            <div className={[
              'max-w-[70%] rounded-2xl px-3 py-2 text-sm shadow-sm',
              m.fromMe ? 'bg-emerald-500 text-white rounded-br-md' : 'bg-white text-slate-800 rounded-bl-md border border-slate-200'
            ].join(' ')}>
              <p>{m.text}</p>
              <p className="text-[10px] opacity-70 mt-1 text-right">{m.time}</p>
            </div>
          </div>
        ))}
      </div>
      <form className="p-3 border-t border-slate-200 flex gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Send</button>
      </form>
    </div>
  );
}
