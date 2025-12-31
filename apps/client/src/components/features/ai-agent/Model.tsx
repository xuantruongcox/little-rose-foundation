


export interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: number;
}

export interface AiResponse {
  html: string;
  chips: string[];
}

export const processAiLogic = (input: string): AiResponse => {
  const lowerInput = input.toLowerCase();

  // Kịch bản 1: Dự án
  if (lowerInput.includes("dự án") || lowerInput.includes("project")) {
    return {
      html: `
        <p class="mb-2 font-semibold text-primary">Dưới đây là các dự án trọng điểm đang diễn ra:</p>
        <div class="space-y-3">
            <div class="bg-white p-3 rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition">
                <div class="h-24 bg-gray-200 rounded-md mb-2 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=300&q=80" class="w-full h-full object-cover">
                    <span class="absolute top-1 right-1 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">Giáo dục</span>
                </div>
                <h4 class="font-bold text-xs mb-1">Hỗ trợ Giáo dục Vùng cao</h4>
                <div class="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 70%"></div>
                </div>
                <p class="text-[10px] text-gray-500 text-right">Đạt 70% mục tiêu</p>
            </div>
             <div class="bg-white p-3 rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition">
                <h4 class="font-bold text-xs mb-1">Hỗ trợ Y tế & Sức khỏe</h4>
                <div class="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                    <div class="bg-blue-500 h-1.5 rounded-full" style="width: 45%"></div>
                </div>
                <p class="text-[10px] text-gray-500 text-right">Đạt 45% mục tiêu</p>
            </div>
        </div>
        <p class="mt-2 text-xs">Bạn muốn xem chi tiết dự án nào?</p>
      `,
      chips: ["Chi tiết Giáo dục", "Chi tiết Y tế", "Quyên góp ngay"],
    };
  }

  // Kịch bản 2: Quyên góp
  if (
    lowerInput.includes("quyên góp") ||
    lowerInput.includes("donate") ||
    lowerInput.includes("ủng hộ") ||
    lowerInput.includes("tiền")
  ) {
    return {
      html: `
        <p class="mb-3">Cảm ơn tấm lòng vàng của bạn! ❤️<br>Bạn có thể ủng hộ nhanh qua mã QR bên dưới:</p>
        <div class="bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-center">
            <img src="https://img.vietqr.io/image/MB-9999999999-compact2.png?amount=&addInfo=Ung%20Ho%20LRF" alt="QR Code" class="w-32 h-32 mx-auto mb-2 rounded-lg mix-blend-multiply">
            <p class="text-xs font-bold text-primary">QUY TU THIEN BONG HONG NHO</p>
            <p class="text-xs text-gray-500">MB Bank</p>
        </div>
        <div class="mt-3 bg-green-50 p-3 rounded-lg border border-green-100">
            <p class="text-xs text-gray-500 font-semibold">Chuyển khoản thủ công:</p>
            <p class="font-mono text-sm font-bold text-gray-800 flex justify-between items-center mt-1">
                9999 9999 99
                <button class="text-primary hover:text-green-700 copy-btn">
                    <i class="fa-solid fa-copy"></i>
                </button>
            </p>
            <p class="text-[10px] text-gray-500 mt-1">Nội dung: <strong>LRF Ung Ho</strong></p>
        </div>
      `,
      chips: ["Xác nhận chuyển khoản", "Quay lại menu"],
    };
  }

  // Kịch bản 3: Tin tức
  if (
    lowerInput.includes("tin") ||
    lowerInput.includes("news") ||
    lowerInput.includes("hoạt động")
  ) {
    return {
      html: `
        <p class="mb-2">Các cập nhật mới nhất từ Quỹ:</p>
        <ul class="space-y-2">
            <li class="bg-white p-2 rounded border-l-4 border-accent shadow-sm cursor-pointer hover:bg-gray-50">
                <a href="#" class="block">
                    <h5 class="text-xs font-bold text-gray-800">Tổng kết hoạt động Quý 3/2025</h5>
                    <span class="text-[10px] text-gray-400">
                        <i class="fa-solid fa-clock"></i> 2 giờ trước
                    </span>
                </a>
            </li>
        </ul>
      `,
      chips: ["Xem thêm tin tức", "Dự án"],
    };
  }

  // Fallback
  return {
    html: `Xin lỗi, tôi chưa hiểu rõ ý bạn lắm. 😓<br>Bạn có thể thử các từ khóa như: <b class="text-primary">Dự án</b>, <b class="text-primary">Tin tức</b>, hoặc <b class="text-primary">Quyên góp</b> nhé!`,
    chips: ["Dự án", "Quyên góp", "Liên hệ admin"],
  };
};
