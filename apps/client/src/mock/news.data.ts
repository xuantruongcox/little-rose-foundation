import { NewsItem, NewsCategory } from '@/types/news';

export const NEWS_CATEGORIES: NewsCategory[] = [
  { id: 'edu', name: 'Hoạt động Giáo dục', count: 12 },
  { id: 'med', name: 'Hoạt động Y tế', count: 8 },
  { id: 'sos', name: 'Cứu trợ khẩn cấp', count: 5 },
  { id: 'fin', name: 'Báo cáo tài chính', count: 20 },
  { id: 'story', name: 'Câu chuyện tác động', count: 15 },
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    slug: 'hanh-trinh-mang-anh-sang',
    title: 'Hành trình mang ánh sáng tri thức đến trẻ em vùng cao Hà Giang',
    summary: 'Vừa qua, Quỹ Bông Hồng Nhỏ (LRF) đã phối hợp cùng chính quyền địa phương tổ chức lễ khánh thành điểm trường mầm non Tà Xùa...',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: '15/10/2023',
    author: 'Ban Truyền Thông',
    category: 'Nổi bật',
    isFeatured: true
  },
  {
    id: '2',
    slug: 'phau-thuat-tim-mien-phi',
    title: 'Phẫu thuật tim miễn phí cho 20 em nhỏ tại TP.HCM',
    summary: 'Chương trình "Trái tim cho em" đợt 2 năm 2023 đã thành công tốt đẹp, mang lại nhịp đập khỏe mạnh cho các bệnh nhi nghèo...',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '12/10/2023',
    author: 'Admin',
    category: 'Y Tế'
  },
  {
    id: '3',
    slug: 'bao-cao-tai-chinh-quy-3',
    title: 'Báo cáo tài chính & hoạt động Quý 3/2023',
    summary: 'Công khai minh bạch toàn bộ các khoản thu chi và kết quả đạt được trong 3 tháng vừa qua...',
    imageUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '05/10/2023',
    author: 'Ban Tài Chính',
    category: 'Báo Cáo'
  },
];