export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Itasha: From Anime to Asphalt',
    excerpt: 'Exploring the vibrant world of Itasha culture and how anime-inspired car modifications became a global phenomenon in drift racing.',
    content: `
      <p>Itasha culture represents one of the most unique intersections of automotive enthusiasm and anime fandom. Born in Japan, the term "Itasha" literally translates to "painful car" - a self-deprecating reference to the often expensive and time-intensive process of creating these rolling works of art.</p>
      
      <h3>Origins and Evolution</h3>
      <p>The Itasha movement began in the early 2000s in Japan, where car enthusiasts started decorating their vehicles with anime, manga, and video game characters. What started as a niche subculture has evolved into a worldwide phenomenon, with communities spanning from Tokyo to Los Angeles.</p>
      
      <h3>FR Legends and Digital Drift</h3>
      <p>Games like FR Legends have democratized Itasha culture, allowing enthusiasts worldwide to design and share their own anime-inspired liveries. Our community at Pain Network Worldwide has become a hub for these digital artists, sharing designs that push the boundaries of creativity.</p>
      
      <h3>Building Your First Itasha</h3>
      <p>Whether you're working in the digital realm of FR Legends or planning a real-world build, the key principles remain the same: choose characters that resonate with you, maintain design coherence, and don't be afraid to experiment with color schemes and compositions.</p>
    `,
    author: 'TakumiDrift',
    date: '2024-12-15',
    category: 'Culture',
    tags: ['Itasha', 'Anime', 'Drift', 'FR Legends'],
    imageUrl: 'https://images.unsplash.com/photo-1662746007776-91d7b809d6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNhciUyMGRyaWZ0JTIwcmFjaW5nfGVufDF8fHx8MTc1ODc4NTk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: 5
  },
  {
    id: '2',
    title: 'FR Legends Livery Design: Pro Tips and Tricks',
    excerpt: 'Master the art of livery creation in FR Legends with these advanced techniques and design philosophies from the community.',
    content: `
      <p>Creating standout liveries in FR Legends requires more than just slapping anime stickers on your car. It's about understanding composition, color theory, and the technical limitations of the game's livery editor.</p>
      
      <h3>Technical Fundamentals</h3>
      <p>Understanding the layer system in FR Legends is crucial. Each element you place takes up a layer, and with limited layers available, efficiency becomes key. Plan your design on paper or in a digital sketch before diving into the editor.</p>
      
      <h3>Color Harmony and Contrast</h3>
      <p>The best Itasha designs create visual harmony between the character artwork and the car's base color. Consider how your chosen character's color palette will interact with different car colors and racing environments.</p>
      
      <h3>Community Collaboration</h3>
      <p>Join our Discord to share work-in-progress shots and get feedback from other designers. The Pain Network community is always ready to help troubleshoot design challenges and share advanced techniques.</p>
    `,
    author: 'SkylineArtist',
    date: '2024-12-10',
    category: 'Tutorial',
    tags: ['FR Legends', 'Livery', 'Design', 'Tutorial'],
    imageUrl: 'https://images.unsplash.com/photo-1685039934357-c88f0c4aaa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwZGVzaWduJTIwdHV0b3JpYWx8ZW58MXx8fHwxNzU4Nzg1OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: 7
  },
  {
    id: '3',
    title: 'Real World Meets Virtual: IRL Itasha Builds',
    excerpt: 'Showcasing incredible real-world Itasha builds inspired by digital designs from our community members.',
    content: `
      <p>The line between virtual and reality continues to blur as our community members bring their FR Legends designs to life on real cars. These builds represent the ultimate expression of dedication to the Itasha lifestyle.</p>
      
      <h3>From Pixels to Paint</h3>
      <p>Translating a digital design to a physical vehicle presents unique challenges. Resolution, material constraints, and real-world lighting conditions all affect how a design will look on an actual car.</p>
      
      <h3>Community Showcase</h3>
      <p>This month, we're featuring three incredible builds from our Discord members who've taken the leap from virtual to reality. Each represents hundreds of hours of design work and thousands of dollars in professional vinyl work.</p>
      
      <h3>Planning Your Own Build</h3>
      <p>Thinking about bringing your digital creation to life? Start by connecting with local wrap shops, understanding the costs involved, and considering how your design will look at actual car scale.</p>
    `,
    author: 'DriftKing86',
    date: '2024-12-05',
    category: 'Showcase',
    tags: ['IRL', 'Real Build', 'Showcase', 'Community'],
    imageUrl: 'https://images.unsplash.com/photo-1723672947453-e6d09052bdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjdXN0b21pemF0aW9uJTIwdmlueWwlMjB3cmFwfGVufDF8fHx8MTc1ODc4NTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: 6
  }
];