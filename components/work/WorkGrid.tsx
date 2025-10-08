import { WorkCard } from './WorkCard';
import type { Work } from '@/data/types';

interface WorkGridProps {
  works: Work[];
}

export function WorkGrid({ works }: WorkGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map(work => (
        <WorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}

