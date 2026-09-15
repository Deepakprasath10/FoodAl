import { useState } from 'react';
import { BLOG_POSTS } from '../constants/data';
import { BookOpen, Clock, Calendar, ArrowRight, User, X } from 'lucide-react';
import { BlogPost } from '../types';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useLockBodyScroll(!!selectedPost);

  return (
    <div className="pt-28 pb-20 bg-[#FCFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
            <BookOpen className="w-3.5 h-3.5 text-[#FEB21A]" />
            Food Science Journal
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
            Formulation & R&D Insights
          </h1>
          <p className="text-base text-[#6B7280] mt-3 font-body leading-relaxed">
            Deep technical articles authored by our lead bio-chemists on accelerated aging kinetics, bitterness masking, and clean-label emulsification.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#FEB21A] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#004B84] text-[#FEB21A] text-[10px] font-extrabold font-number uppercase px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] font-semibold text-[#6B7280]">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#004B84]" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#004B84]" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-[#1F2937] group-hover:text-[#004B84] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] font-body leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E5E7EB] mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-bold text-[#1F2937]">{post.author.name}</span>
                </div>

                <div className="text-xs font-bold text-[#004B84] group-hover:text-[#E5A400] flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#004B84]/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-[#6B7280] hover:text-[#1F2937] bg-[#F8FAFC] p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase font-number text-[#FEB21A] bg-[#004B84] px-3 py-1 rounded-full">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl font-heading font-extrabold text-white mt-2 leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#6B7280] pb-4 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <img src={selectedPost.author.avatar} alt={selectedPost.author.name} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <span className="block font-bold text-[#1F2937]">{selectedPost.author.name}</span>
                  <span className="text-[10px] text-[#004B84] font-semibold">{selectedPost.author.role}</span>
                </div>
              </div>
              <span className="font-semibold">{selectedPost.date} • {selectedPost.readTime}</span>
            </div>

            <div className="text-xs sm:text-sm text-[#1F2937] font-body leading-relaxed space-y-4">
              <p>{selectedPost.content}</p>
            </div>

            <button
              onClick={() => setSelectedPost(null)}
              className="w-full py-3 bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold text-xs rounded-xl"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
