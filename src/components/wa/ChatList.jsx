export default function ChatList({ chats, activeChatId, onSelect }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="p-4 border-b border-slate-200">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
      </div>
      <ul className="max-h-[560px] overflow-y-auto divide-y divide-slate-100">
        {chats.map((c) => (
          <li key={c.id}>
            <button
              onClick={() => onSelect(c.id)}
              className={[
                'w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left',
                activeChatId === c.id ? 'bg-slate-50' : ''
              ].join(' ')}
            >
              <img src={c.avatar} alt={c.name} className="w-11 h-11 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="font-medium truncate">{c.name}</p>
                  <span className="text-xs text-slate-500">{c.lastTime}</span>
                </div>
                <p className="text-sm text-slate-600 truncate">{c.lastMessage}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
