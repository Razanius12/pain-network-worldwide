import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface RetroButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  className?: string;
}

export function RetroButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  icon: Icon,
  className = ""
}: RetroButtonProps) {
  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 
    border-2 transition-all duration-200 
    retro-button text-sm font-mono uppercase tracking-wider
    ${className}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-teal-400 
      border-cyan-300 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]
      hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:scale-105
    `,
    secondary: `
      bg-gray-900 border-cyan-400 text-cyan-400
      shadow-[0_0_15px_rgba(34,211,238,0.3)]
      hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:scale-105
    `
  };

  const Component = motion.a;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      {Icon && <Icon size={16} />}
      {children}
    </Component>
  );
}