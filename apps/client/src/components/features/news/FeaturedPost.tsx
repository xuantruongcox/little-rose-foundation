import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { NewsItem } from "@/types/news";

const FeaturedPost = ({ post }: { post: NewsItem }) => {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow-lg mb-10 block"
    >
      <div className="relative bg-linear-to-r h-80 w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transform group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 p-6 md:p-8  w-full">
        <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
          {post.category}
        </span>
        <h2 className="text-2xl md:text-3xl text-light font-bold mb-2 group-hover:text-primary transition line-clamp-2">
          {post.title}
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span>
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            {post.date}
          </span>
          <span>
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            {post.author}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
