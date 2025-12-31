import React from "react";

interface Props {
  onReset: () => void;
}

export const VolunteerSuccess: React.FC<Props> = ({ onReset }) => {
  return (
    <div className="text-center py-10 animate-fade-in-up">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className="fa-solid fa-check text-2xl text-primary"></i>
      </div>
      <h4 className="text-xl font-bold text-gray-800">Đăng ký thành công!</h4>
      <p className="text-gray-600 mt-2">
        Cảm ơn bạn đã muốn đồng hành. Chúng tôi sẽ liên hệ lại trong vòng 48h.
      </p>
      <button
        onClick={onReset}
        className="mt-6 text-primary font-bold hover:underline"
      >
        Đăng ký thêm
      </button>
    </div>
  );
};
