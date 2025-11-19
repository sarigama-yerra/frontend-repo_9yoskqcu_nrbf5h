import { useRef } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const contactRef = useRef(null)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-white">Eastside Insurance</div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500 transition">
            Request Your Quote
          </a>
        </div>
      </header>
      <main>
        <Hero onGetQuoteClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        <section className="py-6"><Stats /></section>
        <Services />
        <Contact ref={contactRef} />
      </main>
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-blue-300/70">
          © {new Date().getFullYear()} Eastside Insurance Brokers. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
