export const smoothScrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop;
    const offset = window.innerWidth >= 768 ? 0 : 64; // Account for mobile header
    
    window.scrollTo({
      top: offsetTop - offset,
      behavior: 'smooth'
    });
  }
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Only handle internal links (those starting with #)
  if (href.startsWith('#')) {
    e.preventDefault();
    const elementId = href.substring(1);
    smoothScrollToElement(elementId);
  }
};