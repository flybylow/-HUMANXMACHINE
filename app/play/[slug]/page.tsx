import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { BackButton } from '@/components/shared/BackButton';
import { PlayCard } from '@/components/play/PlayCard';
import { ExternalLink, Github } from 'lucide-react';
import play from '@/data/play.json';
import type { Play } from '@/data/types';

export async function generateStaticParams() {
  return play.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = play.find(p => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Human Machine`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default function PlayDetailPage({ params }: { params: { slug: string } }) {
  const project = play.find(p => p.slug === params.slug) as Play | undefined;
  
  if (!project) {
    notFound();
  }
  
  // Get 3 related projects (exclude current)
  const relatedProjects = play
    .filter(p => p.id !== project.id)
    .slice(0, 3) as Play[];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton href="/play" label="Back to Projects" />
        
        {/* Header */}
        <header className="mb-8">
          <div className={`inline-block bg-gradient-to-r ${project.typeGradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            {project.type}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="text-gray-600 text-sm">
            {formatDate(project.date)}
          </div>
        </header>
        
        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-12">
            {project.links.map(link => (
              <a 
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg"
              >
                {link.label.toLowerCase().includes('github') ? (
                  <Github className="w-5 h-5" />
                ) : (
                  <ExternalLink className="w-5 h-5" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
        
        {/* Hero Image */}
        {project.thumbnail && (
          <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-pink-500 p-1">
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div className={`w-full h-full bg-gradient-to-br ${project.typeGradient} opacity-20`}></div>
            </div>
          </div>
        )}
        
        {/* Long Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <ReactMarkdown>{project.longDescription}</ReactMarkdown>
        </div>
        
        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                  <div className={`w-full h-full bg-gradient-to-br ${project.typeGradient} opacity-20`}></div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Technologies */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
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
            {project.tags.map(tag => (
              <span key={tag} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map(related => (
                <PlayCard key={related.id} project={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

