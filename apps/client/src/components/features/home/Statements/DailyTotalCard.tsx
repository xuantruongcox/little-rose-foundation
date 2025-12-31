import React from "react";
import { formatCurrency } from "@/utils/format";

interface Props {
  total: number;
}

const DailyTotalCard: React.FC<Props> = ({ total }) => {
  return (
    <div className="text-right bg-green-50 px-6 py-3 rounded-xl border border-green-100">
      <p className="text-gray-500 text-xs font-bold uppercase mb-1">
        Tổng quyên góp hôm nay
      </p>
      <p className="text-3xl font-bold text-secondary">{formatCurrency(total)}</p>
    </div>
  );
};

export default DailyTotalCard;
