import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NewsItem } from "@/types/news";

const NewsCard = ({ post }: { post: NewsItem }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full">
      <Link
        href={`/news/${post.slug}`}
        className="relative h-48 overflow-hidden block"
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transform hover:scale-110 transition duration-500"
        />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
          {post.category}
        </span>
      </Link>
      <div className="p-5 flex flex-col grow">
        <div className="text-xs text-gray-500 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-1" /> {post.date}
        </div>
        <Link href={`/news/${post.slug}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-primary transition line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 grow">
          {post.summary}
        </p>
        <Link
          href={`/news/${post.slug}`}
          className="text-primary font-bold text-sm uppercase tracking-wide hover:underline self-start flex items-center"
        >
          Xem thêm <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
