'use client';

import { CosmicBackground } from '../shared/CosmicBackground';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-cosmic-gradient text-white py-20" id="contact">
      <CosmicBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Together</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Interested in working together or just want to chat about digital identity, 
            product passports, or enterprise UX?
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="mailto:hello@humanmachine.be" 
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/20 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>hello@humanmachine.be</span>
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/yourhandle" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/yourhandle" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        
        <div className="text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Human Machine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

