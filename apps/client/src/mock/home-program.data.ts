// src/components/features/home/features.data.ts
import {
  faBookOpen,
  faHandsHoldingChild,
  faUserDoctor,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

// 1. Định nghĩa Interface (Khuôn mẫu dữ liệu)
export interface FeatureItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  icon: IconDefinition; // Type chuẩn của FontAwesome
  // Các class màu sắc riêng biệt cho từng thẻ
  styles: {
    badgeBg: string;      // Màu nền badge (Góc ảnh)
    iconBox: string;      // Màu nền & chữ của icon tròn
    titleHover: string;   // Màu chữ tiêu đề khi hover
  };
}

// 2. Mảng dữ liệu
export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "education",
    category: "Giáo Dục",
    title: "Hỗ Trợ Phát Triển Giáo Dục",
    description: "Trao học bổng, xây dựng trường học và cung cấp dụng cụ học tập cho trẻ em vùng cao, vùng sâu vùng xa.",
    imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: faBookOpen,
    styles: {
      badgeBg: "bg-secondary",
      iconBox: "bg-green-50 text-secondary",
      titleHover: "group-hover:text-secondary",
    },
  },
  {
    id: "health",
    category: "Y Tế",
    title: "Hỗ Trợ Y Tế & Sức Khỏe",
    description: "Tổ chức khám chữa bệnh miễn phí, phẫu thuật tim bẩm sinh và hỗ trợ viện phí cho bệnh nhân nghèo.",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: faUserDoctor,
    styles: {
      badgeBg: "bg-lrf-navy",
      iconBox: "bg-lrf-ice-blue text-lrf-navy",
      titleHover: "group-hover:text-blue-600",
    },
  },
  {
    id: "charity",
    category: "Bác Ái",
    title: "Bác Ái Xã Hội",
    description: "Cứu trợ khẩn cấp thiên tai, xây nhà tình thương và hỗ trợ sinh kế bền vững cho các hộ gia đình khó khăn.",
    imageSrc: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: faHandsHoldingChild,
    styles: {
      badgeBg: "bg-accent",
      iconBox: "bg-red-50 text-primary",
      titleHover: "group-hover:text-primary",
    },
  },
];