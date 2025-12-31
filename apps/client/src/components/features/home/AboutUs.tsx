import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section id="vision" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              alt="Volunteers"
              className="w-full h-64 object-cover rounded-2xl shadow-lg transform translate-y-8"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="https://images.unsplash.com/photo-1652971876875-05db98fab376?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Children"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">
              Về Chúng Tôi
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Hành trình mang lại nụ cười và hy vọng
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Được thành lập với sứ mệnh &quot;Nhân văn - Minh bạch - Hiệu
              quả&quot;, Quỹ Bông Hồng Nhỏ (LRF) là cầu nối giữa những tấm lòng
              hảo tâm và những mảnh đời bất hạnh. Chúng tôi tin rằng, giáo dục
              và sức khỏe là nền tảng vững chắc nhất để thay đổi số phận.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-secondary">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Tầm nhìn</h3>
                  <p className="text-sm text-gray-600">
                    Trở thành tổ chức phi lợi nhuận uy tín hàng đầu trong việc
                    hỗ trợ phát triển cộng đồng bền vững.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Sứ mệnh</h3>
                  <p className="text-sm text-gray-600">
                    Lan tỏa tình yêu thương, không để ai bị bỏ lại phía sau
                    thông qua các hoạt động thiết thực.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
