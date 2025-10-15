import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { InterviewCard } from '../interviews/InterviewCard';
import { WorkCard } from '../work/WorkCard';
import { PlayCard } from '../play/PlayCard';
import type { Interview, Work, Play } from '@/data/types';

interface LatestSectionProps {
  title: string;
  items: Interview[] | Work[] | Play[];
  viewAllLink: string;
  type: 'interviews' | 'work' | 'play';
  id?: string;
}

export function LatestSection({ title, items, viewAllLink, type, id }: LatestSectionProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          <Link 
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(item => {
            switch(type) {
              case 'interviews':
                return <InterviewCard key={item.id} interview={item as Interview} />;
              case 'work':
                return <WorkCard key={item.id} work={item as Work} />;
              case 'play':
                return <PlayCard key={item.id} project={item as Play} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

