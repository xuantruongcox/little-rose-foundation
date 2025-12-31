import { NewsItem } from '@/types/common';

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Báo cáo tài chính Quý 3/2023 - Minh bạch từng khoản đóng góp',
    summary: 'Tổng kết các hoạt động thu chi và chứng từ liên quan đến dự án "Em đến trường" tại Hà Giang.',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '12/10/2023',
    link: '#'
  },
  {
    id: '2',
    title: 'Chuyến đi tình nguyện trồng rừng tại Lâm Đồng',
    summary: 'Cùng nhìn lại những khoảnh khắc ý nghĩa của đội tình nguyện viên trong chiến dịch trồng 10,000 cây xanh.',
    imageUrl: 'https://images.unsplash.com/photo-1623401416948-1f0a11a49ac5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '05/10/2023',
    link: '#'
  },
  {
    id: '3',
    title: 'Lễ khởi công xây dựng điểm trường Tà Xùa',
    summary: 'Mang con chữ đến gần hơn với các em nhỏ vùng cao Tây Bắc, xóa bỏ lớp học tạm bợ.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '28/09/2023',
    link: '#'
  }
];