import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGraduationCap, faHeartPulse, faHouseChimneyCrack, faSeedling } from "@fortawesome/free-solid-svg-icons";

export interface DonationOption {
  id: string;
  title: string;
  description: string;
  icon: IconDefinition;
  colors: {
    bg: string;
    text: string;
    border: string;
  };
}

export const DONATION_OPTIONS = [
  {
    id: "general",
    icon: faSeedling,
    title: "Quỹ Phát Triển Chung",
    description: "Dùng cho các hoạt động điều hành và dự án nhỏ.",
    syntax: "LRF",
    colors: { bg: "bg-gray-100", text: "text-gray-500", border: "group-hover:border-green-200" },
  },
  {
    id: "education",
    icon: faGraduationCap,
    title: "Quỹ Giáo Dục",
    description: "Học bổng & Xây trường học vùng cao.",
    syntax: "LRF",
    colors: { bg: "bg-green-50", text: "text-green-600", border: "group-hover:border-green-200" },
  },
  {
    id: "health",
    icon: faHeartPulse,
    title: "Quỹ Y Tế",
    description: "Mổ tim & Viện phí bệnh nhân nghèo.",
    syntax: "LRF",
    colors: { bg: "bg-lrf-ice-blue", text: "text-lrf-navy", border: "group-hover:border-blue-200" },

  },
  {
    id: "relief",
    icon: faHouseChimneyCrack,
    title: "Cứu Trợ Khẩn Cấp",
    description: "Thiên tai, bão lũ & Hỗ trợ sinh kế.",
    syntax: "LRF",
    colors: { bg: "bg-red-50", text: "text-red-600", border: "group-hover:border-red-200" },
  }
];

export const BANK_INFO = [
  {
    bankName: "MB",
    displayName: "MB Bank",
    accountNumber: "1111 1111 11",
    accountOwner: "QUY TU THIEN BONG HONG NHO",
    template: "compact2",
    donationId: "general"
  },
  {
    bankName: "MB",
    displayName: "MB Bank",
    accountNumber: "2222 2222 22",
    accountOwner: "QUY TU THIEN BONG HONG NHO",
    template: "compact2",
    donationId: "education"
  }, {
    bankName: "MB",
    displayName: "MB Bank",
    accountNumber: "3333 3333 33",
    accountOwner: "QUY TU THIEN BONG HONG NHO",
    template: "compact2",
    donationId: "health"
  }, {
    bankName: "MB",
    displayName: "MB Bank",
    accountNumber: "4444 4444 44",
    accountOwner: "QUY TU THIEN BONG HONG NHO",
    template: "compact2",
    donationId: "relief"
  },
]