'use client';

import React from 'react';

const NewsletterForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký!");
  };

  return (
    <div>
      <h3 className="text-white font-bold text-lg mb-6">Bản Tin</h3>
      <p className="text-xs text-gray-500 mb-4">
        Đăng ký để nhận thông tin về các dự án mới nhất.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
          type="email" 
          placeholder="Email của bạn" 
          required
          className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:ring-1 focus:ring-primary outline-none text-sm border border-gray-700"
        />
        <button className="bg-primary hover:bg-green-700 text-white py-2.5 rounded-lg font-bold text-sm transition">
          Đăng Ký
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;