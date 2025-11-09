import { FadeIn } from '../components/FadeIn';
import { useEffect } from "react";
import { RetroCard } from "../components/RetroCard";
import { PAINNETWORK_INSTAGRAM } from '../constants/instagram';

export function InstagramSection() {
  useEffect(() => {
    // Load behold script only once
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js"; // Behold's script URL
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="instagram" className="px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn stagger>
          <RetroCard>
            <h2 className="retro-text text-2xl md:text-3xl text-cyan-400 mb-8 text-center">
              INSTAGRAM FEED
            </h2>
            <div className="mb-6">
              {/* This div is provided by Behold */}
              <div
                className="w-full"
                data-behold-id="FMVJTwtXPlpTwgIPuebb"
              ></div>
            </div>

            <div className="text-center">
              <a
                href={PAINNETWORK_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button instagram-cta hover:scale-105 transform transition-all"
              >
                Follow @pain.network.worldwide
              </a>
            </div>
          </RetroCard>
        </FadeIn>
      </div>
    </section>
  );
}
