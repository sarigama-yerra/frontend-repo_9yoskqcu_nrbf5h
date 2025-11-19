import { motion } from 'framer-motion'

export default function Hero({ onGetQuoteClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.25),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.25),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Eastside Insurance Brokers
          </motion.h1>
          <p className="mt-4 text-blue-100">Authorized Financial Services Provider (FSP: 4242)</p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-blue-200"
          >
            Your trusted partner in comprehensive insurance and financial services. Independent, personalized, and dedicated to your financial well-being.
          </motion.p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={onGetQuoteClick} className="rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition">
              Get Your Quote Today
            </button>
            <a href="#services" className="rounded-lg border border-blue-400/40 px-5 py-3 text-blue-100 hover:bg-blue-400/10 transition">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
