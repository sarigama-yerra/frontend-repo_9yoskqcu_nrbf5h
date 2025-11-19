export default function Stats() {
  const stats = [
    { label: 'Years of Service', value: '20+', sub: 'Protecting clients since 2005' },
    { label: 'Trusted Partners', value: '15+', sub: 'Working with top insurance providers' },
    { label: 'Client Satisfaction', value: '100%', sub: 'Personalized cover that fits your needs' },
  ]
  return (
    <section className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-slate-800/40 p-6 border border-white/10">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-blue-200">{s.label}</div>
              <div className="mt-2 text-sm text-blue-300/70">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
