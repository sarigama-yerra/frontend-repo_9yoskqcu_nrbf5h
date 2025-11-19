export default function Services() {
  const sections = [
    {
      title: 'Detailed Financial Planning',
      desc: 'Helping clients achieve long-term financial security and growth through expert guidance.',
      items: ['Investment Strategies', 'Retirement Planning', 'Wealth Management'],
    },
    {
      title: 'Short-Term Insurance',
      desc: 'Comprehensive protection for your vehicles, home, and property.',
      items: ['Car Insurance', 'Householders Insurance', 'Building Insurance'],
    },
    {
      title: 'Specialized Insurance',
      desc: 'Tailored coverage for unique business and professional needs.',
      items: ['Contractors All Risk', 'Performance Guarantee', 'Personal Liability', 'Business Insurance', 'Workmanship Compensation'],
    },
    {
      title: 'Life & Health Protection',
      desc: 'Secure your family’s future with comprehensive life and health cover.',
      items: ['Life Cover', 'Disability Cover', 'Critical Illness Cover', 'Income Protection', 'Funeral Cover'],
    },
    {
      title: 'Investment & Retirement',
      desc: 'Build a secure financial future with strategic planning and guidance.',
      items: ['Investment Planning', 'Retirement Annuities', 'Portfolio Management'],
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
        <p className="mt-3 text-blue-200 text-center max-w-2xl mx-auto">Comprehensive cover tailored to you. Clear advice, strong partners, and a plan that protects what matters most.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((sec) => (
            <div key={sec.title} className="rounded-xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold text-lg">{sec.title}</h3>
              <p className="mt-2 text-blue-200 text-sm">{sec.desc}</p>
              <ul className="mt-4 space-y-1 text-blue-100/90 list-disc list-inside">
                {sec.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
