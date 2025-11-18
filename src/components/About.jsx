import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-300/80 text-lg">
            I’m a full‑stack developer focused on building immersive, performant web apps. I love bridging
            design and engineering to create digital products that feel effortless.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-slate-200 font-medium">Core Skills</p>
              <p className="text-slate-300/80 mt-2 text-sm">React, TypeScript, Node, Python, FastAPI, Tailwind, Framer Motion, Spline</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-slate-200 font-medium">What I value</p>
              <p className="text-slate-300/80 mt-2 text-sm">Accessibility, performance, motion with purpose, and clean, maintainable code.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
