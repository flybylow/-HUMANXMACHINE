'use client';

import Link from 'next/link';

export function IndustriesSection() {
  const industries = [
    {
      emoji: '🔋',
      title: 'Battery Manufacturers',
      description: 'Mandatory DPP by February 2027',
      link: '#contact'
    },
    {
      emoji: '👕',
      title: 'Fashion & Textiles',
      description: 'ESPR requirements rolling out 2026',
      link: '#contact'
    },
    {
      emoji: '☕',
      title: 'Food & Beverage',
      description: 'Supply chain transparency demanded',
      link: '#contact'
    },
    {
      emoji: '📱',
      title: 'Electronics',
      description: 'Right-to-repair mandates coming',
      link: '#contact'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600">
            Built for manufacturers facing EU compliance deadlines
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{industry.emoji}</div>
              <h4 className="font-bold mb-2 text-gray-900">{industry.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{industry.description}</p>
              <Link 
                href={industry.link} 
                className="text-orange-500 text-sm font-semibold hover:text-orange-600"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

