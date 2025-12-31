// src/components/volunteer/VolunteerBanner.tsx
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const VolunteerBanner = () => {
  return (
    <div className="lg:w-1/2 relative min-h-130 md:min-h-100">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Volunteer"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-secondary/95 opacity-90"></div>
      <div className="absolute inset-0 p-10 flex flex-col justify-center text-white z-10">
        <h4 className="uppercase tracking-widest text-green-300 font-bold mb-2">
          Tham gia cùng chúng tôi
        </h4>
        <h2 className="text-4xl text-light font-black mb-6">
          Trở Thành Tình Nguyện Viên
        </h2>
        <p className="mb-8 text-green-100 text-lg font-medium italic leading-relaxed">
          &quot;Không ai nghèo đến mức không có gì để cho đi&quot;. Hãy đóng góp
          thời gian và kỹ năng của bạn để tạo ra sự thay đổi thực sự.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-300 text-xl"
            />
            <span>Mở rộng mối quan hệ và kỹ năng xã hội</span>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-300 text-xl"
            />
            <span>Chứng nhận hoạt động xã hội (Certificate)</span>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-300 text-xl"
            />
            <span>Mang lại niềm vui cho cộng đồng</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
