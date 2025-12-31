import React from "react";
import { DonationRecord, ProjectType } from "@/types/donation";
import { formatCurrency } from "@/utils/format";

// map màu cho từng loại project
const getBadgeStyle = (type: ProjectType) => {
  switch (type) {
    case "Bác ái":
      return "bg-red-100 text-primary";
    case "Giáo dục":
      return "bg-green-100 text-secondary";
    case "Y tế":
      return "bg-blue-100 text-lrf-navy";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const DonationRow: React.FC<{ data: DonationRecord }> = ({ data }) => {
  return (
    <tr className="hover:bg-green-50/50 transition duration-300 animate-fade-in-down border-b border-gray-100 last:border-0">
      <td className="p-4 text-green-600 font-bold text-xs whitespace-nowrap">
        {data.time}
      </td>
      <td className="p-4 font-bold text-gray-800 whitespace-nowrap">{data.donorName}</td>
      <td className="p-4 text-right font-bold text-secondary whitespace-nowrap">
        + {formatCurrency(data.amount)}
      </td>
      <td className="p-4">
        <span
          className={`px-2 py-1 rounded text-xs font-bold block w-fit whitespace-nowrap ${getBadgeStyle(
            data.projectType
          )}`}
        >
          {data.projectType}
        </span>
      </td>
      <td className="p-4 text-gray-500 hidden md:table-cell italic text-sm">
        &quot;{data.message}&quot;
      </td>
    </tr>
  );
};

export default DonationRow;
