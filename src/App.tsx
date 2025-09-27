import { StartupSequence } from './components/StartupSequence';
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { FounderSection } from './sections/FounderSection';
import { AboutSection } from './sections/AboutSection';
import { ShowcaseSection } from './sections/ShowcaseSection';
import { CommunityHighlightsSection } from './sections/CommunityHighlightsSection';
import { InstagramSection } from './sections/InstagramSection';
import { CommunityCalloutSection } from './sections/CommunityCalloutSection';
import { FooterSection } from './sections/FooterSection';
import './styles/retro.css';

export default function App() {
  return (
    <>
      <StartupSequence />
      <div className="min-h-screen bg-black retro-bg">
        <Header />

        {/* Main content - offset for desktop sidebar */}
        <div className="md:ml-48 pt-16 md:pt-0">
          <HeroSection />
          {/* <FounderSection /> */}
          <AboutSection />
          <ShowcaseSection />
          <CommunityHighlightsSection />
          <InstagramSection />
          <CommunityCalloutSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}