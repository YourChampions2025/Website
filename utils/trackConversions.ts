import va from '@vercel/analytics';

import { IContactUsForm } from '@/components/globals/forms/contact-us-form/contact-us-form';

interface fbqData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  recaptchaToken?: string | undefined;
  recaptchaScore?: number | undefined;
}

export default function trackConversions(
  data: IContactUsForm,
  event_name: string
) {
  // Google (GA4) Tracking
  window.gtag('event', event_name, data);

  // Meta Facebook Tracking
  const fbqData: fbqData = { ...data };
  delete fbqData.phone;
  window.fbq('trackCustom', event_name, fbqData);

  // Vercel Analytics
  va.track(event_name, data);
}
