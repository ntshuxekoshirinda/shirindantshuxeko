import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

// A central data store or database for your apps
const appsData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metric: string;
  subMetric: string;
  longDetails: string;
  link: string;
}> = {
  memory: {
    title: 'Memory',
    subtitle: 'Memory game',
    description: ' Implemented complex state management (React useState/useEffect) to track unique character selections and reset logic.',
    tags: ['React', 'VITE', 'CSS', 'TypeScript', 'RET API (POKEAPI)', 'GOOGLE FONTS'],
     metric: 'THE ODIN PROJECT',
    subMetric: 'JAVASCRIPT CURRICULUM',
    longDetails: 'Developed a memory-testing game utilizing the PokeAPI to dynamically fetch character data for dynamic UI rendering.',
    link: 'https://memory-card-8j7.pages.dev/',
  },
  nearby: {
    title: 'Nearby',
    subtitle: 'Location-based social',
    description: 'Find and chat with people around you. GPS-driven discovery and real-time chat with 10K+ installs on the Play Store.',
    tags: ['React Native', 'Firebase', 'GPS', 'Stripe'],
    metric: '10K+ installs',
    subMetric: '4.6★ Play Store',
    longDetails: 'Nearby connects users within a precise radius using native GPS tracking paired with Firebase Firestore real-time listeners. Includes in-app subscriptions and boosts handled securely through Stripe.',
    link: 'https://play.google.com',
  },
  doculensai: {
    title: 'DocuLensAI',
    subtitle: 'AI document scanner',
    description: 'A private, offline scanner in your pocket with auto edge-detection, on-device OCR, and one-tap PDF export.',
    tags: ['React Native', 'VisionCamera', 'ML Kit', 'SQLite'],
    metric: '100% offline',
    subMetric: '10 pro filters',
    longDetails: 'DocuLensAI runs entirely on-device with zero cloud dependence. Utilizing Google ML Kit OCR and VisionCamera, it processes multi-page documents instantly while maintaining complete user privacy.',
    link: '#',
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = appsData[slug];

  // If the app slug doesn't exist in our dictionary, trigger a 404
  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link href="/#apps" className="inline-flex items-center space-x-2 text-sm text-zinc-400 hover:text-white mb-8 transition">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to portfolio</span>
        </Link>
        
        {/* App Header info */}
        <div className="space-y-6">
          <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full uppercase tracking-wider">
            {app.subtitle}
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            {app.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
            {app.description}
          </p>

          {/* Metrics Box */}
          <div className="grid grid-cols-2 gap-4 py-6 border-y border-zinc-800">
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80">
              <div className="text-2xl font-bold text-white font-mono">{app.metric}</div>
              <div className="text-xs text-zinc-500 mt-1 font-mono uppercase">Primary Metric</div>
            </div>
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80">
              <div className="text-xl font-bold text-zinc-200 font-mono">{app.subMetric}</div>
              <div className="text-xs text-zinc-500 mt-1 font-mono uppercase">Platform Status</div>
            </div>
          </div>

          {/* Long Case Study Details */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold text-white">About the Build</h2>
            <p className="text-zinc-400 leading-relaxed text-base">{app.longDetails}</p>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-4">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-8">
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition"
            >
              <span>View Live Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

// Optional: Pre-generate static paths for optimal performance on Vercel
export async function generateStaticParams() {
  return Object.keys(appsData).map((slug) => ({
    slug,
  }));
}