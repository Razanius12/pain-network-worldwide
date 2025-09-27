import { useState } from 'react';
import { blogPosts, BlogPost as BlogPostType } from '../data/blogPosts';
import { BlogCard } from '../components/BlogCard';
import { BlogPost } from '../components/BlogPost';
import { Filter } from 'lucide-react';

export const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' ||
      post.category.toLowerCase() === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="md:ml-48 pt-16 md:pt-0">
      <div className="min-h-screen bg-black/95 border-2 border-cyan-400 m-4">
        {/* Top Header */}
        <div className="border-b-2 border-cyan-400 p-6 bg-gradient-to-r from-black via-gray-900 to-black">
          <h1 className="retro-text text-4xl text-cyan-400 mb-2">
            PAIN NETWORK BLOG
          </h1>
          <p className="retro-mono text-gray-300 text-lg">
            Stories, tutorials, and insights from the Itasha community
          </p>
        </div>

        {/* Filters and Search */}
        <div className="border-b-2 border-cyan-400/30 p-4 bg-black/50">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-black/80 border border-cyan-400/30 text-cyan-400 retro-mono text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-4 h-4 text-cyan-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black/80 border border-cyan-400/30 text-cyan-400 retro-mono text-sm px-3 py-2 focus:border-cyan-400 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="p-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="retro-mono text-gray-400 text-lg">
                No posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => setSelectedPost(post)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="border-t-2 border-cyan-400/30 p-6 bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="text-center">
            <h3 className="retro-text text-2xl text-cyan-400 mb-3">
              Want to contribute?
            </h3>
            <p className="retro-mono text-gray-300 mb-4 max-w-2xl mx-auto">
              Share your builds, tutorials, and stories with the community.
              Connect with us on Discord to get started!
            </p>
            <a
              href="https://discord.com/invite/nG8QZZM6vW"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button-small hover:scale-105 transform transition-all text-white"
            >
              JOIN OUR DISCORD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};