import { useState, FormEvent, ChangeEvent } from 'react';
import { VolunteerFormData, SubmissionStatus } from '@/types/volunteer';

const INITIAL_DATA: VolunteerFormData = {
  fullName: '',
  phone: '',
  email: '',
  interest: 'Dạy học / Trợ giảng (Giáo dục)',
  message: ''
};

export const useVolunteerForm = () => {
  const [formData, setFormData] = useState<VolunteerFormData>(INITIAL_DATA);
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form Data Submitted:', formData);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_DATA);
    setStatus('idle');
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
    resetForm
  };
};