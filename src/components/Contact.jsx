import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Placeholder submit; can be wired to backend later
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 600);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white">Let’s work together</h2>
          <p className="text-slate-300/80 mt-2">Tell me a bit about your project.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your name" required />
            <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Email" required />
            <textarea rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Project details" required />
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-slate-900 font-medium hover:bg-slate-100 transition shadow" type="submit">Send</button>
              <span className="text-slate-300/80 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
