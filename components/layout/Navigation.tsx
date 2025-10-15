'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 to-purple-900 text-white z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              HUMAN
            </span>
            <span className="text-2xl text-slate-400 font-light">×</span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              MACHINE
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#odpp" className="text-white/80 hover:text-white transition-colors">
              Platform
            </a>
            <a href="/#services" className="text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <Link href="/interviews" className="text-white/80 hover:text-white transition-colors">
              Conversations
            </Link>
            <a 
              href="/#contact" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-slate-900">
          <div className="px-4 py-4 space-y-3">
            <a 
              href="/#odpp" 
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Platform
            </a>
            <a 
              href="/#services" 
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <Link 
              href="/interviews" 
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Conversations
            </Link>
            <a 
              href="/#contact" 
              className="block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

