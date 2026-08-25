'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Apps', href: '#apps' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2 font-bold tracking-tight hover:opacity-80 transition">
          <span className="bg-white text-black px-2 py-0.5 rounded text-sm font-mono">N</span>
          <span className="text-sm sm:text-base">Ntshuxeko Shirinda</span>
          <span className="hidden sm:inline text-xs text-zinc-400 font-normal">/ dev</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-zinc-400 hover:text-white transition"
          >
            <span>github</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-zinc-200 transition"
          >
            Hire me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-white p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-zinc-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-zinc-300 hover:text-white py-1.5 text-base"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex items-center space-x-4 border-t border-zinc-800">
            <a
              href="https://github.com/ntshuxekoshirinda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-zinc-400 hover:text-white"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}