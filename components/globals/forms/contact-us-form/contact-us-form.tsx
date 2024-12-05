'use client';

import { useEffect, useState, useRef } from 'react';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@/components/globals/forms/custom-input/custom-input';
import CustomTextarea from '@/components/globals/forms/custom-textarea/custom-textarea';
import CustomButton from '@/components/globals/forms/custom-button/custom-button';
import { useGetClientInfo } from '../../../../utils/useGetClientInfo';
import trackConversions from '@/utils/trackConversions';
import { submitContactForm } from '../../../../app/actions/forms';
import { Tracking } from '../../../Analytics/Analytics';

export const onContactUsFormSchema = z.object({
  name: z.string().min(1, 'This field is required.'),
  email: z
    .string()
    .min(1, 'This field is required.')
    .email('Please enter a valid email address.'),
  phone: z.string().min(1, 'This field is required.'),
  location: z.string().min(1, 'This field is required.'),
  message: z
    .string()
    .min(10, 'Please enter a message of at least 10 characters.'),
});

export type IContactUsForm = z.infer<typeof onContactUsFormSchema>;

interface Props {
  event?: string;
}

export default function ContactUsForm({ event }: Props) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const clientInfo = useGetClientInfo();
  const formRef = useRef<HTMLFormElement>(null);
  const eventName = event || 'Fischer Redavid | Form Submission';

  const methods = useForm<IContactUsForm>({
    resolver: zodResolver(onContactUsFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      message: '',
    },
  });

  const { handleSubmit, reset, setValue } = methods;

  // Handle autofill
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Function to check and update form values
    const updateFormValues = () => {
      const inputs = form.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement
      >('input, textarea');
      inputs.forEach((input) => {
        const field = input.name as keyof IContactUsForm;
        if (input.value) {
          setValue(field, input.value, { shouldValidate: true });
        }
      });
    };

    // Check immediately
    updateFormValues();

    // Check on animation frame for Chrome autofill
    const frameCheck = () => {
      updateFormValues();
      requestAnimationFrame(frameCheck);
    };
    const frameId = requestAnimationFrame(frameCheck);

    // Also check on various events
    const events = [
      'input',
      'change',
      'blur',
      'animationstart',
      'animationend',
    ];
    const handleEvent = () => updateFormValues();
    events.forEach((event) => {
      form.addEventListener(event, handleEvent);
    });

    return () => {
      cancelAnimationFrame(frameId);
      events.forEach((event) => {
        form.removeEventListener(event, handleEvent);
      });
    };
  }, [setValue]);

  async function onSubmitForm(data: IContactUsForm) {
    setFormSubmitted(true);

    try {
      // Perform one final check before submission
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll<
          HTMLInputElement | HTMLTextAreaElement
        >('input, textarea');
        inputs.forEach((input) => {
          const field = input.name as keyof IContactUsForm;
          if (input.value) {
            setValue(field, input.value, { shouldValidate: true });
          }
        });
      }

      trackConversions(data, eventName);

      const { token } = await Tracking.getRecaptchaToken();
      await submitContactForm(data, token, clientInfo, eventName);

      reset();
    } catch (err) {
      console.error(err);
      setFormSubmitted(false);
    }
  }

  if (formSubmitted) {
    return (
      <p>
        Thank you for reaching out to Fischer Redavid. We will be in touch with
        you shortly.
      </p>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmitForm)}
        className='w-full mx-auto flex flex-col gap-3'
      >
        <CustomInput name='name' label='Name' />
        <CustomInput name='email' label='Email' />
        <CustomInput name='phone' label='Phone' />
        <CustomInput name='location' label='Location' />
        <CustomTextarea name='message' label='How can we help you?' />
        <CustomButton className='!w-[100%] rounded-lg' type='submit'>
          Connect With Fischer Redavid
        </CustomButton>
      </form>
    </FormProvider>
  );
}
