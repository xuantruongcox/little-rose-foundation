import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NewsItem } from "@/types/common";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  data: NewsItem;
}

const NewsCard: React.FC<Props> = ({ data }) => {
  return (
    <Link href={data.link} className="group block cursor-pointer">
      <div className="overflow-hidden rounded-2xl mb-4 relative h-56 w-full">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1">
          <FontAwesomeIcon icon={faCalendar} />
          {data.date}
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition mb-2 leading-snug">
        {data.title}
      </h3>

      <p className="text-gray-600 text-sm line-clamp-2">{data.summary}</p>
    </Link>
  );
};

export default NewsCard;