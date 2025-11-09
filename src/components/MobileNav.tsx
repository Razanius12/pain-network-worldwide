import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { RetroButton } from './RetroButton';
import { PAINNETWORK_INSTAGRAM } from '../constants/instagram';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Discord', href: 'https://discord.com/invite/nG8QZZM6vW' },
    { label: 'Instagram', href: PAINNETWORK_INSTAGRAM },
    { label: 'YouTube', href: 'https://youtube.com/@minami9chu' },
  ];

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-cyan-400 border-2 border-cyan-400 bg-gray-900 shadow-[0_0_10px_rgba(34,211,238,0.3)] relative z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[73px] left-0 right-0 bg-gray-900/95 border-2 border-cyan-400 border-t-0 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-col p-4 gap-3 max-w-4xl mx-auto">
              {navItems.map((item) => (
                <RetroButton
                  key={item.label}
                  href={item.href}
                  variant="secondary"
                  icon={ExternalLink}
                  className="justify-center"
                >
                  {item.label}
                </RetroButton>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}