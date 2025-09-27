import { FadeIn } from '../components/FadeIn';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { handleSmoothScroll } from '../utils/smoothScroll';
import { APP_VERSION_FULL } from '../constants/version';

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#showcase", label: "SHOWCASE" },
  { href: "#community", label: "COMMUNITY" },
  { href: "#instagram", label: "INSTAGRAM" },
  { href: "https://discord.com/invite/nG8QZZM6vW", label: "DISCORD", external: true }
];

const nbsp = (count: number) => '\u00A0'.repeat(count);

export function Header() {
  const startupDelay = 4.2;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile burger menu - fixed at very top */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 border-b-2 border-cyan-400">
        <div className="flex items-center justify-between p-4">
          <div className="retro-text text-cyan-400 text-lg">PAIN-NETWORK</div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="retro-button-small text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 border border-cyan-400 p-2 transition-all duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-black/95 border-t border-cyan-400/30">
            <nav className="p-4 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`retro-nav-button block transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={(e) => {
                    handleNavClick();
                    if (!link.external) {
                      handleSmoothScroll(e, link.href);
                    }
                  }}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar navigation */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-48 bg-black/90 border-r-2 border-cyan-400 z-40">
        <div className="p-4 h-full flex flex-col">

          <FadeIn delay={startupDelay}>
            <div className="retro-text text-cyan-400 text-xl mb-8 text-center">
              PAIN<br />NETWORK
            </div>
          </FadeIn>

          <FadeIn delay={startupDelay} stagger>
            <nav className="space-y-3 flex-grow">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="retro-nav-button block"
                  onClick={(e) => {
                    if (!link.external) {
                      handleSmoothScroll(e, link.href);
                    }
                  }}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </FadeIn>

          {/* Bottom section */}
          <div className="mt-auto pt-4 border-t border-cyan-400/30">
            <FadeIn delay={startupDelay}>
              <div className="text-center mb-4">
                <div className="retro-mono text-xs text-cyan-400/70 mb-2">
                  EST. 2024
                </div>
                <div className="retro-mono text-xs text-gray-400 mb-3">
                  GLOBAL ITASHA<br />COMMUNITY
                </div>

                {/* ASCII Art */}
                <div className="retro-mono text-xs text-cyan-400/50 leading-none mb-3">
                  ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲<br />
                  │ {nbsp(1)}SITE 4EVER {nbsp(2)}│<br />
                  │ UNDERGROUND ✦  │<br />
                  ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼
                </div>

                {/* Quick stats */}
                <div className="retro-mono text-xs text-gray-500">
                  {APP_VERSION_FULL}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
}