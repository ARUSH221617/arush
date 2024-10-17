import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function BlogPostCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row">
      <Image
        src={post.thumbnail}
        alt={post.title}
        width={100}
        height={100}
        className="rounded-lg mb-4 sm:mb-0 sm:mr-4"
      />
      <div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {post.date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <a
          href="#"
          className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 inline-flex items-center"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export default BlogPostCard;
