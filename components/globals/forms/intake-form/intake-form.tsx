'use client';

import { useEffect, useState, useRef } from 'react';
import { z } from 'zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@/components/globals/forms/custom-input/custom-input';
import CustomTextarea from '@/components/globals/forms/custom-textarea/custom-textarea';
import CustomButton from '@/components/globals/forms/custom-button/custom-button';
import styles from './intake-form.module.css';
import fischerRedavidLogo from '@/public/images/fischer-redavid-trial-lawyers-logo.svg';

import trackConversions from '@/utils/trackConversions';
import Link from 'next/link';
import Image from 'next/image';
import CustomSelect from '../custom-select/custom-select';
import CustomRadioGroup from '../custom-radio-group/custom-radio-group';
import { useGetClientInfo } from '../../../../utils/useGetClientInfo';
import { submitContactForm } from '../../../../app/actions/forms';
import { Tracking } from '@/components/Analytics/Analytics';

export const onIntakeFormSchema = z.object({
  name: z.string().min(1, 'This field is required.'),
  email: z
    .string()
    .min(1, 'This field is required.')
    .email('Please enter a valid email address.'),

  phone: z.string().min(1, 'This field is required.'),
  date: z
    .string()
    .min(1, 'This field is required.')
    .refine((value) => !isNaN(new Date(value).getTime()), {
      message: 'Please enter a valid date.',
    }),
  communicationPreference: z.string().min(1, 'This field is required.'),
  message: z
    .string()
    .min(10, 'Please enter a message of at least 10 characters.'),
  treatment: z.string().optional(),
});

export type IIntakeForm = z.infer<typeof onIntakeFormSchema>;

export default function IntakeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const clientInfo = useGetClientInfo();
  const formRef = useRef<HTMLFormElement>(null);
  const eventName = 'Fischer Redavid | Intake Submission';

  const methods = useForm<IIntakeForm>({
    resolver: zodResolver(onIntakeFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      communicationPreference: '',
      message: '',
      treatment: '',
    },
  });

  const { handleSubmit, reset, setValue, control } = methods;

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
        const field = input.name as keyof IIntakeForm;
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

  async function onSubmitForm(data: IIntakeForm) {
    setFormSubmitted(true);

    try {
      // Perform one final check before submission
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll<
          HTMLInputElement | HTMLTextAreaElement
        >('input, textarea');
        inputs.forEach((input) => {
          const field = input.name as keyof IIntakeForm;
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

  const handleClearInput = (fieldName: keyof IIntakeForm) => {
    setValue(fieldName, '');
  };

  if (formSubmitted) {
    return (
      <div className={styles.messageContainer}>
        <Image
          alt='Fischer & Redavid Trial Lawyers Logo'
          width={200}
          src={fischerRedavidLogo}
        />
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Thank you for contacting Fischer Redavid.
          </h2>
          <p className={styles.description}>
            An Intake Specialist will be in touch with you soon. If this is an
            urgent matter or an emergency,{' '}
            <Link href={'tel:8886940708'} className={styles.link}>
              please call 888-694-0708
            </Link>
            to speak with a member of our team.
          </p>
        </div>
      </div>
    );
  }

  if (!formSubmitted) {
    return (
      <FormProvider {...methods}>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmitForm)}
          className={styles.formContent}
        >
          <CustomInput name='name' label='FULL NAME' />
          <CustomInput name='phone' label='PHONE' />
          <CustomInput name='email' label='EMAIL' />

          <CustomRadioGroup
            name='communicationPreference'
            label='communication preference'
            options={[
              {
                label: 'Phone Call',
                value: 'phone-call',
              },
              {
                label: 'Text',
                value: 'text',
              },
              {
                label: 'Email',
                value: 'email',
              },
            ]}
          />

          <div className={styles.formDetails}>
            <CustomInput name='date' label='Date of Incident' type='date' />
            <CustomInput name='location' label='location (city, state)' />
          </div>

          <CustomTextarea
            name='message'
            label='Description of incident and injury'
          />

          <div className='w-full pb-1 pl-3 border border-[#083376]'>
            <Controller
              name='treatment'
              control={control}
              render={({ field }) => (
                <CustomSelect
                  backgroundColor='transparent'
                  isFullHeight
                  label='Are you receiving medical treatment for this incident?'
                  options={['Yes', 'No'].map((option) => ({
                    value: option,
                    label: option,
                  }))}
                  placeholder=''
                  value={field.value || ''}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  onClear={() => handleClearInput('treatment')}
                />
              )}
            />
          </div>

          <CustomButton type='submit' size='large'>
            send information
          </CustomButton>
        </form>
      </FormProvider>
    );
  }
}
