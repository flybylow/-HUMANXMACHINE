'use client';

export function PainPointsSection() {
  const painPoints = [
    {
      emoji: '⚠️',
      title: 'Regulatory Confusion',
      description: 'EU DPP requirements are complex and changing'
    },
    {
      emoji: '🔗',
      title: 'Fragmented Supply Chains',
      description: 'Data scattered across suppliers and systems'
    },
    {
      emoji: '⏰',
      title: 'Tight Deadlines',
      description: 'Battery DPPs mandatory by February 2027'
    },
    {
      emoji: '💰',
      title: 'Cost Uncertainty',
      description: 'Unknown implementation costs and timelines'
    }
  ];

  return (
    <section className="py-16 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            The DPP Challenge
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manufacturers face mounting pressure to comply with EU Digital Product Passport regulations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl mb-3">{point.emoji}</div>
              <h3 className="font-bold text-gray-900 mb-1">{point.title}</h3>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

