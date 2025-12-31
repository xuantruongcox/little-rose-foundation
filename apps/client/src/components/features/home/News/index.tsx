import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NewsCard from "./NewsCard";
import { MOCK_NEWS } from "@/mock/home-news.data";
import { NewsItem } from "@/types/common";

const NewsSection = () => {
  // Mock, waiting for API
  const newsList = MOCK_NEWS;

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
              Tin tức &amp; Hoạt động
            </h4>
            <h2 className="text-3xl font-black text-gray-900">
              Câu Chuyện Từ LRF
            </h2>
          </div>

          <Link
            href="/news"
            className="hidden md:inline-flex items-center text-primary font-bold hover:underline mt-4 md:mt-0 gap-2"
          >
            Xem tất cả bài viết <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        {/* Grid List */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsList.map((item: NewsItem) => (
            <NewsCard key={item.id} data={item} />
          ))}
        </div>

        {/* Mobile View All Button*/}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center text-primary font-bold hover:underline gap-2"
          >
            Xem tất cả bài viết <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
