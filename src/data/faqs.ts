export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do I enquire about a trip?',
    answer:
      'You can submit an enquiry through our website using the "Plan Your Trip" form on our Contact page or any package page. Simply fill in your travel preferences and we\'ll get back to you to discuss the details.',
  },
  {
    id: 'faq-2',
    question: 'Can I request a customized itinerary?',
    answer:
      'Absolutely! We love creating tailor-made travel experiences. Share your preferences, interests, travel dates, and budget in the enquiry form, and we\'ll craft a personalized itinerary just for you.',
  },
  {
    id: 'faq-3',
    question: 'Can I travel with a group?',
    answer:
      'Yes, group trips are one of our specialities. We regularly organize group departures to popular destinations. It\'s a wonderful way to travel, make new friends, and share experiences together.',
  },
  {
    id: 'faq-4',
    question: 'How can I find package pricing?',
    answer:
      'Package prices vary based on the destination, duration, group size, and travel dates. Submit an enquiry with your preferences, and we\'ll provide you with a detailed quote. Some indicative pricing may be listed on package pages where available.',
  },
  {
    id: 'faq-5',
    question: 'What happens after I submit an enquiry?',
    answer:
      'After you submit an enquiry, our team will review your preferences and reach out to you through your preferred contact method. We\'ll discuss your requirements, suggest suitable options, and help you finalize your travel plans.',
  },
  {
    id: 'faq-6',
    question: 'Do you organize trips for families and couples?',
    answer:
      'Yes, we organize trips for families, couples, solo travellers, and groups. Whether it\'s a romantic getaway, a family vacation, or an adventure with friends, we have options to suit every traveller.',
  },
  {
    id: 'faq-7',
    question: 'Are your trips suitable for first-time travellers?',
    answer:
      'Definitely! Many of our travellers are exploring these destinations for the first time. Our trips are planned with care, and we provide guidance and support throughout the journey to ensure a comfortable experience.',
  },
];
