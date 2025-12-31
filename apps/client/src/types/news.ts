export interface NewsCategory {
  id: string;
  name: string;
  count: number;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content?: string; // Cho trang chi tiết
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  isFeatured?: boolean;
}