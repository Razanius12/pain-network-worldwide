import { FadeIn } from '../components/FadeIn';
import { RetroCard } from '../components/RetroCard';

const footerLinks = [
  {
    href: "https://discord.com/invite/nG8QZZM6vW",
    label: "Discord"
  },
  {
    href: "https://www.instagram.com/pain.network.worldwide/",
    label: "Instagram"
  },
  {
    href: "https://youtube.com/@minami9chu",
    label: "YouTube"
  }
];

export function FooterSection() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t-2 border-cyan-400/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn stagger>
          <RetroCard>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="text-center md:text-right">
                <div className="retro-text text-cyan-400 text-sm mb-2">
                  For the forgotten era of internet car culture — revived.
                </div>
                <div className="retro-mono text-gray-400 text-xs">
                  © 2025 Pain Network Worldwide. Built for the community, by{' '}
                  <a
                    href="https://github.com/Razanius12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Razanius12
                  </a>
                </div>
              </div>
            </div>
          </RetroCard>
        </FadeIn>
      </div>
    </footer>
  );
}