import { PlayCard } from './PlayCard';
import type { Play } from '@/data/types';

interface PlayGridProps {
  projects: Play[];
}

export function PlayGrid({ projects }: PlayGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <PlayCard key={project.id} project={project} />
      ))}
    </div>
  );
}

