import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Subtle radial background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(56,189,248,0.08),transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_circle_at_90%_20%,rgba(99,102,241,0.08),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-slate-500">Built with love, motion, and a dash of 3D.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
