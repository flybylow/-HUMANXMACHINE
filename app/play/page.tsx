import type { Metadata } from 'next';
import { PlayGrid } from '@/components/play/PlayGrid';
import play from '@/data/play.json';

export const metadata: Metadata = {
  title: 'Play | Human Machine',
  description: 'Open source projects, design resources, and experiments',
  openGraph: {
    title: 'Play | Human Machine',
    description: 'Open source projects, design resources, and experiments',
  },
};

export default function PlayPage() {
  const sortedPlay = [...play].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Side Projects
            </span>
            {' '}& Experiments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open source tools, design resources, and experimental projects 
            exploring new ideas in digital identity and sustainable commerce.
          </p>
        </div>
        
        {/* Play Grid */}
        <PlayGrid projects={sortedPlay} />
      </div>
    </div>
  );
}

