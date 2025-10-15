'use client';

import Link from 'next/link';
import { CosmicBackground } from '../shared/CosmicBackground';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    products: [
      { label: 'Open DPP', url: 'https://opendpp-marketing.vercel.app/', external: true },
      { label: 'Platform Demo', url: 'https://humanmachinebe.vercel.app/', external: true },
      { label: 'GitHub', url: 'https://github.com/wardvandewege', external: true }
    ],
    services: [
      { label: 'DPP Implementation', url: '#services', external: false },
      { label: 'CIRPASS-2 Consulting', url: '#services', external: false },
      { label: 'Design Systems', url: '#services', external: false },
      { label: 'Workshops', url: '#services', external: false }
    ],
    resources: [
      { label: 'Interviews', url: '/interviews', external: false },
      { label: 'Case Studies', url: '/work', external: false },
      { label: 'Open Source', url: '/play', external: false },
      { label: 'Documentation', url: 'https://opendpp-marketing.vercel.app/docs', external: true }
    ],
    company: [
      { label: 'About', url: '#odpp', external: false },
      { label: 'Contact', url: '#contact', external: false },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/wardvandewege', external: true }
    ]
  };

  return (
    <footer className="relative bg-cosmic-gradient text-white py-16">
      <CosmicBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  {link.external ? (
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={link.url} className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  {link.external ? (
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={link.url} className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  {link.external ? (
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={link.url} className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
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
          <div className="text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Human×Machine. Building digital infrastructure for sustainable manufacturing.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
