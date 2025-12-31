import React from "react";
import { VolunteerFormData } from "@/types/volunteer";

interface Props {
  formData: VolunteerFormData;
  isLoading: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const VolunteerForm: React.FC<Props> = ({
  formData,
  isLoading,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Họ và tên
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Số điện thoại
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="090 xxx xxxx"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          placeholder="email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Bạn quan tâm lĩnh vực nào?
        </label>
        <select
          name="interest"
          value={formData.interest}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white"
        >
          <option>Dạy học / Trợ giảng (Giáo dục)</option>
          <option>Hỗ trợ y tế / Chăm sóc bệnh nhân</option>
          <option>Tổ chức sự kiện / Hậu cần</option>
          <option>Truyền thông / Thiết kế / Chụp ảnh</option>
          <option>Khác</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Lời nhắn (Kinh nghiệm/Kỹ năng)
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-secondary hover:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
      >
        {isLoading ? (
          <span>
            <i className="fa-solid fa-spinner fa-spin mr-2"></i> Đang gửi...
          </span>
        ) : (
          "Gửi Đăng Ký"
        )}
      </button>
    </form>
  );
};
