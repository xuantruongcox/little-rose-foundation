// src/components/ai-agent/useAiAgent.ts
import { useState, useEffect, useRef } from 'react';
import { Message, processAiLogic } from '@/components/features/ai-agent/Model';

export const useAiAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chips, setChips] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial Greeting
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          id: 'init-1',
          role: 'ai',
          content: 'Chào bạn! Tôi là Trợ lý ảo LRF. 🌹<br>Bạn cần tìm thông tin gì về Quỹ Bông Hồng Nhỏ?',
          timestamp: Date.now()
        }
      ]);
      setChips(["Dự án mới nhất", "Cách quyên góp", "Tin tức"]);
    }, 500);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(prev => !prev);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // 1. Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMsg]);
    setChips([]); // Hide chips while processing
    setIsTyping(true);

    // 2. Simulate AI Processing
    setTimeout(() => {
      const response = processAiLogic(text);

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: response.html,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, aiMsg]);
      setChips(response.chips);
      setIsTyping(false);
    }, 1200); // 1.2s delay
  };

  return {
    isOpen,
    isTyping,
    messages,
    chips,
    messagesEndRef,
    toggleChat,
    setIsOpen,
    handleSendMessage
  };
};