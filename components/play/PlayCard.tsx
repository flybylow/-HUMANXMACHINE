import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import type { Play } from '@/data/types';

interface PlayCardProps {
  project: Play;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export function PlayCard({ project }: PlayCardProps) {
  return (
    <Link href={`/play/${project.slug}`}>
      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.typeGradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
        <div className="relative">
          {/* Thumbnail */}
          {project.thumbnail && (
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div className={`w-full h-full bg-gradient-to-br ${project.typeGradient} opacity-20`}></div>
            </div>
          )}
          
          {/* Type badge */}
          <div className={`inline-block bg-gradient-to-r ${project.typeGradient} text-white px-3 py-1 rounded-full text-sm font-medium mb-4`}>
            {project.type}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-3 text-sm">
              {project.links.map(link => (
                <div key={link.url} className="flex items-center gap-1 text-orange-600">
                  {link.label.toLowerCase().includes('github') ? (
                    <Github className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                  <span>{link.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

