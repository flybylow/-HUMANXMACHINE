import Link from 'next/link';
import type { Work } from '@/data/types';

interface WorkCardProps {
  work: Work;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/work/${work.slug}`}>
      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
        <div className="relative">
          {/* Thumbnail */}
          {work.thumbnail && (
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 opacity-20"></div>
            </div>
          )}
          
          {/* Company */}
          <div className="text-sm font-semibold text-orange-600 mb-2">
            {work.company}
          </div>
          
          {/* Project Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
            {work.project}
          </h3>
          
          {/* Role */}
          <p className="text-gray-600 mb-2 text-sm">
            {work.role} • {work.duration}
          </p>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2">{work.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {work.tags.slice(0, 3).map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Metrics */}
          {work.metrics && work.metrics.length > 0 && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                {work.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-orange-600">{metric.value}</div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

