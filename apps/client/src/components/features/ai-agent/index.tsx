"use client";
import React, { useState } from "react";
import { useAiAgent } from "@/hooks/useAiAgent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faComment,
  faPaperPlane,
  faRobot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const AiAgentWidget = () => {
  const {
    isOpen,
    isTyping,
    messages,
    chips,
    messagesEndRef,
    toggleChat,
    setIsOpen,
    handleSendMessage,
  } = useAiAgent();

  const [inputValue, setInputValue] = useState("");

  const onSend = () => {
    if (!inputValue.trim()) return;
    handleSendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSend();
  };

  const onChipClick = (chip: string) => {
    handleSendMessage(chip);
  };

  return (
    <>
      {/* CONTAINER CHÍNH:
        - Mobile: z-50 để đè lên mọi thứ.
        - Desktop: fixed bottom-6 right-6 để định vị FAB.
      */}
      <div
        id="lrf-ai-widget"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-4 font-sans"
      >
        {/* 1. CHAT WINDOW 
           Responsive Logic:
           - Mobile: fixed inset-0 (full màn hình), h-[100dvh] (tránh lỗi thanh địa chỉ), rounded-none.
           - Desktop (md): absolute bottom-full (nằm trên nút FAB), w-[400px], h-[600px], rounded-2xl.
        */}
        <div
          className={`
            bg-white overflow-hidden border-gray-100 
            transition-all duration-300 ease-in-out transform origin-bottom-right shadow-2xl
            
            /* Mobile Styles */
            fixed inset-0 w-full h-dvh z-60 rounded-none
            
            /* Desktop Styles */
            md:relative md:inset-auto md:w-100 md:h-150 md:rounded-2xl md:border md:mb-4

            /* Animation State */
            ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                : "opacity-0 scale-95 pointer-events-none translate-y-10 md:translate-y-4"
            }
          `}
        >
          {/* Flex Container cho nội dung bên trong */}
          <div className="flex flex-col h-full w-full">
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary text-xl relative">
                  {/* FontAwesome Icon */}
                  <FontAwesomeIcon icon={faRobot} />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-light text-sm">
                    Trợ lý ảo LRF
                  </h3>
                  <p className="text-xs text-light">Luôn sẵn sàng hỗ trợ</p>
                </div>
              </div>

              {/* Nút đóng */}
              <button
                onClick={toggleChat}
                className="text-white hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition focus:outline-none"
              >
                <FontAwesomeIcon icon={faXmark} className="text-xl" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-4 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end animate-slide-in-right"
                      : "justify-start gap-2 animate-fade-in-up"
                  }`}
                >
                  {/* Avatar AI (Chỉ hiện cho tin nhắn AI) */}
                  {msg.role === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-primary shrink-0 flex items-center justify-center text-white text-xs mt-1 shadow-sm">
                      <FontAwesomeIcon icon={faRobot} />
                    </div>
                  )}

                  {/* Bubble Tin nhắn */}
                  <div
                    className={`
                      text-gray-800 text-sm px-4 py-3 shadow-sm max-w-[85%] wrap-break-words
                      ${
                        msg.role === "user"
                          ? "bg-userBubble rounded-2xl rounded-tr-none border border-green-100"
                          : "bg-white rounded-2xl rounded-tl-none border border-gray-100"
                      }
                    `}
                  >
                    <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start gap-2 animate-fade-in-up">
                  <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs mt-1">
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  <div className="bg-white px-4 py-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Area: Chips + Input + Footer */}
            <div className="bg-white border-t border-gray-100 shrink-0 pb-safe">
              {/* Suggestion Chips */}
              {chips.length > 0 && (
                <div className="px-4 pt-3 pb-1 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  {chips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => onChipClick(chip)}
                      className="shrink-0 bg-white border border-primary text-primary text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-green-50 active:bg-green-100 transition shadow-sm"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Form */}
              <div className="p-3 md:p-4 flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-gray-100 text-gray-700 text-sm rounded-full focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary block w-full pl-4 p-3 outline-none transition"
                  placeholder="Nhập tin nhắn..."
                />
                <button
                  onClick={onSend}
                  disabled={!inputValue.trim()}
                  className="bg-primary hover:bg-primaryLight text-white rounded-full w-11 h-11 flex items-center justify-center shadow-md transition transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                </button>
              </div>

              {/* Footer text */}
              <div className="bg-gray-50 text-[10px] text-center text-gray-400 py-1.5 border-t border-gray-100/50">
                Powered by Little Roses Foundation AI
              </div>
            </div>
          </div>
        </div>

        {/* 2. FLOATING ACTION BUTTON (FAB) 
           - Mobile: Ẩn khi chat mở để tránh che nội dung (hoặc giữ lại tùy ý, ở đây mình ẩn trên mobile khi mở để full màn hình đẹp hơn).
           - Desktop: Luôn hiện để toggle.
        */}
        <button
          onClick={toggleChat}
          className={`
            bg-primary hover:bg-primaryLight text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 z-50 group
            ${isOpen ? "md:rotate-0 hidden md:flex" : "hover:scale-110"}
          `}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronCircleDown} className="text-xl" />
          ) : (
            <div className="relative">
              {/* FontAwesome Icon cho trạng thái đóng */}
              <FontAwesomeIcon
                icon={faComment}
                className=" transition-transform duration-300 group-hover:rotate-12"
              />
              {/* Ping Animation */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Overlay Backdrop cho Mobile (Làm tối nền web khi chat mở trên mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleChat}
        />
      )}
    </>
  );
};

export default AiAgentWidget;
