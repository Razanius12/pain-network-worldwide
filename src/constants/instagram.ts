export const PAINNETWORK_INSTAGRAM = 'https://www.instagram.com/ita.net7/';
export const MINAMI_INSTAGRAM = 'https://www.instagram.com/minami7chu/';

// Helper function to extract Instagram handle from URL
export function extractInstagramHandle(url: string): string {
  const match = url.match(/instagram\.com\/([\w.]+)/i);
  return match ? match[1] : '';
}

// Add more Instagram-related constants here as needed.
