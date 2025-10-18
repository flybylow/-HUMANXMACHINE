'use client';

import Link from 'next/link';
import { Wrench, LightbulbIcon, Layout, GraduationCap } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: LightbulbIcon,
      title: 'CIRPASS-2 Consulting',
      description: 'Expert guidance on EU DPP compliance, assessment, and roadmap aligned with CIRPASS-2 standards.',
      featured: true
    },
    {
      icon: Wrench,
      title: 'DPP Implementation',
      description: 'Custom deployment of HumanMachine Platform with complete ERP/PLM integration.',
      featured: false
    },
    {
      icon: Layout,
      title: 'Design Systems',
      description: 'Manufacturing and enterprise UX design systems for multi-stakeholder interfaces.',
      featured: false
    },
    {
      icon: GraduationCap,
      title: 'Workshops & Training',
      description: 'Expert-led workshops on DPP implementation and CIRPASS-2 standards.',
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
            From strategic assessment to full implementation, we help EU 
            manufacturers achieve CIRPASS-2 compliance and supply chain transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className={`bg-white border rounded-xl p-6 transition-all hover:shadow-lg ${
                  service.featured 
                    ? 'border-green-500 shadow-md' 
                    : 'border-gray-200'
                }`}
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                {/* CTA Link */}
                <Link 
                  href="#contact"
                  className="text-green-500 text-sm font-semibold hover:text-green-600 transition-colors"
                >
                  Contact for details →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Services Footer - Contact CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need more details on our services?
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
