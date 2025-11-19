import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [types, setTypes] = useState([])
  const [loadingTypes, setLoadingTypes] = useState(true)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  useEffect(() => {
    async function fetchTypes() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/insurance-types`)
        const data = await res.json()
        setTypes(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoadingTypes(false)
      }
    }
    fetchTypes()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting...' })
    const form = new FormData(e.currentTarget)
    const payload = {
      full_name: form.get('full_name'),
      email: form.get('email'),
      phone_country_code: form.get('phone_country_code') || '+1',
      phone_number: form.get('phone_number'),
      insurance_type: form.get('insurance_type'),
      notes: form.get('notes') || undefined,
    }
    try {
      const res = await fetch(`${BACKEND_URL}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus({ type: 'success', message: data.message || 'Submitted!' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-white">Prefer to Talk Directly?</h3>
          <p className="mt-2 text-blue-200">Our insurance experts are ready to help you find the perfect coverage. Get in touch with us using any of the methods below.</p>
          <div className="mt-6 space-y-4 text-blue-100">
            <div>
              <div className="font-semibold">Call Us</div>
              <div>(555) 123-4567</div>
              <div className="text-sm text-blue-300/70">Mon–Fri 8AM–6PM, Sat 9AM–3PM</div>
            </div>
            <div>
              <div className="font-semibold">Email Us</div>
              <div>quotes@eastsideinsurance.com</div>
              <div className="text-sm text-blue-300/70">We respond within 24 hours</div>
            </div>
            <div>
              <div className="font-semibold">Visit Our Office</div>
              <div>123 Main Street, Downtown District</div>
              <div className="text-sm text-blue-300/70">Free parking available</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-800/40 p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white">Get Your Free Quote</h3>
          <p className="mt-1 text-blue-200 text-sm">Ready to get protected? Fill out our quick form and we'll get back to you with a personalized quote within 24 hours.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-blue-200">Full Name *</label>
              <input name="full_name" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-200">Email *</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-2">
                <div>
                  <label className="block text-sm text-blue-200">Country</label>
                  <select name="phone_country_code" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white">
                    <option value="+1">United States +1</option>
                    <option value="+27">South Africa +27</option>
                    <option value="+44">United Kingdom +44</option>
                    <option value="+61">Australia +61</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-blue-200">Phone Number *</label>
                  <input name="phone_number" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm text-blue-200">Select Insurance Type *</label>
              <select name="insurance_type" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white">
                {loadingTypes ? (
                  <option>Loading...</option>
                ) : (
                  <>
                    <option value="">Select an option</option>
                    {types.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm text-blue-200">Your Insurance Needs</label>
              <textarea name="notes" rows="4" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white" placeholder="Tell us about your specific requirements" />
            </div>
            <button disabled={status.type === 'loading'} className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition disabled:opacity-60">
              {status.type === 'loading' ? 'Submitting...' : 'Get My Free Quote'}
            </button>
            {status.type !== 'idle' && (
              <div className={`text-sm ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-blue-300'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
