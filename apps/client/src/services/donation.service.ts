'use server';

import { revalidatePath } from 'next/cache';

export type FormState = {
  message: string;
  success?: boolean;
  errors?: Record<string, string[]>;
}

export async function donateAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const rawData = {
    amount: Number(formData.get('amount')),
    donorName: formData.get('donorName'),
    message: formData.get('message'),
    projectId: formData.get('projectId'),
  };

  if (!rawData.amount || rawData.amount < 10000) {
    return { message: 'Số tiền tối thiểu là 10.000đ', success: false };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/donations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rawData),
    });

    if (!res.ok) {
      return { message: 'Lỗi từ server, vui lòng thử lại', success: false };
    }

    const data = await res.json();

    revalidatePath(`/projects/${rawData.projectId}`);

    return { 
      message: 'Tạo mã QR thành công!', 
      success: true, 
      ...data 
    };

  } catch (error) {
    return { message: 'Lỗi kết nối', success: false };
  }
}