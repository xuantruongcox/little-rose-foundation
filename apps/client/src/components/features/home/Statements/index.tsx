"use client"; // Client Component vì có thể sau này sẽ dùng hook Realtime

import React, { useState } from "react";
import LiveIndicator from "@/components/common/LiveIndicator";
import DailyTotalCard from "./DailyTotalCard";
import DonationTable from "./DonationTable";
import { MOCK_DONATIONS } from "@/mock/home-statement_donation";

const RealTimeStatements = () => {
  // Mock, waiting for Realtime API
  const [donations] = useState(MOCK_DONATIONS);

  // Mock daily total, waiting for API
  const dailyTotal = 106850000;

  return (
    <section
      id="statements"
      className="py-16 bg-white border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <LiveIndicator />
            <h2 className="text-2xl md:text-3xl font-black text-secondary">
              Danh Sách Nhà Hảo Tâm Mới Nhất
            </h2>
          </div>

          <DailyTotalCard total={dailyTotal} />
        </div>

        {/* Table Section */}
        <DonationTable donations={donations} />
      </div>
    </section>
  );
};

export default RealTimeStatements;
