export default function TechMarquee() {
  const techItems = [
    "REACT NATIVE",
    "EXPO",
    "REANIMATED",
    "REACT",
    "TYPESCRIPT",
    "IOS",
    "ANDROID",
    "AZURE",
    "JEST",
    "NESTJS",
    "NEXT.JS",
    "SQL",
    "GIT",
    "GITHUB"
  ];

  return (
    <div className="w-full bg-zinc-950 border-y border-zinc-800/80 py-4 overflow-hidden relative my-6">
      <div className="flex whitespace-nowrap animate-marquee space-x-8 text-xs font-mono text-zinc-400">
        {/* Render 3 times for a seamless infinite loop */}
        {[...techItems, ...techItems, ...techItems].map((tech, index) => (
          <div key={index} className="flex items-center space-x-8">
            <span className="hover:text-white transition tracking-wider">{tech}</span>
            <span className="text-zinc-700">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}