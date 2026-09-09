import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, FileText } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: '01',
      slug: 'PR14',
      title: 'PR14',
      subtitle: 'FITNESS APPLICATION',
      description: 'Cross platform fitess App dessigned to target mucles by group. Designed for users who want to train to failure on a specific muscle group ',
      tags: ['React Native', 'Expo Router', 'SQLite'],
      metric: 'Open Source',
      subMetric: '100% offline',
      // Add your image path here (e.g., place images in your public/images/ folder)
      image: '/PR14.jpg',
      externalLinks: [
        { name: 'GitHub', href: 'https://github.com/ntshuxekoshirinda/PR14' },
        
      ],
    },
    {
      id: '02',
      slug: 'battleship',
      title: 'battleship',
      subtitle: 'STRATEGY GAME',
      description: 'Battleship game, single player vs AI bot',
      tags: ['Jest', 'Webpack', 'Vanilla JavaScript'],
      metric: '',
      subMetric: '',
      image: '/battleship.JPG',
      externalLinks: [
        { name: 'GitHub', href: 'https://github.com/ntshuxekoshirinda/battleship'},
        { name: 'PLAY', href: 'https://ntsbattleship.netlify.app'},
      ],
    },
    {
      id: '03',
      slug: 'memory',
      title: 'memory',
      subtitle: 'Memory test',
      description: 'Memory testing game using pokemon character',
      tags: ['React', 'VITE','CSS', 'TypeScript', 'REST API (POKEAPI)', 'GOOGLE FONTS'],
      metric: '',
      subMetric: '',
      image: '/memory.JPG',
      externalLinks: [
        { name: 'GitHub', href: 'https://github.com/ntshuxekoshirinda/memory-card' },
        { name: 'PLAY', href: 'https://memory-card-8j7.pages.dev/'},
      ],
    },
    {
      id: '04',
      slug: 'EPL',
      title: 'EPL Results Prediction',
      subtitle: 'AI-powered betting assistant',
      description: 'An intelligent betting predictor using Dixon-Coles Poisson Model, SciPy/Math module, Kelly Criterion algorithms',
      tags: ['Python', 'FastAPI','Streamlit', 'Pandas','Plotyl Express','PostgreSQL', 'Unicorn'],
      metric: '',
      subMetric: '',
      image: '/EPL.JPG',
      externalLinks: [
        { name: 'GitHub', href: 'https://github.com/ntshuxekoshirinda/betting_predictor' },
        { name: 'PLAY', href: 'https://bettingpredictor-hc6jhet9y55gnxatxs2co7.streamlit.app'},
      ],
    },   
    
    
  ];

  return (
    <section id="projects" className="py-16 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">02 · FEATURED PROJECTS</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">Shipped & in production.</h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
            Five selected case studies. The full catalog of apps, commercial templates, and open-source side quests lives below.
          </p>
        </div>
      </div>

      {/* Projects Stack */}
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded">
                  {project.id}
                </span>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {project.subtitle}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics Box */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/60">
                  <div className="text-white font-bold text-base font-mono">{project.metric}</div>
                </div>
                <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/60">
                  <div className="text-zinc-300 text-sm font-medium">{project.subMetric}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href={`/apps/${project.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </Link>

                {project.externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-full hover:bg-zinc-800 hover:text-white transition"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Image / Screenshot Preview Column */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover group-hover:scale-105 transition duration-500 opacity-90"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-zinc-300 flex justify-between items-center">
                <span>{project.title} Preview</span>
                <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">Live mockup</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}