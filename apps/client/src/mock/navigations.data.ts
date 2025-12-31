import { NavigationItem } from "@/types/common";

export const NAV_LINKS: NavigationItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Về Chúng Tôi",
    href: "#vision",
    subLinks: [
      { label: "Tầm nhìn & Sứ mệnh", href: "/vision" },
      { label: "Đội ngũ nhân sự", href: "/team" },
    ],
  },
  {
    label: "Chương Trình",
    href: "#features",
    subLinks: [
      { label: "Hỗ Trợ Phát Triển Giáo Dục", href: "/education" },
      { label: "Hỗ Trợ Y Tế & Sức Khỏe", href: "/health" },
      { label: "Bác Ái Xã Hội", href: "/charity" },
    ],
  },
  {
    label: "Tin tức",
    href: "#news",
    subLinks: [
      { label: "Báo Cáo Minh Bạch", href: "/reports" },
      { label: "Câu chuyện tác động", href: "/stories" },
      { label: "Tài liệu tham khảo", href: "/docs" },
    ],
  },
];