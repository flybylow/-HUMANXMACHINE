'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-pink-500 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          EU deadlines are approaching. Start your DPP journey today.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Link 
            href="#contact"
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Schedule 15-Min Demo
          </Link>
          <Link 
            href="#contact"
            className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all"
          >
            Download One-Pager
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-sm opacity-90">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Mechelen, Belgium</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>humanmachine.be</span>
          </div>
        </div>
      </div>
    </section>
  );
}

