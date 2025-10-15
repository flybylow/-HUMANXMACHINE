'use client';

import Link from 'next/link';
import { Wrench, LightbulbIcon, Layout, GraduationCap } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: 'DPP Implementation',
      description: 'Custom deployment of ODPP platform for your products and supply chain. Complete integration with your existing systems.',
      includes: [
        'ODPP platform customization',
        'Product-specific data modeling',
        'ERP/PLM integration',
        'Stakeholder training',
        'Technical documentation',
        '3 months support'
      ],
      timeline: '6-12 weeks',
      investment: 'From €25,000',
      bestFor: 'Mid-size manufacturers, 100-10,000 SKUs, need full solution',
      featured: false
    },
    {
      icon: LightbulbIcon,
      title: 'CIRPASS-2 Consulting',
      description: 'Expert guidance on EU DPP compliance. Assessment, roadmap, and implementation strategy aligned with CIRPASS-2 standards.',
      includes: [
        'Compliance gap analysis',
        'CIRPASS-2 alignment review',
        'Implementation roadmap',
        'Architecture recommendations',
        'Stakeholder workshops (2-3 sessions)',
        'Executive summary report'
      ],
      timeline: '2-4 weeks',
      investment: '€5,000 - €15,000',
      bestFor: 'Companies exploring DPP requirements, need strategic direction before implementation',
      featured: true
    },
    {
      icon: Layout,
      title: 'Design Systems',
      description: 'Manufacturing and enterprise UX design systems. Multi-stakeholder interfaces for complex operations.',
      includes: [
        'User research & stakeholder mapping',
        'Design system architecture',
        'Component library (Figma + code)',
        'Accessibility compliance (WCAG 2.1 AA)',
        'Implementation guidelines',
        'Developer handoff'
      ],
      timeline: '8-16 weeks',
      investment: '€30,000 - €100,000',
      bestFor: 'Large enterprises, multiple products/sites, need unified UX at scale',
      featured: false
    },
    {
      icon: GraduationCap,
      title: 'Workshops & Training',
      description: 'Expert-led workshops on DPP implementation, CIRPASS-2 standards, and sustainable manufacturing systems.',
      includes: [
        'DPP 101: Understanding the Regulation',
        'CIRPASS-2 Deep Dive (technical)',
        'Multi-Stakeholder UX Design',
        'Semantic Web for Product Data',
        'Custom topic workshops'
      ],
      timeline: 'Half-day or full-day',
      investment: '€2,500 - €5,000 / day',
      bestFor: 'Internal teams, partner training, conference workshops',
      featured: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From open-source tools to full implementation support, 
            we help manufacturers navigate Digital Product Passport requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className={`relative bg-gray-50 border-2 rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  service.featured 
                    ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50' 
                    : 'border-gray-200 hover:border-green-500'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 right-6 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                    Most Popular
                  </div>
                )}
                
                {/* Icon */}
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    {service.title === 'Workshops & Training' ? 'Workshop Options:' : 'Includes:'}
                  </h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="space-y-3 py-4 border-t border-gray-200 mb-5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-medium">
                      {service.title === 'Workshops & Training' ? 'Duration:' : 'Timeline:'}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{service.timeline}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href="#contact"
                  className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg mb-4"
                >
                  {service.featured ? 'Book Assessment' : service.title === 'Workshops & Training' ? 'Inquire' : 'Request Proposal'}
                </Link>

                {/* Best For */}
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Best for:</span> {service.bestFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Footer - Custom Projects */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Need something different?</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We also take on custom projects for sustainable manufacturing, 
              circular economy platforms, and supply chain transparency solutions.
            </p>
            <Link 
              href="#contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
