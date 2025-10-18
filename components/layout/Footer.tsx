'use client';

import Link from 'next/link';
import { CosmicBackground } from '../shared/CosmicBackground';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Company */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-flex items-center space-x-2">
                <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  HUMAN
                </span>
                <span className="text-xl text-gray-600">×</span>
                <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  MACHINE
                </span>
              </Link>
            </div>
            <p className="text-sm leading-relaxed">
              Enterprise Digital Product Passport platform for EU manufacturers.
            </p>
          </div>
          
          {/* Platform */}
          <div>
            <h5 className="text-white font-bold mb-4">Platform</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#platform" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="https://humanmachinebe.vercel.app/" target="_blank" className="hover:text-white transition-colors">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#platform" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h5 className="text-white font-bold mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h5 className="text-white font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:warddem@gmail.com" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/warddem" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HumanMachine. All rights reserved.</p>
          <p className="mt-2">Based in Bruges, Belgium 🇧🇪</p>
        </div>
      </div>
    </footer>
  );
}
