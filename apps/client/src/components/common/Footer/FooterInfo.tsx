import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLink } from "@/types/footer";
import { SOCIAL_LINKS } from "@/mock/footer.data";
import Image from "next/image";
import logo from "@/assets/images/Horizontal_Logo.png";

const FooterInfo = () => {
  return (
    <div>
      {/* Logo Area */}
      <div className="flex items-center gap-2 mb-6">
        <Link href={"/#hero"}  className="bg-white rounded-[5px] flex items-center justify-center text-primary">
          <Image
            src={logo}
            alt="Little Roses Foundation Logo"
            className="object-contain mix-blend-multiply"
          />
        </Link>
        {/* <span className="text-lg font-bold text-white tracking-tight">
          LITTLE ROSES
        </span> */}
      </div>

      <p className="text-sm leading-relaxed mb-6 text-gray-400">
        Quỹ Bông Hồng Nhỏ là tổ chức phi lợi nhuận hoạt động vì mục tiêu nhân
        đạo, lan tỏa tình yêu thương và sự sẻ chia trong cộng đồng.
      </p>

      {/* Social Icons Loop */}
      <div className="flex gap-3">
        {SOCIAL_LINKS.map((item: SocialLink) => (
          <Link
            key={item.id}
            href={item.href}
            className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:text-white transition duration-300 ${item.colorClass}`}
          >
            <FontAwesomeIcon icon={item.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
