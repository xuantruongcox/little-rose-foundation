import { useState, useEffect } from "react";

export const useRealtimePayment = (currentSyntax: string) => {
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success">("idle");
  const [lastAmount, setLastAmount] = useState<number>(0);

  // --- FIX LỖI: Sử dụng state phụ để theo dõi sự thay đổi của props ---
  const [prevSyntax, setPrevSyntax] = useState(currentSyntax);

  // Kỹ thuật: "Adjusting state during rendering"
  // Nếu cú pháp thay đổi (tạo QR mới), ta reset state NGAY LẬP TỨC trước khi render UI
  if (currentSyntax !== prevSyntax) {
    setPrevSyntax(currentSyntax);
    setPaymentStatus("idle");
    setLastAmount(0);
  }
  // ------------------------------------------------------------------

  useEffect(() => {
    // Không cần setPaymentStatus("idle") ở đây nữa vì đã xử lý ở trên
    if (!currentSyntax) return;

    console.log(`📡 Đang lắng nghe giao dịch cho cú pháp: ${currentSyntax}...`);

    // --- MÔ PHỎNG BACKEND ---
    const mockBackendDelay = setTimeout(() => {
      console.log("✅ Backend: Nhận được tiền!");
      // Chỉ update thành công nếu component chưa bị unmount hoặc reset
      setPaymentStatus("success");
      setLastAmount(50000);
    }, 10000); // 10 giây

    return () => clearTimeout(mockBackendDelay);
  }, [currentSyntax]); // Effect chỉ chạy lại khi cú pháp thay đổi

  return { paymentStatus, lastAmount };
};