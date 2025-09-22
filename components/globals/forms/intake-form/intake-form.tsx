"use client";

import { useEffect, useState, useRef } from "react";
import { z } from "zod";
import CustomInput from "@/components/globals/forms/custom-input/custom-input";
import CustomTextarea from "@/components/globals/forms/custom-textarea/custom-textarea";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import styles from "./intake-form.module.css";
import fischerRedavidLogo from "@/public/images/fischer-redavid-trial-lawyers-logo.svg";
import trackConversions from "@/utils/trackConversions";
import Link from "next/link";
import Image from "next/image";
import CustomSelect from "../custom-select/custom-select";
import CustomRadioGroup from "../custom-radio-group/custom-radio-group";
import { useGetClientInfo } from "../../../../utils/useGetClientInfo";
import {
  sendDataToZapier,
  submitContactForm,
} from "../../../../app/actions/forms";
import { Tracking } from "@/components/Analytics/Analytics";

export const onIntakeFormSchema = z.object({
  name: z.string().min(1, "This field is required."),
  email: z
    .string()
    .min(1, "This field is required.")
    .email("Please enter a valid email address."),
  phone: z.string().min(1, "This field is required."),
  date: z
    .string()
    .min(1, "This field is required.")
    .refine((value) => !isNaN(new Date(value).getTime()), {
      message: "Please enter a valid date.",
    }),
  communicationPreference: z.string().min(1, "This field is required."),
  message: z
    .string()
    .min(10, "Please enter a message of at least 10 characters."),
  treatment: z.string().min(1, "This field is required."),
  location: z.string().min(1, "This field is required."),
});

export type IIntakeForm = z.infer<typeof onIntakeFormSchema>;

export default function IntakeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<IIntakeForm>({
    name: "",
    email: "",
    phone: "",
    date: "",
    communicationPreference: "",
    message: "",
    treatment: "",
    location: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof IIntakeForm, string>>
  >({});

  const clientInfo = useGetClientInfo();
  const formRef = useRef<HTMLFormElement>(null);
  const eventName = "Fischer Redavid | Intake Submission";

  const handleInputChange = (field: keyof IIntakeForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClearInput = (fieldName: keyof IIntakeForm) => {
    setFormData((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const validateForm = () => {
    try {
      onIntakeFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof IIntakeForm, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof IIntakeForm;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  async function onSubmitForm(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormSubmitted(true);

    try {
      const { eventId } = clientInfo;
      trackConversions(formData, eventName, eventId);

      const { token } = await Tracking.getRecaptchaToken();
      await submitContactForm(formData, token, clientInfo, eventName);
      await sendDataToZapier(formData, clientInfo, token, eventName);

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        communicationPreference: "",
        message: "",
        treatment: "",
        location: "",
      });
    } catch (err) {
      console.error(err);
      setFormSubmitted(false);
    }
  }

  if (formSubmitted) {
    return (
      <div className={styles.messageContainer}>
        <Image
          alt="Fischer & Redavid Trial Lawyers Logo"
          width={200}
          src={fischerRedavidLogo}
        />
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Thank you for contacting Fischer Redavid.
          </h2>
          <p className={styles.description}>
            An Intake Specialist will be in touch with you soon. If this is an
            urgent matter or an emergency,{" "}
            <Link href={"tel:+19548608434"} className={styles.link}>
              please call (954) 860-8434
            </Link>
            to speak with a member of our team.
          </p>
        </div>
      </div>
    );
  }

  return (
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbyLViGQxUz9WBVHPwK3dvY8I3j8PNzAsov0wlMYT_l3UJ6g/viewform?embedded=true">Loading…</iframe>
  );
}
