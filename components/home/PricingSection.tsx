'use client';

import Link from 'next/link';

export function PricingSection() {
  const packages = [
    {
      label: 'STRATEGIC',
      labelColor: 'text-orange-500',
      title: 'Consulting',
      price: 'From €8K',
      features: [
        'Gap analysis',
        'Compliance roadmap',
        'Architecture review',
        '2-4 weeks delivery'
      ],
      ctaText: 'Book Assessment',
      ctaLink: '#contact',
      ctaStyle: 'primary',
      bestFor: 'Companies exploring requirements',
      popular: false
    },
    {
      label: 'MOST POPULAR',
      labelColor: 'text-white bg-green-500',
      title: 'Implementation',
      price: 'From €25K',
      features: [
        'Full platform deployment',
        'ERP integration',
        'Training & support',
        '6-12 weeks delivery'
      ],
      ctaText: 'Request Proposal',
      ctaLink: '#contact',
      ctaStyle: 'primary',
      bestFor: 'Manufacturers ready to deploy',
      popular: true
    },
    {
      label: 'COMING 2026',
      labelColor: 'text-blue-500',
      title: 'SaaS Platform',
      price: 'From €699/mo',
      features: [
        'Hosted solution',
        'Ongoing support',
        'Automatic updates',
        'API access'
      ],
      ctaText: 'Join Waitlist',
      ctaLink: '#contact',
      ctaStyle: 'secondary',
      bestFor: 'Ongoing DPP management',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600">
            From strategic assessment to full platform deployment
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`bg-white p-8 rounded-lg shadow-sm transition-all hover:shadow-xl ${
                pkg.popular ? 'border-2 border-green-500 relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    {pkg.label}
                  </span>
                </div>
              )}
              
              {!pkg.popular && (
                <div className={`text-sm font-semibold mb-2 ${pkg.labelColor}`}>
                  {pkg.label}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <div className="text-3xl font-bold mb-6">{pkg.price}</div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={pkg.ctaLink}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg ${
                  pkg.ctaStyle === 'primary' 
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600' 
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pkg.ctaText}
              </Link>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Best for: {pkg.bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

