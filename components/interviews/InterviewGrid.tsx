import { InterviewCard } from './InterviewCard';
import type { Interview } from '@/data/types';

interface InterviewGridProps {
  interviews: Interview[];
}

export function InterviewGrid({ interviews }: InterviewGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {interviews.map(interview => (
        <InterviewCard key={interview.id} interview={interview} />
      ))}
    </div>
  );
}

