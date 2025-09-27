import { useEffect } from 'react';
import { BlogPost as BlogPostType } from '../data/blogPosts';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export const BlogPost = ({ post, onBack }: BlogPostProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="md:ml-48 pt-16 md:pt-0">
      <div className="min-h-screen bg-black/95 border-2 border-cyan-400 m-4">
        {/* Header */}
        <div className="border-b-2 border-cyan-400 p-6 bg-gradient-to-r from-black via-gray-900 to-black">
          <button
            onClick={onBack}
            className="retro-button-small mb-6 hover:scale-105 transform transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO BLOG
          </button>

          <div className="mb-4">
            <span className="retro-mono text-sm text-cyan-400 bg-cyan-400/10 px-3 py-2 border border-cyan-400/30">
              {post.category.toUpperCase()}
            </span>
          </div>

          <h1 className="retro-text text-4xl text-cyan-400 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 retro-mono mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              By {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} minute read
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="retro-mono text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 border border-cyan-400/30"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-w-4xl">
          <div className="mb-8">
            <ImageWithFallback
              src={post.imageUrl || `https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=400&fit=crop`}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover border-2 border-cyan-400/30"
            />
          </div>

          <div
            className="prose prose-invert max-w-none retro-mono text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '16px',
              lineHeight: '1.7'
            }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-6 border-2 border-cyan-400/30 bg-gradient-to-r from-black via-gray-900 to-black">
            <h3 className="retro-text text-xl text-cyan-400 mb-3">
              Join the Community
            </h3>
            <p className="retro-mono text-gray-300 mb-4">
              Want to share your own builds and connect with fellow Itasha enthusiasts? Join our Discord server!
            </p>
            <a
              href="https://discord.com/invite/nG8QZZM6vW"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button-small hover:scale-105 transform transition-all text-white"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};