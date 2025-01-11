import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

export const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/blog/${post.id}`}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
