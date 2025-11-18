import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-slate-200">
      <li><a href="#work" className="hover:text-white transition">Work</a></li>
      <li><a href="#about" className="hover:text-white transition">About</a></li>
      <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
      <li className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white transition"><Github size={18} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition"><Linkedin size={18} /></a>
        <a href="#contact" aria-label="Email" className="text-slate-300 hover:text-white transition"><Mail size={18} /></a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="text-white font-semibold tracking-tight text-lg">
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">My Portfolio</span>
            </a>
            <nav className="hidden md:block"><NavLinks /></nav>
            <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6"><NavLinks /></div>
          )}
        </div>
      </div>
    </header>
  );
}
