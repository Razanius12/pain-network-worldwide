import { FadeIn } from '../components/FadeIn';
import { RetroCard } from '../components/RetroCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Nostalgia from '../assets/nostalgia.gif';
import { APP_VERSION } from '../constants/version';

const nbsp = (count: number) => '\u00A0'.repeat(count);

export function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="retro-text text-4xl text-cyan-400 mb-4">
              ABOUT_PAIN.NETWORK
            </h2>
            <div className="retro-mono text-gray-300 text-lg max-w-3xl mx-auto">
              Born from the underground // Built for the global scene
            </div>
          </div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Story Card */}
          <FadeIn>
            <RetroCard glowing className="h-full">
              <div className="p-6">
                <h3 className="retro-text text-2xl text-cyan-400 mb-4">
                  THE_ORIGIN.EXE
                </h3>
                <div className="retro-mono text-gray-300 space-y-4">
                  <p>
                    In the depths of 2000s Japanese tuner culture, where anime meets asphalt
                    and digital dreams become reality, Pain Network emerged as a sanctuary
                    for the misunderstood art of Itasha.
                  </p>
                  <p>
                    What started as scattered communities across forums and Discord servers
                    has evolved into a global phenomenon. We're the bridge between the golden
                    age of car forums and today's digital drift culture.
                  </p>
                  <p>
                    Pain Network isn't just a community — it's a digital time capsule,
                    preserving the aesthetic and spirit of an era when the internet felt
                    limitless and creativity knew no bounds.
                  </p>
                </div>
              </div>
            </RetroCard>
          </FadeIn>

          {/* Visual Element */}
          <FadeIn>
            <div className="space-y-6">
              <RetroCard>
                <div className="p-4">
                  <ImageWithFallback
                    src={Nostalgia}
                    alt="Nostalgia GIF"
                    className="w-full object-cover border border-cyan-400/30"
                  />
                  <div className="mt-6 text-center">
                    <div className="retro-mono text-xs text-cyan-400/70">
                      ▓▓▓ LOADING_NOSTALGIA.GIF ▓▓▓
                    </div>
                  </div>
                </div>
              </RetroCard>

              {/* ASCII Art Box */}
              <RetroCard>
                <div className="p-4 bg-black/50">
                  <div className="retro-mono text-xs text-cyan-400/60 text-center leading-tight">
                    ╔══════════════════════════════════╗<br />
                    ║{nbsp(3)}PAIN.NETWORK.WORLDWIDE {APP_VERSION}{nbsp(3)}║<br />
                    ║{nbsp(35)}║<br />
                    ║{nbsp(3)}[ █████████████████████████ ]{nbsp(3)}║<br />
                    ║{nbsp(3)}STATUS: OPERATIONAL {nbsp(12)}║<br />
                    ║{nbsp(3)}MEMBERS: ∞ {nbsp(21)}║<br />
                    ║{nbsp(3)}REGION: GLOBAL {nbsp(17)}║<br />
                    ║{nbsp(35)}║<br />
                    ║{nbsp(3)}"FOR THE CULTURE" {nbsp(14)}║<br />
                    ╚══════════════════════════════════╝
                  </div>
                </div>
              </RetroCard>
            </div>
          </FadeIn>
        </div>

        {/* Philosophy Section */}
        <FadeIn stagger>
          <RetroCard glowing>
            <div className="p-8 text-center">
              <h3 className="retro-text text-2xl text-cyan-400 mb-6">
                OUR_PHILOSOPHY.TXT
              </h3>
              <div className="retro-mono text-gray-300 max-w-4xl mx-auto space-y-4">
                <p className="text-lg">
                  "We believe that the intersection of anime culture and automotive passion
                  creates something beautiful — something that transcends traditional boundaries
                  and connects souls across the globe."
                </p>
                <div className="border-t border-cyan-400/30 pt-4 mt-6">
                  <p className="text-sm text-cyan-400/70">
                    Every vinyl wrap tells a story. Every drift line is a brushstroke.
                    Every community member is a pixel in our larger digital canvas.
                  </p>
                </div>
              </div>
            </div>
          </RetroCard>

          {/* Stats Ticker */}
          <div className="mt-12">
            <RetroCard>
              <div className="p-4 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="retro-mono text-xs text-cyan-400 text-center">
                  <div className="flex justify-center items-center space-x-8">
                    <span>◊ EST_2024 ◊</span>
                    <span>◊ MEMBERS_WORLDWIDE ◊</span>
                    <span>◊ ZERO_GATEKEEPING ◊</span>
                    <span>◊ INFINITE_CREATIVITY ◊</span>
                  </div>
                </div>
              </div>
            </RetroCard>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}