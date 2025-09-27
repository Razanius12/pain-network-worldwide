import { StartupSequence } from '../components/StartupSequence';
import { HeroSection } from '../sections/HeroSection';
import { FounderSection } from '../sections/FounderSection';
import { ShowcaseSection } from '../sections/ShowcaseSection';
import { CommunityHighlightsSection } from '../sections/CommunityHighlightsSection';
import { InstagramSection } from '../sections/InstagramSection';
import { CommunityCalloutSection } from '../sections/CommunityCalloutSection';
import { FooterSection } from '../sections/FooterSection';

export const HomePage = () => {
  return (
    <>
      <StartupSequence />
      <HeroSection />
      <FounderSection />
      <ShowcaseSection />
      <CommunityHighlightsSection />
      <InstagramSection />
      <CommunityCalloutSection />
      <FooterSection />
    </>
  );
};