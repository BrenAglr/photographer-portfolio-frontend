export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
//   privacyAccepted: boolean;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  message?: string;
//   privacyAccepted?: string;
}