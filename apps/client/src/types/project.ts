export interface Project {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  targetAmount: number;
  currentAmount: number;
  status: 'ACTIVE' | 'COMPLETED' | 'HIDDEN';
  createdAt: string;
}