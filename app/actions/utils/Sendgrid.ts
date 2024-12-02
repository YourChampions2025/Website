import { type IContactUsForm } from '../../../components/globals/forms/contact-us-form/contact-us-form';
import { type ICareersForm } from '../../../components/screens/careers/side-content-careers/side-content-careers';
import { type IClientInfo } from '../../../utils/useGetClientInfo';
import Email_Template from './Email_Template';
import { render } from '@react-email/render';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * pnpm i @react-email/render @react-email/components @sendgrid/mail
 */

async function Sendgrid(
  data: (Partial<IContactUsForm> & Partial<ICareersForm>) & {
    score: number;
  } & IClientInfo,
  formName: string
) {
  const emailHTML = await render(Email_Template(data), { pretty: true });

  const msg = {
    to: [
      'davin@thecaselygroup.com',
      'prelit@yourchampions.com',
      // "pedro@thecaselygroup.com",
    ],
    from: 'notifications@thecaselygroup.com',
    subject: `Fischer and Redavid Lead | ${formName} | ${data.name}`,
    html: emailHTML,
  };

  // SEND EMAIL
  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error: any) => {
      console.error(error);
    });
}

export default Sendgrid;
