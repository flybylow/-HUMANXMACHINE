import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { BackButton } from '@/components/shared/BackButton';
import { InterviewCard } from '@/components/interviews/InterviewCard';
import interviews from '@/data/interviews.json';
import type { Interview } from '@/data/types';

export async function generateStaticParams() {
  return interviews.map((interview) => ({
    slug: interview.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const interview = interviews.find(i => i.slug === params.slug);
  
  if (!interview) {
    return {
      title: 'Interview Not Found',
    };
  }

  return {
    title: `${interview.title} | Human Machine`,
    description: interview.description,
    openGraph: {
      title: interview.title,
      description: interview.description,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function InterviewPage({ params }: { params: { slug: string } }) {
  const interview = interviews.find(i => i.slug === params.slug) as Interview | undefined;
  
  if (!interview) {
    notFound();
  }
  
  // Get 3 related interviews (same category, exclude current)
  const relatedInterviews = interviews
    .filter(i => i.category === interview.category && i.id !== interview.id)
    .slice(0, 3) as Interview[];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton href="/interviews" label="Back to Interviews" />
        
        {/* Header */}
        <header className="mb-8">
          <div className={`inline-block bg-gradient-to-r ${interview.categoryGradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            {interview.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {interview.title}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-600 mb-6 gap-4">
            <div>
              <p className="font-semibold text-lg text-gray-900">
                {interview.guest.name}
              </p>
              <p>{interview.guest.role} at {interview.guest.company}</p>
            </div>
            <div className="text-sm">
              <p>{formatDate(interview.date)}</p>
              <p>{interview.duration}</p>
            </div>
          </div>
        </header>
        
        {/* Media Player */}
        {interview.audioUrl && (
          <div className="mb-12">
            <audio controls className="w-full">
              <source src={interview.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        
        {interview.videoUrl && (
          <div className="mb-12 aspect-video">
            <iframe
              src={interview.videoUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        
        {/* Key Takeaways */}
        {interview.keyTakeaways && interview.keyTakeaways.length > 0 && (
          <div className="mb-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              {interview.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-orange-600 mr-3 text-xl">•</span>
                  <span className="text-gray-700 leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Long Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <ReactMarkdown>{interview.longDescription}</ReactMarkdown>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {interview.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        {interview.links && interview.links.length > 0 && (
          <div className="mb-12 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links & Resources</h3>
            <div className="flex flex-wrap gap-4">
              {interview.links.map(link => (
                <a 
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Transcript */}
        {interview.transcript && (
          <details className="mb-12 border border-gray-200 rounded-lg p-6">
            <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
              Full Transcript
            </summary>
            <div className="mt-4 prose prose-sm max-w-none text-gray-600">
              <ReactMarkdown>{interview.transcript}</ReactMarkdown>
            </div>
          </details>
        )}
        
        {/* Related Interviews */}
        {relatedInterviews.length > 0 && (
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Interviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedInterviews.map(related => (
                <InterviewCard key={related.id} interview={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

