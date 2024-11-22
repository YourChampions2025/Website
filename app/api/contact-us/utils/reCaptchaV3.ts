import { IContactUsForm } from '@/components/globals/forms/contact-us-form/contact-us-form';

async function reCaptchaV3(data: IContactUsForm & { recaptchaToken: string }) {
  const reCaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
    {
      method: 'POST',
    }
  );

  const reCaptchaResponseJson = await reCaptchaResponse.json();
  return reCaptchaResponseJson;
}

export default reCaptchaV3;
