'use client';

import Link from 'next/link';
import { CosmicBackground } from '../shared/CosmicBackground';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-cosmic-gradient text-white py-12">
      <CosmicBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center space-x-2 mb-3">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              HUMAN
            </span>
            <span className="text-2xl text-slate-400 font-light">×</span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              MACHINE
            </span>
          </Link>
          <p className="text-white/60 text-sm max-w-md mx-auto">
            digital infrastructure for sustainable living
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="mailto:ward@humanmachine.be" 
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/wardvandewege" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/wardvandewege" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-xs">
          <p>&copy; {new Date().getFullYear()} Human×Machine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
