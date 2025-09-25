import { FadeIn } from '../components/FadeIn';
import { RetroCard } from '../components/RetroCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import LiveryCodes from '@/assets/codes.png';
import Showroom from '@/assets/showroom.webp';
import Anime from '@/assets/anim.jpg';

const communityHighlights = [
  {
    src: LiveryCodes,
    alt: "Livery codes and graphics",
    title: "Itasha Codes & Graphics",
    description: "Community-made livery codes, assets, and body parts.",
    buttonText: "Get Codes"
  },
  {
    src: Showroom,
    alt: "Car club showroom",
    title: "Showroom & Clubs",
    description: "Exclusive builds and collabs.",
    buttonText: "Join Clubs"
  },
  {
    src: Anime,
    alt: "Anime and vtuber culture",
    title: "Anime, Vtubers & Vocaloids",
    description: "Culture channels beyond cars.",
    buttonText: "Chat Now"
  }
];

export function CommunityHighlightsSection() {
  return (
    <section id="community" className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn stagger>
          <h2 className="retro-text text-2xl md:text-3xl text-cyan-400 mb-8 text-center">
            COMMUNITY HIGHLIGHTS
          </h2>

          <div className="retro-grid">
            {communityHighlights.map((highlight, index) => (
              <RetroCard key={index} glowing className="flex flex-col h-full">
                <div className="mb-4">
                  <ImageWithFallback
                    src={highlight.src}
                    alt={highlight.alt}
                    className="w-full h-32 object-cover border border-cyan-400/30"
                  />
                </div>
                <h3 className="retro-text text-xl text-cyan-400 mb-3">
                  {highlight.title}
                </h3>
                <p className="retro-mono text-sm text-gray-300 mb-4 flex-grow">
                  {highlight.description}
                </p>
                <div className="text-center mt-auto">
                  <a
                    href="https://discord.com/invite/nG8QZZM6vW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button-small hover:scale-105 transform transition-all text-white"
                  >
                    {highlight.buttonText}
                  </a>
                </div>
              </RetroCard>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}