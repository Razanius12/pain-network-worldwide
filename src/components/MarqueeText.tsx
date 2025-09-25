import { useEffect, useRef } from "react";

interface MarqueeTextProps {
  text: string;
}

export function MarqueeText({ text }: MarqueeTextProps) {
  const content = `${text} ★ `;
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateDuration() {
      if (marqueeRef.current) {
        const el = marqueeRef.current;
        const viewportWidth = window.innerWidth;

        const baseSpeed = 8; // smaller is faster
        const duration = baseSpeed * (viewportWidth / 375);

        el.style.animationDuration = `${duration}s`;
      }
    }

    updateDuration(); // run on mount
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <div className="overflow-hidden bg-black/50 border-y border-cyan-400/30">
      <div className="whitespace-nowrap retro-text text-cyan-400 py-2">
        <div ref={marqueeRef} className="animate-marquee">
          {/* Duplicate the content to create seamless loop */}
          {content.repeat(5)}
          {content.repeat(5)}
        </div>
      </div>
    </div>
  );
}
