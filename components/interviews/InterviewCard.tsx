import Link from 'next/link';
import type { Interview } from '@/data/types';

interface InterviewCardProps {
  interview: Interview;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function InterviewCard({ interview }: InterviewCardProps) {
  return (
    <Link href={`/interviews/${interview.slug}`}>
      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${interview.categoryGradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
        <div className="relative">
          {/* Thumbnail */}
          {interview.thumbnail && (
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div className={`w-full h-full bg-gradient-to-br ${interview.categoryGradient} opacity-20`}></div>
            </div>
          )}
          
          {/* Category badge */}
          <div className={`inline-block bg-gradient-to-r ${interview.categoryGradient} text-white px-3 py-1 rounded-full text-sm font-medium mb-4`}>
            {interview.category}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
            {interview.title}
          </h3>
          
          {/* Guest */}
          <p className="text-gray-600 mb-2 font-medium">
            {interview.guest.name}, {interview.guest.company}
          </p>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2">{interview.description}</p>
          
          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{formatDate(interview.date)}</span>
            <span>{interview.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

