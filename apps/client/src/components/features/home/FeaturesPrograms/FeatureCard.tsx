import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FeatureItem } from "@/mock/home-program.data";

interface FeatureCardProps {
  data: FeatureItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ data }) => {
  const { category, title, description, imageSrc, link, icon, styles } = data;

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:-translate-y-2 transition duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden relative shrink-0">
        <Image
          fill
          src={imageSrc}
          alt={category}
          className="object-cover group-hover:scale-110 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        />
        <div
          className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full ${styles.badgeBg}`}
        >
          {category}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4 ${styles.iconBox}`}
        >
          <FontAwesomeIcon icon={icon} />
        </div>

        <h3
          className={`text-xl font-bold text-gray-800 mb-3 transition ${styles.titleHover}`}
        >
          <Link href={link}>{title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        <Link
          href={link}
          className="inline-flex items-center text-accent font-semibold text-sm hover:underline mt-auto"
        >
          Xem chi tiết <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
