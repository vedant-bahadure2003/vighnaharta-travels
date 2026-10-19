export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelType: string;
  departureDate: string;
  flexibleDates: boolean;
  travellers: number;
  budget: string;
  duration: string;
  contactMethod: string;
  additionalRequirements: string;
  privacyAcknowledged: boolean;
}

export interface EnquirySubmission extends EnquiryFormData {
  submittedAt: string;
  id: string;
}
