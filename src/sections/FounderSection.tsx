import { FadeIn } from '../components/FadeIn';
import { RetroCard } from '../components/RetroCard';
import { MINAMI_INSTAGRAM } from '../constants/instagram';

export function FounderSection() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
        <RetroCard className="text-center" glowing>
          <div className="retro-text text-2xl md:text-3xl text-cyan-400 mb-4">
            Founded by{' '}
            <a
              href={MINAMI_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors duration-200"
            >
              minami7chu
            </a>
          </div>
          <p className="retro-mono text-gray-300">
            Uniting anime car culture and FR Legends players across the globe.
          </p>
        </RetroCard>
        </FadeIn>
      </div>
    </section>
  );
}