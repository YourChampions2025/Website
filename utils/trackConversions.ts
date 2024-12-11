import va from '@vercel/analytics';

import { IContactUsForm } from '@/components/globals/forms/contact-us-form/contact-us-form';

import { IIntakeForm } from '@/components/globals/forms/intake-form/intake-form';

interface fbqData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  recaptchaToken?: string | undefined;
  recaptchaScore?: number | undefined;
}

export default function trackConversions(
  data: IContactUsForm | IIntakeForm,
  event_name: string,
  event_id: string
) {
  // Google (GA4) Tracking
  window.gtag('event', event_name, data);

  // Meta Facebook Tracking
  const fbqData: fbqData = { ...data };
  delete fbqData.phone;
  window.fbq('trackCustom', event_name, fbqData, {
    eventID: event_id,
  });

  // Vercel Analytics
  va.track(event_name, data);
}
