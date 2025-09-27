import { BlogPost } from '../data/blogPosts';
import { RetroCard } from './RetroCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, User, Tag } from 'lucide-react';

interface BlogCardProps {
 post: BlogPost;
 onClick: () => void;
}

export const BlogCard = ({ post, onClick }: BlogCardProps) => {
 const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
   year: 'numeric',
   month: 'short',
   day: 'numeric'
  });
 };

 return (
  <div onClick={onClick} className="h-full flex flex-col cursor-pointer transition-all hover:scale-105">
   <RetroCard glowing>
    <div className="mb-4">
     <ImageWithFallback
      src={post.imageUrl || `https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=200&fit=crop`}
      alt={post.title}
      className="w-full h-48 object-cover border border-cyan-400/30"
     />
    </div>

    <div className="flex-grow flex flex-col">
     <div className="mb-3">
      <span className="retro-mono text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 border border-cyan-400/30">
       {post.category.toUpperCase()}
      </span>
     </div>

     <h3 className="retro-text text-xl text-cyan-400 mb-3 hover:text-white transition-colors">
      {post.title}
     </h3>

     <p className="retro-mono text-sm text-gray-300 mb-4 flex-grow">
      {post.excerpt}
     </p>

     <div className="mt-auto space-y-3">
      <div className="flex items-center gap-4 text-xs text-gray-400 retro-mono">
       <div className="flex items-center gap-1">
        <Calendar className="w-3 h-3" />
        {formatDate(post.date)}
       </div>
       <div className="flex items-center gap-1">
        <Clock className="w-3 h-3" />
        {post.readTime} min
       </div>
      </div>

      <div className="flex items-center justify-between">
       <div className="flex items-center gap-1 text-xs text-gray-400 retro-mono">
        <User className="w-3 h-3" />
        {post.author}
       </div>

       <div className="flex gap-1">
        {post.tags.slice(0, 2).map((tag, index) => (
         <span
          key={index}
          className="retro-mono text-xs text-cyan-400/70 bg-cyan-400/5 px-1 py-0.5 border border-cyan-400/20"
         >
          {tag}
         </span>
        ))}
       </div>
      </div>
     </div>
    </div>
   </RetroCard>
  </div>
 );
};