import React from "react";
import { NewsItem } from "@/types/news";
import NewsCard from "./NewsCard";

interface NewsListProps {
  posts: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
        <p className="text-gray-500">Chưa có tin tức nào trong danh mục này.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default NewsList;
