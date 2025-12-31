"use client";
import React, { useState, useMemo, useEffect } from "react";
import { BANK_INFO, DONATION_OPTIONS } from "@/mock/home-donations.data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faCircleCheck,
  faCircleInfo,
  faCopy,
  faSpinner,
  faCheckCircle,
  faRotateRight,
  faUser,
  faArrowRight,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { useRealtimePayment } from "@/hooks/useRealtimePayment";

interface Props {
  selectedId: string;
  isOneCol?: boolean;
}

interface TransactionResponse {
  transactionCode: string; // "LRF-TIM-X829Z"
  qrUrl: string;
  bankInfo: {
    bankName: string;
    accountNumber: string;
    accountOwner: string;
  };
}

const QrModal: React.FC<Props> = ({ selectedId, isOneCol = false }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // State Input
  const [donorName, setDonorName] = useState("");

  const [qrData, setQrData] = useState<TransactionResponse | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Get title
  const selectedOption = useMemo(
    () =>
      DONATION_OPTIONS.find((opt) => opt.id === selectedId) ||
      DONATION_OPTIONS[0],
    [selectedId]
  );

  // Giả lập backend

  const handleCreateTransaction = async () => {
    setIsGenerating(true);

    const mockBank =
      BANK_INFO.find((b) => b.donationId === selectedId) || BANK_INFO[0];

    setTimeout(() => {
      const sessionCode = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();
      const transactionCode = `${selectedOption.syntax} ${sessionCode}`;

      // Tạo link QR (amount để trống)
      const qrUrl = `https://img.vietqr.io/image/${mockBank.bankName}-${mockBank.accountNumber}-${mockBank.template}.png?amount=&addInfo=${transactionCode}`;

      // Trả về dữ liệu
      const responseData: TransactionResponse = {
        transactionCode: transactionCode,
        qrUrl: qrUrl,
        bankInfo: {
          bankName: mockBank.bankName,
          accountNumber: mockBank.accountNumber,
          accountOwner: "LITTLE ROSES FOUNDATION",
        },
      };
      // -------------------------

      setQrData(responseData);
      setIsGenerating(false);
    }, 1000);
  };

  const handleReset = () => {
    setQrData(null);
    setDonorName("");
  };
  // Reset QR
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleReset();
  }, [selectedId]);

  const { paymentStatus, lastAmount } = useRealtimePayment(
    qrData?.transactionCode || ""
  );
  // --------------------------------

  const handleCopy = (text: string, field: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (paymentStatus === "success") {
    return (
      <div
        className={`${
          isOneCol
            ? "w-full h-auto min-h-100"
            : "w-full lg:w-7/12 h-full min-h-125"
        }`}
      >
        <div className="bg-linear-to-br from-green-600 to-green-800 rounded-3xl shadow-2xl p-8 text-white h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-6xl text-green-600"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">Quyên góp thành công!</h2>
          <p className="text-green-100 text-lg mb-6">
            Cảm ơn{" "}
            <span className="font-bold text-yellow-300">
              {donorName || "Mạnh thường quân"}
            </span>{" "}
            đã ủng hộ{" "}
            <span className="font-bold text-white text-xl">
              {new Intl.NumberFormat("vi-VN").format(lastAmount)}đ
            </span>
            <br /> vào quỹ &quot;{selectedOption.title}&quot;.
          </p>
          <button
            onClick={handleReset}
            className="bg-white text-green-800 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition shadow-lg flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faRotateRight} /> Tạo mã QR mới
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isOneCol ? "w-full" : "w-full lg:w-7/12"}`}>
      <div className="bg-linear-to-br from-green-800 to-green-950 rounded-3xl shadow-2xl p-2 relative overflow-hidden text-white h-full flex flex-col border border-green-700/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 rounded-full -mr-16 -mt-16 blur-3xl"></div>

        {/* CONTAINER */}
        <div
          className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 flex-1 flex 
            ${isOneCol ? "flex-col gap-6" : "flex-col md:flex-row gap-8"} 
            items-center md:items-start relative z-10 transition-all duration-500`}
        >
          <div
            className={`bg-white p-4 rounded-2xl shadow-xl shrink-0 relative flex flex-col items-center justify-center
            ${isOneCol ? "w-full max-w-70 mx-auto" : "w-64"}
            min-h-64 transition-all`}
          >
            {!qrData ? (
              // --- STATE A: NHẬP TÊN (CHƯA CÓ QR) ---
              <div className="flex flex-col items-center justify-center text-gray-800 w-full h-full py-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 text-primary text-2xl">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="font-bold text-center mb-1">
                  Thông tin người gửi
                </h4>
                <p className="text-xs text-gray-500 text-center mb-4 px-2">
                  Nhập tên để ghi nhận trên bảng vàng
                </p>

                <input
                  type="text"
                  placeholder="Tên của bạn (Tùy chọn)"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary mb-3 text-center"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleCreateTransaction()
                  }
                />

                <button
                  onClick={handleCreateTransaction}
                  disabled={isGenerating}
                  className="w-full bg-primary hover:bg-red-700 text-white font-bold py-2 rounded-lg text-sm transition flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    <>
                      {" "}
                      <FontAwesomeIcon icon={faQrcode} /> Lấy mã QR{" "}
                    </>
                  )}
                </button>
              </div>
            ) : (
              // --- STATE B: HIỂN THỊ ẢNH QR TỪ SERVER ---
              <>
                <div className="relative w-full aspect-square">
                  <Image
                    src={qrData.qrUrl}
                    fill
                    alt="QR Code"
                    className="object-contain rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 py-2 rounded animate-pulse w-full">
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    className="text-primary"
                  />
                  Đang chờ thanh toán...
                </div>
              </>
            )}
          </div>

          {/* CỘT PHẢI: THÔNG TIN CHI TIẾT */}
          <div className="flex-1 w-full space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm uppercase tracking-wider">
                  Dự án
                </span>
                <h3 className="font-bold text-xl text-white">
                  {selectedOption.title}
                </h3>
              </div>
              {qrData && (
                <button
                  onClick={handleReset}
                  className="text-white/50 hover:text-white text-sm transition-transform active:rotate-180"
                  title="Tạo mã mới"
                >
                  <FontAwesomeIcon icon={faRotateRight} size="lg" />
                </button>
              )}
            </div>

            <div className="space-y-4">
              {/* Bank Info: Nếu chưa có qrData, hiển thị skeleton hoặc ẩn, hoặc hiển thị mặc định của dự án */}
              <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <div>
                  <p className="text-xs text-green-300 uppercase font-bold">
                    Ngân hàng
                  </p>
                  <p className="font-bold text-xl mt-1">
                    {qrData ? qrData.bankInfo.bankName : "---"}
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className="text-green-400 text-xl"
                />
              </div>

              {/* Account Number */}
              <div
                className={`bg-black/30 p-4 rounded-xl border border-white/10 transition flex justify-between items-center ${
                  qrData
                    ? "group cursor-pointer hover:bg-black/40"
                    : "opacity-70"
                }`}
                onClick={() =>
                  qrData && handleCopy(qrData.bankInfo.accountNumber, "accNum")
                }
              >
                <div>
                  <p className="text-xs text-green-300 uppercase font-bold">
                    Số Tài Khoản
                  </p>
                  <p className="font-mono text-3xl font-bold tracking-wider text-yellow-400 mt-1">
                    {qrData ? qrData.bankInfo.accountNumber : "**** ****"}
                  </p>
                </div>
                {qrData && (
                  <FontAwesomeIcon
                    icon={copiedField === "accNum" ? faCircleCheck : faCopy}
                    className="text-white/50 group-hover:text-white transition"
                  />
                )}
              </div>

              {/* Syntax Content */}
              <div
                className={`bg-black/30 p-4 rounded-xl border border-white/10 transition ${
                  qrData
                    ? "group cursor-pointer hover:bg-black/40"
                    : "opacity-50"
                }`}
                onClick={() =>
                  qrData && handleCopy(qrData.transactionCode, "syntax")
                }
              >
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-green-300 uppercase font-bold">
                    Nội dung chuyển khoản
                  </p>
                  {qrData && (
                    <FontAwesomeIcon
                      icon={copiedField === "syntax" ? faCircleCheck : faCopy}
                      className="text-white/50 group-hover:text-white transition"
                    />
                  )}
                </div>

                <p className="font-mono font-bold text-white text-lg break-all border-b border-dashed border-white/30 pb-1 min-h-7 flex items-center">
                  {qrData ? (
                    qrData.transactionCode
                  ) : (
                    <span className="text-sm font-normal italic text-white/50">
                      <FontAwesomeIcon icon={faArrowRight} className="mr-2" />{" "}
                      Vui lòng tạo mã QR để lấy nội dung
                    </span>
                  )}
                </p>

                <p className="text-[10px] text-green-300 mt-2 italic flex items-center gap-1">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  Nhập chính xác nội dung này để được ghi nhận tự động.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrModal;
