import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'A responsive chat application with websockets, typing indicators, and theme switching.',
    tags: ['React', 'WebSocket', 'Tailwind'],
    link: '#'
  },
  {
    title: 'E-commerce UI Kit',
    description: 'A modular UI kit for product catalogs, carts, and checkout flows.',
    tags: ['Design', 'React', 'Framer Motion'],
    link: '#'
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D experience using Spline with smooth transitions and hotspots.',
    tags: ['Spline', 'Three.js', 'UX'],
    link: '#'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-slate-300/80 mt-2">A few projects that showcase my approach and craft.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/0 via-blue-500/0 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
