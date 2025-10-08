import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { BackButton } from '@/components/shared/BackButton';
import { WorkCard } from '@/components/work/WorkCard';
import { ExternalLink } from 'lucide-react';
import work from '@/data/work.json';
import type { Work } from '@/data/types';

export async function generateStaticParams() {
  return work.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const workItem = work.find(w => w.slug === params.slug);
  
  if (!workItem) {
    return {
      title: 'Work Not Found',
    };
  }

  return {
    title: `${workItem.project} | Human Machine`,
    description: workItem.description,
    openGraph: {
      title: `${workItem.project} - ${workItem.company}`,
      description: workItem.description,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const workItem = work.find(w => w.slug === params.slug) as Work | undefined;
  
  if (!workItem) {
    notFound();
  }
  
  // Get 3 related work items (exclude current)
  const relatedWork = work
    .filter(w => w.id !== workItem.id)
    .slice(0, 3) as Work[];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton href="/work" label="Back to Work" />
        
        {/* Header */}
        <header className="mb-8">
          <div className="text-orange-600 font-semibold mb-2">
            {workItem.company}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {workItem.project}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-4">
              <span className="font-medium">{workItem.role}</span>
              <span>•</span>
              <span>{workItem.duration}</span>
              <span>•</span>
              <span>{formatDate(workItem.date)}</span>
            </div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {workItem.description}
          </p>
        </header>
        
        {/* Hero Image */}
        {workItem.thumbnail && (
          <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-pink-500 p-1">
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 opacity-20"></div>
            </div>
          </div>
        )}
        
        {/* Quick Stats */}
        {workItem.metrics && workItem.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
            {workItem.metrics.map((metric, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Team */}
        {workItem.team && workItem.team.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Team</h3>
            <div className="flex flex-wrap gap-2">
              {workItem.team.map((member, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {member}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Long Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <ReactMarkdown>{workItem.longDescription}</ReactMarkdown>
        </div>
        
        {/* Image Gallery */}
        {workItem.images && workItem.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {workItem.images.map((image, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 opacity-20"></div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Technologies */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {workItem.technologies.map(tech => (
              <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {workItem.tags.map(tag => (
              <span key={tag} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Impact */}
        <div className="mb-12 border-l-4 border-orange-500 pl-6 py-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact</h3>
          <p className="text-gray-700 leading-relaxed">{workItem.impact}</p>
        </div>
        
        {/* Links */}
        {workItem.links && workItem.links.length > 0 && (
          <div className="mb-12 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links & Resources</h3>
            <div className="flex flex-wrap gap-4">
              {workItem.links.map(link => (
                <a 
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 underline"
                >
                  {link.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Related Work */}
        {relatedWork.length > 0 && (
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedWork.map(related => (
                <WorkCard key={related.id} work={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

