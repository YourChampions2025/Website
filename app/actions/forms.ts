'use server';

import Twilio from './utils/Twilio';
import Conversions_API_Meta from './utils/Conversions_API_Meta';
import Mongo_DB from './utils/MongoDB';
import Sendgrid from './utils/Sendgrid';
import { IContactUsForm } from '../../components/globals/forms/contact-us-form/contact-us-form';
import { IIntakeForm } from '@/components/globals/forms/intake-form/intake-form';
import { IClientInfo } from '../../utils/useGetClientInfo';

async function getReCaptchaScore(token: string) {
  const captcha = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
    }
  )
    .then((response) => response.json() as Promise<{ score: number }>)
    .catch((err) => {
      console.log(err);
      return { score: 0 };
    });

  // console.log("[CAPTCHA]", captcha);

  return { score: captcha.score || 0 };
}

export async function submitContactForm(
  data: IContactUsForm | IIntakeForm,
  token: string,
  clientInfo: IClientInfo,
  eventName: string
) {
  const { score } = await getReCaptchaScore(token);

  const formData = {
    ...data,
    ...clientInfo,
    score,
  };

  console.log('Contact Form Submission:', formData);

  await Promise.all([
    // Twilio
    Twilio(formData, eventName),

    // Sendgrid
    Sendgrid(formData, eventName),

    // Meta Conversions API
    Conversions_API_Meta(formData, eventName),
  ]);

  // MongoDB
  await Mongo_DB(formData, eventName);

  return { success: true };
}
