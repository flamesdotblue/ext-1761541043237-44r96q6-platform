export default function ModeTabs({ mode, onChange }) {
  const tabs = [
    { id: 'instagram', label: 'Instagram' },
    { id: 'whatsapp', label: 'WhatsApp' },
    { id: 'imo', label: 'imo' },
  ];
  return (
    <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={[
            'px-4 py-2 rounded-lg text-sm font-medium transition',
            mode === t.id
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          ].join(' ')}
          aria-pressed={mode === t.id}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
