import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { blogs } from '../pages/data/blogs';

export const BlogDetail = () => {
  const { id } = useParams();

  // Parse ID and find blog post
  const post = blogs.find(blog => blog.id === parseInt(id, 10));


  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-orange-600 hover:text-orange-800">
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/BlogList"
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to blog list
        </Link>
        <article>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="flex items-center text-orange-600 font-medium px-3 py-1 bg-orange-50 rounded-full">
              <Tag className="w-4 h-4 mr-1" />
              {post.category}
            </span>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
            <div className="flex items-center text-gray-500">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <span className="text-gray-500">{post.date}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};
