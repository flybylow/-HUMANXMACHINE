import type { Metadata } from 'next';
import { InterviewGrid } from '@/components/interviews/InterviewGrid';
import interviews from '@/data/interviews.json';

export const metadata: Metadata = {
  title: 'Interviews | Human Machine',
  description: 'Conversations with builders making technology more human',
  openGraph: {
    title: 'Interviews | Human Machine',
    description: 'Conversations with builders making technology more human',
  },
};

export default function InterviewsPage() {
  const sortedInterviews = [...interviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Conversations
            </span>
            {' '}with Builders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth discussions with people building the future of digital identity, 
            sustainable commerce, and human-centered technology.
          </p>
        </div>
        
        {/* Interview Grid */}
        <InterviewGrid interviews={sortedInterviews} />
      </div>
    </div>
  );
}

