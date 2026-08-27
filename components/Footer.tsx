import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ntshuxekoshirinda' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ntshuxeko-shirinda96/' },
    
    
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800 text-zinc-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1: Brand & Bio */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-white font-bold">
            <span className="bg-white text-black px-2 py-0.5 rounded text-sm font-mono">N</span>
            <span>Ntshuxeko Shirinda</span>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm">
            Full-stack developer.
          </p>
        </div>

        

        {/* Col 3: Contact  */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">Contact</h4>
          <a href="mailto:ntshuxekohirinda96@gmail.com" className="block text-white hover:underline text-sm font-medium">
            ntshuxekohirinda96@gmail.com
          </a>
          
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono">
        <p>© 2026 Ntshuxeko Shirinda</p>
        
      </div>
    </footer>
  );
}