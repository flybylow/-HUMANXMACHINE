'use client';

export function TrustIndicators() {
  const indicators = [
    {
      emoji: '🇪🇺',
      title: 'Based in Belgium',
      description: 'Located in the heart of EU regulatory landscape'
    },
    {
      emoji: '⚙️',
      title: 'Standards Compliant',
      description: 'W3C JSON-LD, DIDs, CIRPASS-2 aligned'
    },
    {
      emoji: '🔒',
      title: 'Production Ready',
      description: 'Battle-tested with real products'
    },
    {
      emoji: '📊',
      title: 'Complete Solution',
      description: '14 stakeholder dashboards'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {indicators.map((indicator, idx) => (
            <div key={idx}>
              <div className="text-4xl mb-3">{indicator.emoji}</div>
              <h4 className="font-bold mb-2 text-gray-900">{indicator.title}</h4>
              <p className="text-sm text-gray-600">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

