import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur supports-[backdrop-filter]:bg-slate-900/30 bg-slate-900/40 border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl"
            >
              <p className="text-sky-300/90 tracking-wide uppercase text-xs font-semibold mb-3">Designer • Developer • Creator</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Hi, I’m <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
              </h1>
              <p className="mt-4 text-slate-200/80 text-lg">
                I craft modern web experiences that are fast, accessible, and delightful.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-slate-900 font-medium hover:bg-slate-100 transition shadow">
                  Get in touch
                </a>
                <a href="#work" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-slate-800/70 text-white border border-white/10 font-medium hover:bg-slate-800 transition">
                  View my work
                </a>
              </div>
            </motion.div>
            <div className="h-[50vh] lg:h-[70vh]" />
          </div>
        </div>
      </div>
    </section>
  );
}
