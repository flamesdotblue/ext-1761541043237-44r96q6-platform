export default function Stories({ stories }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4">
        {stories.map((s) => (
          <button
            key={s.id}
            className="flex-shrink-0 w-20"
            title={s.username}
          >
            <div className="p-1 rounded-full bg-gradient-to-tr from-fuchsia-500 via-amber-500 to-sky-500">
              <img
                src={s.avatar}
                alt={s.username}
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-center text-slate-600 truncate">{s.username}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
