'use client';

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export function FeaturedProduct() {
  return (
    <section id="odpp" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
            Featured Product
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Open Digital Product Passport
          </h2>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Product Visual */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📦</div>
                    <p className="text-sm opacity-90">ODPP Platform Preview</p>
                  </div>
                </div>
                
                {/* Badges Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    CIRPASS-2 Compliant
                  </span>
                  <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    Open Source
                  </span>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 mt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">14</div>
                  <div className="text-xs text-gray-600 mt-1">Stakeholder Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">3</div>
                  <div className="text-xs text-gray-600 mt-1">Product Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">100%</div>
                  <div className="text-xs text-gray-600 mt-1">EU Compliant</div>
                </div>
              </div>
            </div>

            {/* Product Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  The first open-source DPP platform built on CIRPASS-2
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We design systems for Digital Product Passports, compliance, 
                  and manufacturing operations at scale. ODPP is our production-ready 
                  platform with 14 stakeholder dashboards, semantic web standards, and 
                  full EU regulation compliance.
                </p>

                {/* Features Grid */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">14 Stakeholder Dashboards</h4>
                      <p className="text-sm text-gray-600">Consumer to inspector, complete value chain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">CIRPASS-2 Aligned</h4>
                      <p className="text-sm text-gray-600">Reference architecture implementation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Production Ready</h4>
                      <p className="text-sm text-gray-600">10k+ lines of code, zero linter errors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Open Source</h4>
                      <p className="text-sm text-gray-600">MIT license, full documentation</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="https://humanmachinebe.vercel.app/" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
                  >
                    Explore Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  
                  <Link 
                    href="https://opendpp-marketing.vercel.app/" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all"
                  >
                    Learn More
                  </Link>
                  
                  <Link 
                    href="https://github.com/wardvandewege/odpp" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gray-100 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Screenshots */}
        <div className="mt-16">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platform Highlights</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-4xl mb-2">👤</div>
                  <p className="text-xs font-medium">Consumer View</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs text-center py-2">
                Consumer Experience
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏭</div>
                  <p className="text-xs font-medium">Factory Dashboard</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs text-center py-2">
                Factory Dashboard
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔍</div>
                  <p className="text-xs font-medium">Inspector View</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs text-center py-2">
                Compliance Inspector
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-xs font-medium">Timeline View</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs text-center py-2">
                Supply Chain Timeline
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

