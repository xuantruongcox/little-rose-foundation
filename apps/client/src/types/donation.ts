export type ProjectType = 'Bác ái' | 'Chung' | 'Giáo dục' | 'Y tế';

export interface DonationRecord {
  id: string;
  time: string;
  donorName: string;
  amount: number;
  projectType: ProjectType;
  message: string;
}

export interface DailyStats {
  totalAmount: number;
}