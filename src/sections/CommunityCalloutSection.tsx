import { FadeIn } from '../components/FadeIn';
import { RetroCard } from '../components/RetroCard';

export function CommunityCalloutSection() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn stagger>
          <RetroCard className="text-center" glowing>
            <div className="relative">
              <h2 className="retro-text text-3xl md:text-4xl text-cyan-400 mb-6">
                Keep the Itasha Culture Alive
              </h2>
              <div className="absolute inset-0 retro-glow opacity-30 rounded-full blur-xl"></div>
            </div>
            <p className="retro-mono text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Pain Network Worldwide is more than liveries — it's a movement.
              Join drift meets, share codes, and connect with livery creators worldwide.
            </p>
            <a
              href="https://discord.com/invite/nG8QZZM6vW"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button text-lg px-8 py-4 hover:scale-105 transform transition-all"
            >
              Join the Discord
            </a>
          </RetroCard>
        </FadeIn>
      </div>
    </section>
  );
}