
export interface Transaction {
  id: string;
  code: string;
  date: string;
  donorName: string;
  donorAvatar?: string;
  project: string;
  amount: number;
  status: 'success' | 'pending' | 'failed';
}

export interface StatMetric {
  label: string;
  value: string | number;
  iconClass: string;
  trend?: string;
  trendDirection?: 'up' | 'down';
  color: 'primary' | 'blue' | 'orange' | 'red'; // Để map màu CSS
}

export interface ChartData {
  labels: string[];
  values: number[];
}