import type { Metadata } from 'next';
import { WorkGrid } from '@/components/work/WorkGrid';
import work from '@/data/work.json';

export const metadata: Metadata = {
  title: 'Work | Human Machine',
  description: 'Case studies and projects in digital identity, product passports, and enterprise UX',
  openGraph: {
    title: 'Work | Human Machine',
    description: 'Case studies and projects in digital identity, product passports, and enterprise UX',
  },
};

export default function WorkPage() {
  const sortedWork = [...work].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Work
            </span>
            {' '}& Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Case studies from building digital identity systems, product passports, 
            and enterprise design systems at scale.
          </p>
        </div>
        
        {/* Work Grid */}
        <WorkGrid works={sortedWork} />
      </div>
    </div>
  );
}

