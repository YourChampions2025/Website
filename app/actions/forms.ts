'use server';

import Twilio from './utils/Twilio';
import Conversions_API_Meta from './utils/Conversions_API_Meta';
import Mongo_DB from './utils/MongoDB';
import Sendgrid from './utils/Sendgrid';
import { IContactUsForm } from '../../components/globals/forms/contact-us-form/contact-us-form';
import { IClientInfo } from '../../utils/useGetClientInfo';
import { form } from 'sanity/structure';

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
  data: IContactUsForm,
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
    Twilio(formData, 'Contact Form'),

    // Sendgrid
    Sendgrid(formData, 'Contact Form'),

    // Meta Conversions API
    Conversions_API_Meta(formData, eventName),
  ]);

  // MongoDB
  await Mongo_DB(formData);

  return { success: true };
}
