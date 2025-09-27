import { useState, useEffect } from 'react';

export type Route = 'home' | 'blog';

export const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/blog') {
        setCurrentRoute('blog');
      } else {
        setCurrentRoute('home');
      }
    };

    // Set initial route
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: Route) => {
    const path = route === 'home' ? '/' : `/${route}`;
    window.history.pushState({}, '', path);
    setCurrentRoute(route);
  };

  return { currentRoute, navigate };
};