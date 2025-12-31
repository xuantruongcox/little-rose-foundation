import React from "react";
import { DonationRecord } from "@/types/donation";
import DonationRow from "./DonationRow";

interface Props {
  donations: DonationRecord[];
}

const DonationTable: React.FC<Props> = ({ donations }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase font-bold tracking-wider">
            <tr>
              <th className="p-4 border-b border-gray-200">Thời gian</th>
              <th className="p-4 border-b border-gray-200">Nhà hảo tâm</th>
              <th className="p-4 border-b border-gray-200 text-right">
                Số tiền
              </th>
              <th className="p-4 border-b border-gray-200">Dự án</th>
              <th className="p-4 border-b border-gray-200 hidden md:table-cell">
                Lời nhắn
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {donations.map((item) => (
              <DonationRow key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </div>
      {/* Footer Table */}
      <div className="p-3 bg-gray-50 text-center border-t border-gray-200">
        <p className="text-xs text-gray-400 animate-pulse flex items-center justify-center gap-2">
          {/* Bạn có thể thay bằng FontAwesomeIcon nếu muốn */}
          <i className="fa-solid fa-satellite-dish"></i> Đang cập nhật dữ
          liệu...
        </p>
      </div>
    </div>
  );
};

export default DonationTable;
