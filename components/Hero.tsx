import { ArrowRight, ArrowDown, FileText, Star, ShoppingBag, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-12 sm:py-20">
      {/* Location & Status Tag */}
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-6">
        <span className="flex items-center space-x-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>AVAILABLE FOR FREELANCE · PRETORIA</span>
        </span>
        
      </div>

      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
        I build <span className="text-zinc-400 underline decoration-zinc-700 underline-offset-8">frontend and backend</span> software.
      </h1>

      {/* Bio Description */}
      <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
        I&apos;m Ntshuxeko Shirinda, Full-stack developer (JavaScript, TypeScript, React, Node.js) with a UNISA IT Diploma and shipped, unit-tested projects — including 100% Jest test coverage on an AI-driven game engine and a CI/CD pipeline that builds and signs Android release binaries via GitHub Actions. Comfortable across the stack: relational databases, REST APIs, MVC architecture, and Agile/Scrum workflows
      </p>

      {/* Action Buttons */}
      {/* 
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="#contact"
          className="flex items-center space-x-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition"
        >
          <span>Start a project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="#reels"
          className="flex items-center space-x-2 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-full hover:bg-zinc-800 hover:text-white transition"
        >
          <span>See the reels</span>
          <ArrowDown className="w-4 h-4" />
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center space-x-1 text-sm text-zinc-400 hover:text-white px-3 py-2 transition underline underline-offset-4"
        >
          <FileText className="w-4 h-4 mr-1" />
          <span>resume.pdf</span>
        </a>
      </div>
      */}

      {/* Quick Credibility Badges */}

      {/*
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl text-sm font-mono text-zinc-400 border-t border-zinc-900 pt-8">
        <div className="flex items-center space-x-2 bg-zinc-900/50 border border-zinc-900 p-3 rounded-lg">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
          <div>
            <span className="text-white font-semibold">FIVERR 5.0★</span> · Top Rated
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-900/50 border border-zinc-900 p-3 rounded-lg">
          <ShoppingBag className="w-4 h-4 text-blue-400 shrink-0" />
          <div>
            <span className="text-white font-semibold">CODECANYON</span> · 5+ Products
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-900/50 border border-zinc-900 p-3 rounded-lg">
          <Download className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <span className="text-white font-semibold">PLAY STORE</span> · 10K+ Installs
          </div>
        </div>
      </div>
      */}
    </section>
      
  );
}