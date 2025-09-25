import { FadeIn } from '../components/FadeIn';
import { RetroCard } from '../components/RetroCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ItashaMeet from '@/assets/ItashaMeet.jpg';
import ItashaBuild from '@/assets/ItashaBuild.jpg';
import ItashaSpotting from '@/assets/ItashaSpotting.jpg';

const showcaseImages = [
  {
    src: ItashaMeet,
    alt: "Itasha car meets",
    label: "Itasha Meets"
  },
  {
    src: ItashaBuild,
    alt: "Itasha car builds",
    label: "Itasha Builds"
  },
  {
    src: ItashaSpotting,
    alt: "IRL Itasha spotting",
    label: "IRL Spotting"
  }
];

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn stagger>
          <RetroCard>
            <h2 className="retro-text text-2xl md:text-3xl text-cyan-400 mb-8 text-center">
              SHOWCASE / MEETUP GALLERY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {showcaseImages.map((image, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover border-2 border-cyan-400/50"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="retro-text text-cyan-400">{image.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="retro-mono text-gray-300 mb-6">
                Inside the Discord you'll find livery codes, graphics, body parts, and exclusive clubs.
              </p>
              <a
                href="https://discord.com/invite/nG8QZZM6vW"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button hover:scale-105 transform transition-all"
              >
                Explore the Discord
              </a>
            </div>
          </RetroCard>
        </FadeIn>
      </div>
    </section>
  );
}