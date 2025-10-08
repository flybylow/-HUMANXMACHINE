import { Hero } from '@/components/home/Hero';
import { LatestSection } from '@/components/home/LatestSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import interviews from '@/data/interviews.json';
import work from '@/data/work.json';
import play from '@/data/play.json';

export default function HomePage() {
  // Get latest 3 from each section
  const latestInterviews = interviews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  const latestWork = work
    .filter(item => item.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  const latestPlay = play
    .filter(item => item.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Hero />
      <LatestSection 
        title="Latest Conversations"
        items={latestInterviews}
        viewAllLink="/interviews"
        type="interviews"
      />
      <ServicesSection />
      <LatestSection 
        title="Recent Work"
        items={latestWork}
        viewAllLink="/work"
        type="work"
      />
      <LatestSection 
        title="Side Projects"
        items={latestPlay}
        viewAllLink="/play"
        type="play"
      />
    </>
  );
}

