"use client";
import React, { useState } from "react";
import ProjectSelection from "./ProjectSelection";
import QRCodeDisplay from "./QrModal";

interface Props {
  isOneCol?: boolean;
}

const DonationSection: React.FC<Props> = ({ isOneCol = false }) => {
  const [selectedId, setSelectedId] = useState<string>("general");
  return (
    <section id="donate" className="bg-gray-900 py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary rounded-full opacity-20 blur-[100px]"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent rounded-full opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-3">
            Chung tay góp sức
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Cổng Quyên Góp Trực Tuyến
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Chọn dự án bạn muốn đồng hành. Hệ thống sẽ tạo mã QR tương ứng để
            bạn chuyển khoản nhanh chóng và chính xác.
          </p>
        </div>

        {/* Content Section */}
        {isOneCol ? (
          <div className="max-h-full flex flex-col max-w-6xl mx-auto">
            <ProjectSelection
              isOneCol
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
            <div className={`${isOneCol && "mt-8"}`}>
              <QRCodeDisplay key={selectedId} isOneCol selectedId={selectedId} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            <ProjectSelection
              isOneCol
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
            <QRCodeDisplay key={selectedId} isOneCol selectedId={selectedId} />
          </div>
        )}
      </div>
    </section>
  );
};

export default DonationSection;
