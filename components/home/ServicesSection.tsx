import { Layers, Shield, Factory } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: 'Digital Identity',
      description: 'Self-sovereign identity systems that balance user control with enterprise requirements.',
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      icon: Layers,
      title: 'Product Passports',
      description: 'Blockchain-based transparency solutions for circular economy compliance and supply chain visibility.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Factory,
      title: 'Enterprise UX',
      description: 'Design systems and interfaces for manufacturing and industrial operations at scale.',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in complex systems where human experience meets technical innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

