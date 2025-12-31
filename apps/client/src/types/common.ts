export interface NavigationItem {
  label: string;
  href: string;
  subLinks?: NavigationItem[];
}
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  link: string;
}