import { useInView } from '../hooks/useInView';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function FadeIn({
  children,
  className = '',
  stagger = false,
  delay = 0
}: FadeInProps) {
  const [ref, hasAnimated] = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${stagger ? 'stagger' : 'fade-in'} ${hasAnimated ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}