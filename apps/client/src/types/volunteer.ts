export interface VolunteerFormData {
  fullName: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';