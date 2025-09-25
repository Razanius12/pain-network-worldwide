import { ReactNode } from 'react';

interface RetroCardProps {
  children: ReactNode;
  className?: string;
  glowing?: boolean;
}

export function RetroCard({ children, className = '', glowing = false }: RetroCardProps) {
  return (
    <div className={`
      retro-border bg-black/80 p-6 
      ${glowing ? 'retro-glow' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
}