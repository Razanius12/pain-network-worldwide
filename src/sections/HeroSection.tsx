import { FadeIn } from '../components/FadeIn';
import { MarqueeText } from '../components/MarqueeText';
import heroImage from '@/assets/hero.png';

export function HeroSection() {
  const startupDelay = 4.2;

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pain Network car meet"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-8">

        <FadeIn delay={startupDelay}>
          <h1 className="retro-text text-4xl md:text-6xl lg:text-8xl text-cyan-400 mb-4 retro-text-glow">
            PAIN-NETWORK
          </h1>
        </FadeIn>

        <FadeIn delay={startupDelay}>
          <h2 className="retro-text text-lg md:text-2xl text-cyan-300 mb-8">
            WORLDWIDE
          </h2>
        </FadeIn>

        <FadeIn delay={startupDelay}>
          <p className="retro-mono text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            The worldwide hub for FR Legends Itasha builds and drift culture.
          </p>
        </FadeIn>

        <FadeIn delay={startupDelay}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://discord.com/invite/nG8QZZM6vW"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button hover:scale-105 transform transition-all"
            >
              Join the Discord
            </a>
            <a
              href="https://www.instagram.com/pain.network.worldwide/"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button hover:scale-105 transform transition-all"
            >
              Follow on Instagram
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <MarqueeText text="Connecting livery creators around the world since the forgotten internet era" />
      </div>
    </section>
  );
}