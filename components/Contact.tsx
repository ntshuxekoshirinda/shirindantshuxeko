import { Download, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 border-t border-zinc-900">
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/50 border border-emerald-900/50 px-3 py-1 rounded-full">
          AVAILABLE FOR WORK
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-6">
          Open to Relocate & Remote Work
        </h2>
        <p className="text-zinc-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Available for freelance, full time & contract work. Typical reply within a day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ntshuxekohirinda96@gmail.com"
            className="flex items-center space-x-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition"
          >
            <Mail className="w-4 h-4" />
            <span>ntshuxekohirinda96@gmail.com</span>
          </a>
          
        </div>
      </div>
    </section>
  );
}