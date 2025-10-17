'use client';

import Link from 'next/link';
import { CosmicBackground } from '../shared/CosmicBackground';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cosmic-gradient text-white overflow-hidden">
      <CosmicBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              HUMAN
            </span>
            <span className="text-white mx-4">×</span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              MACHINE
            </span>
          </h1>
        </div>
        
        <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
          We design systems for Digital Product Passports.
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center items-center mb-12">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium">
            🏭 Manufacturing UX
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium">
            🔗 DPP Solutions
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium">
            ♻️ Circular Economy
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="#odpp"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            View Our Platform
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <Link 
            href="#services"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
          >
            Our Services
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

