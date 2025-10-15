import { Hero } from '@/components/home/Hero';
import { FeaturedProduct } from '@/components/home/FeaturedProduct';
// import { LatestSection } from '@/components/home/LatestSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ContactSection } from '@/components/home/ContactSection';
// import interviews from '@/data/interviews.json';
// import work from '@/data/work.json';
// import play from '@/data/play.json';

export default function HomePage() {
  // HIDDEN SECTIONS - Keep for future use
  // Get latest 3 from each section
  // const latestInterviews = interviews
  //   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  //   .slice(0, 3);
  // 
  // const latestWork = work
  //   .filter(item => item.featured)
  //   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  //   .slice(0, 3);
  // 
  // const latestPlay = play
  //   .filter(item => item.featured)
  //   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  //   .slice(0, 3);

  return (
    <>
      <Hero />
      <FeaturedProduct />
      {/* HIDDEN: Latest Conversations Section
      <LatestSection 
        title="Latest Conversations"
        items={latestInterviews}
        viewAllLink="/interviews"
        type="interviews"
        id="conversations"
      />
      */}
      <ServicesSection />
      {/* HIDDEN: Recent Work Section
      <LatestSection 
        title="Recent Work"
        items={latestWork}
        viewAllLink="/work"
        type="work"
      />
      */}
      {/* HIDDEN: Open Source & Community Section
      <LatestSection 
        title="Open Source & Community"
        items={latestPlay}
        viewAllLink="/play"
        type="play"
      />
      */}
      <ContactSection />
    </>
  );
}

