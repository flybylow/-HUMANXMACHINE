'use client';

import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';

interface CurrentWorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  tags: string[];
}

interface CurrentWorkData {
  title: string;
  description: string;
  items: CurrentWorkItem[];
}

interface CurrentWorkSectionProps {
  data: CurrentWorkData;
}

export function CurrentWorkSection({ data }: CurrentWorkSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-4">
            <Clock className="w-5 h-5" />
            <span className="uppercase tracking-wide text-sm">Current Focus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Work Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Fallback icon when image is not available */}
                  <div className="text-6xl opacity-30">📦</div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                  <span className="text-sm">Updates coming soon</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Want to collaborate on these or other projects?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

