import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/types/news";

const RelatedNews = ({ posts }: { posts: NewsItem[] }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="border-l-4 border-primary text-xl font-bold text-dark mb-6 pl-3 pb-2">
        Bài viết liên quan
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/news/${post.slug}`}
            className="group cursor-pointer block"
          >
            <div className="overflow-hidden rounded-lg mb-3 relative h-40">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h4 className="font-bold text-gray-800 group-hover:text-primary transition text-sm line-clamp-2">
              {post.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
