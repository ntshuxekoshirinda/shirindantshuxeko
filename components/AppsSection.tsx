import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function AppsSection() {
  const apps = [
    { title: 'Battleship', slug: 'battleship', category: 'Strategy Game' },
    { title: 'Memory', slug: 'memory', category: 'Game / Template' },
    { title: 'PR14', slug: 'PR14', category: 'Fitness Application' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {apps.map((app) => (
        <Link
          key={app.slug}
          href={`/apps/${app.slug}`}
          className="group bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700 transition flex items-center justify-between"
        >
          <div>
            <h3 className="text-white font-medium group-hover:text-zinc-200 transition">
              {app.title}
            </h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">{app.category}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition">
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition" />
          </div>
        </Link>
      ))}
    </div>
  );
}