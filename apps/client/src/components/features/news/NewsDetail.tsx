import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faEye,
  faArrowLeft,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { NewsItem } from "@/types/news";

const NewsDetail = ({ post }: { post: NewsItem }) => {
  return (
    <div>
      {/* Back Button */}
      <Link
        href="/news"
        className="mb-6 flex items-center text-gray-500 hover:text-primary transition group w-fit"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="mr-2 transform group-hover:-translate-x-1 transition"
        />
        Quay lại danh sách
      </Link>

      <article className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        {/* Category Tag */}
        <span className="bg-green-100 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" /> {post.date}
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> {post.author}
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faEye} className="mr-2" /> 1,234 lượt xem
          </span>
        </div>

        {/* Main Image */}
        <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Body (Render HTML) */}
        <div
          className="article-content text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content || post.summary }}
        />

        {/* Share Buttons */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="font-bold text-gray-700">Chia sẻ bài viết:</span>
          <div className="flex gap-3">
            <button className="w-9 h-9 rounded-full bg-blue-600 text-white hover:opacity-90 flex items-center justify-center transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="w-9 h-9 rounded-full bg-sky-500 text-white hover:opacity-90 flex items-center justify-center transition">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className="w-9 h-9 rounded-full bg-gray-600 text-white hover:opacity-90 flex items-center justify-center transition">
              <FontAwesomeIcon icon={faLink} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;
